import React from 'react';
import './spinner.gif';
import '../Tabs/panel.scss';
import FetchPatient from './fetchpatientfromurl';


class FetchPatients extends React.Component {

    constructor() {
        super();

        this.state = {fetchtagitem: ''};
    }

    componentDidMount() {
        let url = <FetchPatient/>;
        fetch(url, {
            headers: new Headers({
                'Authorization': 'Basic ' + btoa('admin:Admin123')
            })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({fetchtagitem: data});


            });
    }

    render() {
        if (this.state && this.state.fetchtagitem) {
            const pat = this.state.fetchtagitem;
            console.log(this.state.fetchtagitem.results);

            return (

                <p>{pat.person[1].display}</p>
            )
        }
        else {
            return (<div>{<img alt={"Loading...."} src={require('./spinner.gif')}/>}</div>)
        }
    }
}
export default FetchPatients;
