import React from 'react'
import { Link } from 'react-router-dom'

import data from '../data/data'


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
    const lvl2 = this.state.lvl2
    return (
    <>
    {this.state.showCorrect === false && this.state.showIncorrect === false ?
    <section>
      <h1>{lvl2.title}</h1>
      <h2>{lvl2.scenario}</h2>
      
      <div>
        <p>{lvl2.question}</p>
      </div>
      
      <div className="answers">
        <div className="answer"
        onClick={this.handleClick2}>
          <p>{lvl2.answers[0]}</p>
          {/* <img src={tape} alt="tape measure" /> */}
        </div>
      
        <div className="answer"
        onClick={this.handleClick1}>
          <p>{lvl2.answers[1]}</p>
          {/* <img src={broom} alt="broom" /> */}
        </div>
        
        <div className="answer"
        onClick={this.handleClick2}>
          <p>{lvl2.answers[2]}</p>
          {/* <img src={twometres} alt="broom" /> */}
        </div>
        
      </div>
      </section>
      : null} 

      {this.state.showCorrect === false ? null :
      <>
      <h1>Correct!</h1>
      <h2>{lvl2.correct}</h2>
      <div className="correct-incorrect">
        {/* <img src={littleguy} alt="little guy" /> */}
      </div>
      <Link to='/day3'>
      <button type="button">Continue</button>
      </Link>
      </>
      }

      {this.state.showIncorrect === false ? null :
          <>
          <h1>Incorrect Answer</h1>
          <h2>{lvl2.incorrect}</h2>
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