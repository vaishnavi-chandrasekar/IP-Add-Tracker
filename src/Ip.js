import React, { useEffect, useState } from 'react'
function Ip() {
    const [users, setUsers] = useState([])
    useEffect(async () => {
        try {
            let items = await fetch("https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0");
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

                        <b> <li>IP : {`${users.IPv4}`}</li>
                            <li>Country Name : {`${users.country_name}`}</li>
                            <li>Country Code : {`${users.country_code}`}</li>
                            <li>City : {`${users.city}`}</li>
                            <li>Postal Code : {`${users.postal}`}</li>
                            <li>Latitude : {`${users.latitude}`}</li>
                            <li> Longitude : {`${users.longitude}`}</li>
                            <li>State : {`${users.state}`}</li></b>
                    </ul>}

                </div>
            </div>

        </>
    )
}

export default Ip