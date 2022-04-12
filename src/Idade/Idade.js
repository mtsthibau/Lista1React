import React from 'react';
import { Campo } from '../Campo/Campo';
import { Botao } from '../Botao/Botao';

export class Idade extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dia: '',
            mes: '',
            ano: '',
            idadeDias: 0,
            idadeMeses: 0,
            idadeAnos: 0,
            dataNascimento: ''
        }
    };

    setDia(value) {
        this.setState({
            dia: value
        });
    }

    setMes(value) {
        this.setState({
            mes: value
        });
    }

    setAno(value) {
        this.setState({
            ano: value
        });
    }

    calcularResultado() {
        let { dia, mes, ano } = this.state
        let idadeDias = 0
        let idadeAnos = 0
        let idadeMeses = 0
        let diferenca = 0
        let dataNascimento = new Date(ano, mes-1, dia)
        
        diferenca = Date.now() - dataNascimento;
        idadeDias = parseInt(diferenca / (1000*60*60*24));
        idadeAnos =  new Date().getUTCFullYear() - dataNascimento.getFullYear();
        idadeMeses =  idadeDias / 30

        // for(dataNascimento.getFullYear() < new Date().getUTCFullYear()){
        //     if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0)){

        //     }else{

        //     }
        // }

        this.setState({
            dataNascimento: dataNascimento.toLocaleDateString("pt-br"),
            idadeDias: idadeDias,
            idadeMeses: idadeMeses,
            idadeAnos: idadeAnos
        })
    }

    render() {
        const { dataNascimento, dia, mes, ano, idadeDias, idadeMeses, idadeAnos } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="form">
                        <div>
                            <h2>Verificar Idade</h2>
                            <Campo name="Dia" placeholder="Digite o dia" valor={dia} onChange={(event) => this.setDia(event.target.value)} />
                            <Campo name="Mês" placeholder="Digite o mês" valor={mes} onChange={(event) => this.setMes(event.target.value)} />
                            <Campo name="Ano" placeholder="Digite o ano" valor={ano} onChange={(event) => this.setAno(event.target.value)} />
                            <Botao name="VERIFICAR" onClick={() => this.calcularResultado()} />
                        </div>
                    </div>
                    {
                        idadeDias > 0 && <div className="resultado">
                            <div>
                                <h2>RESULTADO</h2>
                                <p>Data de nascimento: {dataNascimento}</p>
                                <p>Idade em anos: {idadeAnos}</p>
                                <p>Idade em anos: {idadeAnos}</p>
                                <p>Idade em meses: {idadeMeses}</p>
                                <p>Idade em dias: {idadeDias}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
