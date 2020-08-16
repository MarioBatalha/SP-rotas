import React from 'react';
import './App.scss';
import axios from 'axios';
import Home from './components/Home';
import Routers from './components/Routers';
import { BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      error: null,
			isLoad: false,
      items: [],
    };
  }

  //Function to get data
  componentDidMount(){
    const username = 'Mario Batalha';
    const email = 'mariobatalha9@gmail.com';
    const token = '3726e60f6a2be85e91838b7bad5af1e3e1e3306c3bbe35df2d47c82bd3e2d5df';

    axios.post('https://aiko-estagio-proxy.azurewebsites.net/Login/Autenticar?token='+{token});
    
    axios.get('https://aiko-estagio-proxy.azurewebsites.net/Linha/Buscar?termosBusca=Lapa&'+username+'&'+email)
    .then(res => {
      // handle success
      this.setState({
        isLoad: true,
        items : res.data
      });
      console.log(res);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  render() { 
    return ( 
      <Router>
        <div className="App">
          <nav className="menu">
            <h2 className="menu__logo">SP Rotas</h2>
            <ul className="menu__list">             
              <li className="menu__list__item"><Link to="/">Home</Link></li>
              <li className="menu__list__item"><Link to="/Routers">Rotas</Link></li>
            </ul>
          </nav> 
              <Switch>
                <Route component={Home} path='/' exact />
                <Route component={Routers} path='/Routers' />
              </Switch> 
          </div>
        </Router>
    ); 
  }
}
  
 export default App;