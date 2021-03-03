import React from 'react'

export default function Home(props) {

    console.log(props)
    return (
        <div className={'header'} style={{ padding: '10px', minHeight: '80vh' }}>
            Your user name is  {props.user.name}
            <button onClick={() => props.history.push('/contactus/ali')}>go to Contact us </button>
        </div>
    )
}
