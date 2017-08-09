import React, {Component} from 'react';
import Credit from './Credit';

class CreditList extends Component {
    
    
    render(){
        return(
            <div>
                <h1>Credits</h1>
                {this.props.getCredits.map((za, i)=>{
                    return <Credit pizza={za} key={i}/>
                })}
            </div>
        );
    }
}

export default CreditList;


        //   {this.props.savedGifs.map((savedGif) => {
        //     return <SavedGif key={savedGif._id} gif={savedGif} />
        //   })}

                // {specs.map((spec, i)=>{
                // return <Specialization key={i} apple={spec}/>

        //   <div className="menu-container">
        //             {pizzaData.map((za, i)=>{
        //                 return <MenuItem key={i} pizza={za}/>

        //                 >{this.props.pizza.price}</p>
        //             <p>{this.props.pizza.description}</p>
