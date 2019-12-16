import { Repository } from "./repository";
import { autoinject } from "aurelia-framework";
import { Disciplina } from "entities/disciplina";
import { createClient, Client, createClientAsync } from 'soap'

@autoinject
export class MatriculaRepository extends Repository<Disciplina> {
  constructor() {
    super("44323", "MatriculaService");
  }

  public async GetAll(): Promise<Disciplina[]> {
    return new Promise<Disciplina[]>(resolve => {
      createClientAsync(this.url)
        .then(client => {
          client.DisciplinasDoAluno({}, (err, result) => {
            resolve(result.DisciplinasResult.Disciplina.map(x => Disciplina.Create(x.Id, x.Nome)));
          });
        });
    })
  }

  public GetSingle(id: string): Disciplina {
    throw new Error("Method not implemented.");
  }

  public GetAllDisciplinas(alunoId: number): Promise<Disciplina[]> {
    return new Promise<Disciplina[]>(resolve => {
      createClientAsync(this.url)
        .then(client => {
          client.DisciplinasDoAluno({ alunoId: alunoId }, (err, result) => {
            console.log(result);
            if (result.DisciplinasDoAlunoResult)
              resolve(result.DisciplinasDoAlunoResult.Disciplina.map(x => Disciplina.Create(x.Id, x.Nome)));
            else
              resolve([]);
          });
        });
    })
  }
}
