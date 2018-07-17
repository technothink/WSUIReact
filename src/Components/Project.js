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
            projectData: null,
            selectedFile: null,
            projectName: null,
            endPoint: null,
            serviceType: 'soap',
            wsdlFileName: null
        }
    }

    serviceHandler = (event) => {
        let isSoapEnabld = true;
        let serviceType = event.target.value;
        console.log(event.target.value);
        if (serviceType == 'rest') {
            isSoapEnabld = false;
        } else {
            isSoapEnabld = true;
        }


        this.setState({
            enableWsdl: isSoapEnabld,
            serviceType: serviceType
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

        let projectName = this.state.projectName;
        let endPoint = this.state.endPoint;
        let serviceType = this.state.serviceType;
        let wsdlFileName = this.state.wsdlFileName;


        Rest.post(url, {
            projectName: projectName,
            endPoint: endPoint,
            serviceType: serviceType,
            wsdl: wsdlFileName
        }).then(
            response => {
                console.log(response);
                this.reloadProjectHandler();
            }
        );

    }

    reloadProjectHandler = () => {
        this.getProjectDataHandler();
    }

    fileSelectedHandler = (event) => {
        this.uploadHandler(event.target.files[0]);
    }

    uploadHandler = (file) => {

        let fileName = file.name;
        this.setState(
            { wsdlFileName: fileName }
        );

        console.log(fileName);

        let url = "uploadFile";
        let formData = new FormData()
        formData.append('file', file);


        Rest.post(url, formData).then(response => {
            console.log(response);
        });

    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        // console.log('event.target.value', event.target.value)
    }

    render() {

        let wsdl = <File label='Select WSDL' Changed={this.fileSelectedHandler} />;


        return (

            <div>
                <div style={style}>

                    <Input type="text" label='Project Name' name='projectName' Changed={this.handleInput} />
                    <Input type="text" label='End Point' name='endPoint' Changed={this.handleInput} />
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