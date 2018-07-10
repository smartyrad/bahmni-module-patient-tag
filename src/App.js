import React from 'react';
import { Table,Col} from "react-bootstrap";


class App extends React.Component{

   constructor(){
    super();

    this.state = {patients:''};
   }

  componentDidMount() {
      fetch('http://localhost:8081/openmrs/ws/rest/v1/tag?objectType=org.openmrs.Patient&objectUuid=0fbb6349-1580-46db-be45-da5d09a89fef', {
          headers: new Headers({
              'Authorization': 'Basic '+btoa('admin:Admin123')
          })})
          .then(response => response.json())
          .then( data => { this.setState({ patients: data});


          });
      }

  render() {
       if(this.state && this.state.patients) {
           const pat = this.state.patients;
           console.log(this.state.patients.results);

        return(

            <Table>
                <thead>
                <tr>
                    <Col xs={3} md={2}><h2>Tag name</h2></Col>
                    <Col xs={3} md={2}><h2>Patient UUID</h2></Col>
                </tr>
                </thead>
                <body>
                {pat.results.map((item, index) =>
                <div key={index}>
                    <tr key={index}>
                        <Col lg={6} md={8}>{item.display}</Col>
                       <Col lg={6} md={8}>{item.uuid}</Col>
                   </tr>
               </div>)}</body>
            </Table>
            )
       }
       else{
           return(<p>loading...</p>)
       }
  }
}


export default App;
