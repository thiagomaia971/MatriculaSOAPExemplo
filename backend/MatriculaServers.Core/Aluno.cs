namespace MatriculaServers.Core
{
    public class Aluno : Entity
    {
        public string Nome { get; set; }

        public Aluno()
        {
        }

        public Aluno(int id, string nome)
        {
            Id = id;
            Nome = nome;
        }

        public static Aluno Create(int id, string nome) 
            => new Aluno(id, nome);
    }
}
