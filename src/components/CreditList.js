import React, { Component } from 'react'
import Credit from './Credit'


class CreditList extends Component {
    render() {
        const creditComponents = this.props.credits.map((credit, index)=>{
            return <Credit
                        description={credit.description}
                        amount={credit.amount}
                        date={credit.date}
                        key={index}/>
        })
        return(
            <div>
                {creditComponents}
            </div>
        )
    }
}

export default CreditList