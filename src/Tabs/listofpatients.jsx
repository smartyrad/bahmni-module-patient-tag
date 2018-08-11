import React from 'react';
import { Table,Col} from "react-bootstrap";
import './spinner.gif';
import '../Tabs/panel.scss';
import DeletePatient from "./deletepatient";

export default class Listofpatients extends React.Component {

    constructor() {
        super();
        this.lin = "";
        this.joined = "";
        this.state = {patients: '', patientlisturls: '', myArray : []};

        this.listofurls = this.listofurls.bind(this);
    }

    listofurls() {
        fetch('http://localhost:8081/openmrs/ws/rest/v1/tag/watchthis', {
            headers: new Headers({
                'Authorization': 'Basic ' + btoa('admin:Admin123')
            })
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                this.lin = data.links.filter(function (links) {

                        return links.rel === "v1/patient"
                    }

                );

                this.setState({patients: this.lin},function () {
                    //console.log(this.state.patients);
                    let a = this.state.patients;
                    a.map((item) => {
                        fetch(item.uri, {
                            headers: new Headers({
                                'Authorization': 'Basic ' + btoa('admin:Admin123')
                            })
                        })
                            .then(response => response.json())
                            .then(data => {
                                //console.log(data);
                                 this.state.joined = this.state.myArray.concat(data);
                                 this.setState({ myArray: this.state.joined }, function () {
                                    console.log(this.state.myArray);

                                })
                                });
                            });
                    })
                });
            };


    componentDidMount(){
        this.listofurls();
        console.log(this.state.myArray);
    }

    render() {
        if (this.state && this.state.myArray) {
            console.log(this.state.myArray.person);

            return (

                <Table responsive hover id="tb2">
                    <thead>
                    <tr>
                        <th width='4%'>#</th>
                        <th>Patient Name</th>
                        <th width='3%'>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.myArray.map((item, index) =>
                        <tr key={index}>
                            <td><Col/></td>
                            <td><div><b>{item.person.display}</b></div></td>
                            <td>
                                <DeletePatient></DeletePatient>
                            </td>
                        </tr>
                    )}</tbody>
                </Table>
            )
        }
        else {
            return (<div>{<img alt={"Loading...."} src={require('./spinner.gif')}/>}</div>)
        }
    }
    }

