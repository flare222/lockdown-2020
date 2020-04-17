import React from 'react'
import {Link} from 'react-router-dom'

import data from '../data/data'
import broom from '../assets/broom.gif'
import tape from '../assets/tape.gif'
import twometres from '../assets/twometres.gif'
import littleguy from '../assets/littleguy.gif'

// import Correct from './Correct'
// import Incorrect from './Incorrect'

export default class Day1 extends React.Component {
  state = {
    lvl1: data.levels[0],
    showCorrect: false,
    showIncorrect: false
  }

  handleClick1 = () => {
    this.setState({ showCorrect: true })
    console.log('click1')
  }

  handleClick2 = () => {
    this.setState({ showIncorrect: true })
    console.log('click2')
  }

  handleClick3 = () => {
    this.setState({ showCorrect: false, showIncorrect: false })
    console.log('click3')
  }


  render() {
    // console.log(this.state.levelCount)
    console.log('correct', this.state.showCorrect)
    console.log('incorrect', this.state.showIncorrect)
    const lvl1 = this.state.lvl1
    return (
    <>
    {this.state.showCorrect === false && this.state.showIncorrect === false ?
    <section>
      <h1>{lvl1.title}</h1>
      <h2>{lvl1.scenario}</h2>
      
      <div>
        <p>{lvl1.question}</p>
      </div>
      
      <div className="answers">
        <div className="answer"
        onClick={this.handleClick2}>
          <p>{lvl1.answers[0]}</p>
          <img src={tape} alt="tape measure" />
        </div>
      
        <div className="answer"
        onClick={this.handleClick2}>
          <p>{lvl1.answers[1]}</p>
          <img src={broom} alt="broom" />
        </div>
        
        <div className="answer"
        onClick={this.handleClick1}>
          <p>{lvl1.answers[2]}</p>
          <img src={twometres} alt="broom" />
        </div>
        
      </div>
      </section>
      : null} 

      {this.state.showCorrect === false ? null :
      <>
      <h1>Correct!</h1>
      <h2>{lvl1.correct}</h2>
      <div className="correct-incorrect">
        <img src={littleguy} alt="little guy" />
      </div>
      <Link to='/day2'>
      <button type="button">Continue</button>
      </Link>
      </>
      }

      {this.state.showIncorrect === false ? null :
          <>
          <h1>Incorrect Answer</h1>
          <h2>{lvl1.incorrect}</h2>
          <div className="correct-incorrect">
            {/* <img src={littleguy} alt="little guy" /> */}
          </div>
          <button type="button" onClick={this.handleClick3}>Try Again</button>
        </>
      }

    </>
    )
  }
}