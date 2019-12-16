namespace MatriculaServers.Core
{
    public class Disciplina : Entity
    {
        public string Nome { get; set; }

        public Disciplina()
        {
        }

        public Disciplina(int id, string nome)
        {
            Id = id;
            Nome = nome;
        }

        public static Disciplina Create(int id, string nome)
            => new Disciplina(id, nome);
    }
}
