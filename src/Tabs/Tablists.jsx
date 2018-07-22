import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React from 'react';
import './react-tabs.scss';
import PatientTagPanel from './managetags';
import PanelView from "./panel";




export default class Tablists extends React.Component {
    render() {
        return (
            <Tabs className="container-fluid">
                <TabList>
                    <Tab>Manage Tags</Tab>
                    <Tab>Tag List</Tab>
                </TabList>

                <TabPanel>
                    <div className="container-fluid">
                        <PatientTagPanel/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="container-fluid">
                        <PanelView/>
                    </div>
                </TabPanel>

            </Tabs>

        ) }
}

