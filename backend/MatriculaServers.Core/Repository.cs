using System.Collections.Generic;

namespace MatriculaServers.Core
{
    public class Repository
    {
        public static readonly List<Aluno> Alunos = new List<Aluno>
        {
            Aluno.Create(1, "Aluno 1"),
            Aluno.Create(2, "Aluno 2"),
        };

        public static readonly List<Disciplina> Disciplinas = new List<Disciplina>
        {
            Disciplina.Create(1, "Disciplina 1"),
            Disciplina.Create(2, "Disciplina 2"),
        };

        public static readonly List<Matricula> Matriculas = new List<Matricula>
        {
            Matricula.Create(1, 1),
            Matricula.Create(1, 2),
        };
    }
}
