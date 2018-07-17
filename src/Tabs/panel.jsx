import React from 'react';
import { Panel, PanelGroup} from "react-bootstrap";
import TableView from "../Table/TableView";

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
            <Panel.Title toggle>Create tag</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible><TableView/></Panel.Body>
        </Panel>
        <Panel eventKey="2">
          <Panel.Heading>
            <Panel.Title toggle>Add tags</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>Panel content 2</Panel.Body>
        </Panel>
      </PanelGroup>
    );
  }
}

export default PanelView;