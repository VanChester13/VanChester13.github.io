import React from 'react'

function SortPopup({headerGroups}) {
    return (
        <div className="sort-popup btn">  Sort
             <ul className='sort-popup__sub-menu'>
                 {headerGroups[0].headers.map(column => column.sorting && (
                     <li {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                         <span>
                             {column.isSorted ? ( column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                         </span>
                     </li>
                 ))}     
             </ul>  
         </div>
       )
     }

export default SortPopup
