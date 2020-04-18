import React from 'react'
import { Link } from 'react-router-dom'

import data from '../data/data'
import chocolate from '../assets/chocolate.gif'
import sticks from '../assets/sticks.gif'
import taytos from '../assets/taytos.gif'
import treatyoself from '../assets/treatyoself.gif'
import bunny from '../assets/bunny.gif'


export default class Day4 extends React.Component {
  state = {
    lvl4: data.levels[3],   
    showCorrect: false,
    showIncorrect: false
  }

  handleClick1 = () => {
    this.setState({ showCorrect: true })
  }

  handleClick2 = () => {
    this.setState({ showIncorrect: true })
  }

  handleClick3 = () => {
    this.setState({ showCorrect: false, showIncorrect: false })
  }


  render() {
    const lvl4 = this.state.lvl4
    return (
    <>
    {this.state.showCorrect === false && this.state.showIncorrect === false ?
    <section>
      <h1>{lvl4.title}</h1>
      <h2>{lvl4.scenario}</h2>
      
      <div>
        <h3>{lvl4.question}</h3>
      </div>
      
      <div className="answers">
        <div className="answer"
        onClick={this.handleClick2}>
          <p>{lvl4.answers[0]}</p>
          <img src={sticks} alt="carrot sticks" />
        </div>

        <div className="answer"
        onClick={this.handleClick1}>
          <p>{lvl4.answers[2]}</p>
          <img src={taytos} alt="Tayto crisps" />
        </div>
      
        <div className="answer"
        onClick={this.handleClick1}>
          <p>{lvl4.answers[1]}</p>
          <img src={chocolate} alt="chocolate bar" />
        </div>
        
      </div>
      </section>
      : null} 

      {this.state.showCorrect === false ? null :
      <>
      <h1>Correct!</h1>
      <h2>{lvl4.correct}</h2>
      <div className="correct-incorrect">
        <img src={treatyoself} alt="treat yo' self" />
        <Link to='/end'>
        <button type="button" className="button" align="center"><span>Continue</span></button>
        </Link>
      </div>

      </>
      }

      {this.state.showIncorrect === false ? null :
          <>
          <h1>Incorrect Answer</h1>
          <h2>{lvl4.incorrect}</h2>
          <div className="correct-incorrect">
            <img src={bunny} alt="bunny" />
            <button type="button" className="button" align="center" onClick={this.handleClick3}><span>Try Again</span></button>
          </div>
        </>
      }

    </>
    )
  }
}