import React from 'react';
import { Panel, PanelGroup} from "react-bootstrap";
import "./panel.scss";
import "./user-plus-solid.svg";
import FetchTag from "./fetchtag";
import FetchPatient from "./fetchpatientfromurl";

class PatientTagPanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: ''
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
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
            <Panel.Title toggle><FetchTag/></Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible><FetchPatient/></Panel.Body>
        </Panel>
      </PanelGroup>
    );
  }
}

export default PatientTagPanel;
