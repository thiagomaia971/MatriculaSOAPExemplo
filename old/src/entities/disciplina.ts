export class Disciplina {
  public Id: string;
  public Nome: string;

  public static Create(id: string, nome: string): Disciplina {
    var disciplina = new Disciplina();
    disciplina.Id = id;
    disciplina.Nome = nome;
    return disciplina;
  }
}
