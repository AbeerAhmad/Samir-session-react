import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    console.log(props)
    const name = 'abeer'
    return (
        <div style={{ border: 'solid black 2px ' }}>
            Enter User Name:
            <input onChange={(e) => {
                props.run(e.target.value)

            }} />
            <button onClick={() => { props.run() }}>asdasdasd</button>

            <Link to='/'>Home</Link>
            <Link to={'/contactus/' + name}>Contact us</Link>

        </div>
    )
}
