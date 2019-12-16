import { Repository } from "./repository";
import { autoinject } from "aurelia-framework";
import { Disciplina } from "entities/disciplina";

@autoinject
export class DisciplinaRepository extends Repository<Disciplina> {
  private disciplinas: Disciplina[] = [
    Disciplina.Create("1", "Disciplina1"),
    Disciplina.Create("2", "Disciplina2")
  ];

  constructor(){
    super("8002");
  }

  public GetAll(): Disciplina[] {
    return this.disciplinas;
  }
  
  public GetSingle(id: string): Disciplina {
    throw new Error("Method not implemented.");
  }
}
