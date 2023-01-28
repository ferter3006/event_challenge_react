import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import EventCard from './EventCard';
import EventControllerList from './EventControllerList';

function Events({ filter, myEvents }) {

    const [events, setEvents] = useState([])

    const appState = useSelector(state => state.appState)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/index_all_events`, {
            headers: {
                'Authorization': `Bearer ${appState.user.token}`,
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.events) {
                    setEvents(jsonResponse.events)
                }
            })

    }, [])

    if (myEvents) {
        return (
            <>
                <div className='container' style={{ width: '80%', marginTop:'45px' }}>

                    <ul className="list-group">
                        {!events ? null : events.map((event, index) => (
                            event.remaining >= 0 ?
                                (event.user_id === appState.user.id) ?
                                    <li className='list-group-item list-group-item-action'  key={index}>
                                        <EventControllerList key={index} event={event} setEvents={setEvents} />
                                    </li>
                                    : null
                                : null
                        ))}
                    </ul>
                </div>



            </>
        )
    }

    return (
        <>
            <div className='container d-flex justify-content-center mb-5'>
                <center><div className='row'>
                    {!events ? null : events.map((event, index) => (
                        event.remaining >= 0 ?
                            (event.province === filter) || (filter === 'All') ?
                                <div className='col-xl-4 col-lg-4 col-md-6' key={index}>
                                    <EventCard key={index} event={event} setEvents={setEvents} />
                                </div>
                                : null
                            : null
                    ))}
                </div>
                </center>

            </div>
        </>
    )
}

export default Events