import React, { Component, PropTypes } from 'react'
import Planet from './../planet/planet'
import getPlanetsSize from './../../Utils/calculatePlanetSizeBasedOnPopulation'

const planetList = props => {
  const totalPopulation = props.items.map(function (e, i) {
    const n = Math.floor(Number(e.population))
    if (
      n !== Infinity &&
      String(n) === e.population &&
      n >= 0 &&
      n !== undefined
    ) {
      return e.population
    } else {
      // return a base number for unknown population
      return 25
    }
  })

  const getPlanetSize = getPlanetsSize(totalPopulation)
  return (
    <ul className='results'>
      {props.items.map((item, i) => {
        return (
          <Planet size={getPlanetSize(item.population)} key={i} item={item} />
        )
      })}
    </ul>
  )
}

export default planetList
