using System;

namespace MatriculaServers.Core
{
    public class Entity
    {
        public int Id { get; set; }

        public Entity()
        {
            Id = new Random().Next();
        }
    }
}