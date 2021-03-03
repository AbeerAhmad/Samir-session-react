import React from 'react'

export default function Home(props) {


    return (
        <div className={'header'} style={{ padding: '10px', minHeight: '80vh' }}>
           Your user name is  {props.user.name}
        </div>
    )
}
