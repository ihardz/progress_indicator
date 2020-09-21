using Progress.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Progress.Hubs.Interfaces
{
    public interface IProgressHub
    {
        Task ProgressPing(ProcessProgress progress);
    }
}
