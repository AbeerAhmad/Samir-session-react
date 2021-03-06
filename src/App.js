
import './App.css';
import Header from './Components/header';
import Home from './Compounds/home';
import Footer from './Components/footer';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contactus from './Compounds/Contactus';
import { connect, Provider } from 'react-redux';
import store from './store/store';
import { database } from './firebase';

function App(props) {
  const [user, setuser] = useState({ name: 'abeer', id: '1' })
  const [orders, setorder] = useState(0)



  useEffect(() => {
    database.ref('/user/').once('value', (snapshot) => {
      const data = snapshot.val();
      setuser(data)
    });
  }, [])



  const run = (data) => {
    setuser({ ...user, name: data })

  }





  console.log(props)


  return (
    <Router >
      <div className="App">
        <Header run={run} />
        <p>{user.name}</p>
        <Switch>

          <Route path='/contactus' component={(props) => { return <Contactus {...props} /> }} />


          <Route path='/' component={(props) => { return <Home {...props} /> }} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
const mapStateFromProps = (store) => {
  return {
    user: store.user.user
  }
}
export default connect(mapStateFromProps)(App);
