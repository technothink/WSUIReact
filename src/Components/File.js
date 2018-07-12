import React from 'react';

const File = (props) => (

    <div >
        <label > {props.label}
            <input className='FileStyle'
                type="file" accept='.wsdl'


            />
        </label>
    </div>
);

export default File;