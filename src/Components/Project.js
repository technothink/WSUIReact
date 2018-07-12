import React from 'react';
import Input from './Input';
import File from './File';
import Select from './Select';
import Table from './Table';
import Rest from './Rest'

const style = {
    width: '20%'
}

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enableWsdl: true,
            projectData: null
        }
    }

    serviceHandler = (event) => {
        let isSoapEnabld = true;
        console.log(event.target.value);
        if (event.target.value == 'rest') {
            isSoapEnabld = false;
        } else {
            isSoapEnabld = true;
        }


        this.setState({
            enableWsdl: isSoapEnabld
        });
    }

    componentDidMount() {
        this.getProjectDataHandler();
    }

    getProjectDataHandler = () => {
        const url = 'getProjects'
        Rest.get(url).then(
            response => {
                // console.log(response);
                this.processProjectData(response);
            }
        );
    }

    processProjectData = (response) => {

        let data = response.data.data;
        console.log(data);
        this.setState({
            projectData: data
        });
    }

    saveProjectHandler = () => {
        let url = "saveProject";
        //let project = { "projectName": "vikas", "endPoint": "https://dog.ceo/api/breeds/image/random", "serviceType": "rest", "wsdl": "cust.wsdl" };
        Rest.post(url, {
            projectName: "vikas",
            endPoint: "https://dog.ceo/api/breeds/image/random",
            serviceType: "rest",
            wsdl: "cust.wsdl"
        }).then(
            response => {
                console.log(response);
            }
        );
    }

    render() {

        let wsdl = <File label='Select WSDL' />;


        return (

            <div>
                <div style={style}>

                    <Input type="text" label='Project Name' />
                    <Input type="text" label='End Point' />
                    <Select label='Service Type' changed={this.serviceHandler} />
                    {this.state.enableWsdl ? wsdl : null}

                    <button className="ButtonStyle" onClick={this.saveProjectHandler}>
                        Save </button>



                </div>

                <div>

                    <strong className='BulletStyle'>Projects</strong>
                    <Table projectData={this.state.projectData} />

                </div>

            </div>
        );
    }
}





export default Project;