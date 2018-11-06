// @flow
import {
  IDEA_FETCH_FAILURE,
  IDEA_FETCH_SUCCESS,
  IDEA_FETCH_REQUEST,
  IDEAS_FETCH_FAILURE,
  IDEAS_FETCH_SUCCESS,
  IDEAS_FETCH_REQUEST,
  IDEA_NEW,
  IDEA_DELETE_SUCCESS,
  IDEA_SAVE_SUCCESS,
} from './ideas-actions'

const defaultState = {}

type IdeaStateType = *

function ideasReducer (
  state: IdeaStateType = defaultState,
  action: IdeaActionType
): IdeaStateType {
  const { type, payload = {} } = action
  const { idea = {}, ideas = [] } = payload
  let currentIdeas

  switch (type) {
    case IDEA_FETCH_REQUEST:
      return {
        ...state,
        idea,
      }
    case IDEA_FETCH_FAILURE:
      return {
        ...state,
        idea: {
          ...idea,
          isLoading: false,
        },
      }
    case IDEA_FETCH_SUCCESS:
      return {
        ...state,
        idea: {
          ...idea,
          isLoading: false,
        },
      }
    case IDEAS_FETCH_REQUEST:
      return {
        ...state,
        ideas: {
          isLoading: true,
          list: state.ideas,
        },
      }
    case IDEAS_FETCH_FAILURE:
      return {
        ...state,
        ideas: {
          list: ideas,
          isLoading: false,
        },
      }
    case IDEAS_FETCH_SUCCESS:
      return {
        ...state,
        ideas: {
          list: ideas,
          isLoading: false,
        },
      }
    case IDEA_NEW:
      currentIdeas = state.ideas
      return {
        ...state,
        ideas: {
          ...currentIdeas,
          list: [...currentIdeas.list, idea],
        },
      }
    case IDEA_DELETE_SUCCESS:
      currentIdeas = state.ideas
      return {
        ...state,
        ideas: {
          isLoading: false,
          list: currentIdeas.list.filter(
            (curIdea: IdeaDataType) => curIdea.id !== idea.id
          ),
        },
      }
    case IDEA_SAVE_SUCCESS:
      currentIdeas = state.ideas
      return {
        ...state,
        ideas: {
          ...currentIdeas.list,
          list: currentIdeas.list.map(
            (curIdea: IdeaDataType) =>
              !curIdea.id || curIdea.id === idea.id ? idea : curIdea
          ),
        },
      }
    default:
      return state
  }
}

export default ideasReducer
