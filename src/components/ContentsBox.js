import React from 'react'
import './ContentsBox.css'

class ContentsBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hidden: true }
    this.hiddenToggle = this.hiddenToggle.bind(this)
  }

  hiddenToggle() {
    this.setState(prevState => ({
      hidden: !prevState.hidden,
    }))
  }

  render() {
    return (
      <div className="contents-box">
        <h4 onClick={this.hiddenToggle}>
          <a>Contents [{this.state.hidden ? 'show' : 'hide'}]</a>
        </h4>
        {this.state.hidden ? null : (
          <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
        )}
      </div>
    )
  }
}

export default ContentsBox
