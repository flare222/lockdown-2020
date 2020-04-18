import React from 'react'
import { Link } from 'react-router-dom'

import time from '../assets/time.gif'

const TheEnd = () => (
    <section>
    <h1>You made it!</h1>
    <h2>Just kidding.  There's an untold number of days left in this lockdown - enjoy!</h2>
    <div>
    <img src={time} alt="sand timer" />
    </div>
    <div className="theend">
      <Link to="/">
        <button type="button" className="button end"><span>Play again!</span></button>
      </Link>
      <h3>or...</h3>
        <a href="https://flare222.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="button end"><span>Look Here!</span></a>
    </div>
    </section>
)

export default TheEnd