import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header'

function EventCreate() {

    const location = useLocation()
    const appState = useSelector(state => state.appState)
    const navigate = useNavigate()

    const [image, setImage] = useState(1)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [organization, setOrganization] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [country, setCountry] = useState('Spain')
    const [adress, setAdress] = useState('')
    const [adress_adds, setAdressAdds] = useState('')
    const [init_time, setInitTime] = useState('')
    const [end_time, setEndTime] = useState('')
    const [day, setDay] = useState('')

    useEffect(() => {
        if (!appState.user.name) {
            navigate('/')
        } else {

        }
    }, [])

    useEffect(() => {
        if (location.state) {
            setImage(location.state.event.image)
            setTitle(location.state.event.title)
            setDescription(location.state.event.description)
            setOrganization(location.state.event.organization)
            setCity(location.state.event.city)
            setProvince(location.state.event.province)
            setCountry(location.state.event.country)
            setAdress(location.state.event.adress)
            setAdressAdds(location.state.event.adress_adds)
            setInitTime(location.state.event.init_time)
            setEndTime(location.state.event.end_time)
            setDay(location.state.event.day)
        }
    }, [])

    const handleInput = (e) => {
        switch (e.target.id) {
            case 'image':
                setImage(e.target.value)
                break;
            case 'title':
                setTitle(e.target.value)
                break;
            case 'description':
                setDescription(e.target.value)
                break;
            case 'organization':
                setOrganization(e.target.value)
                break;
            case 'city':
                setCity(e.target.value)
                break;
            case 'province':
                setProvince(e.target.value)
                break;
            case 'country':
                setCountry(e.target.value)
                break;
            case 'adress':
                setAdress(e.target.value)
                break;
            case 'adress_adds':
                setAdressAdds(e.target.value)
                break;
            case 'init_time':
                setInitTime(e.target.value)
                break;
            case 'end_time':
                setEndTime(e.target.value)
                break;
            case 'day':
                setDay(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleClickSend = () => {
        const url = location.state ? `${process.env.REACT_APP_API_ENDPOINT}/edit_event/${location.state.event.id}` : `${process.env.REACT_APP_API_ENDPOINT}/create_event`

        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${appState.user.token}`,
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'user_id': appState.user.id,
                title,
                description,
                organization,
                city,
                province,
                country,
                day,
                init_time,
                end_time,
                adress,
                adress_adds,
                image,
            })
        })
            .then(response => response.json())
            .then(jsonResponse => {
                alert(jsonResponse.message)
                if (jsonResponse.status === 1) {
                    navigate('/home')
                }
            });
    }

    return (
        <>
            <Header page={'eventCreate'} />
            <div className='container mt-3' style={{ width: '60%' }}>
                <h5>{location.state ? 'Edit Event' : 'New Event'}</h5>
                <label>Title</label>
                <input className='form-control' type={'text'} onChange={handleInput} id={'title'} value={title} />
                <label>Choose image</label>
                <select className='form-select' onChange={handleInput} id={'image'} value={image}>
                    <option img="1" value="1">1</option>
                    <option img="2" value="2">2</option>
                    <option img="3" value="3">3</option>
                </select>
                <div>
                    <img style={{ width: '120px', marginTop: '8px' }} src={require(`../../Media/event${image}.jpg`)} />
                </div>
                <label>Description</label>
                <textarea style={{ resize: 'none' }} className='form-control' rows={'3'} type={'text'} onChange={handleInput} id={'description'} value={description} />
                <label>Organized by</label>
                <input className='form-control' type={'text'} onChange={handleInput} id={'organization'} value={organization} />
                <label>City</label>
                <input className='form-control' type={'text'} onChange={handleInput} id={'city'} value={city} />
                <label>Province</label>
                <select className='form-select' onChange={handleInput} id={'province'} value={province}>
                    <option data-postal="00" value="All">- All -</option>
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
                <label>Country</label>
                <select className='form-select' onChange={handleInput} id={'country'} value={country}>
                    <option value="Spain">Spain</option>
                </select>
                <label>Day</label>
                <input className='form-control' type={'date'} onChange={handleInput} id={'day'} value={day} />
                <label>Start hour</label>
                <input className='form-control' type={'time'} onChange={handleInput} id={'init_time'} value={init_time} />
                <label>End hour</label>
                <input className='form-control' type={'time'} onChange={handleInput} id={'end_time'} value={end_time} />
                <label>Adress</label>
                <input className='form-control' type={'text'} onChange={handleInput} id={'adress'} value={adress} />
                <label>Adress Adds</label>
                <input className='form-control' type={'text'} onChange={handleInput} id={'adress_adds'} value={adress_adds} />

            </div>
            <center>

                <button className='btn btn-primary form-control mt-5' style={{ width: '50%' }} onClick={handleClickSend}>Send</button>
            </center>


            <div style={{ marginTop: '150px' }}>

            </div>
        </>
    )
}

export default EventCreate
