import { AlunoRepository } from './../../../repositories/aluno.repository';
import { Aluno } from 'entities/aluno';
import { autoinject, bindable } from 'aurelia-framework';

@autoinject
export class AlunoCustomElement {
  private alunos: Aluno[];
  @bindable public alunoSelecionado: Aluno;
  constructor(private alunoRepository: AlunoRepository) {
  }

  async attached() {
    this.alunos = await this.alunoRepository.GetAll();
  }

  select(aluno: Aluno) {
    for (const alunoIteration of this.alunos) 
      alunoIteration.selected = false;

    aluno.selected = true;
    this.alunoSelecionado.Id = aluno.Id;
    this.alunoSelecionado.Nome = aluno.Nome;
  }
}
