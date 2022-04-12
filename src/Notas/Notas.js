import React from 'react';
import { Campo } from '../Campo/Campo';
import { Botao } from '../Botao/Botao';

export class Notas extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            nota: 0,
            notaDois: 0,
            alunos: [],
            totalAlunos: 0,
            totalAprovados: 0,
            totalExame: 0,
            totalReprovados: 0,
            mediaNotas: 0,
            alunosHtml: ''
        }
    };

    setNome(value) {
        this.setState({
            nome: value
        });
    }

    setNota(value) {
        this.setState({
            nota: value
        });
    }

    setNotaDois(value) {
        this.setState({
            notaDois: value
        });
    }

    setAlunos() {
        let { alunos, nome, nota, notaDois } = this.state

        let media = this.verifyAlunoMedia()
        let mensagem = this.verifyAlunoMensagem(media)

        let aluno = {
            nome: nome,
            nota: nota,
            notaDois: notaDois,
            media: media,
            mensagem: mensagem
        }

        alunos.push(aluno)

        this.setState({
            alunos: alunos
        });
    }

    verifyAlunoMedia() {
        let { nota, notaDois } = this.state
        let retorno = null
        nota = parseFloat(nota)
        notaDois = parseFloat(notaDois)
        retorno = ((nota + notaDois) / 2)
        return parseFloat(retorno).toFixed(2)
    }

    verifyAlunoMensagem(media) {
        if (media < 3)
            return "Reprovado"
        else if (media >= 3 && media <= 7)
            return "Exame"
        else
            return "Aprovado"
    }

    calcularResultado() {
        let totalAprovados = 0
        let totalReprovados = 0
        let totalExame = 0
        let mediaNotas = 0
        let { alunos } = this.state
        let alunosHtml = ''

        alunos.forEach(aluno => {
            mediaNotas += parseFloat(aluno.media)
            alunosHtml += '<p> Nome: ' + aluno.nome + '</p>'
            alunosHtml += '<p> Nota Um: ' + aluno.nota + '</p>'
            alunosHtml += '<p> Nota Dois: ' + aluno.notaDois + '</p>'
            alunosHtml += '<p> Média: ' + aluno.media + '</p>'
            alunosHtml += '<p> Mensagem: ' + aluno.mensagem + '</p>'
            alunosHtml += '<hr />'

            if (aluno.mensagem === "Aprovado")
                totalAprovados += 1
            else if (aluno.mensagem === "Exame")
                totalExame += 1
            else
                totalReprovados += 1
        });

        mediaNotas = mediaNotas / alunos.length

        this.setState({
            totalAlunos: alunos.length,
            mediaNotas: parseFloat(mediaNotas).toFixed(2),
            totalAprovados: totalAprovados,
            totalExame: totalExame,
            totalReprovados: totalReprovados,
            alunosHtml: alunosHtml
        })
    }

    render() {
        const { nome, nota, notaDois } = this.props;
        const { alunosHtml, totalAlunos, mediaNotas, totalAprovados, totalExame, totalReprovados } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="form">
                        <div>
                            <h2>Verificar Notas</h2>
                            <Campo name="Nome" placeholder="Digite o nome" valor={nome} onChange={(event) => this.setNome(event.target.value)} />
                            <Campo name="Nota Um" placeholder="Digite a nota 1" valor={nota} onChange={(event) => this.setNota(event.target.value)} />
                            <Campo name="Nota Dois" placeholder="Digite a nota 2" valor={notaDois} onChange={(event) => this.setNotaDois(event.target.value)} />
                            <Botao name="Adicionar +" onClick={() => this.setAlunos()} />
                            <Botao name="VERIFICAR" onClick={() => this.calcularResultado()} />
                        </div>
                    </div>
                    {
                        totalAlunos > 0 && <div className="resultado">
                            <div>
                                <h2>RESULTADO</h2>
                                <p>Total de alunos: {totalAlunos}</p>
                                <p>Média da turma: {mediaNotas}</p>
                                <p>Total aprovados: {totalAprovados}</p>
                                <p>Total exame: {totalExame}</p>
                                <p>Total Reprovados: {totalReprovados}</p>
                                <hr />
                                <h2>Alunos</h2>
                                <span dangerouslySetInnerHTML={{__html: alunosHtml}}></span> 
                            </div>
                        </div>
                    }
                </div>


            </div>
        );
    }
}
