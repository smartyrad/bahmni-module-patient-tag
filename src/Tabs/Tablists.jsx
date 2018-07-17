import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React from 'react';
import './react-tabs.scss';
//import TableView from "../Table/TableView";
import PanelView from "./panel";




export default class Tablists extends React.Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab>List of Tags</Tab>
                    <Tab>Manage Lists</Tab>
                </TabList>

                <TabPanel>
                    <div className="container-fluid">
                    <PanelView/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        ) }
}

