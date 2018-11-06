// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cx } from 'emotion'

import { fullHeight, maxWidth } from './styles'
import Ideas from './components/Ideas'
import { requestIdeaList } from './store/ideas/ideas-actions'

type AppPropsType = {
  requestIdeaList: () => void,
}

export class App extends Component<AppPropsType> {
  componentDidMount () {
    this.props.requestIdeaList()
  }

  render (): React$Node {
    return (
      <div className={cx(maxWidth, fullHeight)}>
        <Ideas />
      </div>
    )
  }
}

export default connect(
  null,
  {
    requestIdeaList,
  }
)(App)
