import React from 'react';
import { Campo } from '../Campo/Campo';
import { Botao } from '../Botao/Botao';

export class Contador extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            palavra: '',
            quantidadePalavras: 0
        }
    };

    setPalavra(value) {
        this.setState({
            palavra: value
        });
    }

    calcularResultado() {
        let { palavra } = this.state
        let vetorPalavras = palavra.split(" ");

        vetorPalavras.forEach(palavra => {
            if(palavra === "")
                vetorPalavras.pop() ;
        });
       
        this.setState({
            quantidadePalavras: vetorPalavras.length,
        })
    }

    render() {
        const { quantidadePalavras, palavra} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="form">
                        <div>
                            <h2>Verificar Quantidade Palvras</h2>
                            <Campo name="Palavra" placeholder="Digite uma palavra" valor={palavra} onChange={(event) => this.setPalavra(event.target.value)} />
                            <Botao name="VERIFICAR" onClick={() => this.calcularResultado()} />
                        </div>
                    </div>
                    {
                        quantidadePalavras > 0 && <div className="resultado">
                            <div>
                                <h2>RESULTADO</h2>
                                <p>Palavra escolhida: {palavra}</p>
                                <p>Quantidade de Palavras: {quantidadePalavras}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
