import React from 'react';
import Project from '../Components/Project';
import Service from './Service'

class Home extends React.Component {
    render() {

        const style = {
            display: 'flex',
            width:'100%'
        }

        return (
            <div style={style}>

                <Project />
                <Service />

            </div>
        );
    }
}

export default Home;