// @flow
const idea = { id: '1', title: 'Foo', body: 'Bar' }

export const retrieveIdeas = () =>
  Promise.resolve({
    ideas: [idea],
  })

export const retrieveIdea = (ideaId: string) =>
  Promise.resolve({
    idea: { ...idea, id: ideaId },
  })

export const updateIdea = (idea: IdeaDataType) => Promise.resolve(idea)

export const createIdea = updateIdea

export const deleteIdea = (idea: IdeaDataType) => Promise.resolve()
