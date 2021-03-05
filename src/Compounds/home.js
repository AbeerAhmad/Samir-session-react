import React from 'react'
import { connect } from 'react-redux'

function Home(props) {

    console.log(props.user)
    return (
        <div className={'header'} style={{ padding: '10px', minHeight: '80vh' }}>
            Your user name is  {props.user.name}
            <button onClick={() => props.history.push('/contactus/ali')}>go to Contact us </button>
        </div>
    )
}
const mapStateFromProps = (store) => {
    return {
        user: store.user.user
    }
}
const mapDispatchtoProps = () => {

}
export default connect(mapStateFromProps )(Home)