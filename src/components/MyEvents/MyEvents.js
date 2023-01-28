import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Events from '../Events/Events'
import Header from '../Header/Header'

function MyEvents() {

    const navigate = useNavigate()
    const appState = useSelector(state => state.appState)

    useEffect(() => {
        if (!appState.user.name) {
            navigate('/')
        } else {

        }
    }, [])

    return (
        <>
            <Header page={'myEvents'} />
            <div className='' style={{ paddingTop: '25px' }}>
                <div style={{ paddingLeft: '10%' }}>
                    <h3>My events Controller</h3>
                </div>
                <Events myEvents={true} />
            </div>
        </>
    )
}

export default MyEvents