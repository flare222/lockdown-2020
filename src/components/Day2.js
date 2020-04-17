import React from 'react'
import { Link } from 'react-router-dom'

import data from '../data/data'
import tpaper from '../assets/tpaper.gif'
import share from '../assets/share.gif'
import shame from '../assets/shame.gif'


export default class Day2 extends React.Component {
  state = {
    lvl2: data.levels[1],    
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
        <h3>{lvl2.question}</h3>
      </div>
      
      <div className="answers">
        <div className="answer"
        onClick={this.handleClick2}>
          <p>{lvl2.answers[0]}</p>
          <img src={tpaper} alt="toilet paper" />
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
        <img src={share} alt="heart in a basket" />
        <Link to='/day3'>
      <button type="button" className="button" align="center"><span>Continue</span></button>
      </Link>
      </div>
      </>
      }

      {this.state.showIncorrect === false ? null :
          <>
          <h1>Incorrect Answer</h1>
          <h2>{lvl2.incorrect}</h2>
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