import React from 'react';
import { Table,Col} from "react-bootstrap";
import './spinner.gif';


class TableView extends React.Component {

    constructor() {
        super();

        this.state = {patients: ''};
    }

    componentDidMount() {
        fetch('http://localhost:8081/openmrs/ws/rest/v1/tag?objectType=org.openmrs.Patient&objectUuid=0fbb6349-1580-46db-be45-da5d09a89fef', {
            headers: new Headers({
                'Authorization': 'Basic ' + btoa('admin:Admin123')
            })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({patients: data});


            });
    }

    render() {
        if (this.state && this.state.patients) {
            const pat = this.state.patients;
            console.log(this.state.patients.results);

            return (

                <Table>
                    <thead>

                    </thead>
                    <body>
                    {pat.results.map((item, index) =>
                        <div key={index}>
                            <tr key={index}>
                                <Col lg={6} md={8}>{item.display}</Col>
                            </tr>
                        </div>)}</body>
                </Table>
            )
        }
        else {
            return (<div>{<img alt={"Loading...."} src={require('./spinner.gif')}/>}</div>)
        }
    }
}
export default TableView;