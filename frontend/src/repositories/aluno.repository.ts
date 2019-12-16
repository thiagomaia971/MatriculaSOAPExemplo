import { createClient, Client, createClientAsync } from 'soap'
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
    super("44338", "AlunoService");
  }

  public async GetAll(): Promise<Aluno[]> {
    return new Promise<Aluno[]>(resolve => {
      createClientAsync(this.url)
        .then(client => {
          client.Alunos({}, (err, result) => {
            resolve(result.AlunosResult.Aluno.map(x => Aluno.Create(x.Id, x.Nome)));
          });
        });
    })
  }

  public GetSingle(id: string): Aluno {
    return this.alunos.find(x => x.Id == id);
  }
}
