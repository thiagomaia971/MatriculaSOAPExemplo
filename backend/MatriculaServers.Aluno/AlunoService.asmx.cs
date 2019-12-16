using System.Collections.Generic;
using System.Web.Services;
using MatriculaServers.Core;

namespace MatriculaServers.Aluno
{
    /// <summary>
    /// Summary description for AlunoService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class AlunoService : System.Web.Services.WebService
    {
        [WebMethod]
        public List<Core.Aluno> Alunos() 
            => Repository.Alunos;
    }
}
