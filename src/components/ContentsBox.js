import React from 'react'

class ContentsBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hidden: true }
    this.hiddenToggle = this.hiddenToggle.bind(this)
  }

  hiddenToggle() {
    console.log('Clicked!')
    this.setState(prevState => ({
      hidden: !prevState.hidden,
    }))
  }

  render() {
    return (
      <div>
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
