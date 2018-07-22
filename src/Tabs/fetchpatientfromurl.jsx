import React from 'react';
import './spinner.gif';
import '../Tabs/panel.scss';
import { Table} from "react-bootstrap";

class FetchPatient extends React.Component {

    constructor() {
        super();

        this.state = {
            patientlisturls: {
                links: [{rel : '', uri: ''}],
    }
    }
    this.patienturl = this.patienturl.bind(this);
    }
    patienturl(){
        let patientlisturls = this.state.patientlisturls;
        patientlisturls['links'] = patientlisturls['links'] ? patientlisturls['links'] : [];
        patientlisturls['links'].concat(this.state.links);
        this.setState({patientlisturls: patientlisturls});

    }


    componentDidMount() {
        fetch('http://localhost:8081/openmrs/ws/rest/v1/tag/watchthis', {
            headers: new Headers({
                'Authorization': 'Basic ' + btoa('admin:Admin123')
            })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({patientlisturls: data});


            });
    }

    render() {
        if (this.state && this.state.patientlisturls) {
            const pat = this.state.patientlisturls;
            console.log(pat.links[1]);


            return (
                <Table responsive hover id="tb2">
                    <tbody>
                    {pat.links.map((links, index) => {
                        if (links.rel === "v1/patient")
                            return (<tr key={index}>
                                    <td>
                                        <div><b>{links.uri}</b></div>
                                    </td>
                                </tr>
                            )})}</tbody>
                </Table>
            )
        }
        else {
            return (<div>{<img alt={"Loading...."} src={require('./spinner.gif')}/>}</div>)
        }
    }
}
export default FetchPatient;
