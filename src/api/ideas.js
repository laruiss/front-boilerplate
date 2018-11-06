// @flow
import { xhr } from '@/libs'
import { apiPaths } from '@/config'

export const retrieveIdeas = () => xhr.get(apiPaths.ideas)

export const retrieveIdea = () => xhr.get(apiPaths.ideas)

export const createIdea = (idea: IdeaDataType) => xhr.post(apiPaths.ideas, idea)

export const updateIdea = (idea: IdeaDataType) =>
  xhr.put(`${apiPaths.ideas}/${idea.id || -1}`, idea)

export const deleteIdea = (idea: IdeaDataType) =>
  xhr.delete(`${apiPaths.ideas}/${idea.id || -1}`)
