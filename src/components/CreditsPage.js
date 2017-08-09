import React, {Component} from 'react';
import CreditList from './CreditList';
import AccountBalance from './AccountBalance';


const CreditsPage = (props) => {
    return (
        <div>
            <h1>Credits</h1>
                <AccountBalance accountBalance={props.accountBalance}/> <br/><br/>
                <CreditList credits={props.credits}/>
        </div>
    );
};

export default CreditsPage;