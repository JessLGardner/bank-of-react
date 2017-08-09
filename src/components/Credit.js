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