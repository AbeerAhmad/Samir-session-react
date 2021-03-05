import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MoreDetail from './MoreDetail'

export default function Contactus(props) {
    console.log(props)
    const { url, params } = props.match
    return (
        <div>
            in contact us page i got the param from route which is {params.id}
            <button onClick={() => props.history.goBack()}>Go back </button>
            <button onClick={() => props.history.push('/contactus/moredetails')}>go to detail page </button>
            <Switch>
                <Route path={url + '/moredetails'} component={(props)=>{return <MoreDetail {...props} />}} />
            </Switch>

        </div>
    )
}
