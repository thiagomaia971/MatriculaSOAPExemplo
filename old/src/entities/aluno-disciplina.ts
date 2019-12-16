import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";

export class AlunoDisciplina {
  public Id: string;
  public AlunoId: string;
  public DisciplinaId: string;
  public Alunos: Aluno;
  public Disciplina: Disciplina;
}
