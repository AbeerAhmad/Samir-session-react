
import './App.css';
import Header from './Components/header';
import Home from './Compounds/home';
import Footer from './Components/footer';
import { useState, useEffect } from 'react';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contactus from './Compounds/Contactus';

function App() {
  const [user, setuser] = useState({ name: 'abeer', id: '1' })
  const [orders, setorder] = useState(0)



  useEffect(() => {
    console.log('refreshes')
  }, [orders, user])



  const run = (data) => {
    setuser({ ...user, name: data })

  }





  console.log(orders)


  return (
    <Router >
      <div className="App">
        <Header run={run} />
        <Switch>

          <Route path='/contactus/:id' component={Contactus} />


          <Route path='/' component={(props) => { return <Home {...props} user={user} /> }} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
