import React from 'react'
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance'
import CreditList from './CreditList'
import NewCreditForm from './NewCreditForm'


const CreditPage = (props) =>{
    return(
        <div>
            <h1>Credits</h1>
            <Lint to='/'>Back to Home</Link>


            <AccountBalance accountBalance={props.accountBalance}/>

            <NewCreditForm addNewCredit={props.addNewCredit}/>
            <div>
                <CreditList credits={props.credits}/>
            </div>
        </div>

    )
}
export default CreditPage