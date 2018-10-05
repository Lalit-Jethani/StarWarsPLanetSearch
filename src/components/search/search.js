import React, { PropTypes } from 'react'

const Search = props => {
  const { value, onChange } = props

  return (
    <div className='search'>
      <div className='search__title'>Search Planets</div>
      <div className='search__subtitle' />
      <div className='search__input'>
        <div className='search__icon' />
        <input
          type='text'
          placeholder='Enter a search term'
          onChange={e => onChange(e.target.value)}
          value={value}
          autoFocus
        />
      </div>
    </div>
  )
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Search
