import React from 'react';


const options = {
    baseUrl: 'http://127.0.0.1',
    query: {
        warrior: 'fight'
    }
}
const File = (props) => (

    <div >
        <label > {props.label}
            <input className='FileStyle'
                type="file" onChange={event => props.Changed(event)}
  />

           


        </label>
    </div>
);

export default File;