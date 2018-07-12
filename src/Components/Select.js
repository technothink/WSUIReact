import React from 'react';

const SelectComponent = (props) => (

    <div >
        <label > {props.label}
            <select className='SelectStyle' onChange={(event) => props.changed(event)}>
                <option value="soap">SOAP</option>
                <option value="rest">Rest</option>

            </select>
        </label>
    </div>
);

export default SelectComponent;