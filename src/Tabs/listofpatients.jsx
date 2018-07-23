import React from 'react';
//import { Table,Col} from "react-bootstrap";
import './spinner.gif';
import '../Tabs/panel.scss';


export default class Listofpatients extends React.Component {

    constructor() {
        super();

        this.state = {patients: ''};
    }

    listofurls() {
         fetch('http://localhost:8081/openmrs/ws/rest/v1/tag/watchthis', {
            headers: new Headers({
                'Authorization': 'Basic ' + btoa('admin:Admin123')
                })
            })
            .then(response => response.json())
            .then(data => {
                this.setState({patients: data});
            });

            if (this.state && this.state.patients) {
                const pat = this.state.patients;
            const extracted = pat.links.map((links) => {
                    if (links.rel === "v1/patient") {
                        return (links.uri)
                    }
                });
                console.log(extracted);
            }
    }
    individualpatienturlfetch(){
        let a = this.listofurls();
        {a.map((item) => {
            fetch(item, {
                headers: new Headers({
                    'Authorization': 'Basic ' + btoa('admin:Admin123')
                })
            })
                .then(response => response.json())
                .then(data => {
                    this.setState({patientlisturls: data});


                });
        })}}

        componentDidMount(){
            this.listofurls();
        }

        render()
            {
                console.log(this.listofurls())
            return (

                    <div>hello</div>
                )
            }

        }
