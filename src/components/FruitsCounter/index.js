import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatingMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatingBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-body-container">
        <div className="main-card-container">
          <h1 className="eating-heading">
            Bob ate <span className="counter-style">{mango}</span> mangoes{' '}
            <span className="counter-style">{banana}</span> bananas
          </h1>
          <div className="fruit-display">
            <div className="fruit-card-container">
              <img
                className="img-control"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="button-style"
                onClick={this.eatingMango}
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-card-container">
              <img
                className="img-control"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="button-style"
                onClick={this.eatingBanana}
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
