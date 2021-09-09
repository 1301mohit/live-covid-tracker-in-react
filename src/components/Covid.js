import React, {useEffect, useState} from 'react'

export const Covid = () => {

    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const data = await res.json();
            const actualData = data.statewise[0];
            setData(actualData);
        } catch(err) {
            console.log(err);
        }
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <section>
            <h1>Live</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            <ul>
                <li>Total active - {data.active} </li>
                <li>Total confirmed - {data.confirmed} </li>
                <li>Total deaths - {data.deaths} </li>
                <li>Total deltaconfirmed - {data.deltaconfirmed} </li>
                <li>Total deltadeaths - {data.deltadeaths} </li>
                <li>Total deltarecovered - {data.deltarecovered} </li>
                <li>Total lastupdatedtime - {data.lastupdatedtime} </li>
                <li>Total recovered - {data.recovered} </li>
                <li>Total migratedother - {data.migratedother} </li>
            </ul>
        </section>
    )
}
