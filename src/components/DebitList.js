import React, { Component } from 'react'
import Debit from './Debit'



class DebitList extends Component {
    render() {
        const debitComponents = this.props.debits.map((debit, index)=>{
            return <Debit
                        description={debit.description}
                        amount={debit.amount}
                        date={debit.date}
                        key={index}/>
        })
        return (
            <div>
                {debitComponents}
            </div>
        )
    }
}

export default DebitList