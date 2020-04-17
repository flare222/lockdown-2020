import React from 'react'
import { Link } from 'react-router-dom'

const TheEnd = () => (
    <section>
    <h1>You made it!</h1>
    <h2>Just kidding.  There's an untold number of days left in this lockdown - enjoy!</h2>
      <Link to="/">
        <button type="button" className="button"><span>Play again!</span></button>
      </Link>
      <p>or...</p>
        <a href="#" className="button"><span>Check this out!</span></a>
    </section>
)

export default TheEnd