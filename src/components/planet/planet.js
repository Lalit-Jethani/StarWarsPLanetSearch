import React, { PropTypes } from 'react'

const Planet = props => {
  console.log(props.size)
  const pStyle = {
    fontSize: props.size + 180 + '%'
  }

  return (
    <li style={pStyle} className='results__item'>
      <h3 style={pStyle} className='results__title'>
        {props.item.name}
      </h3>
      <div
        className='results__bg'
        id={props.item.type}
        // dangerouslySetInnerHTML={{ __html: icon }}
      />
      <ul>
        <li style={pStyle}>
          Population : <span>{props.item.population}</span>{' '}
        </li>
      </ul>
    </li>
  )
}

Planet.propTypes = {
  item: PropTypes.shape({
    terrain: PropTypes.string,
    gravity: PropTypes.string,
    name: PropTypes.string.isRequired,
    population: PropTypes.string,
    type: PropTypes.string
  })
}

export default Planet
