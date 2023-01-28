import React from 'react'
import { useSelector } from 'react-redux';

import { emptyPerson, fillPerson } from '../Icons/Icons'

function EventCard({ event, setEvents }) {

    const appState = useSelector(state => state.appState)

    const handleInscrive = (eventId) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/inscrive`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${appState.user.token}`,
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'event_id': eventId
            })
        })
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.status === 1) {
                    console.log(appState);
                    console.log('hola');
                    setEvents(jsonResponse.result.events)
                } else {
                    alert(jsonResponse.message)
                }
            })
    }

    return (
        <div className="card mt-5 shadow p-3 bg-white rounded" style={{ height: '40em' }}>
            <img className="card-img-top" src={require(`../../Media/event${event.image}.jpg`)} alt="Card image cap" />
            <div className="card-header bg-dark" style={{ color: 'white', textAlign: 'start' }}>
                {event.day} From <span style={{ color: 'lightgreen' }}>{event.init_time.slice(0, 5)}</span> to <span style={{ color: 'tomato' }}>{event.end_time.slice(0, 5)}</span> - Empieza en <span style={{ color: 'yellow' }}>{event.remaining} días</span>
            </div>
            <h2 className="card-title" style={{ textAlign: 'center' }}>{event.title}</h2>
            <span style={{ textAlign: 'start', marginBottom: '5px' }} className='btnInscrive' onClick={() => handleInscrive(event.id)}>
                {event.imThere ? fillPerson : emptyPerson}
                <span style={{ verticalAlign: 'bottom', marginLeft: '1em' }}> {event.countInscrits} {(event.countInscrits > 1) || (event.countInscrits === 0) ? 'participants' : 'participant'}</span>
            </span>
            <div className="card-body" style={{ textAlign: 'start', overflowY: 'auto' }}>
                <h5>Organized by {event.organization}</h5>
                <h6>Posted by {event.user.name}</h6>
                <p className="card-text">{event.description} </p>
                <h6 style={{ textTransform: 'capitalize' }}>{event.city}, {event.province}, {event.country}</h6>
                <p>{event.adress}<br />
                    {event.adress_adds}</p>
            </div>
        </div>
    )
}

export default EventCard