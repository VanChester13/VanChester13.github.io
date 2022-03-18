/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getUsers from './redux/actionsCreators/actions'
import TableUsers from './components/TableUsers'
import { Loader } from './components/Loader'

const App = () => {

const dispatch = useDispatch()
const isLoaded = useSelector(({usersInfo}) => usersInfo.loading)
React.useEffect(() => dispatch(getUsers()), [])

  return (
    <div className="container">
       { !isLoaded  ? <Loader/> : <TableUsers/> }
    </div>
  )
}

export default App;
