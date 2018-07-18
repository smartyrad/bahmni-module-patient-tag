import React from 'react';
import { Panel, PanelGroup} from "react-bootstrap";
import TableView from "../Table/TableView";
import "./panel.scss";
import "./user-plus-solid.svg";

class PanelView extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: '1'
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
            <Panel.Title toggle>Create tags</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible><TableView/></Panel.Body>
        </Panel>
        <Panel eventKey="2">
          <Panel.Heading>
              <div className="btn-group pull-right">
                  <a href="#" className="btn btn-default btn-sm"><i className="fa fa-plus-circle"></i></a></div>
            <Panel.Title toggle>Add tags</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>Panel content 2</Panel.Body>
        </Panel>
      </PanelGroup>
    );
  }
}

export default PanelView;