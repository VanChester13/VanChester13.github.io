import React from 'react'
import { Filter } from './Filter'

function FilterPopup({headerGroups}) {
const [column, setColumn] = React.useState('')

    return (
      <>
        <div className="filter-popup btn">  Filter
             <ul className='filter-popup__sub-menu'>
                 {headerGroups[0].headers.map(column => column.canFilter && (
                     <li {...column.getHeaderProps()} onClick ={() => setColumn(column)}>{column.render('Header')}</li>
                 ))}
             </ul>
         </div>
         <Filter column={column}/>
      </>
       )
    }

export default FilterPopup
