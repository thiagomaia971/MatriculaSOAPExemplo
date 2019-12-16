using System.Collections.Generic;
using System.Web.Services;

namespace MatriculaServers.Disciplina
{
    /// <summary>
    /// Summary description for MatriculaService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class DisciplinaService : System.Web.Services.WebService
    {

        [WebMethod]
        public List<Core.Disciplina> Disciplinas()
        {
            return new List<Core.Disciplina>
            {
                new Core.Disciplina{Nome = "Disciplina 1"},
                new Core.Disciplina{Nome = "Disciplina 2"},
            };
        }
    }
}
