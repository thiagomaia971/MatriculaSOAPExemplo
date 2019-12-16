import { autoinject } from "aurelia-framework";
import { Disciplina } from 'entities/disciplina';
import { DisciplinaRepository } from "repositories/disciplina.repository";

@autoinject
export class DisciplinaCustomElement {
  private disciplinas: Disciplina[];

  constructor(private disciplinaRepository: DisciplinaRepository) {
  }

  async attached() {
    this.disciplinas = await this.disciplinaRepository.GetAll();
  }
}
