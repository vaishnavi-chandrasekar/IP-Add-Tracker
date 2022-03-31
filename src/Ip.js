import React, { useEffect, useState } from 'react'
function Ip() {
    const [users, setUsers] = useState([])
    useEffect(async () => {
        try {
            let items = await fetch("https://ipfind.co/?ip=103.163.248.47&auth=714b1e54-571f-4775-bed7-e066538053b0");
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

                        <b> <li>IP : {`${users.ip_address}`}</li>
                            <li>Country Name : {`${users.country}`}</li>
                            <li>Country Code : {`${users.country_code}`}</li>
                            <li>City : {`${users.county}`}</li>
                            <li>Postal Code : {`${users.postal_code}`}</li>
                            <li>Latitude : {`${users.latitude}`}</li>
                            <li> Longitude : {`${users.longitude}`}</li>
                            <li>State : {`${users.region}`}</li></b>
                    </ul>}

                </div>
            </div>

        </>
    )
}

export default Ip