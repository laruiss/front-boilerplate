// @flow
import type { Element } from 'react'

import React from 'react'
import { css } from '@emotion/core'

import { flexColumn, flexItem, flexCentered } from '@/styles'
import { Button } from '@/components'
import DeleteIcon from '@/icons/baseline-delete_forever-24px.svg'

const deleteWrapper = css`
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  top: 0.5em;
  right: 0.3em;
  ${flexCentered}
  line-height: 1em;
  font-size: 1em;
  padding: 0;
  mask: url(${DeleteIcon}) no-repeat 50% 50%;
  background-color: grey;
  mask-size: cover;
  &:hover {
    background-color: #c00;
  }
`

const idea = css`
  position: relative;
  height: 150px;
  width: 150px;
  margin: 10px;
  padding: 5px;
  border: 1px solid transparent;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 1px 1px 1px 1px rgba(100, 100, 100, 0.2);

  &:hover {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  }

  & :read-write {
    border: 1px solid transparent;
  }

  & :read-write:focus {
    border-color: #bbb;
    outline: none;
  }

  & :-moz-read-write {
    border: 1px solid transparent;
  }

  & :-moz-read-write:focus {
    border-color: #bbb;
    outline: none;
  }
`

const ideaTitle = css`
  margin: 0;
  font-size: 1em;
  line-height: 1.5em;
  font-weight: bold;
  text-align: center;
`

const ideaBody = css`
  margin: 0;
  margin-top: 1em;
  overflow: auto;
  font-family: inherit;
  font-size: 0.8em;
  resize: none;
`

type StateType = IdeaDataType

type IdeaPropsType = {
  saveIdea: (idea: IdeaDataType) => void,
  onDelete: (idea: IdeaDataType) => void,
  onBlur?: (idea: IdeaDataType) => void,
  onFocus?: (idea: IdeaDataType) => void,
  new?: boolean,
} & IdeaDataType

export class Idea extends React.Component<IdeaPropsType, StateType> {
  bodyField: { current: *, }
  titleField: { current: *, }

  state = {
    id: this.props.id,
    title: this.props.title,
    body: this.props.body,
  }

  constructor (props: IdeaPropsType) {
    super(props)
    this.titleField = React.createRef()
    this.bodyField = React.createRef()
  }

  componentDidMount () {
    if (this.props.new) {
      this.titleField.current && this.titleField.current.focus()
    }
  }

  handleBlur = () => {
    const onBlur = this.props.onBlur
    if (onBlur) {
      onBlur(this.getIdea())
    }
  }

  handleFocus = () => {
    const onFocus = this.props.onFocus
    if (onFocus) {
      onFocus(this.getIdea())
    }
  }

  getIdea (): IdeaDataType {
    return {
      ...this.props,
      body: this.bodyField.current && this.bodyField.current.value,
      title: this.titleField.current && this.titleField.current.value,
    }
  }

  saveIdea = () => {
    const saveIdea = this.props.saveIdea
    if (saveIdea) {
      saveIdea(this.getIdea())
    }
    this.setState(this.getIdea())
  }

  onDelete = () => {
    const onDelete = this.props.onDelete
    if (onDelete) {
      onDelete(this.getIdea())
    }
  }

  render (): Element<*> {
    const { id, body, title } = this.state

    return (
      <div css={[flexColumn, idea]}>
        <Button
          buttonType="danger"
          onClick={this.onDelete}
          className={deleteWrapper}
        />
        <input
          key={`title_${id || ''}`}
          placeholder="Title"
          css={ideaTitle}
          value={title}
          onChange={this.saveIdea}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          ref={this.titleField}
        />
        <textarea
          key={`body_${id || ''}`}
          placeholder="Body"
          css={[flexItem, ideaBody]}
          value={body}
          onChange={this.saveIdea}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          ref={this.bodyField}
        />
      </div>
    )
  }
}

export default Idea
