using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Progress.Hubs;
using Progress.Models;
using Progress.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Progress.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProcessController : ControllerBase
    {
        private IProcessService _processService;
        IHubContext<ProgressHub> _hub;

        public ProcessController(IProcessService processService, IHubContext<ProgressHub> hub)
        {
            _processService = processService;
            _hub = hub;
        }

        [HttpGet]
        public string Get()
        {
            return "ping";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] ProcessConfig config)
        {
            this._processService.StartProcess(config,
                async (progress) =>
                {
                    await _hub.Clients.All.SendAsync(ProgressHubActions.PROGRESS_PING, progress);
                });
        }
    }
}
