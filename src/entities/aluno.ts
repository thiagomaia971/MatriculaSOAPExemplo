export class Aluno {
  public Id: string;
  public Nome: string;
  public selected: boolean;

  public static Create(id: string, nome: string) {
    var aluno = new Aluno();
    aluno.Id = id;
    aluno.Nome = nome;
    return aluno;
  }
}
