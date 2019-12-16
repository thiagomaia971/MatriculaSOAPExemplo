import { AlunoDisciplina } from './../../../entities/aluno-disciplina';
import { AlunoRepository } from './../../../repositories/aluno.repository';
import { bindable, observable, autoinject } from "aurelia-framework";
import { Aluno } from "entities/aluno";
import { Disciplina } from 'entities/disciplina';

@autoinject
export class AlunoDisciplinaCustomElement {
  @bindable @observable public alunoIdSelecionado: string;
  private alunoSelecionado: Aluno;
  private alunoDisciplinas: Disciplina[] = [];

  constructor(private alunoRepository: AlunoRepository) {
  }

  attached() {
    console.log(this.alunoIdSelecionado)
    console.log(this.alunoSelecionado)
    console.log(this.alunoSelecionado == undefined)
  }

  alunoIdSelecionadoChanged() {
    this.alunoSelecionado = this.alunoRepository.GetSingle(this.alunoIdSelecionado);
    // TODO carregar as disciplinas do Aluno
  }
}
