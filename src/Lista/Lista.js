import React from 'react';
import { Botao } from '../Botao/Botao';

import { Triangulo } from '../Triangulo/Triangulo';
import { Notas } from '../Notas/Notas';
import { Calculo } from '../Calculo/Calculo';
import { Contador } from '../Contador/Contador';
import { Idade } from '../Idade/Idade';

import './Lista.css';

export class Lista extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inicio: true,
            triangulo: '',
            notas: '',
            calculo: '',
            contador: '',
            idade: ''
        }
    }

    trianguloClick = () => {
        this.setState({
            inicio: false,
            triangulo: true,
            notas: false,
            calculo: false,
            contador: false,
            idade: false
        });
    }

    notasClick() {
        this.setState({
            inicio: false,
            triangulo: false,
            notas: true,
            calculo: false,
            contador: false,
            idade: false
        });
    }

    calculoClick() {
        this.setState({
            inicio: false,
            triangulo: false,
            notas: false,
            calculo: true,
            contador: false,
            idade: false
        });
    }

    contadorClick() {
        this.setState({
            inicio: false,
            triangulo: false,
            notas: false,
            calculo: false,
            contador: true,
            idade: false
        });
    }

    idadeClick() {
        this.setState({
            inicio: false,
            triangulo: false,
            notas: false,
            calculo: false,
            contador: false,
            idade: true
        });
    }

    render() {
        const { inicio, triangulo, notas, calculo, contador, idade } = this.state;
        return (
            <div>
                <div className="lista">
                    <h1>Lista de Exercícios 1 React</h1>
                    <h4>Matheus Thibau Paulino</h4>
                    <div className="menu">
                        <div>
                            <Botao name="Triângulo" onClick={() => this.trianguloClick()} />
                        </div>
                        <div>
                            <Botao name="Notas" onClick={() => this.notasClick()} />
                        </div>
                        <div>
                            <Botao name="Cálculo" onClick={() => this.calculoClick()} />
                        </div>
                        <div>
                            <Botao name="Contador" onClick={() => this.contadorClick()} />
                        </div>
                        <div>
                            <Botao name="Idade" onClick={() => this.idadeClick()} />
                        </div>
                    </div>

                    <div className="body">
                        {inicio === true && <h2>Escolha seu exercício preferido!!!</h2>}
                        {triangulo === true && <Triangulo />}
                        {notas === true && <Notas />}
                        {calculo === true && <Calculo />}
                        {contador === true && <Contador />}
                        {idade === true && <Idade />}
                    </div>
                </div>
            </div>
        );
    }
}
