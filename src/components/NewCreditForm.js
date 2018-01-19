import React, { Component } from 'react'

class NewCreditForm extends Component {
    state = {
        newCredit: {
            amount: 0.00,
            description: '',
            date: Date.now(),
        }
    }
    handleInputChange = (event) => {
        const attribute = event.target.name
        let value = event.target.value

        if(attribute === 'amount') {
            value = Number(value)
        }
        const newCredit = {...this.state.newCredit}
        newCredit[attribute] = value

        this.setState({newCredit})
    }
    resetForm= () => {
        const newCredit = {...this.state.newCredit}
        this.setState({newCredit})
    }

    addNewCredit = (event) => {
        event.preventDefault()
        this.props.addNewCredit(this.state.newCredit)
        this.resetForm()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addNewCredit}>
                <div>
                    <span>Amount (USD) </span>
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={this.state.newCredit.amount}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Add New Credit"/>
                    </div>

            </form>
            </div>
        )
    }

}

export default NewCreditForm




}


