import React, {Component} from 'react';



class Credit extends Component {
    
    render(){
        return(
            <div>
                <p>{this.props.credits.description}</p>
                <p>{this.props.credits.amount}</p>
                <p>{this.props.credits.date}</p> 
                <br/>
            </div>
        );
    }
}

export default Credit;



// GIVEN I am on the Debits page
// WHEN I view the Debits display area
// THEN I should see all of my debits displayed
// AND each Debit should display a Debit description
// AND each Debit should display a Debit amount
// AND each Debit should display a Debit date