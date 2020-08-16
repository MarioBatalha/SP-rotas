import React from 'react';
import '../App.scss';

function Home(){
    return(
        <main>
            <div className="main">  
                <h1 className="main__title">Chega de se perder por não saber o itenerário!</h1>
                <h1 className="main__subtitle">Conheça as possíveis rotas para chegar ao seu destino com maior segurança</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia nam eos ullam nisi commodi <br/>
                laudantium nostrum eaque consequatur minima atque? Blanditiis explicabo, laudantium<br/>
                tempora nulla voluptates asperiores similique culpa.</p>
                <a href="http://www.sptrans.com.br/" target ="blank" className="main__anchor">Conheça o SP Trans</a>
            </div>
        </main>
    )
}

export default Home;