using Progress.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Progress.Services.Impl
{
    public class ProcessService: IProcessService
    {
        private Action<ProcessProgress> _callback;
        private Timer _timer;
        private ProcessProgress _progress;
        private ProcessConfig _config;
        private DateTime _timeStarted;

        public void StartProcess(ProcessConfig config, Action<ProcessProgress> callback) 
        {
            if (_progress != null) 
            {
                throw new InvalidOperationException("The process is already started. Please, use another Service instance.");
            }
            _config = config;
            _callback = callback;
            _progress = new ProcessProgress()
            {
                ProcessId = Guid.NewGuid(),
                TotalSteps = Math.Abs(config.StepsCount),
                CurrentStep = 0,
                TimeSpentSeconds = 0
            };
            _progress.TotalSteps = config.StepsCount;            
            _timer = new Timer(Invoke, config, 0, config.StepDelay * 1000);
            _timeStarted = DateTime.Now;
        }

        private void Invoke(object stateInfo) 
        {
            _progress.CurrentStep++;
            _progress.TimeSpentSeconds = (DateTime.Now - _timeStarted).Seconds;
            _callback(_progress);
            if (_progress.CurrentStep == _progress.TotalSteps)
            {
                this._progress = null;
                this._config = null;
                _timer.Dispose();
            }
        }
    }
}
