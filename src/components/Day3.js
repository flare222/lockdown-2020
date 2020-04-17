import React from 'react'
import { Link } from 'react-router-dom'

import data from '../data/data'
import laptop from '../assets/laptop.gif'
import bus from '../assets/bus.gif'
import date from '../assets/date.gif'
import shame from '../assets/shame.gif'


export default class Day3 extends React.Component {
  state = {
    lvl3: data.levels[2],   
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
    console.log('correct', this.state.showCorrect)
    console.log('incorrect', this.state.showIncorrect)
    const lvl3 = this.state.lvl3
    return (
    <>
    {this.state.showCorrect === false && this.state.showIncorrect === false ?
    <section>
      <h1>{lvl3.title}</h1>
      <h2>{lvl3.scenario}</h2>
      
      <div>
        <h3>{lvl3.question}</h3>
      </div>
      
      <div className="answers">
        <div className="answer"
        onClick={this.handleClick1}>
          <p>{lvl3.answers[0]}</p>
          <img src={laptop} alt="laptop" />
        </div>
      
        <div className="answer"
        onClick={this.handleClick2}>
          <p>{lvl3.answers[1]}</p>
          <img src={bus} alt="bus" />
        </div>
        
        <div className="answer"
        onClick={this.handleClick2}>
          <p>{lvl3.answers[2]}</p>
          <img src={date} alt="date in the park" />
        </div>
        
      </div>
      </section>
      : null} 

      {this.state.showCorrect === false ? null :
      <>
      <h1>Correct!</h1>
      <h2>{lvl3.correct}</h2>
      <div className="correct-incorrect">
        {/* <img src={shame} alt="bells of shame" /> */}
        <Link to='/end'>
        <button type="button" className="button" align="center"><span>Continue</span></button>
        </Link>
      </div>

      </>
      }

      {this.state.showIncorrect === false ? null :
          <>
          <h1>Incorrect Answer</h1>
          <h2>{lvl3.incorrect}</h2>
          <div className="correct-incorrect">
            <img src={shame} alt="bells of shame" />
            <button type="button" className="button" align="center" onClick={this.handleClick3}><span>Try Again</span></button>
          </div>
        </>
      }

    </>
    )
  }
}