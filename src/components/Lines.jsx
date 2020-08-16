import React from 'react';
import '../App.scss';
import axios from 'axios'

class Lines extends React.Component {
    constructor(){
        super()
        this.state = {
          items: [],
        }
      }
     //Function to get data
  componentDidMount(){
    const username = 'Mario Batalha';
    const email = 'mariobatalha9@gmail.com';
    const token = '3726e60f6a2be85e91838b7bad5af1e3e1e3306c3bbe35df2d47c82bd3e2d5df';

    //authentication method  
    axios.post('https://aiko-estagio-proxy.azurewebsites.net/Login/Autenticar?token='+{token});
    
    axios.get('https://aiko-estagio-proxy.azurewebsites.net/Linha/Buscar?termosBusca=Lapa&'+username+'&'+email)
    .then(res => {
      // handle success
      this.setState({
        isLoad: true,
        items : res.data,
        dataFilter: []
      });
    })
  }  
    render() { 
        return ( 
          <div>
            {[].map((item, index) => (
            <section className="cards">
            <article>
                <label data-testid="value-field">
                <i className="fa fa-road" id="cards__icon" />
                <h6 key={index}> Linha princípal: {item.tp}</h6>
                </label>
                
                <label>
                <i className="fa fa-map-signs" id="cards__icon"/>
                <h6 key={index}> Linha secundária: {item.ts}</h6>
                </label>

                <label>
                <i className="fa fa-street-view" id="cards__icon" />
                <h6 key={index}> Indeficador da linha: {item.cl}</h6>
                </label>

                <label>
                <i className="fa fa-map-marker" id="cards__icon" />
                <h6 key={index}> Letreiro do número da linha: {item.cl}</h6>
                </label>
            </article>
            </section>))}
          </div>
        )
    }
}

 
export default Lines;