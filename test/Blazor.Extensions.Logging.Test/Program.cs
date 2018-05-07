using Microsoft.AspNetCore.Blazor.Browser.Rendering;
using Microsoft.AspNetCore.Blazor.Browser.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Blazor.Extensions.Logging.Test
{
    public class Program
    {
        static void Main(string[] args)
        {
            var serviceProvider = new BrowserServiceProvider(services =>
            {
                // Add Blazor.Extensions.Logging.BrowserConsoleLogger
                services.AddLogging(builder => builder
                    .AddBrowserConsole()
                    .SetMinimumLevel(LogLevel.Trace)
                );
            });

            new BrowserRenderer(serviceProvider).AddComponent<App>("app");
        }
    }
}
