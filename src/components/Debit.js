import React, {Component} from 'react';
import styled from 'styled-components';

const DebitStyle = styled.div`
span{
    font-weight: 700;
}
`;


class Debit extends Component {
    
    render(){
        return(
            <DebitStyle>
                <p>{this.props.debits.description} | <span>${this.props.debits.amount}</span> | {this.props.debits.date}</p>
            </DebitStyle>
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