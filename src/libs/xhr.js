// @flow
import type { AxiosResponse } from 'axios'

import axios from 'axios'

const xhr = (method: string) => (url: string, body: *, options: *) =>
  axios({
    url,
    method,
    data: body,
    ...options,
  })
    .then(({ data }: AxiosResponse) => data)
    .catch((error: Error) => {
      // FIXME: better handling of the error
      console.error(error)
      throw error
    })

// FIXME: Use prepack for that
const xhrLib = ['get', 'put', 'post', 'delete'].reduce(
  (lib: *, method: string) => {
    lib[method] = xhr(method)
    return lib
  },
  {}
)

export default xhrLib
