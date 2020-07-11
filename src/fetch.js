import React, { Component } from 'react';
import './css/style.css';
import './css/index.css';

class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nutri: []
        };
    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        
        fetch(url)
        .then((resp) => resp.json())
        .then((json) => {
            let state = this.state;
            state.nutri = json;
            this.setState(state);
            console.log(json);  
        }).catch((err) => {
            console.log(err.message)
        })

    }
    render() { 
        return ( 
        <div className="container">
            <header>
                <strong>React Nutri</strong>
            </header>
            {this.state.nutri.map((item) => {
                return(
                    <article key={item.id} className="post">
                        <strong className="titulo"> {item.titulo}</strong>
                        <img src={item.capa} alt="Img"/>
                        <p className="subtitulo">{item.subtitulo}</p>
                        <a className="botao" href="/">Acessar</a>
                    </article>
                )
            })}

        </div> 
        );
    }
}
 
export default Fetch;