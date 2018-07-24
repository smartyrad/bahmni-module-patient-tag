import React from 'react';
import { Table,Col} from "react-bootstrap";
import './spinner.gif';
import '../Tabs/panel.scss';
import DeleteTag from "../Table/deletetag";

export default class Listofpatients extends React.Component {

    constructor() {
        super();
        this.lin = "";
        this.state = {patients: '', patientlisturls: '', patient : ''};
        this.listofurls = this.listofurls.bind(this);
        this.patienturllist = this.patienturllist.bind(this);
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
                                console.log(data);
                                // Drops mic.
                                // this.setState({patientlisturls: data});


                            });
                        return
                    })
                });
            });
         console.log("Goinjjjg jhbhj patjjient!");


    }

    patienturllist(){
        console.log("Entered!");
        console.log(this.state.patients);

        //this.setState({patient: this.state.extracted});
        //const patienturls = this.state.patient;

    }


        componentDidMount(){
        this.listofurls();
            //console.log("Mounted")
            //this.state.patienturllist;
            //console.log(this.state.patienturllist);
            }

        render()
            {
                return(<p>jhfhjf</p>);
            }

}


