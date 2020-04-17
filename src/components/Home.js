import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <section>
    <h1>Lockdown 2020</h1>
    <h2>It's 2020.  The corona virus is on the rampage and London is on lockdown.  Can you play by the rules of social distancing and withstand the monotony of daily life in isolation?  The survival of the human race depends on it.</h2>
      <Link to="/day1">
        <button type="button" className="button"><span>Lets Do This!</span></button>
      </Link>
    </section>
)

export default Home