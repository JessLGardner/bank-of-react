import React, {Component} from 'react';
import styled from 'styled-components';

const CreditStyle = styled.div`
span{
    font-weight: 700;
}
`;


class Credit extends Component {
    
    render(){
        return(
            <CreditStyle>
                <p>{this.props.credits.description} | <span>${this.props.credits.amount}</span> | {this.props.credits.date}</p> 
            </CreditStyle>
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