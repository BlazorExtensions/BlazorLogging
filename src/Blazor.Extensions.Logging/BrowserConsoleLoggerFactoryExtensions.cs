using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using System;

namespace Blazor.Extensions.Logging
{
    public static class BrowserConsoleLoggerFactoryExtensions
    {
        /// <summary>
        /// Adds a logger that target the browser's console output
        /// <param name="builder">The <see cref="ILoggingBuilder"/> to use.</param>
        /// </summary>
        public static ILoggingBuilder AddBrowserConsole(this ILoggingBuilder builder)
        {
            builder.Services.TryAddEnumerable(ServiceDescriptor.Singleton<ILoggerProvider, BrowserConsoleLoggerProvider>());

            return builder;
        }

        /// <summary>
        /// Adds a browser console logger that is enabled for <see cref="LogLevel"/>.Information or higher.
        /// </summary>
        /// <param name="factory">The <see cref="ILoggerFactory"/> to use.</param>
        public static ILoggerFactory AddBrowserConsole(this ILoggerFactory factory, IJSRuntime jsRuntime)
        {
            factory.AddBrowserConsole(jsRuntime, LogLevel.Information);

            return factory;
        }

        /// <summary>
        /// Adds a browser console logger that is enabled for <see cref="LogLevel"/>s of minLevel or higher.
        /// </summary>
        /// <param name="factory">The <see cref="ILoggerFactory"/> to use.</param>
        /// <param name="minLevel">The minimum <see cref="LogLevel"/> to be logged</param>
        public static ILoggerFactory AddBrowserConsole(this ILoggerFactory factory, IJSRuntime jsRuntime, LogLevel minLevel)
        {
            factory.AddBrowserConsole(jsRuntime, (category, logLevel) => logLevel >= minLevel);

            return factory;
        }

        /// <summary>
        /// Adds a browser console logger that is enabled as defined by the filter function.
        /// </summary>
        /// <param name="factory">The <see cref="ILoggerFactory"/> to use.</param>
        /// <param name="filter">The category filter to apply to logs.</param>
        public static ILoggerFactory AddBrowserConsole(this ILoggerFactory factory, IJSRuntime jsRuntime, Func<string, LogLevel, bool> filter)
        {
            factory.AddProvider(new BrowserConsoleLoggerProvider(jsRuntime, filter));

            return factory;
        }
    }
}
