// @flow
export const IDEAS_FETCH_REQUEST = 'IDEAS_FETCH_REQUEST'
export const IDEAS_FETCH_FAILURE = 'IDEAS_FETCH_FAILURE'
export const IDEAS_FETCH_SUCCESS = 'IDEAS_FETCH_SUCCESS'

export const IDEA_FETCH_REQUEST = 'IDEA_FETCH_REQUEST'
export const IDEA_FETCH_FAILURE = 'IDEA_FETCH_FAILURE'
export const IDEA_FETCH_SUCCESS = 'IDEA_FETCH_SUCCESS'

export const IDEA_NEW = 'IDEA_NEW'

export const IDEA_DELETE_REQUEST = 'IDEA_DELETE_REQUEST'
export const IDEA_DELETE_FAILURE = 'IDEA_DELETE_FAILURE'
export const IDEA_DELETE_SUCCESS = 'IDEA_DELETE_SUCCESS'

export const IDEA_SAVE_REQUEST = 'IDEA_SAVE_REQUEST'
export const IDEA_SAVE_FAILURE = 'IDEA_SAVE_FAILURE'
export const IDEA_SAVE_SUCCESS = 'IDEA_SAVE_SUCCESS'

export const requestIdeaList = () => ({
  type: IDEAS_FETCH_REQUEST,
})

export const requestIdeaListError = () => ({
  type: IDEAS_FETCH_FAILURE,
})

export const setIdeaList = (ideas: Array<IdeaDataType>) => ({
  type: IDEAS_FETCH_SUCCESS,
  payload: {
    ideas,
  },
})

export const setIdea = (idea: IdeaDataType) => ({
  type: IDEA_FETCH_SUCCESS,
  payload: {
    idea,
  },
})

export const requestIdea = (idea: IdeaDataType) => ({
  type: IDEA_FETCH_REQUEST,
  payload: {
    idea,
  },
})

export const setIdeasError = (type: string, idea: IdeaDataType) => ({
  type,
  payload: {
    idea,
  },
})

export const saveIdea = (idea: IdeaDataType) => ({
  type: IDEA_SAVE_REQUEST,
  payload: {
    idea,
  },
})

export const deleteIdea = (idea: IdeaDataType) => ({
  type: IDEA_DELETE_REQUEST,
  payload: {
    idea,
  },
})

export const saveIdeaError = (idea: IdeaDataType) => ({
  type: IDEA_SAVE_FAILURE,
  payload: {
    idea,
  },
})

export const addIdea = (idea: IdeaDataType) => ({
  type: IDEA_NEW,
  payload: {
    idea: {
      ...idea,
      localOnly: true,
      new: true,
    },
  },
})
