import React, {Component} from 'react';
import Debit from './Debit';

class DebitList extends Component {
    
    
    render(){
        return(
            <div>
                <h1>Debits</h1>
                {this.props.getDebits.map((debit)=>{
                    return <Debit description={debit.description} 
                                amount={debit.amount} 
                                date={debit.date}/>
                })}
            </div>
        );
    }
}

export default DebitList;


        //   {this.props.savedGifs.map((savedGif) => {
        //     return <SavedGif key={savedGif._id} gif={savedGif} />
        //   })}
