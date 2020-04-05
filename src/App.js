import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { TopNavigation } from './components/nav/topNavigation';
import { SideNavigation } from './components/nav/sideNavigation';
import { ListContacts } from './components/contacts/listContacts';

import CreateContact from './components/contacts/createContact';
import DetailContact from './components/contacts/detailContact';

export default class App extends React.Component {
  state = {
    sidenav: [
      {id: 1, name: 'Welcome', url: '/'},
      {id: 2, name: 'List Contacts', url: '/contact/list'},
      {id: 3, name: 'Create Contact', url: '/contact/create'}
    ],
    contacts: [
      {id: 1, firstName: 'John', lastName: 'Doe', address1: 'Example street 69', address2: '1234 Specimen', phone:'+41 12 345 67 89'}
    ]
  };

  saveContact =(contact)=> {
    contact.id = this.state.contacts.length + 1;
    this.setState({ contacts: [...this.state.contacts, contact] });
  }

  render() {
    return (
    <Router>
      <TopNavigation />
      <div className='container-fluid'>
        <div className='row'>
          <SideNavigation sidenav={this.state.sidenav} />
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
            <Switch>
              <Route exact path='/'>
                <h1>Wello Horld!</h1>
              </Route>
              <Route path='/contact/list'>
                <ListContacts contacts={this.state.contacts} />
              </Route>
              <Route path='/contact/create'>
                <CreateContact onSaveContact={this.saveContact} />
              </Route>
              <Route path='/contact/:id' component={DetailContact} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
    );
  }
}