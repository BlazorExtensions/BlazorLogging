!function(e){var o={};function n(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=o,n.d=function(e,o,r){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)n.d(r,t,function(o){return e[o]}.bind(null,t));return r},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=0)}([function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});const r=n(1);var t;!function(e){const o="BlazorExtensions",n={Logging:{BrowserConsoleLogger:new r.BrowserConsoleLogger}};e.initialize=function(){"undefined"==typeof window||window[o]?window[o]=Object.assign({},window[o],n):window[o]=Object.assign({},n)}}(t||(t={})),t.initialize()},function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});const r=n(2);o.BrowserConsoleLogger=class{Log(e){const o=JSON.parse(e);let n=console.log;if(o.Type===r.LogObjectType.Table)n=console.table;else switch(o.LogLevel){case r.LogLevel.Trace:n=console.trace;break;case r.LogLevel.Debug:n=console.debug;break;case r.LogLevel.Warning:n=console.warn;break;case r.LogLevel.Error:case r.LogLevel.Critical:n=console.error}o.Type==r.LogObjectType.Table?n(o.Payload):n(`[${o.Category}]`,o.Payload),o.Exception&&n(`[${o.Category}] Exception: `,o.Exception)}}},function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),function(e){e[e.Trace=0]="Trace",e[e.Debug=1]="Debug",e[e.Information=2]="Information",e[e.Warning=3]="Warning",e[e.Error=4]="Error",e[e.Critical=5]="Critical",e[e.None=6]="None"}(o.LogLevel||(o.LogLevel={})),function(e){e[e.String=0]="String",e[e.Object=1]="Object",e[e.Table=2]="Table"}(o.LogObjectType||(o.LogObjectType={}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luaXRpYWxpemVMb2dnaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9Ccm93c2VyQ29uc29sZUxvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nT2JqZWN0LnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiQnJvd3NlckNvbnNvbGVMb2dnZXJfMSIsIkxvZ2dpbmciLCJibGF6b3JFeHRlbnNpb25zIiwiZXh0ZW5zaW9uT2JqZWN0IiwiQnJvd3NlckNvbnNvbGVMb2dnZXIiLCJpbml0aWFsaXplIiwid2luZG93IiwiYXNzaWduIiwiTG9nT2JqZWN0XzEiLCJbb2JqZWN0IE9iamVjdF0iLCJsb2dPYmplY3RWYWx1ZSIsImxvZ09iamVjdCIsIkpTT04iLCJwYXJzZSIsImxvZ01ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJUeXBlIiwiTG9nT2JqZWN0VHlwZSIsIlRhYmxlIiwidGFibGUiLCJMb2dMZXZlbCIsIlRyYWNlIiwidHJhY2UiLCJEZWJ1ZyIsImRlYnVnIiwiV2FybmluZyIsIndhcm4iLCJFcnJvciIsIkNyaXRpY2FsIiwiZXJyb3IiLCJQYXlsb2FkIiwiQ2F0ZWdvcnkiLCJFeGNlcHRpb24iXSwibWFwcGluZ3Mi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N0NwQixFQUFVc0IsV0FDWm5CLE1BQWNILEVBQVVxQix3QkFBeUJyQixFQUFVc0IsNEZDN0JqRSxTQUFZWixHQUNWQSxJQUFBLGlCQUNBQSxJQUFBLGlCQUNBQSxJQUFBLDZCQUNBQSxJQUFBLHFCQUNBQSxJQUFBLGlCQUNBQSxJQUFBLHVCQUNBQSxJQUFBLGVBUEYsQ0FBWXZELEVBQUF1RCxXQUFBdkQsRUFBQXVELGNBVVosU0FBWUgsR0FDVkEsSUFBQSxtQkFDQUEsSUFBQSxtQkFDQUEsSUFBQSxpQkFIRixDQUFZcEQsRUFBQW9ELGdCQUFBcEQsRUFBQW9EIiwiZmlsZSI6ImJsYXpvci5leHRlbnNpb25zLmxvZ2dpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBCcm93c2VyQ29uc29sZUxvZ2dlciB9IGZyb20gJy4vQnJvd3NlckNvbnNvbGVMb2dnZXInO1xyXG5cclxubmFtZXNwYWNlIExvZ2dpbmcge1xyXG4gIGNvbnN0IGJsYXpvckV4dGVuc2lvbnM6IHN0cmluZyA9ICdCbGF6b3JFeHRlbnNpb25zJztcclxuICAvLyBkZWZpbmUgd2hhdCB0aGlzIGV4dGVuc2lvbiBhZGRzIHRvIHRoZSB3aW5kb3cgb2JqZWN0IGluc2lkZSBCbGF6b3JFeHRlbnNpb25zXHJcbiAgY29uc3QgZXh0ZW5zaW9uT2JqZWN0ID0ge1xyXG4gICAgTG9nZ2luZzoge1xyXG4gICAgICBCcm93c2VyQ29uc29sZUxvZ2dlcjogbmV3IEJyb3dzZXJDb25zb2xlTG9nZ2VyKClcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93W2JsYXpvckV4dGVuc2lvbnNdKSB7XHJcbiAgICAgIC8vIHdoZW4gdGhlIGxpYnJhcnkgaXMgbG9hZGVkIGluIGEgYnJvd3NlciB2aWEgYSA8c2NyaXB0PiBlbGVtZW50LCBtYWtlIHRoZVxyXG4gICAgICAvLyBmb2xsb3dpbmcgQVBJcyBhdmFpbGFibGUgaW4gZ2xvYmFsIHNjb3BlIGZvciBpbnZvY2F0aW9uIGZyb20gSlNcclxuICAgICAgd2luZG93W2JsYXpvckV4dGVuc2lvbnNdID0ge1xyXG4gICAgICAgIC4uLmV4dGVuc2lvbk9iamVjdFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93W2JsYXpvckV4dGVuc2lvbnNdID0ge1xyXG4gICAgICAgIC4uLndpbmRvd1tibGF6b3JFeHRlbnNpb25zXSxcclxuICAgICAgICAuLi5leHRlbnNpb25PYmplY3RcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkxvZ2dpbmcuaW5pdGlhbGl6ZSgpO1xyXG4iLCJpbXBvcnQgeyBMb2dPYmplY3QsIExvZ09iamVjdFR5cGUsIExvZ0xldmVsIH0gZnJvbSAnLi9Mb2dPYmplY3QnO1xyXG5cclxuaW50ZXJmYWNlIElCcm93c2VyQ29uc29sZUxvZ2dlciB7XHJcbiAgTG9nKGxvZ09iamVjdFZhbHVlOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnJvd3NlckNvbnNvbGVMb2dnZXIgaW1wbGVtZW50cyBJQnJvd3NlckNvbnNvbGVMb2dnZXIge1xyXG4gIExvZyhsb2dPYmplY3RWYWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBsb2dPYmplY3Q6IExvZ09iamVjdCA9IEpTT04ucGFyc2UobG9nT2JqZWN0VmFsdWUpO1xyXG4gICAgbGV0IGxvZ01ldGhvZDogRnVuY3Rpb24gPSBjb25zb2xlLmxvZztcclxuXHJcbiAgICAvLyBpZiB3ZSd2ZSBhIHRhYmxlLCB3ZSdsbCBwcmludCBpdCBhcyBhIHRhYmxlIGFueXdheSwgaXQgaXMgdW5saWtlbHkgdGhhdCB0aGUgZGV2ZWxvcGVyIHdhbnQgdG8gbG9nIGVycm9ybm91cyBkYXRhIGFzIGEgdGFibGUuXHJcbiAgICBpZiAobG9nT2JqZWN0LlR5cGUgPT09IExvZ09iamVjdFR5cGUuVGFibGUpIHtcclxuICAgICAgbG9nTWV0aG9kID0gY29uc29sZS50YWJsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3aXRjaCAobG9nT2JqZWN0LkxvZ0xldmVsKSB7XHJcbiAgICAgICAgY2FzZSBMb2dMZXZlbC5UcmFjZTpcclxuICAgICAgICAgIGxvZ01ldGhvZCA9IGNvbnNvbGUudHJhY2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExvZ0xldmVsLkRlYnVnOlxyXG4gICAgICAgICAgbG9nTWV0aG9kID0gY29uc29sZS5kZWJ1ZztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTG9nTGV2ZWwuV2FybmluZzpcclxuICAgICAgICAgIGxvZ01ldGhvZCA9IGNvbnNvbGUud2FybjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTG9nTGV2ZWwuRXJyb3I6XHJcbiAgICAgICAgY2FzZSBMb2dMZXZlbC5Dcml0aWNhbDpcclxuICAgICAgICAgIGxvZ01ldGhvZCA9IGNvbnNvbGUuZXJyb3I7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxvZ09iamVjdC5UeXBlID09IExvZ09iamVjdFR5cGUuVGFibGUpIHtcclxuICAgICAgbG9nTWV0aG9kKGxvZ09iamVjdC5QYXlsb2FkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZ01ldGhvZChgWyR7bG9nT2JqZWN0LkNhdGVnb3J5fV1gLCBsb2dPYmplY3QuUGF5bG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvZ09iamVjdC5FeGNlcHRpb24pIHtcclxuICAgICAgbG9nTWV0aG9kKGBbJHtsb2dPYmplY3QuQ2F0ZWdvcnl9XSBFeGNlcHRpb246IGAsIGxvZ09iamVjdC5FeGNlcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgdHlwZSBMb2dPYmplY3QgPSB7XHJcbiAgQ2F0ZWdvcnk6IHN0cmluZztcclxuICBMb2dMZXZlbDogTG9nTGV2ZWw7XHJcbiAgVHlwZTogTG9nT2JqZWN0VHlwZTtcclxuICBQYXlsb2FkOiBhbnk7XHJcbiAgRXhjZXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIGVudW0gY29taW5nIGZyb20gTWljcm9zb2Z0LkV4dGVuc2lvbnMuTG9nZ2luZ1xyXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XHJcbiAgVHJhY2UgPSAwLFxyXG4gIERlYnVnID0gMSxcclxuICBJbmZvcm1hdGlvbiA9IDIsXHJcbiAgV2FybmluZyA9IDMsXHJcbiAgRXJyb3IgPSA0LFxyXG4gIENyaXRpY2FsID0gNSxcclxuICBOb25lID0gNlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMb2dPYmplY3RUeXBlIHtcclxuICBTdHJpbmcgPSAwLFxyXG4gIE9iamVjdCA9IDEsXHJcbiAgVGFibGUgPSAyXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==