
import './App.css';
import Header from './Components/header';
import Home from './Compounds/home';
import Footer from './Components/footer';
import { useState, useEffect } from 'react';
function App() {
  const [user, setuser] = useState({ name: 'abeer', id: '1' })
  const [orders, setorder] = useState(0)



  useEffect(() => {
    console.log('refreshes')
  }, [orders,user])



  const run = (data) => {
    setuser({ ...user, name: data })

  }





console.log(orders)


  return (
    <div className="App">
      <Header run={run} />
      <button onClick={() => { setorder(orders + 1) }}>
        increment
</button>
      <Home user={user} />
      <Footer />
    </div>

  );
}

export default App;
