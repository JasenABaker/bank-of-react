import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './components/Login'
import DebitPage from './components/DebitsPage'

import axios from 'axios'

class App extends Component {
  state = {
    currentUser: {
      userName: 'bob_loblaw',
      memberSince: '08/23/99',
      debits: [],
      credits: [],
    }
  }
  getDebits = () => {
    axios.get('http://localhost:4000/debits')
      .then(response => {
        const debits = response.data

        this.setState({ debits })
      })
  }

  getCredits = () => {
    axios.get('http://localhost:4000/credits')
      .then(response => {

        const credits = response.data

        this.setState({ credits })
      })
  }

  addNewDebit = (newDebit) => {
    const debits = [...this.state.debits]
    debits.push(newDebit)

    this.setState({ debits })
  }

  addNewCredit = (newCredit) => {
    const credits = [...this.state.credits]
    credits.push(newCredit)
    this.setState({ credits })
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    this.setState({ currentUser: newUser })
  }

  calculateAccount = () => {
   
    const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
      return totalCredits + credit.amount
    }, 0)

    const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
      return totalDebits + debit.amount
    }, 0)

    return totalCredits - totalDebits
  }
  componentWillMount() {
    this.getDebits()
    this.getCredits()
  }

  render() {
    const accountBalance = this.calculateAccount()
    // console.log(Date.now())

    const HomeComponent = () => (
      <Home
        accountBalance={accountBalance} />
    )

    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince} />
    )

    const LogInComponent = () => (
      <LogIn
        user={this.state.currentUser}
        mockLogIn={this.mockLogIn}
        {...this.props} />
    )

    const DebitPageComponent = () => {
     
      <DebitPage
        debits={this.state.debits}
        addNewDebit={this.addNewDebit}
        accountBalance={accountBalance} {...this.props} />
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/debits" render={DebitPageComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
