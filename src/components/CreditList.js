import React, {Component} from 'react';
import Credit from './Credit';
import AccountBalance from './AccountBalance';
import styled from 'styled-components';

const CreditListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const CreditList = (props) => {

    const creditComponents = props.credits.map((credit, i)=>{
                        return <Credit credits={credit} key={i}/>
                    })

     return(
            <CreditListStyle>
                    {creditComponents}
            </CreditListStyle>
        );

}

export default CreditList;