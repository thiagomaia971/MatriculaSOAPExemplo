﻿using System.Collections.Generic;
using System.Web.Services;
using MatriculaServers.Core;

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
            => Repository.Disciplinas;
    }
}
