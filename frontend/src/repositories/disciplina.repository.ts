import { Repository } from "./repository";
import { autoinject } from "aurelia-framework";
import { Disciplina } from "entities/disciplina";
import { createClient, Client, createClientAsync } from 'soap'

@autoinject
export class DisciplinaRepository extends Repository<Disciplina> {
  private disciplinas: Disciplina[] = [
    Disciplina.Create("1", "Disciplina1"),
    Disciplina.Create("2", "Disciplina2")
  ];

  constructor() {
    super("44339", "DisciplinaService");
  }

  public async GetAll(): Promise<Disciplina[]> {
    return new Promise<Disciplina[]>(resolve => {
      createClientAsync(this.url)
        .then(client => {
          client.Disciplinas({}, (err, result) => {
            resolve(result.DisciplinasResult.Disciplina.map(x => Disciplina.Create(x.Id, x.Nome)));
          });
        });
    })
  }

  public GetSingle(id: string): Disciplina {
    throw new Error("Method not implemented.");
  }
}
