using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hajosteszt.Controllers
{
    [Route("api/jokes")]
    [ApiController]
    public class JokeController : ControllerBase
    public class JokesController : Controller
    {
        // GET: JokesController
        public ActionResult Index()
        {
            return View();
        }

        // GET: JokesController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET api/jokes/5
        [HttpGet("{id}")]
        public Joke Get(int id)
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            var keresettVicc = (from x in context.Jokes
                                where x.JokeSk == id
                                select x).FirstOrDefault();
            return keresettVicc;
        }
        // POST: JokesController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: JokesController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: JokesController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: JokesController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }
        // POST api/jokes
        [HttpPost]
        public void Post([FromBody] Joke újVicc)
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            context.Jokes.Add(újVicc);
            context.SaveChanges();
        }

        // POST: JokesController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
            fetch("api/jokes",
    {
            method: 'POST',
        headers:
                {
                    'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(x => {
                if (x.ok)
                {
                    alert("Siker");

                }
                else
                {
                    alert("Kudarc");
                }
            });
        }
    }
}
