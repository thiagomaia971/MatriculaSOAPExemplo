import { autoinject } from "aurelia-framework";
import { Disciplina } from 'entities/disciplina';
import { DisciplinaRepository } from "repositories/disciplina.repository";

@autoinject
export class DisciplinaCustomElement {
  private disciplinas: Disciplina[];

  constructor(private disciplinaRepository: DisciplinaRepository) {
  }

  attached() {
    this.disciplinas = this.disciplinaRepository.GetAll();
  }
}
