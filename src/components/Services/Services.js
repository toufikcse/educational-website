import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className='home-service'>
                {
                    services.map(service => <Service 
                        key={service.id}
                        service={service}
                        ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;