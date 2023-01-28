import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import { colors } from '../../colors'
import Header from '../Header/Header'

function CreateUser() {

    const navigate = useNavigate()

    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass1] = useState('')
    const [pass2, setPass2] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const handleInputs = (e) => {

        switch (e.target.id) {
            case 'name': setName(e.target.value)
                break
            case 'email': setEmail(e.target.value)
                break
            case 'pass1': setPass1(e.target.value)
                break
            case 'pass2': setPass2(e.target.value)
                break
            case 'province': setProvince(e.target.value)
                break
            case 'city': setCity(e.target.value)
                break
            case 'country': setCountry(e.target.value)
                break
            default:
                break;
        }
    }

    const handleSubmit = () => {
        
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/create_user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
                province,
                city,
                country

            })
        })
            .then(response => response.json())
            .then(jsonResponse => {
                console.log(jsonResponse);
                if (jsonResponse.status !== 1) {
                    console.log('hay message');
                    setAlert(true)
                    setAlertMessage(jsonResponse.message)
                    setTimeout(() => {
                        setAlert(false)
                    }, 10000);
                } else {
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
                            <h4 className='text-center'>Create New User</h4>
                        </div>
                        <label className='form-label'>Name</label>
                        <div className='mb-2'>
                            <input
                                onChange={handleInputs}
                                className='form-control'
                                type='text'
                                maxLength='25'
                                id='name'
                                placeholder='Name'
                            ></input>
                        </div>
                        <label className='form-label'>Email</label>
                        <div className='mb-2'>
                            <input
                                onChange={handleInputs}
                                className='form-control'
                                type='text'
                                maxLength='25'
                                id='email'
                                placeholder='Email'
                            ></input>
                        </div>
                        <label className='form-label'>Password</label>
                        <div className='mb-2'>
                            <input
                                onChange={handleInputs}
                                className='form-control'
                                type='password'
                                maxLength='25'
                                id='pass1'
                                placeholder='Password'
                            ></input>
                        </div>
                        <label className='form-label'>Repeat Password</label>
                        <div className='mb-2'>
                            <input
                                onChange={handleInputs}
                                className='form-control'
                                type='password'
                                maxLength='25'
                                id='pass2'
                                placeholder='Repeat Password'
                            ></input>
                        </div>
                        <label className='form-label'>Ciudad</label>
                        <div className='mb-2'>
                            <input
                                onChange={handleInputs}
                                className='form-control'
                                type='password'
                                maxLength='25'
                                id='city'
                                placeholder='Ciudad'
                            ></input>
                        </div>
                        <label className='form-label'>Province</label>
                        <div className='mb-2'>
                            <select className='form-select' onChange={handleInputs} id={'province'}>
                                <option data-postal="00" value="">- Select One -</option>
                                <option data-postal="01" value="Alava">Alava</option>
                                <option data-postal="02" value="Albacete">Albacete</option>
                                <option data-postal="03" value="Alicante">Alicante</option>
                                <option data-postal="04" value="Almeria">Almería</option>
                                <option data-postal="05" value="Avila">Avila</option>
                                <option data-postal="06" value="Badajoz">Badajoz</option>
                                <option data-postal="07" value="Islas Baleares">Islas Baleares</option>
                                <option data-postal="08" value="Barcelona">Barcelona</option>
                                <option data-postal="09" value="Burgos">Burgos</option>
                                <option data-postal="10" value="Caceres">Cáceres</option>
                                <option data-postal="11" value="Cadiz">Cádiz</option>
                                <option data-postal="12" value="Castellon">Castellón</option>
                                <option data-postal="13" value="Ciudad Real">Ciudad Real</option>
                                <option data-postal="14" value="Cordoba">Córdoba</option>
                                <option data-postal="15" value="A Coruna">A Coruña</option>
                                <option data-postal="16" value="Cuenca">Cuenca</option>
                                <option data-postal="17" value="Gerona">Gerona</option>
                                <option data-postal="18" value="Granada">Granada</option>
                                <option data-postal="19" value="Guadalajara">Guadalajara</option>
                                <option data-postal="20" value="Gipuzkoa">Gipuzkoa</option>
                                <option data-postal="21" value="Huelva">Huelva</option>
                                <option data-postal="22" value="Huesca">Huesca</option>
                                <option data-postal="23" value="Jaen">Jaen</option>
                                <option data-postal="24" value="Leon">León</option>
                                <option data-postal="25" value="Lerida">Lérida</option>
                                <option data-postal="26" value="La Rioja">La Rioja</option>
                                <option data-postal="27" value="Lugo">Lugo</option>
                                <option data-postal="28" value="Madrid">Madrid</option>
                                <option data-postal="29" value="Malaga">Málaga</option>
                                <option data-postal="30" value="Murcia">Murcia</option>
                                <option data-postal="31" value="Navarra">Navarra</option>
                                <option data-postal="32" value="Orense">Orense</option>
                                <option data-postal="33" value="Asturias">Asturias</option>
                                <option data-postal="34" value="Palencia">Palencia</option>
                                <option data-postal="35" value="Las Palmas">Las Palmas</option>
                                <option data-postal="36" value="Pontevedra">Pontevedra</option>
                                <option data-postal="37" value="Salamanca">Salamanca</option>
                                <option data-postal="38" value="S.C.Tenerife">S.C.Tenerife</option>
                                <option data-postal="39" value="Cantabria">Cantabria</option>
                                <option data-postal="40" value="Segovia">Segovia</option>
                                <option data-postal="41" value="Sevilla">Sevilla</option>
                                <option data-postal="42" value="Soria">Soria</option>
                                <option data-postal="43" value="Tarragona">Tarragona</option>
                                <option data-postal="44" value="Teruel">Teruel</option>
                                <option data-postal="45" value="Toledo">Toledo</option>
                                <option data-postal="46" value="Valencia">Valencia</option>
                                <option data-postal="47" value="Valladolid">Valladolid</option>
                                <option data-postal="48" value="Bizkaia">Bizkaia</option>
                                <option data-postal="49" value="Zamora">Zamora</option>
                                <option data-postal="50" value="Zaragoza">Zaragoza</option>
                                <option data-postal="51" value="Ceuta">Ceuta</option>
                                <option data-postal="52" value="Melilla">Melilla</option>
                            </select>
                        </div>
                        <label className='form-label'>Country  <span style={{ fontSize: '10px', color: 'red' }}> *Currently only Spain</span></label>
                        <div className='mb-2'>
                            <select className='form-select' onChange={handleInputs} id={'country'}>
                                <option country='0' value=''>- Select One -</option>
                                <option country='1' value='Spain'>Spain</option>
                            </select>
                        </div>
                        {alert ? <center><div class="alert alert-warning mt-2 w-50" role="alert">{alertMessage}</div></center> : null}
                        <div className='text-center'>
                            <input className='btn btn-sm btn-primary' type='submit' onClick={handleSubmit} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CreateUser