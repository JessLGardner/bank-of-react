import React, {Component} from 'react';



class Debit extends Component {
    
    render(){
        return(
            <div>
                <p>{this.props.debits.description}</p>
                <p>{this.props.debits.amount}</p>
                <p>{this.props.debits.date}</p>
            </div>
        );
    }
}

export default Debit;


// GIVEN I am on the Debits page
// WHEN I view the Debits display area
// THEN I should see all of my debits displayed
// AND each Debit should display a Debit description
// AND each Debit should display a Debit amount
// AND each Debit should display a Debit date