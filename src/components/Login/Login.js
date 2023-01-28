import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import { colors } from '../../colors'
import { useDispatch } from 'react-redux'
import { setUSerState } from '../../Redux/AppActions'

export default function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const changeInputHandle = e => {
    e.target.id === 'user'
      ? setUsername(e.target.value)
      : setPassword(e.target.value)
  }

  const guardoUserAlState = response => {
    const user = {
      id: response.user.id,
      name: response.user.name,
      email: response.user.email,
      token: response.token
    }
    console.log(user);
    dispatch(setUSerState(user))
  }

  const textUserLogin = () => {
    setAlertMessage("mail: test@test.com pass:test")
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 10000);
  }

  const handleSubmit = e => {
    if (e) { e.preventDefault() }
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.status === 0) {
          setAlert(true)
          setAlertMessage(jsonResponse.message)
          setTimeout(() => {
            setAlert(false)
          }, 2000);

        } else {
          console.log('status 1');
          guardoUserAlState(jsonResponse)
          navigate('/home')
        }
      })
  }
  return (
    <>
      <Header page='login' />
      <div className='container'>
        <div className='d-flex justify-content-center mt-5'>
          <div className='border border-seconrady w-50 p-2 rounded' style={{ backgroundColor: colors.color1 }}>
            <div>
              <h4 className='text-center'>Login</h4>
            </div>
            <div className='mb-2'>
              <input
                onChange={changeInputHandle}
                className='form-control'
                type='text'
                maxLength='25'
                id='user'
                placeholder='email'
              ></input>
            </div>
            <div className='mb-2'>
              <input
                onChange={changeInputHandle}
                className='form-control'
                type='password'
                maxLength='25'
                id='password'
                placeholder='contraseña'
              ></input>
            </div>
            <div className='text-center'>
              <input className='btn btn-sm btn-primary' type='submit' onClick={handleSubmit} />
            </div>
          </div>
        </div>
        {alert ? <center><div className="alert alert-warning mt-2 w-50" role="alert">{alertMessage}</div></center> : null

        }


        <div className='d-flex justify-content-center mt-3'>
          <p>Don't have an account?<Link to={'/createUser'} style={{ marginLeft: '5px' }}>create account</Link>
            <br />
           <span style={{fontWeight:'700'}}>Or Login <Link><span onClick={textUserLogin} >with testing user here</span></Link></span>
          </p>
        </div>
      </div>
    </>
  )
}
