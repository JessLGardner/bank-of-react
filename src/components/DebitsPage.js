import React, {Component} from 'react';
import DebitList from './DebitList';
import AccountBalance from './AccountBalance';



const DebitsPage = (props) => {
    return (
        <div>
            <h1>Debits</h1>
                <AccountBalance accountBalance={props.accountBalance}/> <br/><br/>
                <DebitList debits={props.debits}/>
        </div>
    );
};

export default DebitsPage;
