import React from 'react'

export default function MoreDetail(props) {
    return (
        <div>
            Extra detailing
            <button onClick={() => props.history.goBack()}>Go back </button>
        </div>
    )
}
