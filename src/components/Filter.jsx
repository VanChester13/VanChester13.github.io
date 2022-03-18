import React from 'react'

export const Filter = ({column}) => {
  const {filterValue, setFilter} = column
    return (
      <div className='filter'>
          <p> Filter for {column.Header}</p>
          <input style={{width: '200px'}} value={filterValue || ''} onChange={e => setFilter(e.target.value)}/> 
      </div>
    )
  }
