using Progress.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Progress.Services
{
    public interface IProcessService
    {
        void StartProcess(ProcessConfig config, Action<ProcessProgress> callback);
    }
}
