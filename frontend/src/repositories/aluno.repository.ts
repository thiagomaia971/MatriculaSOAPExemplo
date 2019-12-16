import { createClient, Client } from 'soap'
import { Repository } from "./repository";
import { Aluno } from "entities/aluno";
import { autoinject } from "aurelia-framework";

@autoinject
export class AlunoRepository extends Repository<Aluno> {
  private alunos: Aluno[] = [
    Aluno.Create("1", "Aluno1"),
    Aluno.Create("2", "Aluno2")
  ];

  constructor() {
    super("8001");
  }

  public GetAll(): Aluno[] {
    createClient(this.url, function (error, client) {
      console.log(error, client);
      var args = {name: 'value'};
      client.MyFunction(args, function (err, result) {
        console.log(result);
      });
    });
    return this.alunos;
  }

  public GetSingle(id: string): Aluno {
    return this.alunos.find(x => x.Id == id);
  }
}
