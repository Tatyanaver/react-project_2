import React, {useEffect, useState} from 'react';

import Flight from "./Flight";
const Flights = () => {
    let [flightsItem,setFlightsItem] = useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights => {
                let flightsYear = flights.filter(flight=> flight.launch_year !=='2020');
                setFlightsItem(flightsYear);
            })
    },[])
    return (
        <div>
            {flightsItem.map(value => <Flight key={value.flight_number} item={value}/> )
            }
        </div>
    );
};

export default Flights;