import React, {Component} from 'react';
import Debit from './Debit';
import AccountBalance from './AccountBalance';
import styled from 'styled-components';

const DebitListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DebitList = (props) => {

    const debitComponents = props.debits.map((debit, i)=>{
                        return <Debit debits={debit} key={i}/>
                    })

    return (
            <DebitListStyle>
                    {debitComponents}
            </DebitListStyle>
        );
}

export default DebitList;