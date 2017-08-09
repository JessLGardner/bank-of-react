import React, {Component} from 'react';
import Credit from './Credit';
import AccountBalance from './AccountBalance';


class CreditList extends Component {
    
    
    render(){
        return(
            <div>
                <h1>Credits</h1>
                    {this.props.credits.map((credit, i)=>{
                        return <Credit credits={credit} key={i}/>
                    })} 

                <AccountBalance accountBalance={this.props.accountBalance}/>

            </div>
        );
    }
}

export default CreditList;