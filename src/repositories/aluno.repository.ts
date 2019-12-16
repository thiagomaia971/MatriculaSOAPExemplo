import { Repository } from "./repository";
import { Aluno } from "entities/aluno";
import { autoinject } from "aurelia-framework";

@autoinject
export class AlunoRepository extends Repository<Aluno> {
  private alunos: Aluno[] = [
    Aluno.Create("1", "Aluno1"),
    Aluno.Create("2", "Aluno2")
  ];

  public GetAll(): Aluno[] {
    return this.alunos;
  }

  public GetSingle(id: string): Aluno {
    return this.alunos.find(x => x.Id == id);
  }
}
