using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Progress.Models
{
    public class ProcessProgress
    {
        public Guid ProcessId { get; set; }
        public int TotalSteps { get; set; }
        public int CurrentStep { get; set; }
        public int TimeSpentSeconds { get; set; }
    }
}
