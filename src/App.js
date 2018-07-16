import React from 'react';
//import { Table,Col} from "react-bootstrap";
import FormBuilderHeader from './FormBuilderHeader/FormBuilderHeader.jsx';
import './FormBuilderHeader/_bahmniGlobal.scss'


class App extends React.Component{

   constructor(){
    super();

    //this.state = {patients:''};
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
      console.log('hello');

        return(
            <div>
                <FormBuilderHeader/>
                <div className="container-content">
                    <div className="container-main form-list">
                        <h2 className="header-title">Tag List</h2>
                    </div>
                </div>

            </div>
            )
       }

}


export default App;
