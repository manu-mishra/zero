using Microsoft.AspNetCore.Mvc;

namespace Proxy.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HealthController : ControllerBase
    {
        private readonly IConfiguration configuration;

        public HealthController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        [HttpGet]
        public string Get()
        {
            var config = configuration["ReverseProxy:Routes:route1:ClusterId"];
            return $"proxy {config}";
        }

        [HttpGet]
        [Route("{configid}")]
        public string Get(string configid)
        {
            var config = configuration[configid];
            return $"value is {config}";
        }
    }
}
