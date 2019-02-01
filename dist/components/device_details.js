define(["lodash","angular","app/core/core"],function(e,t,i){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([function(t,i){t.exports=e},function(e,t,i){"use strict";function n(e){var t="default";for(var i in e)if("kentik-ds"===e[i].type)return t=e[i].jsonData.region;return t}i.d(t,"a",function(){return n})},function(e,i){e.exports=t},function(e,t,i){"use strict";i.d(t,"a",function(){return o}),i.d(t,"b",function(){return c});var n=i(5),r=i(0);function o(e){var t="";t+=e.status?"("+e.status+") ":"",t+=e.statusText?e.statusText+": ":"",e.data&&e.data.error?t+=e.data.error:e.err?t+=e.err:r.isString(e)&&(t+=e),n.appEvents.emit("alert-error",["Can't connect to Kentik API",t])}function c(e,t,i){var o="";o+=t.status?"("+t.status+") ":"",o+=t.statusText?t.statusText+": ":"",t.data&&t.data.error?o+=t.data.error:t.err?o+=t.err:r.isString(t)&&(o+=t),n.appEvents.emit("alert-"+i,[e,o])}},function(e,t,i){"use strict";i.d(t,"a",function(){return s});var n=i(2),r=i.n(n),o=i(1),c=function(e,t,i,n){return new(i||(i=Promise))(function(r,o){function c(e){try{s(n.next(e))}catch(e){o(e)}}function a(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){e.done?r(e.value):new i(function(t){t(e.value)}).then(c,a)}s((n=n.apply(e,t||[])).next())})},a=function(e,t){var i,n,r,o,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,n=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},s=function(){function e(e){var t=this;this.backendSrv=e,this.apiReady=!1,this.baseUrl="/api/plugin-proxy/kentik-app",e.get("/api/datasources").then(function(e){t.region=Object(o.a)(e),t.setRegion(t.region),t.apiReady=!0})}return e.$inject=["backendSrv"],e.prototype.setRegion=function(e){this.region=e},e.prototype.getDevices=function(){return c(this,void 0,void 0,function(){var e,t=this;return a(this,function(i){switch(i.label){case 0:return this.backendSrv.get("/api/datasources").then(function(e){t.region=Object(o.a)(e),t.setRegion(t.region),t.apiReady=!0}),[4,this._get("/api/v5/devices")];case 1:return(e=i.sent()).data&&e.data.devices?[2,e.data.devices]:[2,[]]}})})},e.prototype.getUsers=function(){return this._get("/api/v5/users")},e.prototype.getFieldValues=function(e){var t="SELECT DISTINCT "+e+" FROM all_devices ORDER BY "+e+" ASC";return this.invokeSQLQuery(t)},e.prototype.getCustomDimensions=function(){return c(this,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return[4,this._get("/api/v5/customdimensions")];case 1:return[2,e.sent().data.customDimensions]}})})},e.prototype.getSavedFilters=function(){return c(this,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return[4,this._get("/api/v5/saved-filters")];case 1:return[2,e.sent().data]}})})},e.prototype.invokeTopXDataQuery=function(e){var t={queries:[{query:e,bucketIndex:0}]};return this._post("/api/v5/query/topXdata",t)},e.prototype.invokeSQLQuery=function(e){var t={query:e};return this._post("/api/v5/query/sql",t)},e.prototype._get=function(e){return c(this,void 0,void 0,function(){var t=this;return a(this,function(i){switch(i.label){case 0:return void 0!==this.region?[3,2]:[4,this.backendSrv.get("/api/datasources").then(function(e){t.setRegion(Object(o.a)(e))})];case 1:i.sent(),i.label=2;case 2:return[2,this.backendSrv.datasourceRequest({method:"GET",url:this.baseUrl+"/"+this.region+e}).catch(function(e){return console.error(e),e.err?Promise.reject(e.err):Promise.reject(e)})]}})})},e.prototype._post=function(e,t){return c(this,void 0,void 0,function(){var i=this;return a(this,function(n){switch(n.label){case 0:return void 0!==this.region?[3,2]:[4,this.backendSrv.get("/api/datasources").then(function(e){i.setRegion(Object(o.a)(e))})];case 1:n.sent(),n.label=2;case 2:return[2,this.backendSrv.datasourceRequest({method:"POST",url:this.baseUrl+"/"+this.region+e,data:t}).then(function(e){return e.data?e.data:[]}).catch(function(e){return console.error(e),e.err?Promise.reject(e.err):Promise.reject(e)})]}})})},e}();r.a.module("grafana.services").service("kentikAPISrv",s)},function(e,t){e.exports=i},,,,,function(e,t,i){"use strict";i.r(t),i.d(t,"DeviceDetailsCtrl",function(){return c});var n=i(4),r=i(3),o=i(1),c=function(){function e(e,t,i,r,c){var a=this;this.$location=i,this.backendSrv=r,this.alertSrv=c,this.device={},this.deviceDTO={},this.pageReady=!1,this.region="default",r.get("/api/datasources").then(function(e){a.region=Object(o.a)(e),a.kentik=new n.a(a.backendSrv),a.kentik.setRegion(a.region),a.getDevice(i.search().device)})}return e.$inject=["$scope","$injector","$location","backendSrv","alertSrv"],e.prototype.addIP=function(){this.otherIps.push({ip:""})},e.prototype.removeIP=function(e){this.otherIps.splice(e,1)},e.prototype.getDevice=function(e){var t=this;this.backendSrv.get("/api/plugin-proxy/kentik-app/"+this.region+"/api/v5/device/"+e).then(function(e){t.device=e.device,t.updateDeviceDTO(),t.pageReady=!0})},e.prototype.gotoDashboard=function(e){this.$location.url("/dashboard/db/kentik-top-talkers?var-device="+e)},e.prototype.updateDeviceDTO=function(){this.deviceDTO={device_id:this.device.id,device_name:this.device.device_name,device_type:this.device.device_type,device_description:this.device.device_description,device_flow_type:this.device.device_flow_type,device_sample_rate:parseInt(this.device.device_sample_rate,10),minimize_snmp:this.device.minimize_snmp,device_snmp_ip:this.device.device_snmp_ip,device_snmp_community:this.device.device_snmp_community,device_bgp_type:this.device.device_bgp_type,device_bgp_password:this.device.device_bgp_password,device_bgp_neighbor_ip:this.device.device_bgp_neighbor_ip,device_bgp_neighbor_asn:parseInt(this.device.device_bgp_neighbor_asn,10)}},e.prototype.update=function(){var e=this;this.deviceDTO.device_snmp_ip||delete this.deviceDTO.device_snmp_ip,this.deviceDTO.device_snmp_community||delete this.deviceDTO.device_snmp_community;var t={device:this.deviceDTO};this.backendSrv.put("/api/plugin-proxy/kentik-app/"+this.region+"/api/v5/device/"+this.deviceDTO.device_id,t).then(function(t){if(!("err"in t))return Object(r.b)("Device Updated.",e.deviceDTO.device_name,"success"),e.getDevice(e.deviceDTO.device_id);Object(r.b)("Device Update failed.",t.err,"error")},function(e){return"error"in e.data?void Object(r.b)("Device Update failed.",e.data.error,"error"):void Object(r.b)("Device Update failed.",e,"error")})},e}();c.templateUrl="components/device_details.html"}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vLy4vZGF0YXNvdXJjZS9yZWdpb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL2RhdGFzb3VyY2UvYWxlcnRIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YXNvdXJjZS9rZW50aWtBUEkudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kZXZpY2VfZGV0YWlscy50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXyIsImdldFJlZ2lvbiIsImRhdGFzb3VyY2VzIiwiYVJlZ2lvbiIsImluZGV4IiwidHlwZSIsImpzb25EYXRhIiwicmVnaW9uIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzJfXyIsInNob3dBbGVydCIsInNob3dDdXN0b21BbGVydCIsImdyYWZhbmFfYXBwX2NvcmVfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwibG9kYXNoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18iLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImVyciIsImVtaXQiLCJleGNlcHRpb25EYXRhIiwiZXhjZXB0aW9uVHlwZSIsImVyck1lc3NhZ2UiLCJLZW50aWtBUEkiLCJiYWNrZW5kU3J2IiwiX3RoaXMiLCJ0aGlzIiwiYXBpUmVhZHkiLCJiYXNlVXJsIiwidGhlbiIsImFsbERTIiwiX3JlZ2lvbkhlbHBlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwic2V0UmVnaW9uIiwiJGluamVjdCIsInJlc3AiLCJfYSIsInNlbnQiLCJkZXZpY2VzIiwiZ2V0VXNlcnMiLCJfZ2V0IiwiZ2V0RmllbGRWYWx1ZXMiLCJmaWVsZCIsInF1ZXJ5IiwiaW52b2tlU1FMUXVlcnkiLCJpbnZva2VUb3BYRGF0YVF1ZXJ5Iiwia2VudGlrVjVRdWVyeSIsInF1ZXJpZXMiLCJidWNrZXRJbmRleCIsIl9wb3N0IiwiZGF0YXNvdXJjZVJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJjYXRjaCIsImNvbnNvbGUiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJEZXZpY2VEZXRhaWxzQ3RybCIsIl9kYXRhc291cmNlX2tlbnRpa0FQSV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwiX2RhdGFzb3VyY2VfYWxlcnRIZWxwZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyIsIl9kYXRhc291cmNlX3JlZ2lvbkhlbHBlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fIiwiJHNjb3BlIiwiJGluamVjdG9yIiwiJGxvY2F0aW9uIiwiYWxlcnRTcnYiLCJkZXZpY2UiLCJkZXZpY2VEVE8iLCJwYWdlUmVhZHkiLCJrZW50aWsiLCJnZXREZXZpY2UiLCJzZWFyY2giLCJhZGRJUCIsIm90aGVySXBzIiwicHVzaCIsImlwIiwicmVtb3ZlSVAiLCJzcGxpY2UiLCJkZXZpY2VJZCIsInVwZGF0ZURldmljZURUTyIsImdvdG9EYXNoYm9hcmQiLCJkZXZpY2VfbmFtZSIsImRldmljZV9pZCIsImlkIiwiZGV2aWNlX3R5cGUiLCJkZXZpY2VfZGVzY3JpcHRpb24iLCJkZXZpY2VfZmxvd190eXBlIiwiZGV2aWNlX3NhbXBsZV9yYXRlIiwicGFyc2VJbnQiLCJtaW5pbWl6ZV9zbm1wIiwiZGV2aWNlX3NubXBfaXAiLCJkZXZpY2Vfc25tcF9jb21tdW5pdHkiLCJkZXZpY2VfYmdwX3R5cGUiLCJkZXZpY2VfYmdwX3Bhc3N3b3JkIiwiZGV2aWNlX2JncF9uZWlnaGJvcl9pcCIsImRldmljZV9iZ3BfbmVpZ2hib3JfYXNuIiwidXBkYXRlIiwicHV0Il0sIm1hcHBpbmdzIjoiK0VBQ0EsSUFBQUEsRUFBQSxHQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLEdBQUEsQ0FDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxRQUFBLElBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcsRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQTBEQSxPQXJEQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxFQUFBLENBQTBDSyxZQUFBLEVBQUFDLElBQUFMLEtBSzFDWixFQUFBa0IsRUFBQSxTQUFBaEIsR0FDQSxvQkFBQWlCLGVBQUFDLGFBQ0FOLE9BQUFDLGVBQUFiLEVBQUFpQixPQUFBQyxZQUFBLENBQXdEQyxNQUFBLFdBRXhEUCxPQUFBQyxlQUFBYixFQUFBLGNBQWlEbUIsT0FBQSxLQVFqRHJCLEVBQUFzQixFQUFBLFNBQUFELEVBQUFFLEdBRUEsR0FEQSxFQUFBQSxJQUFBRixFQUFBckIsRUFBQXFCLElBQ0EsRUFBQUUsRUFBQSxPQUFBRixFQUNBLEtBQUFFLEdBQUEsaUJBQUFGLFFBQUFHLFdB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QSxHQUtILE9BRkd6RCxPQUFBa0YsRUFBQSxFQUFBbEYsQ0FBQSxrQkFBQWdELEVBQUF5QyxVQUFBYyxZQUFBLFdBRUh2RCxFQUFLNEMsVUFBQTVDLEVBQUF5QyxVQUFBZSxrQkFMSXRCLEVBQUEsMkJBQUF6QixFQUFBaEIsSUFBQSxtQkFPTEwsU0FDQSxVQUFPQSxFQUFBSSxVQUNSeEMsT0FBQWtGLEVBQUEsRUFBQWxGLENBQUEsd0JBQUFvQyxFQUFBSSxLQUFBSixNQUFBLGNBR0FwQyxPQUFBa0YsRUFBQSxFQUFBbEYsQ0FBQSx3QkFBQW9DLEVBQUEsY0E5RVMiLCJmaWxlIjoiY29tcG9uZW50cy9kZXZpY2VfZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXzsiLCIgLyoqXG4gICogUmV0dXJucyB0aGUgcmVnaW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUga2VudGlrLWtzXG5cbiAgKiBAcGFyYW0gZGF0YXNvdXJjZXMgXG4gICovXG5mdW5jdGlvbiBnZXRSZWdpb24oZGF0YXNvdXJjZXM6IGFueSk6IHN0cmluZyB7XG4gIGxldCBhUmVnaW9uID0gXCJkZWZhdWx0XCI7XG4gIGZvciAodmFyIGluZGV4IGluIGRhdGFzb3VyY2VzKSB7XG4gICAgaWYgKGRhdGFzb3VyY2VzW2luZGV4XS50eXBlID09PSBcImtlbnRpay1kc1wiKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0UmVnaW9uOiBmb3VuZCByZWdpb246IFwiICtkYXRhc291cmNlc1tpbmRleF0uanNvbkRhdGEucmVnaW9uKTtcbiAgICAgIC8vY29uc29sZS5sb2coYWxsRFNbaW5kZXhdKTtcbiAgICAgIGFSZWdpb24gPSBkYXRhc291cmNlc1tpbmRleF0uanNvbkRhdGEucmVnaW9uO1xuICAgICAgcmV0dXJuIGFSZWdpb247XG4gICAgfVxuICB9XG4gIHJldHVybiBhUmVnaW9uO1xufVxuXG5leHBvcnQgeyBnZXRSZWdpb24gfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yX187IiwiaW1wb3J0IHsgYXBwRXZlbnRzIH0gZnJvbSAnZ3JhZmFuYS9hcHAvY29yZS9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZnVuY3Rpb24gc2hvd0FsZXJ0KGVycm9yKSB7XG4gIGxldCBtZXNzYWdlID0gJyc7XG4gIG1lc3NhZ2UgKz0gZXJyb3Iuc3RhdHVzID8gYCgke2Vycm9yLnN0YXR1c30pIGAgOiAnJztcbiAgbWVzc2FnZSArPSBlcnJvci5zdGF0dXNUZXh0ID8gZXJyb3Iuc3RhdHVzVGV4dCArICc6ICcgOiAnJztcbiAgaWYgKGVycm9yLmRhdGEgJiYgZXJyb3IuZGF0YS5lcnJvcikge1xuICAgIG1lc3NhZ2UgKz0gZXJyb3IuZGF0YS5lcnJvcjtcbiAgfSBlbHNlIGlmIChlcnJvci5lcnIpIHtcbiAgICBtZXNzYWdlICs9IGVycm9yLmVycjtcbiAgfSBlbHNlIGlmIChfLmlzU3RyaW5nKGVycm9yKSkge1xuICAgIG1lc3NhZ2UgKz0gZXJyb3I7XG4gIH1cblxuICBhcHBFdmVudHMuZW1pdCgnYWxlcnQtZXJyb3InLCBbXCJDYW4ndCBjb25uZWN0IHRvIEtlbnRpayBBUElcIiwgbWVzc2FnZV0pO1xufVxuXG5mdW5jdGlvbiBzaG93Q3VzdG9tQWxlcnQobWVzc2FnZSwgZXhjZXB0aW9uRGF0YSwgZXhjZXB0aW9uVHlwZSkge1xuICBsZXQgZXJyTWVzc2FnZSA9ICcnO1xuICBlcnJNZXNzYWdlICs9IGV4Y2VwdGlvbkRhdGEuc3RhdHVzID8gYCgke2V4Y2VwdGlvbkRhdGEuc3RhdHVzfSkgYCA6ICcnO1xuICBlcnJNZXNzYWdlICs9IGV4Y2VwdGlvbkRhdGEuc3RhdHVzVGV4dCA/IGV4Y2VwdGlvbkRhdGEuc3RhdHVzVGV4dCArICc6ICcgOiAnJztcbiAgaWYgKGV4Y2VwdGlvbkRhdGEuZGF0YSAmJiBleGNlcHRpb25EYXRhLmRhdGEuZXJyb3IpIHtcbiAgICBlcnJNZXNzYWdlICs9IGV4Y2VwdGlvbkRhdGEuZGF0YS5lcnJvcjtcbiAgfSBlbHNlIGlmIChleGNlcHRpb25EYXRhLmVycikge1xuICAgIGVyck1lc3NhZ2UgKz0gZXhjZXB0aW9uRGF0YS5lcnI7XG4gIH0gZWxzZSBpZiAoXy5pc1N0cmluZyhleGNlcHRpb25EYXRhKSkge1xuICAgIGVyck1lc3NhZ2UgKz0gZXhjZXB0aW9uRGF0YTtcbiAgfVxuICBhcHBFdmVudHMuZW1pdChgYWxlcnQtJHtleGNlcHRpb25UeXBlfWAsIFttZXNzYWdlLCBlcnJNZXNzYWdlXSk7XG59XG5cbmV4cG9ydCB7IHNob3dBbGVydCwgc2hvd0N1c3RvbUFsZXJ0IH07XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IGdldFJlZ2lvbiB9IGZyb20gXCIuL3JlZ2lvbkhlbHBlclwiO1xuXG5leHBvcnQgY2xhc3MgS2VudGlrQVBJIHtcbiAgYmFzZVVybDogc3RyaW5nO1xuICByZWdpb246IHN0cmluZztcbiAgYXBpUmVhZHk6IGJvb2xlYW47XG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IocHVibGljIGJhY2tlbmRTcnY6IGFueSkge1xuICAgIHRoaXMuYXBpUmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLmJhc2VVcmwgPSBcIi9hcGkvcGx1Z2luLXByb3h5L2tlbnRpay1hcHBcIjtcbiAgICAvLyBnZXQgcmVnaW9uIGZyb20gZGF0YXNvdXJjZVxuICAgIGJhY2tlbmRTcnYuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJykudGhlbiggKGFsbERTOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVnaW9uID0gZ2V0UmVnaW9uKGFsbERTKTtcbiAgICAgIHRoaXMuc2V0UmVnaW9uKHRoaXMucmVnaW9uKTtcbiAgICAgIHRoaXMuYXBpUmVhZHkgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0UmVnaW9uKHJlZ2lvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5yZWdpb24gPSByZWdpb247XG4gIH1cblxuICBhc3luYyBnZXREZXZpY2VzKCkge1xuICAgIHRoaXMuYmFja2VuZFNydi5nZXQoJy9hcGkvZGF0YXNvdXJjZXMnKS50aGVuKCAoYWxsRFM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWdpb24gPSBnZXRSZWdpb24oYWxsRFMpO1xuICAgICAgdGhpcy5zZXRSZWdpb24odGhpcy5yZWdpb24pO1xuICAgICAgdGhpcy5hcGlSZWFkeSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5fZ2V0KCcvYXBpL3Y1L2RldmljZXMnKTtcblxuICAgIGlmIChyZXNwLmRhdGEgJiYgcmVzcC5kYXRhLmRldmljZXMpIHtcbiAgICAgIHJldHVybiByZXNwLmRhdGEuZGV2aWNlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIGdldFVzZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXQoJy9hcGkvdjUvdXNlcnMnKTtcbiAgfVxuXG4gIGdldEZpZWxkVmFsdWVzKGZpZWxkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBxdWVyeSA9IGBTRUxFQ1QgRElTVElOQ1QgJHtmaWVsZH0gRlJPTSBhbGxfZGV2aWNlcyBPUkRFUiBCWSAke2ZpZWxkfSBBU0NgO1xuICAgIHJldHVybiB0aGlzLmludm9rZVNRTFF1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGFzeW5jIGdldEN1c3RvbURpbWVuc2lvbnMoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2dldCgnL2FwaS92NS9jdXN0b21kaW1lbnNpb25zJyk7XG4gICAgcmV0dXJuIGRhdGEuZGF0YS5jdXN0b21EaW1lbnNpb25zO1xuICB9XG5cbiAgYXN5bmMgZ2V0U2F2ZWRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9nZXQoJy9hcGkvdjUvc2F2ZWQtZmlsdGVycycpO1xuICAgIHJldHVybiBkYXRhLmRhdGE7XG4gIH1cblxuICBpbnZva2VUb3BYRGF0YVF1ZXJ5KHF1ZXJ5OiBhbnkpIHtcbiAgICBjb25zdCBrZW50aWtWNVF1ZXJ5ID0ge1xuICAgICAgcXVlcmllczogW3sgcXVlcnk6IHF1ZXJ5LCBidWNrZXRJbmRleDogMCB9XSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX3Bvc3QoJy9hcGkvdjUvcXVlcnkvdG9wWGRhdGEnLCBrZW50aWtWNVF1ZXJ5KTtcbiAgfVxuXG4gIGludm9rZVNRTFF1ZXJ5KHF1ZXJ5OiBhbnkpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fcG9zdCgnL2FwaS92NS9xdWVyeS9zcWwnLCBkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIF9nZXQodXJsOiBzdHJpbmcpIHtcbiAgICAvLyBpZiB0aGUgcmVnaW9uIGlzIG5vdCBzZXQsIGdldCBpdCBmcm9tIHRoZSBkYXRhc291cmNlXG4gICAgaWYgKHR5cGVvZiB0aGlzLnJlZ2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJfZ2V0OiB0aGlzLnJlZ2lvbiBVTkRFRklORUQsIGZldGNoaW5nXCIpO1xuICAgICAgYXdhaXQgdGhpcy5iYWNrZW5kU3J2LmdldCgnL2FwaS9kYXRhc291cmNlcycpLnRoZW4oIChhbGxEUzogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0UmVnaW9uKGdldFJlZ2lvbihhbGxEUykpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwia2VudGlrQVBJOiBfZ2V0OiBGRVRDSEVEIHJlZ2lvbiBcIiArIHRoaXMucmVnaW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5iYWNrZW5kU3J2XG4gICAgICAuZGF0YXNvdXJjZVJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IHRoaXMuYmFzZVVybCArIFwiL1wiICsgdGhpcy5yZWdpb24gKyB1cmwsXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIGlmIChlcnJvci5lcnIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IuZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9wb3N0KHVybDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICAvLyBpZiB0aGUgcmVnaW9uIGlzIG5vdCBzZXQsIGdldCBpdCBmcm9tIHRoZSBkYXRhc291cmNlXG4gICAgaWYgKHR5cGVvZiB0aGlzLnJlZ2lvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJrZW50aWtBUEkuX3Bvc3Q6IHRoaXMucmVnaW9uIFVOREVGSU5FRCwgZmV0Y2hpbmdcIik7XG4gICAgICBhd2FpdCB0aGlzLmJhY2tlbmRTcnYuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJykudGhlbiggKGFsbERTOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXRSZWdpb24oZ2V0UmVnaW9uKGFsbERTKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJrZW50aWtBUEkuX3Bvc3Q6IEZFVENIRUQgcmVnaW9uIFwiICsgdGhpcy5yZWdpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmJhY2tlbmRTcnZcbiAgICAgIC5kYXRhc291cmNlUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6IHRoaXMuYmFzZVVybCArIFwiL1wiICsgdGhpcy5yZWdpb24gKyB1cmwsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IuZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLmVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ2dyYWZhbmEuc2VydmljZXMnKS5zZXJ2aWNlKCdrZW50aWtBUElTcnYnLCBLZW50aWtBUEkpO1xuIiwiaW1wb3J0IHsgS2VudGlrQVBJIH0gZnJvbSAnLi4vZGF0YXNvdXJjZS9rZW50aWtBUEknO1xuaW1wb3J0IHsgc2hvd0N1c3RvbUFsZXJ0IH0gZnJvbSBcIi4uL2RhdGFzb3VyY2UvYWxlcnRIZWxwZXJcIjtcbmltcG9ydCB7IGdldFJlZ2lvbiB9IGZyb20gXCIuLi9kYXRhc291cmNlL3JlZ2lvbkhlbHBlclwiO1xuXG5leHBvcnQgY2xhc3MgRGV2aWNlRGV0YWlsc0N0cmwge1xuICBzdGF0aWMgdGVtcGxhdGVVcmw6IHN0cmluZztcbiAgZGV2aWNlOiBhbnk7XG4gIGRldmljZURUTzogYW55O1xuICBwYWdlUmVhZHk6IGJvb2xlYW47XG4gIG90aGVySXBzOiBhbnk7XG4gIGtlbnRpazogS2VudGlrQVBJO1xuICByZWdpb246IHN0cmluZztcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGluamVjdG9yLCBwdWJsaWMgJGxvY2F0aW9uOiBhbnksIHB1YmxpYyBiYWNrZW5kU3J2OiBhbnksIHB1YmxpYyBhbGVydFNydjogYW55KSB7XG4gICAgdGhpcy5kZXZpY2UgPSB7fTtcbiAgICB0aGlzLmRldmljZURUTyA9IHt9O1xuICAgIHRoaXMucGFnZVJlYWR5ID0gZmFsc2U7XG4gICAgLy8gZ2V0IHJlZ2lvbiBmcm9tIGRhdGFzb3VyY2VcbiAgICB0aGlzLnJlZ2lvbiA9IFwiZGVmYXVsdFwiO1xuICAgIGJhY2tlbmRTcnYuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJykudGhlbiggKGFsbERTOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVnaW9uID0gZ2V0UmVnaW9uKGFsbERTKTtcbiAgICAgIHRoaXMua2VudGlrID0gbmV3IEtlbnRpa0FQSSh0aGlzLmJhY2tlbmRTcnYpO1xuICAgICAgdGhpcy5rZW50aWsuc2V0UmVnaW9uKHRoaXMucmVnaW9uKTtcbiAgICAgIHRoaXMuZ2V0RGV2aWNlKCRsb2NhdGlvbi5zZWFyY2goKS5kZXZpY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSVAoKSB7XG4gICAgdGhpcy5vdGhlcklwcy5wdXNoKHsgaXA6ICcnIH0pO1xuICB9XG5cbiAgcmVtb3ZlSVAoaW5kZXgpIHtcbiAgICB0aGlzLm90aGVySXBzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBnZXREZXZpY2UoZGV2aWNlSWQpIHtcbiAgICB0aGlzLmJhY2tlbmRTcnYuZ2V0KGAvYXBpL3BsdWdpbi1wcm94eS9rZW50aWstYXBwLyR7dGhpcy5yZWdpb259L2FwaS92NS9kZXZpY2UvYCArIGRldmljZUlkKS50aGVuKHJlc3AgPT4ge1xuICAgICAgdGhpcy5kZXZpY2UgPSByZXNwLmRldmljZTtcbiAgICAgIHRoaXMudXBkYXRlRGV2aWNlRFRPKCk7XG4gICAgICB0aGlzLnBhZ2VSZWFkeSA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBnb3RvRGFzaGJvYXJkKGRldmljZV9uYW1lKSB7XG4gICAgdGhpcy4kbG9jYXRpb24udXJsKCcvZGFzaGJvYXJkL2RiL2tlbnRpay10b3AtdGFsa2Vycz92YXItZGV2aWNlPScgKyBkZXZpY2VfbmFtZSk7XG4gIH1cblxuICB1cGRhdGVEZXZpY2VEVE8oKSB7XG4gICAgdGhpcy5kZXZpY2VEVE8gPSB7XG4gICAgICBkZXZpY2VfaWQ6IHRoaXMuZGV2aWNlLmlkLFxuICAgICAgZGV2aWNlX25hbWU6IHRoaXMuZGV2aWNlLmRldmljZV9uYW1lLFxuICAgICAgZGV2aWNlX3R5cGU6IHRoaXMuZGV2aWNlLmRldmljZV90eXBlLFxuICAgICAgZGV2aWNlX2Rlc2NyaXB0aW9uOiB0aGlzLmRldmljZS5kZXZpY2VfZGVzY3JpcHRpb24sXG4gICAgICBkZXZpY2VfZmxvd190eXBlOiB0aGlzLmRldmljZS5kZXZpY2VfZmxvd190eXBlLFxuICAgICAgZGV2aWNlX3NhbXBsZV9yYXRlOiBwYXJzZUludCh0aGlzLmRldmljZS5kZXZpY2Vfc2FtcGxlX3JhdGUsIDEwKSxcbiAgICAgIG1pbmltaXplX3NubXA6IHRoaXMuZGV2aWNlLm1pbmltaXplX3NubXAsXG4gICAgICBkZXZpY2Vfc25tcF9pcDogdGhpcy5kZXZpY2UuZGV2aWNlX3NubXBfaXAsXG4gICAgICBkZXZpY2Vfc25tcF9jb21tdW5pdHk6IHRoaXMuZGV2aWNlLmRldmljZV9zbm1wX2NvbW11bml0eSxcbiAgICAgIGRldmljZV9iZ3BfdHlwZTogdGhpcy5kZXZpY2UuZGV2aWNlX2JncF90eXBlLFxuICAgICAgZGV2aWNlX2JncF9wYXNzd29yZDogdGhpcy5kZXZpY2UuZGV2aWNlX2JncF9wYXNzd29yZCxcbiAgICAgIGRldmljZV9iZ3BfbmVpZ2hib3JfaXA6IHRoaXMuZGV2aWNlLmRldmljZV9iZ3BfbmVpZ2hib3JfaXAsXG4gICAgICBkZXZpY2VfYmdwX25laWdoYm9yX2FzbjogcGFyc2VJbnQodGhpcy5kZXZpY2UuZGV2aWNlX2JncF9uZWlnaGJvcl9hc24sIDEwKSxcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5kZXZpY2VEVE8uZGV2aWNlX3NubXBfaXApIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmRldmljZURUTy5kZXZpY2Vfc25tcF9pcDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRldmljZURUTy5kZXZpY2Vfc25tcF9jb21tdW5pdHkpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmRldmljZURUTy5kZXZpY2Vfc25tcF9jb21tdW5pdHk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSB7IGRldmljZTogdGhpcy5kZXZpY2VEVE8gfTtcblxuICAgIHRoaXMuYmFja2VuZFNydi5wdXQoYC9hcGkvcGx1Z2luLXByb3h5L2tlbnRpay1hcHAvJHt0aGlzLnJlZ2lvbn0vYXBpL3Y1L2RldmljZS9gICsgdGhpcy5kZXZpY2VEVE8uZGV2aWNlX2lkLCBkYXRhKS50aGVuKFxuICAgICAgcmVzcCA9PiB7XG4gICAgICAgIGlmICgnZXJyJyBpbiByZXNwKSB7XG4gICAgICAgICAgc2hvd0N1c3RvbUFsZXJ0KCdEZXZpY2UgVXBkYXRlIGZhaWxlZC4nLCByZXNwLmVyciwgJ2Vycm9yJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd0N1c3RvbUFsZXJ0KCdEZXZpY2UgVXBkYXRlZC4nLCB0aGlzLmRldmljZURUTy5kZXZpY2VfbmFtZSwgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXREZXZpY2UodGhpcy5kZXZpY2VEVE8uZGV2aWNlX2lkKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgaWYgKCdlcnJvcicgaW4gZXJyb3IuZGF0YSkge1xuICAgICAgICAgIHNob3dDdXN0b21BbGVydCgnRGV2aWNlIFVwZGF0ZSBmYWlsZWQuJywgZXJyb3IuZGF0YS5lcnJvciwgJ2Vycm9yJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNob3dDdXN0b21BbGVydCgnRGV2aWNlIFVwZGF0ZSBmYWlsZWQuJywgZXJyb3IsICdlcnJvcicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuRGV2aWNlRGV0YWlsc0N0cmwudGVtcGxhdGVVcmwgPSAnY29tcG9uZW50cy9kZXZpY2VfZGV0YWlscy5odG1sJztcbiJdLCJzb3VyY2VSb290IjoiIn0=