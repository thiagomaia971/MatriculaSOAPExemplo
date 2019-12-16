using System.Collections.Generic;
using System.Linq;
using System.Web.Services;
using MatriculaServers.Core;

namespace MatriculaServers.Matriculas
{
    /// <summary>
    /// Summary description for MatriculaService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class MatriculaService : System.Web.Services.WebService
    {
        [WebMethod]
        public List<Disciplina> DisciplinasDoAluno(int alunoId)
            => Repository.Matriculas
                .Where(x => x.AlunoId == alunoId)
                .Select(x => Repository.Disciplinas.SingleOrDefault(y => x.MatriculaId == y.Id))
                .ToList();
    }
}