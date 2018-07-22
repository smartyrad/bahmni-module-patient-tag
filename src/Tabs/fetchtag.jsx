import React from 'react';
import './spinner.gif';
import '../Tabs/panel.scss';


class FetchTag extends React.Component {

    constructor() {
        super();

        this.state = {fetchtagitem: ''};
    }

    componentDidMount() {
        fetch('http://localhost:8081/openmrs/ws/rest/v1/tag/inpatient', {
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

                <p>{pat.tag}</p>
            )
        }
        else {
            return (<div>{<img alt={"Loading...."} src={require('./spinner.gif')}/>}</div>)
        }
    }
}
export default FetchTag;
