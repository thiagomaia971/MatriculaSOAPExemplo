namespace MatriculaServers.Core
{
    public class Matricula
    {
        public int AlunoId { get; set; }
        public int MatriculaId { get; set; }

        public Matricula()
        {
        }

        public Matricula(int alunoId, int matriculaId)
        {
            AlunoId = alunoId;
            MatriculaId = matriculaId;
        }

        public static Matricula Create(int alunoId, int matriculaId)
            => new Matricula(alunoId, matriculaId);
    }
}