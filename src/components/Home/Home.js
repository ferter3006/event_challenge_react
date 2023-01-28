import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Events from '../Events/Events'
import Header from '../Header/Header'

function Home() {
  const appState = useSelector(state => state.appState)
  const navigate = useNavigate()
  const [filter, setFilter] = useState('All')

  const handleInputs = (e) => {
    setFilter(e.target.value)
  }

  useEffect(() => {
    if (!appState.user.name) {
      navigate('/')
    } else {

    }
  }, [])

  return (
    <>
      <Header page={'home'} />
      <div className='' style={{ paddingTop: '25px' }}>
        <div style={{ paddingLeft: '10%' }}>
          <h4>
            Upcoming events 2023
          </h4>
          <p>
            Personal code challenge to implement an event view with the CRUD functions and handling of users with permissions.<br />
            React on Front + Bootstrap styles / Laravel on Back.<br />
          </p>
        </div>
        <div style={{ width: '160px', marginLeft: '10%' }}>
          <label className='form-label' style={{ fontWeight: '600' }}>Province filter</label>
          <select className='form-select' onChange={handleInputs} id={'province'}>
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
        </div>
        <Events filter={filter} myEvents={false} />
      </div>
    </>
  )

}

export default Home