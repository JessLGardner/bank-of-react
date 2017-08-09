import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import DebitList from './components/DebitList';
import CreditList from './components/CreditList';


class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: {
        userName: 'jdoe',
        memberSince: 1905
      },
      debits: [],
      credits: []
    }
  }

  _getDebits = () => {
    axios.get('http://localhost:4000/debits')
      .then((response) => {
        const debits = response.data;
        this.setState({ debits });
      });
  };

  _getCredits = () => {
    axios.get('http://localhost:4000/credits')
      .then((response) => {
        const credits = response.data;
        this.setState({ credits });
      });
  };

  _calculateAccountBalance = () => {
    const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
      return totalCredits + credit.amount;
    }, 0)

    const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
      return totalDebits + debit.amount;
    }, 0)

    return totalCredits - totalDebits;
  }

  componentWillMount() {
    this._getDebits();
    this._getCredits();
  }

  render() {

    const accountBalance = this._calculateAccountBalance();

    const HomeComponent = () => (<Home accountBalance={accountBalance} />);
    const UserProfileComponent = () => (
              <UserProfile
                userName={this.state.currentUser.userName}
                memberSince={this.state.currentUser.memberSince} />);
    const DebitListComponent = () => (
              <DebitList 
                getDebits={this._getDebits} 
                accountBalance={accountBalance}/>);
    const CreditListComponent = () => (
              <CreditList
                getCredits={this._getCredits()} 
                accountBalance={accountBalance}/>);



    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/debits" render={DebitListComponent}/>
          <Route exact path="/credits" render={CreditListComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;






// Displaying debits:

// GIVEN I am on the Debits page
// WHEN I view the Debits display area
// THEN I should see all of my debits displayed
// AND each Debit should display a Debit description
// AND each Debit should display a Debit amount
// AND each Debit should display a Debit date


// Adding debits:

// GIVEN I am on the Debits page
// WHEN I enter a new Debit description
// AND WHEN I enter a new Debit amount
// AND WHEN I click 'Add Debit'
// THEN I should see my new debit added to the Debits display area with the current date
// AND I should see my Account Balance updated to reflect the new Debit


// Displaying credits:

// GIVEN I am on the Credits page
// WHEN I view the Credits display area
// THEN I should see all of my Credits displayed
// AND each Debit should display a Debit description
// AND each Debit should display a Debit amount
// AND each Debit should display a Debit date


// Adding Credits:

// GIVEN I am on the Credits page
// WHEN I enter a new Debit description
// AND WHEN I enter a new Debit amount
// AND WHEN I click 'Add Debit'
// THEN I should see my new debit added to the Credits display area with the current date
// AND I should see my Account Balance updated to reflect the new Debit
// Viewing the Account Balance on the Credits page:


