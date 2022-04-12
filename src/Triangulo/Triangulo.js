import React from 'react';
import { Campo } from '../Campo/Campo';
import { Botao } from '../Botao/Botao';

export class Triangulo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ladoUm: '',
            ladoDois: '',
            ladoTres: '',
            resultado: ''
        }
    };

    changeLadoUm(value) {
        this.setState({
            ladoUm: parseInt(value)
        });
    }

    changeLadoDois(value) {
        this.setState({
            ladoDois: parseInt(value)
        });
    }

    changeLadoTres(value) {
        this.setState({
            ladoTres: parseInt(value)
        });
    }

    calcularResultado() {
        let verificacao = null
        let { ladoUm, ladoDois, ladoTres } = this.state

        if (ladoUm < (ladoDois + ladoTres) && (ladoDois < (ladoUm + ladoTres)) && (ladoTres < (ladoDois + ladoTres))) {
            if (ladoUm === ladoDois && ladoDois === ladoTres) {
                verificacao = "Triângulo Equilatero"
            }
            else if (ladoUm !== ladoDois && ladoDois !== ladoTres && ladoUm !== ladoTres) {
                verificacao = "Triângulo Escaleno"
            }
            else {
                verificacao = "Triângulo Isóceles"
            }
        } else {
            verificacao = "Triangulo Inválido"
        }

        this.setState({
            resultado: verificacao
        })
    }

    render() {
        const { ladoUm, ladoDois, ladoTres } = this.props;
        const { resultado } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="form">
                        <div>
                            <h2>Verificar triângulo</h2>
                            <Campo name="Lado 1" placeholder="Digite um valor" valor={ladoUm} onChange={(event) => this.changeLadoUm(event.target.value)} />
                            <Campo name="Lado 2" placeholder="Digite um valor" valor={ladoDois} onChange={(event) => this.changeLadoDois(event.target.value)} />
                            <Campo name="Lado 3" placeholder="Digite um valor" valor={ladoTres} onChange={(event) => this.changeLadoTres(event.target.value)} />
                            <Botao name="VERIFICAR" onClick={() => this.calcularResultado()} />
                        </div>
                    </div>
                    {
                        resultado && <div className="resultado">
                            <div>
                                <h2>RESULTADO</h2>
                                <p>{resultado}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
