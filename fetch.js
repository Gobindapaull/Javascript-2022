import React, { useState, useEffect } from 'react';

function Fetch() {
    const [ data, setData ] = useState(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((appData) => {
            setData(appData.message);
        });
    }, []);
    return (
        <div>
            <img width={500} height={500} src={data} />
        </div>
    )
}

export default Fetch;
