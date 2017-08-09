import React, {Component} from 'react';
import Debit from './Debit';
import AccountBalance from './AccountBalance';


class DebitList extends Component {
    
    
    render(){
        return(
            <div>
                <h1>Debits</h1>
                    {this.props.getDebits.map((debit, i)=>{
                        return <Debit debits={debit} key={i}/>
                    })} 

                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}

export default DebitList;