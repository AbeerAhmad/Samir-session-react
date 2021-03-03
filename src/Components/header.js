import React from 'react'

export default function Header(props) {


    return (
        <div style={{ border: 'solid black 2px ' }}>
Enter User Name:
            <input onChange={(e) => {
                props.run(e.target.value)

            }} />
            <button onClick={() => { props.run() }}>asdasdasd</button>
        </div>
    )
}
