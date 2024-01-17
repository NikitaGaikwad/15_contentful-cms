import React from 'react'
import hero from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
            <h1>Content CMS</h1>
            <p>Offal biodiesel tacos PBR&B mukbang, humblebrag bodega boys kale chips chillwave. Hot chicken jean shorts normcore glossier marfa. Yr bodega boys cornhole hell of cronut lo-fi godard iceland. Distillery disrupt solarpunk plaid fam ethical VHS, yuccie church-key retro slow-carb DSA umami bruh letterpress. Leggings flexitarian kombucha DSA </p>
        </div>
        <div className="img-container">
            <img src={hero} alt="woman browser" className='img'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
