import React from 'react';
import { Panel, PanelGroup} from "react-bootstrap";
import "./panel.scss";
import "./user-plus-solid.svg";
import Listofpatients from "./listofpatients";

class PatientTagPanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.data = "";
    this.state = {
      activeKey: '', uniquetagslist: '', patientlisturls: '', myArray: [], joined: []
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

    componentDidMount() {
        fetch('http://localhost:8081/openmrs/ws/rest/v1/tag?objectType=org.openmrs.Patient&objectUuid=0fbb6349-1580-46db-be45-da5d09a89fef', {
            headers: new Headers({
                'Authorization': 'Basic ' + btoa('admin:Admin123')
            })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({patientlisturls: data},function () {
                    //console.log(this.state.patientlisturls);
                    let a = this.state.patientlisturls.results;
                    //console.log(a);
                    a.map((item) => {
                        this.state.data = item.display;
                        //console.log(this.state.data);
                        this.state.joined = this.state.myArray.concat(this.state.data);
                        this.setState({ myArray: this.state.joined}, function () {
                            //console.log(this.state.myArray);
                        })

                    });
                });
            })

    }

  render() {
    const activated = this.state.activeKey;
      return (
      <PanelGroup
        accordion
        id="accordion-controlled-example"
        activeKey={this.state.activeKey}
        onSelect={this.handleSelect}
      >
        <Panel eventKey="1">
          <Panel.Heading>
              <div className="btn-group pull-right">
                  <a href="#" className="btn btn-default btn-sm">
                      <i className="fa fa-user-plus"></i>
                  </a></div>
              <Panel.Title toggle>Hello</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>{activated ?  activated.toString() ===  '1' ? <Listofpatients/> : 'Not yet Loaded' : ''}
          </Panel.Body>
        </Panel>
      </PanelGroup>
    );
  }
}

export default PatientTagPanel;
