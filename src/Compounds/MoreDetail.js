import React from 'react'
import { connect } from 'react-redux'

function MoreDetail(props) {


    console.log(props)
    return (
        <div>
            Extra detailing
            <button onClick={() => { props.dispatch({ type: 'increament', payload: props.count + 1 }) }}>update count in redux</button>
            <button onClick={() => { props.dispatch({ type: 'decrement', payload: props.count - 1 }) }}>decrement count in redux</button>
            {props.count}
            <button onClick={() => props.history.goBack()}>Go back </button>
        </div>
    )
}

const mapStateFromProps = (store) => {
    return {
        redcueruser: store.user.user,
        count: store.count.count
    }
}

export default connect(mapStateFromProps)(MoreDetail)