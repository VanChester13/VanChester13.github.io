import axios from 'axios'

const request = 'http://jsonplaceholder.typicode.com'

export const deleteUser = (users) => (dispatch) => dispatch({type: 'DELETE_USER', payload: users})

export const addUser = (obj) => (dispatch) =>  dispatch({type: 'ADD_USER', payload: obj})

const getUsers = () =>  async (dispatch) => {
    await axios.get(`${request}/users`).then(response => dispatch({type: 'SET_USERS', payload: response.data}) )
    dispatch({ type: 'SET_IS_LOADED', payload: true })
}
export default getUsers
