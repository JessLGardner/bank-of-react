import React, {Component} from 'react';



class Credit extends Component {
    
    render(){
        return(
            <div>
                 <p>{this.props.pizza.description}</p>
                <p>{this.props.pizza.amount}</p>
                <p>{this.props.pizza.date}</p> 
            </div>
        );
    }
}

export default Credit;