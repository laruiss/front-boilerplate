import xhr from './xhr'
import { expect } from 'chai'

describe('xhr lib', () => {
  it('Should have at least 4 properties: "get", "post", "put", "delete"', () => {
    // When
    const xhrKeys = Object.keys(xhr)
    // Then
    expect(xhrKeys.length).to.be.gte(4)
  })
  it('Should have only function as keys', () => {
    // When
    const xhrKeys = Object.keys(xhr)
    // Then
    xhrKeys.map(key => {
      expect(typeof xhr[key]).to.equal('function')
    })
  })
})
