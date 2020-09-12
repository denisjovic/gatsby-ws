import React from "react"

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {count: 0}
  }
  render() {
    return <div style={{color: this.props.color}}>
      <h1>Counter</h1>
      <p>Current count: {this.state.count}</p>
      <button onClick={() => this.setState({count: this.state.count + 1})}>Plus</button>
      <button onClick={() => this.setState({count: this.state.count - 1})}>Minus</button>
    </div>
  }
}

export default Counter
