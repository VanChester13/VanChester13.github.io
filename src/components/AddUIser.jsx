import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/actionsCreators/actions'
import InputMask from 'react-input-mask';

const AddUser = ({setVisiableForm}) => {
    const dispatch = useDispatch()
    const [state, setValue] = React.useState({name: '', username: '', email: '', phone: '', zipcode: ''})

    const handleSubmit = (e, mail) => {
        e.preventDefault()
        if (!mail.match(/.+@.+/)) { 
            return alert('Адрес электронной почты введен неправильно!') 
        }
        else {
            dispatch(addUser(state))
            setVisiableForm(false)
        }    
    }

    const getValue = (e) =>  {
        const name = e.target.name
        const value = e.target.value
        setValue({...state, [name]: value})
    }

    const clear = (e) => {
        e.preventDefault()
        setValue({name: '', username: '', email: '', phone: '', zipcode: ''})
    }

    
    return (
    <div className='container-form'>
        <form className='container-form__form-user' onSubmit={(e) => handleSubmit(e, state.email) }>
            <label> Name: <input type="text" value={ state.name } name="name"  required  placeholder='Ivan Razhev' onChange={ getValue } /></label>
            <label > Username: <input type="text" value={ state.username }  name="username"  required  placeholder='Username' onChange={ getValue }/></label>
            <label> Email: <InputMask type="text" value={ state.email }   name="email"  placeholder='some@some.some' required onChange={ getValue }/></label>
            <label> Number: <InputMask type="text" value={ state.phone }  name="phone"  mask='+7 (999) 999-99-99'   required  placeholder='+7 (999) 999-99-99' onChange={getValue}/></label>
            <label> Zipcode:  <input type="text" value={ state.zipcode }  name="zipcode"  onChange={ getValue }/></label>
            <button className='btn' type='button' onClick={(e) => clear(e)}> Clear</button>
            <button className='btn' type='submit'> Add </button>
        </form>
         
        <div className="cl-btn-1" onClick={() => setVisiableForm(false)}>
                <div>
                    <span className="left">
                         <span className="circle-left"></span>  
                         <span className="circle-right"></span>
                    </span>
                    <span className="right">
                        <span className="circle-left"></span>
                        <span className="circle-right"></span>
                    </span>
                </div>
            </div>
    </div>
    )
}
export default AddUser
