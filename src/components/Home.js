import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <section>
    <h1>Lockdown Game</h1>
    <h2>Survive the monotony of lockdown to get through to the next day.</h2>
      <Link to="/game">
        <button type="button">Lets Play!</button>
      </Link>
    </section>
)

export default Home