import React from 'react'
import {Link} from 'react-router-dom'
import DebitList from './DebitList'
import AccountBalance from './AccountBalance'
import NewDebitForm from './NewDebitForm'



const DebitPage = (props) => {
    return (
        <div>
            <h1>Debits</h1>
            <Link to='/'>Back to Home</Link>
            

            <AccountBalance accountBalance={props.accuntBalance}/>


            <NewDebitForm addNewDebit={props.addNewDebit}/>

            <div>
            <DebitList debits={props.debits}/>
            </div>
        </div>
    )
}

export default DebitPage