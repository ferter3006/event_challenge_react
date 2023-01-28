import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { json, Navigate, useNavigate } from 'react-router-dom';
import { deleteIcon, editIcon } from '../Icons/Icons'


function EventControllerList({ event, setEvents }) {

    const navigate = useNavigate()
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch;

    const handleDelete = (eventId) => {
        console.log('delete', eventId);
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/delete_event`, {
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
                if (jsonResponse.status === 0) {
                    alert(jsonResponse.message)
                } else {
                    console.log(jsonResponse);
                    setEvents(jsonResponse.result.events)
                }
            })

    }

    const handleEdit = (event) => {
        navigate('/eventCreate', { state: { event: event } })
    }

    return (
        <>
            {event.title}<span onClick={() => handleEdit(event)} style={{ marginLeft: '25px', marginRight: '15px', color: 'green' }}>{editIcon}</span> <span onClick={() => handleDelete(event.id)}>{deleteIcon}</span>
        </>
    )
}

export default EventControllerList