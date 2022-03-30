import React, { useEffect, useState } from 'react'
function Ip() {
    const [users, setUsers] = useState([])
    useEffect(async () => {
        try {
            let items = await fetch("http://api.ipstack.com/103.163.248.150?access_key=3c9fa702d7172d0da46dc469e76128f3");
            let userdata = await items.json()
            setUsers(userdata)
            console.log(userdata)
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <div id='main'>

                <div id='sub'>
                    <h1 id='down'>IP Address Tracker</h1>
                    <form>
                        <button type='submit' id='btn' className="btn btn-primary btn-sm" onClick={() => users}>Find My Details</button>
                    </form>
                </div>
                <div id='find'>
                    {users && <ul>

                        <b> <li>IP : {`${users.query}`}</li>
                            <li>Country Name : {`${users.country}`}</li>
                            <li>Country Code : {`${users.countryCode}`}</li>
                            <li>City : {`${users.city}`}</li>
                            <li>Postal Code : {`${users.zip}`}</li>
                            <li>Latitude : {`${users.lat}`}</li>
                            <li> Longitude : {`${users.lon}`}</li>
                            <li>State : {`${users.regionName}`}</li></b>
                    </ul>}

                </div>
            </div>

        </>
    )
}

export default Ip