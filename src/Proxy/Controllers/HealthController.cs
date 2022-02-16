using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Proxy.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "proxy is up";
        }
    }
}
