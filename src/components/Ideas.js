// @flow
import React from 'react'
import { css } from '@emotion/core'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { flexCentered, flexWrap } from '@/styles'
import { addIdea, deleteIdea, saveIdea } from '@/store/ideas/ideas-actions'
import { Button, Idea } from '@/components'

const ideasClassName = css`
  ${flexCentered}
  ${flexWrap}
  display: flex;
  height: 100%;
`

const buttonWrapper = css`
  position: fixed;
  bottom: 1em;
  right: 1em;
  ${flexCentered}
  width: 150px;
`

type IdeasPropsType = {
  ideas: { isLoading: boolean, list: IdeaDataType[], },
  addIdea: (idea: IdeaDataType) => void,
  saveIdea: (idea: IdeaDataType) => void,
  deleteIdea: (idea: IdeaDataType) => void,
}

export const Ideas = ({
  addIdea,
  deleteIdea,
  ideas,
  saveIdea,
}: IdeasPropsType) => (
  <div css={ideasClassName}>
    {ideas &&
      Array.isArray(ideas.list) &&
      ideas.list.map((idea: IdeaDataType) => (
        <Idea
          key={idea.id}
          {...idea}
          saveIdea={saveIdea}
          onDelete={deleteIdea}
        />
      ))}
    <div css={buttonWrapper}>
      <Button
        buttonType="success"
        onClick={() =>
          addIdea({
            id: uuidv4(),
            title: '',
            body: '',
            created_date: Date.now(),
          })
        }
      >
        Add idea
      </Button>
    </div>
  </div>
)

const mapStateToProps = (state: AppStateType) => ({
  ideas: state.ideas.ideas,
})

const mapDispatchToProps = {
  saveIdea,
  addIdea,
  deleteIdea,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ideas)
