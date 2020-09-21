using Microsoft.AspNetCore.SignalR;
using Progress.Hubs.Interfaces;
using Progress.Models;
using System.Threading.Tasks;

namespace Progress.Hubs
{
    public class ProgressHub: Hub<IProgressHub>
    {

    }
}
