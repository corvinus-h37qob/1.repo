using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hajosteszt.Controllers
{
   // [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        [HttpGet]
        [Route("question/count")]
        public int M1()
        {
            HajostesztContext context = new HajostesztContext();
            int kérdésekSzáma = context.Questions.Count();
            return kérdésekSzáma;
        }
        [HttpGet]
        [Route("question/sorszam")]

        public ActionResult M2(int sorszam)
        {
            HajostesztContext context = new HajostesztContext();
            var krdés = (from x in context.Questions
                         where x.QuestionId == sorszám
                         select x).FirstOrDefault();
            if (kérdés == null) return BadRequest("Nincs ilyen kérdées");
            return new JsonResult(kérdés);
        }
    }
}
