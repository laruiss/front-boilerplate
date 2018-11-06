// @flow
declare type IdeaDataType = {
  body?: ?string,
  id?: string,
  title?: ?string,
  localOnly?: ?boolean,
  saving?: ?boolean,
}

declare type IdeaActionType = {
  type: string,
  payload: {
    idea?: IdeaDataType,
    ideas?: IdeaDataType[],
  },
}

declare type SaveIdeaActionType = {
  type: string,
  payload: {
    idea: IdeaDataType,
  },
}

declare type RetrieveIdeaActionType = {
  type: string,
  payload: {
    id: string,
  },
}
