import React, { Compponent, Component } from 'react'


class NewDebitFrom extends Component {
    state = {
        newDebit:{
            amount: 0.00,
            description: '',
            date: Date.now(),
        }
        
    }

    handleInputeChange =(event) =>{
        const attribute = event.target.name
        let value = event.target.value

        if(attribute === 'amount') {
            value = Number(value)
        }
    
    const newDebit = {...this.state.newDebit}
    newDebit[attribute] = value

    this.setState({newDebit})
    }

    resetForm = () => {
        const newDebit = {...this.defaultState.newDebit}
        this.setState({newDebit})
    }

    addNewDebit = (event) => {
        event.preventDefault()
        this.props.addNewDebit(this.state.newDebit)
        this.resetForm()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addNewDebit}>
                <div>
                    <span>Amount (USD) </span>
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={this.state.newDebit.amount}
                        onChange={this.handleInputeChange}/>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Add New Debit"/>
                    </div>

            </form>
            </div>
        )
    }

}

export default NewDebitFrom