import React from 'react';
//import { Table,Col} from "react-bootstrap";
import './FormBuilderHeader/_bahmniGlobal.scss';
//import {Button, Row, Col} from 'react-bootstrap';
import Tablists from "./Tabs/Tablists";

class App extends React.Component{


  componentDidMount() {
      /*fetch('http://localhost:8081/openmrs/ws/rest/v1/tag?objectType=org.openmrs.Patient&objectUuid=0fbb6349-1580-46db-be45-da5d09a89fef', {
          headers: new Headers({
              'Authorization': 'Basic '+btoa('admin:Admin123')
          })})
          .then(response => response.json())
          .then( data => { this.setState({ patients: data});


          });*/
      }

  render() {
      console.log('hello');

        return(
            <div>

                    <div className="header-wraps">
                        <header className="headers">
                            <nav className="navs">
                                <ul>
                                    <li>
                                        <a className="back-btn" href="https://demo-us.mybahmni.org/bahmni/home/#/dashboard">
                                            <i className="fa fa-home"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </header>
                    </div>


                    <div>
                        <Tablists/>
                    </div>

            </div>


            )
       }

}


export default App;
