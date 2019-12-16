import { AlunoDisciplina } from './../../../entities/aluno-disciplina';
import { AlunoRepository } from './../../../repositories/aluno.repository';
import { bindable, observable, autoinject } from "aurelia-framework";
import { Aluno } from "entities/aluno";
import { Disciplina } from 'entities/disciplina';
import { MatriculaRepository } from 'repositories/matricula.repository';

@autoinject
export class AlunoDisciplinaCustomElement {
  @bindable @observable public alunoIdSelecionado: string;
  private alunoSelecionado: Aluno;
  private alunoDisciplinas: Disciplina[] = [];

  constructor(private alunoRepository: AlunoRepository, private matriculaRepository: MatriculaRepository) {
  }

  attached() {
    console.log(this.alunoIdSelecionado)
    console.log(this.alunoSelecionado)
    console.log(this.alunoSelecionado == undefined)
  }

  async alunoIdSelecionadoChanged() {
    // this.alunoSelecionado = this.alunoRepository.GetSingle(this.alunoIdSelecionado);
    this.alunoDisciplinas = await this.matriculaRepository.GetAllDisciplinas(+this.alunoIdSelecionado);
    // TODO carregar as disciplinas do Aluno
  }
}
