import React from 'react';
import { Campo } from '../Campo/Campo';
import { Botao } from '../Botao/Botao';

export class Calculo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numero: 0,
            numeros: [],
            soma: 0,
            produto: 0,
            media: 0,
            numerosHtml: '',
        }
    };

    setNumero(value) {
        this.setState({
            numero: value
        });
    }

    setNumeros() {
        let { numeros, numero } = this.state
        numeros.push(numero)
        this.setState({
            numeros: numeros
        });
    }

    calcularResultado() {
        let { numeros } = this.state
        let soma = 0
        let produto = 0
        let media = 0
        let numerosHtml = ''
        numeros.forEach(numero => {
            soma += parseFloat(numero)
            produto *= parseFloat(numero)
            numerosHtml += '<p>' + numero + '</p>'
        });

        media = soma / numeros.length

        this.setState({
            media: parseFloat(media).toFixed(2),
            soma: soma,
            produto: parseFloat(produto).toFixed(2),
            numerosHtml: numerosHtml
        })
    }

    render() {
        const { numero } = this.props;
        const { numerosHtml, soma, media, produto } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="form">
                        <div>
                            <h2>Verificar Cálculo</h2>
                            <Campo name="Número" placeholder="Digite um valor" valor={numero} onChange={(event) => this.setNumero(event.target.value)} />
                            <Botao name="Adicionar +" onClick={() => this.setNumeros()} />
                            <Botao name="VERIFICAR" onClick={() => this.calcularResultado()} />
                        </div>
                    </div>
                    {
                        soma > 0 && <div className="resultado">
                            <div>
                                <h2>RESULTADO</h2>
                                <p>Soma: {soma}</p>
                                <p>Média: {media}</p>
                                <p>Produto: {produto}</p>
                                <hr />
                                <h2>Números</h2>
                                <span dangerouslySetInnerHTML={{ __html: numerosHtml }}></span>
                            </div>
                        </div>
                    }
                </div>


            </div>
        );
    }
}
