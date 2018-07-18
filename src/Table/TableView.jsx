import React from 'react';
import { Table,Col} from "react-bootstrap";
import './spinner.gif';
import '../Tabs/panel.scss';
import './deletetag';
import DeleteTag from "./deletetag";

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

                <Table responsive hover id="tb2">
                    <thead>
                    <tr>
                        <th width='4%'>#</th>
                        <th>Tag Name</th>
                        <th width='3%'>Edit</th>
                        <th width='3%'>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pat.results.map((item, index) =>
                            <tr key={index}>
                                <td><Col/></td>
                                <td><div><b>{item.display}</b></div></td>
                                    <td><div className="btn-group pull-right">
                                        <DeleteTag className="btn btn-default btn-sm">
                                            <i className="fa fa-2x fa-trash"></i>
                                        </DeleteTag></div></td>
                                    <td><div className="btn-group pull-right">
                                    <a href="#" className="btn btn-default btn-sm">
                                        <i className="fa fa-2x fa-edit"></i>
                                    </a></div></td>
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
export default TableView;