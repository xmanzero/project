<<<<<<< HEAD
!function(e){function t(t){return function(r,a){"string"!=typeof r&&(a=r,r="*");var n,i,o,s=r.toLowerCase().split(y),l=0,d=s.length;if(e.isFunction(a))for(;d>l;l++)n=s[l],o=/^\+/.test(n),o&&(n=n.substr(1)||"*"),i=t[n]=t[n]||[],i[o?"unshift":"push"](a)}}function r(e,t,a,n,i,o){i=i||t.dataTypes[0],o=o||{},o[i]=!0;for(var s,l=e[i],d=0,c=l?l.length:0,u=e===b;c>d&&(u||!s);d++)s=l[d](t,a,n),"string"==typeof s&&(!u||o[s]?s=void 0:(t.dataTypes.unshift(s),s=r(e,t,a,n,s,o)));return!u&&s||o["*"]||(s=r(e,t,a,n,"*",o)),s}function a(t,r){var a,n,i=e.jqx.data.ajaxSettings.flatOptions||{};for(a in r)void 0!==r[a]&&((i[a]?t:n||(n={}))[a]=r[a]);n&&e.extend(!0,t,n)}function n(e,t,r){var a,n,i,o,s=e.contents,l=e.dataTypes,d=e.responseFields;for(n in d)n in r&&(t[d[n]]=r[n]);for(;"*"===l[0];)l.shift(),void 0===a&&(a=e.mimeType||t.getResponseHeader("content-type"));if(a)for(n in s)if(s[n]&&s[n].test(a)){l.unshift(n);break}if(l[0]in r)i=l[0];else{for(n in r){if(!l[0]||e.converters[n+" "+l[0]]){i=n;break}o||(o=n)}i=i||o}return i?(i!==l[0]&&l.unshift(i),r[i]):void 0}function i(e,t){var r,a,n,i,o=e.dataTypes.slice(),s=o[0],l={},d=0;if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),o[1])for(r in e.converters)l[r.toLowerCase()]=e.converters[r];for(;n=o[++d];)if("*"!==n){if("*"!==s&&s!==n){if(r=l[s+" "+n]||l["* "+n],!r)for(a in l)if(i=a.split(" "),i[1]===n&&(r=l[s+" "+i[0]]||l["* "+i[0]])){r===!0?r=l[a]:l[a]!==!0&&(n=i[0],o.splice(d--,0,n));break}if(r!==!0)if(r&&e["throws"])t=r(t);else try{t=r(t)}catch(c){return{state:"parsererror",error:r?c:"No conversion from "+s+" to "+n}}}s=n}return{state:"success",data:t}}function o(){try{return new window.XMLHttpRequest}catch(e){}}function s(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}e.jqx.observableArray=function(t,r){if("string"==typeof t&&(t=e.parseJSON(t)),!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()){var a=Object.defineProperty;Object.defineProperty=function(e,t,r){if(a)try{return a(e,t,r)}catch(n){}if(e!==Object(e))throw TypeError("Object.defineProperty called on non-object");return Object.prototype.__defineGetter__&&"get"in r&&Object.prototype.__defineGetter__.call(e,t,r.get),Object.prototype.__defineSetter__&&"set"in r&&Object.prototype.__defineSetter__.call(e,t,r.set),"value"in r?e[t]=r.value:e[t]||(e[t]=r),e}}Array.prototype.forEach||(Array.prototype.forEach=function(e){if(void 0===this||null===this)throw TypeError();var t=Object(this),r=t.length>>>0;if("function"!=typeof e)throw TypeError();var a,n=arguments[1];for(a=0;r>a;a++)a in t&&e.call(n,t[a],a,t)}),"function"!=typeof Object.getOwnPropertyNames&&(Object.getOwnPropertyNames=function(e){if(e!==Object(e))throw TypeError("Object.getOwnPropertyNames called on non-object");var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r});var n,i=this,o=[];i.notifier=null,i.name="observableArray",i.observing=!0,i.changes=new Array;var r=r;return i.observe=function(){i.observing=!0,1==arguments.length&&(r=arguments[0])},i.unobserve=function(){i.observing=!1},i.toArray=function(){return o.slice(0)},i.toJSON=function(e,t){function r(e){return'"'+e.replace(h,function(e){var t=f[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"'}function a(e){return 10>e?"0"+e:e}function n(e){var t;return t=isFinite(e.valueOf())?e.getUTCFullYear()+"-"+a(e.getUTCMonth()+1)+"-"+a(e.getUTCDate())+"T"+a(e.getUTCHours())+":"+a(e.getUTCMinutes())+":"+a(e.getUTCSeconds())+'Z"':"null"}function i(e){var t,r=e.length,a=[];for(t=0;r>t;t++)a.push(c(t,e)||"null");return"["+a.join(",")+"]"}function s(t){var a,n,i=[];for(a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(""!=a&&e&&-1===e.indexOf(a))continue;n=c(a,t),n&&i.push(r(a)+":"+n)}return"{"+i.join(",")+"}"}function l(e){switch(Object.prototype.toString.call(e)){case"[object Date]":return n(e);case"[object Array]":return i(e)}return s(e)}function d(e,t){switch(t){case"string":return r(e);case"number":case"float":case"integer":case"int":return isFinite(e)?e:"null";case"boolean":return e}return"null"}function c(e,t){var r=t[e],a=typeof r;return r&&"object"==typeof r&&"function"==typeof r.toJSON&&(r=r.toJSON(e),a=typeof r),/(number|float|int|integer|string|boolean)/.test(a)||!r&&"object"===a?d(r,a):l(r)}var u=o;t&&(u=t);var h=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return!e&&window.JSON&&"function"==typeof window.JSON.stringify?window.JSON.stringify(u):c("",{"":u})},i.defineIndexProperty=function(t){if(!(t in i)){var r=function(t,r,a,s){var l=t[r],d=l,c=function(){return d},u=function(t){if(l=t,d!==l){var a=d;if(d=l,"function"==typeof n){var c=o.indexOf(s),u="",h=function(t,a){Object.getOwnPropertyNames(t).forEach(function(n){var i=e.type(t[n]);"array"==i||"object"==i?h(t[n],a+"."+n):r===n&&(u=a+"."+n)})}(s,c);n({object:i,type:"update",path:u,index:c,name:r,newValue:l,oldValue:a})}}return d=l,l};t[r]&&"length"!=r&&(Object.defineProperty?Object.defineProperty(t,r,{get:c,set:u}):Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__&&(Object.prototype.__defineGetter__.call(t,r,c),Object.prototype.__defineSetter__.call(t,r,u)))},a=function(t,n,i){var o=e.type(t);/(number|float|int|integer|string|boolean)/.test(o)||void 0!==t&&Object.getOwnPropertyNames(t).forEach(function(o){var s=e.type(t[o]);"array"==s||"object"==s?(r(t,o,n+"."+o,i),a(t[o],n+"."+o,i)):r(t,o,n+"."+o,i)})};Object.defineProperty(i,t,{configurable:!0,enumerable:!0,get:function(){return o[t]},set:function(e){var r=o[t];i.toJSON(null,r)!=i.toJSON(null,e)&&(o[t]=e,"function"==typeof n&&n({object:i,type:"update",path:t.toString(),index:t,name:"index",newValue:e,oldValue:r}),a(e,t,e))}}),a(i[t],t,i[t])}},i.push=function(){for(var e,t=0,r=arguments.length;r>t;t++)e=o.length,o.push(arguments[t]),i.defineIndexProperty(e),"function"==typeof n&&n({object:i,type:"add",name:"length",index:e,newValue:o.length,oldValue:e});return o.length},i.pop=function(){if(~o.length){var e=o.length-1,t=o.pop();return delete i[e],"function"==typeof n&&n({object:i,type:"delete",name:"length",index:e,newValue:o.length,oldValue:e}),t}},i.unshift=function(){for(var e=o.length,t=0,r=arguments.length;r>t;t++)o.splice(t,0,arguments[t]),defineIndexProperty(o.length-1);return"function"==typeof n&&n({object:i,type:"add",index:e,name:"length",newValue:o.length,oldValue:e}),o.length},i.shift=function(){var e=o.length;if(~o.length){var t=o.shift();return 0===o.length&&delete i[e],"function"==typeof n&&n({object:i,type:"delete",index:e,name:"length",newValue:o.length,oldValue:e}),t}},i.slice=function(t,r,a){var n=o.slice(t,r),i=new e.jqx.observableArray(n,a);return i},i.splice=function(t,r,a){var s,l=[];for(t=~t?t:o.length-t,r=(null==r?o.length-t:r)||0;r--;)s=o.splice(t,1)[0],l.push(s),delete i[o.length],"function"==typeof n&&n({object:i,type:"delete",index:t,name:"length",newValue:-1,oldValue:t});for(var d=2,c=arguments.length;c>d;d++)o.splice(t,0,arguments[d]),defineIndexProperty(o.length-1),"function"==typeof n&&n({object:i,type:"add",index:t,name:"length",newValue:o.length-1,oldValue:t}),t++;var u=new e.jqx.observableArray(l,a);return u},Object.defineProperty(i,"length",{configurable:!1,enumerable:!0,get:function(){return o.length},set:function(e){var t=Number(e);if(!(t%1===0&&t>=0))throw new RangeError("Invalid array length");return t<o.length?i.splice(t):t>o.length&&i.push.apply(i,new Array(t-o.length)),e}}),e.jqx.observableArray.prototype.fromArray=function(t,r){var a=new e.jqx.observableArray(t,r);return a},e.jqx.observableArray.prototype.clone=function(){var t=new e.jqx.observableArray(o,r);return t.observing=i.observing,t.changes=i.changes,t.notifier=i.notifier,t},i.remove=function(e){if(0>e||e>=i.length)throw new Error("Invalid index : "+e);if(i.hasOwnProperty(e)){var t=i[e];return i[e]=void 0,o[e]=void 0,"function"==typeof n&&n({object:i,type:"delete",index:e,name:"index",newValue:void 0,oldValue:t}),!0}return!1},i.concat=function(t,r){var a=o.concat(t),n=new e.jqx.observableArray(a,r);return n},Object.getOwnPropertyNames(Array.prototype).forEach(function(e){if(!(e in i)){var t=function(){var t=i.observing;i.observing=!1;var r=o[e],a=r.apply(o,arguments);return i.observing=t,a};Object.defineProperty(i,e,{configurable:!1,enumerable:!0,writeable:!1,value:t})}}),i.set=function(t,r){if("string"==e.type(t)&&t.split(".").length>1){for(var a=t.split("."),n=i,o=0;o<a.length;o++){if(0===o&&a[o]>=i.length)throw new Error("Invalid Index: "+t);o<a.length-1?n=n[a[o]]:n[a[o]]=r}return!0}return t>=i.length?i.push(r):i[t]=r,!0},i.get=function(e){return i[e]},t instanceof Array&&i.push.apply(i,t),n=function(){i.observing&&(arguments&&arguments[0]&&i.changes.push(arguments[0]),r&&r.apply(i,arguments),i.notifier&&i.notifier.apply(i,arguments))},i},e.jqx.formatDate=function(t,r,a){var n=e.jqx.dataFormat.formatdate(t,r,a);return n},e.jqx.formatNumber=function(t,r,a){var n=e.jqx.dataFormat.formatnumber(t,r,a);return n},e.jqx.dataAdapter=function(t,r){if(void 0!=t&&(void 0!==t.dataFields&&(t.datafields=t.dataFields),void 0!==t.dataType&&(t.datatype=t.dataType),void 0!==t.localData&&(t.localdata=t.localData),void 0!==t.sortColumn&&(t.sortcolumn=t.sortColumn),void 0!==t.sortDirection&&(t.sortdirection=t.sortDirection),void 0!==t.sortOrder&&(t.sortdirection=t.sortOrder),void 0!==t.formatData&&(t.formatdata=t.formatData),void 0!==t.processData&&(t.processdata=t.processData),void 0!==t.pageSize&&(t.pagesize=t.pageSize),void 0!==t.pageNum&&(t.pagenum=t.pageNum),void 0!==t.updateRow&&(t.updaterow=t.updateRow),void 0!==t.addRow&&(t.addrow=t.addRow),void 0!==t.deleteRow&&(t.deleterow=t.deleteRow),void 0!==t.contentType&&(t.contenttype=t.contentType),void 0!=t.totalRecords&&(t.totalrecords=t.totalRecords),void 0!=t.loadError&&(t.loadError=t.loadError),void 0!=t.sortComparer&&(t.sortcomparer=t.sortComparer)),this._source=t,this._options=r||{},void 0!=t.beforeLoadComplete&&(this._options.beforeLoadComplete=this._source.beforeLoadComplete),void 0!=t.downloadComplete&&(this._options.downloadComplete=this._source.downloadComplete),void 0!=t.loadComplete&&(this._options.loadComplete=this._source.loadComplete),void 0!=t.autoBind&&(this._options.downloadComplete=this._source.autoBind),void 0!=t.formatData&&(this._options.formatData=this._source.formatData),void 0!=t.loadError&&(this._options.loadError=this._source.loadError),void 0!=t.beforeSend&&(this._options.beforeSend=this._source.beforeSend),void 0!=t.contentType&&(this._options.contentType=this._source.contentType),void 0!=t.async&&(this._options.async=this._source.async),void 0!=t.loadServerData&&(this._options.loadServerData=this._source.loadServerData),void 0!=t.uniqueDataFields&&(this._options.uniqueDataFields=this._source.uniqueDataFields),this.records=new Array,this._downloadComplete=new Array,this._bindingUpdate=new Array,void 0!=t&&null!=t.localdata&&"function"==typeof t.localdata){var a=t.localdata();if(null!=a){t._localdata=t.localdata;var n=this;t._localdata.subscribe&&(n._oldlocaldata=[],t._localdata.subscribe(function(t){var r=function(t){return e.isArray(t)?e.makeArray(r(e(t))):e.extend(!0,{},t)};(0==n.suspendKO||void 0==n.suspendKO||0==n._oldlocaldata.length)&&(n._oldlocaldata=r(t))},t._localdata,"beforeChange"),t._localdata.subscribe(function(e){if(0==n.suspendKO||void 0==n.suspendKO){var r="";n._oldrecords=n.records,0==n._oldlocaldata.length&&(t.localdata=t._localdata()),0==n._oldlocaldata.length?r="change":e&&(n._oldlocaldata.length==e.length&&(r="update"),n._oldlocaldata.length>e.length&&(r="remove"),n._oldlocaldata.length<e.length&&(r="add")),n.dataBind(null,r)}},t._localdata,"change"),n._knockoutdatasource=!0),t.localdata=a}}1==this._options.autoBind&&this.dataBind()},e.jqx.dataAdapter.prototype={getrecords:function(){return this.records},beginUpdate:function(){this.isUpdating=!0},endUpdate:function(e){this.isUpdating=!1,0!=e&&(this._changedrecords&&this._changedrecords.length>0?(this.callBindingUpdate("update"),this._changedrecords=[]):this.dataBind(null,""))},formatDate:function(t,r,a){var n=e.jqx.dataFormat.formatdate(t,r,a);return n},formatNumber:function(t,r,a){var n=e.jqx.dataFormat.formatnumber(t,r,a);return n},dataBind:function(t,r){if(1!=this.isUpdating){var a=this._source;if(a){a.generatedfields&&(a.datafields=null,a.generatedfields=null),e.jqx.dataFormat.datescache=new Array,null!=a.dataFields&&(a.datafields=a.dataFields),void 0==a.recordstartindex&&(a.recordstartindex=0),void 0==a.recordendindex&&(a.recordendindex=0),void 0==a.loadallrecords&&(a.loadallrecords=!0),void 0==a.root&&(a.root=""),void 0==a.record&&(a.record=""),void 0!=a.sort&&(this.sort=a.sort),this.filter=void 0!=a.filter?a.filter:null,void 0!=a.sortcolumn&&(this.sortcolumn=a.sortcolumn),void 0!=a.sortdirection&&(this.sortdirection=a.sortdirection),void 0!=a.sortcomparer&&(this.sortcomparer=a.sortcomparer),this.records=new Array;var n=this._options||{};if(this.virtualmode=void 0!=n.virtualmode?n.virtualmode:!1,this.totalrecords=void 0!=n.totalrecords?n.totalrecords:0,this.pageable=void 0!=n.pageable?n.pageable:!1,this.pagesize=void 0!=n.pagesize?n.pagesize:0,this.pagenum=void 0!=n.pagenum?n.pagenum:0,this.cachedrecords=void 0!=n.cachedrecords?n.cachedrecords:new Array,this.originaldata=new Array,this.recordids=new Array,this.updaterow=void 0!=n.updaterow?n.updaterow:null,this.addrow=void 0!=n.addrow?n.addrow:null,this.deleterow=void 0!=n.deleterow?n.deleterow:null,this.cache=void 0!=n.cache?n.cache:!1,this.unboundmode=!1,void 0!=a.formatdata&&(n.formatData=a.formatdata),void 0!=a.data&&(void 0==n.data&&(n.data={}),e.extend(n.data,a.data)),this.mapChar=void 0!=a.mapchar?a.mapchar?a.mapchar:">":n.mapChar?n.mapChar:">",(n.unboundmode||a.unboundmode)&&(this.unboundmode=n.unboundmode||a.unboundmode),void 0!=a.cache&&(this.cache=a.cache),this.koSubscriptions)for(var i=0;i<this.koSubscriptions.length;i++)this.koSubscriptions[i].dispose();this.koSubscriptions=new Array,this.pagenum<0&&(this.pagenum=0);var o=this,s=a.datatype;("csv"===a.datatype||"tab"===a.datatype||"tsv"===a.datatype||"text"==a.datatype)&&(s="text");var l=void 0!=n.async?n.async:!0;switch(void 0!=a.async&&(l=a.async),s){case"local":case"array":case"observablearray":case"observableArray":default:if(void 0==a.localdata&&a.length){a.localdata=new Array;for(var d=0;d<a.length;d++)a.localdata[a.localdata.length]=a[d],a[d].uid=d}a.beforeprocessing&&e.isFunction(a.beforeprocessing)&&a.beforeprocessing(a.localdata);var c=a.localdata.length;if(this.totalrecords=this.virtualmode?a.totalrecords||c:c,this.unboundmode){this.totalrecords=this.unboundmode?a.totalrecords||c:c;var u=a.datafields?a.datafields.length:0;if(u>0)for(var d=0;d<this.totalrecords;d++){for(var h={},f=0;u>f;f++)h[a.datafields[f].name]="";h.uid=d,a.localdata[a.localdata.length]=h}}void 0==this.totalrecords&&(this.totalrecords=0);var u=a.datafields?a.datafields.length:0,p=function(t,r){for(var n={},i=0;r>i;i++){var s=a.datafields?a.datafields[i]:{},l="";if(void 0!=s&&null!=s){if(s.map){if(e.isFunction(s.map))l=s.map(t);else{var d=s.map.split(o.mapChar);if(d.length>0){for(var c=t,u=0;u<d.length;u++)c&&(c=c[d[u]]);l=c}else l=t[s.map]}void 0!=l&&null!=l?l=l.toString():void 0==l&&null!=l&&(l="")}""==l&&(l=t[s.name],void 0!=l&&null!=l&&(a._localdata&&l.subscribe?l=l():"array"!=s.type&&(l=l.toString()))),l=o.getvaluebytype(l,s),void 0!=s.displayname?n[s.displayname]=l:n[s.name]=l}}return n};if(a._localdata){this._changedrecords=[],this.records=new Array;var g=a._localdata();if(e.each(g,function(t,n){if("string"==typeof n)o.records.push(n);else{var i={},s=0,l=this;e.each(this,function(r){var n=null,d="string",c=r;if(u>0){for(var h=!1,f=!1,p=0;u>p;p++){var g=a.datafields[p];if(void 0!=g&&g.name==r){h=!0,n=g.map,d=g.type,c=g.name;break}if(void 0!=g&&g.map&&g.map.indexOf(r)>=0){h=!0,n=g.map,d=g.type,c=g.name,f=!0;var v=l[r];if(null!=n){var m=n.split(o.mapChar);if(m.length>0){for(var y=l,b=0;b<m.length;b++)y=y[m[b]];v=y}else v=l[n]}"string"!=d&&(v=o.getvaluebytype(v,{type:d})),i[c]=v,void 0!=i[c]&&(s+=i[c].toString().length+i[c].toString().substr(0,1))}}if(!h)return!0;if(f)return!0}var x=e.isFunction(l[r]);if(x){var v=l[r]();if("string"!=d&&(v=o.getvaluebytype(v,{type:d})),i[r]=v,l[r].subscribe){var _=t;o.koSubscriptions[o.koSubscriptions.length]=l[r].subscribe(function(e){var t=_;i[r]=e;var a={index:t,oldrecord:i,record:i};return o._changedrecords.push(a),o.isUpdating?void 0:(o.callBindingUpdate("update"),o._changedrecords=[],!1)})}}else{var v=l[r];if(null!=n){var m=n.split(o.mapChar);if(m.length>0){for(var y=l,b=0;b<m.length;b++)y=y[m[b]];v=y}else v=l[n]}"string"!=d&&(v=o.getvaluebytype(v,{type:d})),i[c]=v,void 0!=i[c]&&(s+=i[c].toString().length+i[c].toString().substr(0,1))}});var d=o.getid(a.id,l,t);if(i.uid=d,o.records.push(i),i._koindex=s,o._oldrecords){var c=o.records.length-1;if("update"==r&&o._oldrecords[c]._koindex!=s){var h={index:c,oldrecord:o._oldrecords[c],record:i};o._changedrecords.push(h)}}}}),"add"==r)for(var c=o.records.length,d=0;c>d;d++){for(var h=o.records[d],v=!1,m=0;m<o._oldrecords.length;m++)if(o._oldrecords[m]._koindex===h._koindex){v=!0;break}v||o._changedrecords.push({index:d,oldrecord:null,record:h,position:0!=d?"last":"first"})}else if("remove"==r)for(var c=o._oldrecords.length,d=0;c>d;d++){var y=o._oldrecords[d];o.records[d]?o.records[d]._koindex!=y._koindex&&o._changedrecords.push({index:d,oldrecord:y,record:null}):o._changedrecords.push({index:d,oldrecord:y,record:null})}}else if(e.isArray(a.localdata))if(0==u){var b=0,x=new Array;e.each(a.localdata,function(t,r){var n=e.extend({},this);if("string"==typeof r)return o.records=a.localdata,!1;var i=o.getid(a.id,n,t);if("object"==typeof i&&(i=t),n.uid=i,0==t){for(var s in this){b++;var l=e.type(this[s]);x.push({name:s,type:l})}u=b,a.datafields=x,a.generatedfields=x}if(u>0){var d=p(n,u);d.uid=i,o.records[o.records.length]=d}else o.records[o.records.length]=n})}else e.each(a.localdata,function(t){var r=this,n=p(r,u),i=o.getid(a.id,n,t);"object"==typeof i&&(i=t);var r=e.extend({},n);r.uid=i,o.records[o.records.length]=r});else{this.records=new Array;var b=0,x=new Array;e.each(a.localdata,function(t){var r=o.getid(a.id,this,t);if(0==u&&!("string"==typeof this||this instanceof String)){for(var n in this){b++;var i=e.type(this[n]);x.push({name:n,type:i})}u=b,a.datafields=x,a.generatedfields=x}if(u>0){var s=this,l=p(s,u);l.uid=r,o.records[o.records.length]=l}else this.uid=r,o.records[o.records.length]=this})}if(this.originaldata=a.localdata,this.cachedrecords=this.records,this.addForeignValues(a),n.uniqueDataFields){var _=this.getUniqueRecords(this.records,n.uniqueDataFields);this.records=_,this.cachedrecords=_}if(n.beforeLoadComplete){var w=n.beforeLoadComplete(o.records,this.originaldata);void 0!=w&&(o.records=w,o.cachedrecords=w)}if(n.autoSort&&n.autoSortField){var O=Object.prototype.toString;Object.prototype.toString="function"==typeof field?field:function(){return this[n.autoSortField]},o.records.sort(function(t,r){if(void 0===t&&(t=null),void 0===r&&(r=null),null===t&&null===r)return 0;if(null===t&&null!==r)return 1;if(null!==t&&null===r)return-1;if(t=t.toString(),r=r.toString(),null===t&&null===r)return 0;if(null===t&&null!==r)return 1;if(null!==t&&null===r)return-1;if(e.jqx.dataFormat.isNumber(t)&&e.jqx.dataFormat.isNumber(r))return r>t?-1:t>r?1:0;if(e.jqx.dataFormat.isDate(t)&&e.jqx.dataFormat.isDate(r))return r>t?-1:t>r?1:0;e.jqx.dataFormat.isNumber(t)||e.jqx.dataFormat.isNumber(r)||(t=String(t).toLowerCase(),r=String(r).toLowerCase());try{if(r>t)return-1;if(t>r)return 1}catch(a){}return 0}),Object.prototype.toString=O}o.loadedData=a.localdata,o.buildHierarchy(),e.isFunction(n.loadComplete)&&n.loadComplete(a.localdata,o.records);break;case"json":case"jsonp":case"xml":case"xhtml":case"script":case"text":if(null!=a.localdata){if(e.isFunction(a.beforeprocessing)&&a.beforeprocessing(a.localdata),"xml"===a.datatype?o.loadxml(a.localdata,a.localdata,a):"text"===s?o.loadtext(a.localdata,a):o.loadjson(a.localdata,a.localdata,a),o.addForeignValues(a),n.uniqueDataFields){var _=o.getUniqueRecords(o.records,n.uniqueDataFields);o.records=_,o.cachedrecords=_}if(n.beforeLoadComplete){var w=n.beforeLoadComplete(o.records,this.originaldata);void 0!=w&&(o.records=w,o.cachedrecords=w)}return o.loadedData=a.localdata,o.buildHierarchy.call(o),e.isFunction(n.loadComplete)&&n.loadComplete(a.localdata,o.records),void o.callBindingUpdate(r)}var S=void 0!=n.data?n.data:{};if(a.processdata&&a.processdata(S),e.isFunction(n.processData)&&n.processData(S),e.isFunction(n.formatData)){var L=n.formatData(S);void 0!=L&&(S=L)}var A="application/x-www-form-urlencoded";n.contentType&&(A=n.contentType);var N="GET";if(a.type&&(N=a.type),n.type&&(N=n.type),a.url&&a.url.length>0)e.isFunction(n.loadServerData)?o._requestData(S,a,n):this.xhr=e.jqx.data.ajax({dataType:s,cache:this.cache,type:N,url:a.url,async:l,timeout:a.timeout,contentType:A,data:S,success:function(t,r,i){if(e.isFunction(a.beforeprocessing)){var l=a.beforeprocessing(t,r,i);void 0!=l&&(t=l)}if(e.isFunction(n.downloadComplete)){var l=n.downloadComplete(t,r,i);void 0!=l&&(t=l)}if(null==t)return o.records=new Array,o.cachedrecords=new Array,o.originaldata=new Array,o.callDownloadComplete(),void(e.isFunction(n.loadComplete)&&n.loadComplete(new Array));var d=t;if(t.records&&(d=t.records),void 0!=t.totalrecords?a.totalrecords=t.totalrecords:void 0!=t.totalRecords&&(a.totalrecords=t.totalRecords),"xml"===a.datatype?o.loadxml(null,d,a):"text"===s?o.loadtext(d,a):o.loadjson(null,d,a),o.addForeignValues(a),n.uniqueDataFields){var c=o.getUniqueRecords(o.records,n.uniqueDataFields);o.records=c,o.cachedrecords=c}if(n.beforeLoadComplete){var u=n.beforeLoadComplete(o.records,t);void 0!=u&&(o.records=u,o.cachedrecords=u)}o.loadedData=t,o.buildHierarchy.call(o),o.callDownloadComplete(),e.isFunction(n.loadComplete)&&n.loadComplete(t,r,i,o.records)},error:function(t,r,i){e.isFunction(a.loaderror)&&a.loaderror(t,r,i),e.isFunction(n.loadError)&&n.loadError(t,r,i),t=null,o.callDownloadComplete()},beforeSend:function(t,r){e.isFunction(n.beforeSend)&&n.beforeSend(t,r),e.isFunction(a.beforesend)&&a.beforesend(t,r)}});else if(o.buildHierarchy(new Array),o.callDownloadComplete(),e.isFunction(n.loadComplete)){if(!T)var T={};n.loadComplete(T)}}this.callBindingUpdate(r)}}},buildHierarchy:function(e){var t=this._source,r=new Array;if(t.datafields){if(t.hierarchy&&!t.hierarchy.reservedNames)t.hierarchy.reservedNames={leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"};else if(t.hierarchy){var a=t.hierarchy.reservedNames;a.leaf||(a.leaf="leaf"),a.parent||(a.parent="parent"),a.expanded||(a.expanded="expanded"),a.checked||(a.checked="checked"),a.selected||(a.selected="selected"),a.level||(a.level="level"),a.data||(a.data="data")}if(t.hierarchy){var n=this,a=t.hierarchy.reservedNames;if(t.hierarchy.root){if("xml"==t.dataType){var r=this.getRecordsHierarchy("uid","parentuid","records",null,e);return this.hierarchy=r,r}this.hierarchy=this.records;for(var i=t.hierarchy.root,o=0;o<this.records.length;o++){var s=this.records[o];if(s){var l=function(e){if(t.hierarchy.record)e.records=e[i][t.hierarchy.record];else{var r=i.split(n.mapChar),o=null;if(r.length>1){for(var s=e,l=0;l<r.length;l++)void 0!=s&&(s=s[r[l]]);o=s}else o=e[i];e.records=o}(null==e.records||e.records&&0==e.records.length)&&(e[a.leaf]=!0)};l(s),s[a.level]=0;var d=this.getid(t.id,s,o);s.uid=d,s[a.parent]=null,s[a.data]=s,void 0===s[a.expanded]&&(s[a.expanded]=!1);var c=function(e,r){if(!r)return void(e.records=new Array);for(var i=0;i<r.length;i++){var o=r[i];if(o){l(o),o[a.level]=e[a.level]+1,o[a.parent]=e,o[a.data]=o;var s=n.getid(t.id,o,i);o.uid=s==i&&null==t.id?e.uid+"_"+s:s,void 0===o[a.expanded]&&(o[a.expanded]=!1),c(o,o.records)}}};c(s,s.records)}}return this.hierarchy}if(t.hierarchy.keyDataField&&t.hierarchy.parentDataField){var r=this.getRecordsHierarchy(t.hierarchy.keyDataField.name,t.hierarchy.parentDataField.name,"records",null,e);return this.hierarchy=r,r}if(t.hierarchy.groupingDataFields){for(var u=new Array,o=0;o<t.hierarchy.groupingDataFields.length;o++)u.push(t.hierarchy.groupingDataFields[o].name);var r=this.getGroupedRecords(u,"records","label",null,"data",null,"parent",e);return this.hierarchy=r,r}}}},addRecord:function(e,t,r,a){var n=this,i=function(){return{leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"}};if(void 0!=e){if(void 0==r){if(this.hierarchy&&this.hierarchy.length>=0&&(this._source.hierarchy||a)){var o=n._source&&n._source.hierarchy?n._source.hierarchy.reservedNames:null;null==o&&(o=i()),e[o.level]=0,"last"==t?this.hierarchy.push(e):"number"==typeof t&&isFinite(t)?this.hierarchy.splice(t,0,e):this.hierarchy.splice(0,0,e)}else"last"==t?this.records.push(e):"number"==typeof t&&isFinite(t)?this.records.splice(t,0,e):this.records.splice(0,0,e);return!0}if(this.hierarchy.length>0){var s=function(a){if(a)for(var o=0;o<a.length;o++){var l=a[o];if(l.uid==r){var d=n._source&&n._source.hierarchy?n._source.hierarchy.reservedNames:null;return null==d&&(d=i()),e[d.parent]=l,e[d.level]=l[d.level]+1,l.records?l[d.leaf]=!1:(l.records=new Array,l[d.leaf]=!1),"last"==t?l.records.push(e):"number"==typeof t&&isFinite(t)?l.records.splice(t,0,e):l.records.splice(0,0,e),!0}l.records&&s(l.records)}};s(this.hierarchy)}}return!1},deleteRecord:function(e){var t=this;if(this.hierarchy.length>0){var r=function(a){if(a)for(var n=0;n<a.length;n++){var i=a[n];if(i.uid==e){a.splice(n,1),t.recordids[e]&&delete t.recordids[e];var o=function(e){for(var r=0;r<e.length;r++){for(var a=e[r].uid,n=0;n<t.records.length;n++){var i=t.records[n];if(i.uid==a){t.records.splice(n,1);break}}e[r].records&&o(e[r].records)}};i.records&&o(i.records);for(var s=0;s<t.records.length;s++){var i=t.records[s];if(i.uid==e){t.records.splice(s,1);break}}return!0}i.records&&r(i.records)}};r(this.hierarchy)}else for(var a=0;a<this.records.length;a++){var n=this.records[a];if(n.uid==e)return this.records.splice(a,1),!0}return!1},addForeignValues:function(e){for(var t=this,r=e.datafields?e.datafields.length:0,a=0;r>a;a++){var n=e.datafields[a];if(void 0!=n)if(void 0!=n.values){void 0==n.value&&(n.value=n.name),void 0==n.values.value&&(n.values.value=n.value);var i,o,s=new Array;t.pageable&&t.virtualmode?(i=t.pagenum*t.pagesize,o=i+t.pagesize,o>t.totalrecords&&(o=t.totalrecords)):t.virtualmode?(i=e.recordstartindex,o=e.recordendindex,o>t.totalrecords&&(o=t.totalrecords)):(i=0,o=t.records.length);for(var l=i;o>l;l++){var d=t.records[l],c=n.name,u=d[n.value];if(void 0!=s[u])d[c]=s[u];else for(var h=0;h<n.values.source.length;h++){var f=n.values.source[h],p=f[n.values.value];if(void 0==p&&(p=f.uid),p==u){var g=f[n.values.name];d[c]=g,s[u]=g;break}}}}else if(void 0!=n.value)for(var l=0;l<t.records.length;l++){var d=t.records[l];d[n.name]=d[n.value]}}},abort:function(){this.xhr&&4!=this.xhr.readyState&&(this.xhr.abort(),me.callDownloadComplete())},_requestData:function(t,r,a){var n=this,i=function(t){if(t.totalrecords&&(r.totalrecords=t.totalrecords,n.totalrecords=t.totalrecords),t.records&&(n.records=t.records,n.cachedrecords=t.records),n.addForeignValues(r),a.uniqueDataFields){var i=n.getUniqueRecords(n.records,a.uniqueDataFields);n.records=i,n.cachedrecords=i}if(a.beforeLoadComplete){var o=a.beforeLoadComplete(n.records,data);void 0!=o&&(n.records=o,n.cachedrecords=o)}for(var s=0;s<n.records.length;s++){var l=n.records[s];void 0!=l&&void 0==l.uid&&(l.uid=n.getid(r.id,l,s))}n.buildHierarchy.call(n),e.isFunction(a.loadComplete)&&a.loadComplete(t),n.callDownloadComplete()};a.loadServerData(t,r,i)},getUniqueRecords:function(e,t){if(e&&t)for(var r=e.length,a=t.length,n=new Array,i=new Array,o=0;r>o;o++){var s=e[o],l="";if(void 0!=s){for(var d=0;a>d;d++){var c=t[d];l+=s[c]+"_"}i[l]||(n[n.length]=s),i[l]=!0}}return n},getAggregatedData:function(t,r,a,n){var i=a;i||(i=this.records);var o={},s=new Array,l=i.length;if(0!=l&&void 0!=l){for(var d=0;l>d;d++)for(var c=i[d],u=0;u<t.length;u++){var h=t[u],f=c[h.name];if(h.aggregates){o[h.name]=o[h.name]||{},s[h.name]=s[h.name]||0,s[h.name]++;var p=function(t){for(obj in t){var r=o[h.name][obj];null==r&&(o[h.name][obj]=0,r=0),e.isFunction(t[obj])&&(r=t[obj](r,f,h.name,c,n)),o[h.name][obj]=r}},g=parseFloat(f);g=isNaN(g)?!1:!0,g&&(f=parseFloat(f)),"number"==typeof f&&isFinite(f)?e.each(h.aggregates,function(){var e=o[h.name][this];if(null==e&&(e=0,"min"==this&&(e=9999999999999),"max"==this&&(e=-9999999999999)),"sum"==this||"avg"==this||"stdev"==this||"stdevp"==this||"var"==this||"varp"==this)e+=parseFloat(f);else if("product"==this)0==d?e=parseFloat(f):e*=parseFloat(f);else if("min"==this)e=Math.min(e,parseFloat(f));else if("max"==this)e=Math.max(e,parseFloat(f));else if("count"==this)e++;else if("object"==typeof this)return void p(this);o[h.name][this]=e}):e.each(h.aggregates,function(){if("min"==this||"max"==this||"count"==this||"product"==this||"sum"==this||"avg"==this||"stdev"==this||"stdevp"==this||"var"==this||"varp"==this){if(null===f)return!0;var e=o[h.name][this];return null==e&&(e=0),o[h.name][this]=e,!0}"object"==typeof this&&p(this)})}}for(var u=0;u<t.length;u++){var h=t[u];if(o[h.name]||(o[h.name]={},e.each(h.aggregates,function(){o[h.name][this]=0})),void 0!=o[h.name].avg){var f=o[h.name].avg,v=s[h.name];o[h.name].avg=0===v||void 0==v?0:f/v}else void 0!=o[h.name].count&&(o[h.name].count=l);(o[h.name].stdev||o[h.name].stdevp||o[h.name]["var"]||o[h.name].varp)&&e.each(h.aggregates,function(){if("stdev"==this||"var"==this||"varp"==this||"stdevp"==this){for(var e=o[h.name][this],t=l,r=e/l,a=0,n=0;l>n;n++){var s=i[n],d=s[h.name];a+=(d-r)*(d-r)}var c="stdevp"==this||"varp"==this?t:t-1;0==c&&(c=1),"var"==this||"varp"==this?o[h.name][this]=a/c:("stdevp"==this||"stdev"==this)&&(o[h.name][this]=Math.sqrt(a/c))}}),h.formatStrings&&e.each(h.aggregates,function(t){var a=h.formatStrings[t];if(a)if("min"==this||"max"==this||"count"==this||"product"==this||"sum"==this||"avg"==this||"stdev"==this||"stdevp"==this||"var"==this||"varp"==this){var n=o[h.name][this];o[h.name][this]=e.jqx.dataFormat.formatnumber(n,a,r)}else if("object"==typeof this)for(obj in this){var n=o[h.name][obj];o[h.name][obj]=e.jqx.dataFormat.formatnumber(n,a,r)}})}return o}},bindDownloadComplete:function(e,t){this._downloadComplete[this._downloadComplete.length]={id:e,func:t}},unbindDownloadComplete:function(e){for(var t=0;t<this._downloadComplete.length;t++)if(this._downloadComplete[t].id==e){this._downloadComplete[t].func=null,this._downloadComplete.splice(t,1);break}},callDownloadComplete:function(){for(var e=0;e<this._downloadComplete.length;e++){var t=this._downloadComplete[e];null!=t.func&&t.func()}},setSource:function(e){this._source=e},generatekey:function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},getGroupedRecords:function(t,r,a,n,i,o,s,l,d){var c=this;d||(d=0);for(var u=new Array,h=0;h<t.length;h++)u[h]=c.generatekey();r||(r="items"),a||(a="group"),i||(i="record"),s||(s="parentItem"),void 0===o&&(o="value");{var f=new Array,p=0,g=new Array,v=t.length;new Array}if(!l)var l=this.records;for(var m=l.length,y=function(t){var r=t;return n&&e.each(n,function(){this.name&&this.map&&(r[this.map]=r[this.name])}),r},b=0;m>b;b++){var x=y(l[b]);id=x[c.uniqueId];var _=new Array,w=0;for(h=0;v>h;h++){var O=t[h],S=x[O];null!=S&&(_[w++]={value:S,hash:u[h]})}if(_.length!=v)break;for(var L=null,A="",N=-1,T=0;T<_.length;T++){N++;var E=_[T].value,j=_[T].hash;if(A=A+"_"+j+"_"+E,void 0==g[A]||null==g[A]){if(null==L){L={level:0},L[s]=null,L[a]=E,L[i]=x,L.expanded=void 0!==x.expanded?x.expanded:!1,o&&(L[o]=x[o]),L[r]=new Array;var M=f.length+d;(!this._source.id||"number"==typeof x.uid||isFinite(x.uid))&&(M="Row"+M),L.uid=M,f[p++]=L
}else{var C={level:L.level+1};C[s]=L,C[a]=E,C[r]=new Array,C[i]=x,C.expanded=void 0!==x.expanded?x.expanded:!1,o&&(C[o]=x[o]),C.uid=L.uid+"_"+L[r].length,L[r][L[r].length]=C,L=C}g[A]=L}else L=g[A]}x&&(x.leaf=!0),null!=L?(null==this._source.id&&(x.uid=L.uid+"_"+L[r].length),x[s]=L,x.level=L.level+1,L[r][L[r].length]=x):x.uid||(x.uid=this.generatekey())}return f},getRecordsHierarchy:function(t,r,a,n,i){var o=new Array,s=this.records;if(i&&(s=i),0==this.records.length)return null;for(var l=null!=a?a:"items",d=[],c=s,u=c.length,h=this._source&&this._source.hierarchy?this._source.hierarchy.reservedNames:null,f=function(t){var r=t;return n&&e.each(n,function(){this.name&&this.map&&(r[this.map]=r[this.name])}),r},p=0;u>p;p++){var g=e.extend({},c[p]),v=g[r],m=g[t];d[m]={parentid:v,item:g}}for(var p=0;u>p;p++){var g=e.extend({},c[p]),v=g[r],m=g[t];if(void 0!=d[v]){var g={parentid:v,item:d[m].item},y=d[v].item;y[l]||(y[l]=[]);var b=y[l].length,x=g.item;h?void 0==x[h.parent]&&(x[h.parent]=y):void 0==x.parent&&(x.parent=y);var _=f(x);y[l][b]=_,d[v].item=y,d[m]=g}else{var x=d[m].item;h?void 0==x[h.parent]&&(x[h.parent]=null):void 0==x.parent&&(x.parent=null);var _=f(x);h?_[h.level]=0:_.level=0,o[o.length]=_}}if(0!=o.length){var w=function(e,t){for(var r=0;r<t.length;r++){h?t[r][h.level]=e:t[r].level=e;var a=t[r][l];a&&a.length>0?w(e+1,a):h?t[r][h.leaf]=!0:t[r].leaf=!0}};w(0,o)}return o},bindBindingUpdate:function(e,t){this._bindingUpdate[this._bindingUpdate.length]={id:e,func:t}},unbindBindingUpdate:function(e){for(var t=0;t<this._bindingUpdate.length;t++)if(this._bindingUpdate[t].id==e){this._bindingUpdate[t].func=null,this._bindingUpdate.splice(t,1);break}},callBindingUpdate:function(e){for(var t=0;t<this._bindingUpdate.length;t++){var r=this._bindingUpdate[t];null!=r.func&&r.func(e)}},getid:function(t,r,a){if(null==t||void 0==t.name||!t.name){if(e(t,r).length>0)return e(t,r).text();if(t&&t.toString().length>0){var n=e(r).attr(t);if(null!=n&&n.toString().length>0)return n;var i=t.split(this.mapChar);if(i.length>1){for(var o=r,s=0;s<i.length;s++)void 0!=o&&(o=o[i[s]]);if(void 0!=o)return o}else if(void 0!=r[t])return r[t]}return a}var n=e(r).attr(t.name);if(null!=n&&n.toString().length>0)return n;if(t.map)try{var n=e(r).attr(t.map);if(null!=n&&n.toString().length>0)return n;if(e(t.map,r).length>0)return e(t.map,r).text();if(e(t.name,r).length>0)return e(t.name,r).text()}catch(l){return a}},loadjson:function(t,r,a){"string"==typeof t&&(t=e.parseJSON(t)),void 0==a.root&&(a.root=""),void 0==a.record&&(a.record="");var t=t||r;t||(t=[]);var n=this;if(""!=a.root){var i=a.root.split(n.mapChar);if(i.length>1){for(var o=t,s=0;s<i.length;s++)void 0!=o&&(o=o[i[s]]);t=o}else if(void 0!=t[a.root]?t=t[a.root]:e.each(t,function(){return this==a.root?(t=this,!1):void(void 0!=this[a.root]&&(t=this[a.root]))}),!t){var i=a.root.split(n.mapChar);if(i.length>0){for(var o=t,s=0;s<i.length;s++)void 0!=o&&(o=o[i[s]]);t=o}}}else if(!t.length)for(obj in t)if(e.isArray(t[obj])){t=t[obj];break}if(null!=t&&void 0==t.length&&(t=e.makeArray(t)),null==t||void 0==t.length)return void alert("JSON Parse error.");if(0==t.length)return void(this.totalrecords=0);var l=t.length;this.totalrecords=this.virtualmode?a.totalrecords||l:l,this.records=new Array,this.originaldata=new Array;var d=this.records,c=this.pageable?this.pagesize*this.pagenum:a.recordstartindex;this.recordids=new Array,a.loadallrecords&&(c=0,l=this.totalrecords);var u=0;this.virtualmode&&(c=this.pageable?this.pagesize*this.pagenum:a.recordstartindex,u=c,c=0,l=this.totalrecords);var h=a.datafields?a.datafields.length:0;if(0==h){var f=t[0],p=new Array;for(obj in f){var g=obj;p[p.length]={name:g}}a.datafields=p,a.generatedfields=a.datafields,h=p.length}for(var v=c,m=c;l>m;m++){var y=t[m];if(void 0==y)break;if(!a.record||""==a.record||(y=y[a.record],void 0!=y)){var b=this.getid(a.id,y,m);if("object"==typeof b&&(b=m),!this.recordids[b]){this.recordids[b]=y;for(var x={},_=0;h>_;_++){var w=a.datafields[_],O="";if(void 0!=w&&null!=w){if(w.map){if(e.isFunction(w.map))O=w.map(y);else{var i=w.map.split(n.mapChar);if(i.length>0){for(var S=y,s=0;s<i.length;s++)void 0!=S&&(S=S[i[s]]);O=S}else O=y[w.map]}void 0!=O&&null!=O?O=this.getvaluebytype(O,w):void 0==O&&null!=O&&(O="")}if(""==O&&!w.map&&(O=y[w.name],void 0==O&&null!=O&&(O=""),void 0!=w.value&&void 0!=O)){var L=O[w.value];void 0!=L&&(O=L)}if(O=this.getvaluebytype(O,w),void 0!=w.displayname?x[w.displayname]=O:x[w.name]=O,"array"===w.type){var A=function(t){if(t)for(var r=0;r<t.length;r++){var i=t[r];if(i)for(var o=0;h>o;o++){var s=a.datafields[o],l="";if(void 0!=s&&null!=s){if(s.map){if(e.isFunction(s.map))l=s.map(i);else{var d=s.map.split(n.mapChar);if(d.length>0){for(var c=i,u=0;u<d.length;u++)void 0!=c&&(c=c[d[u]]);l=c}else l=i[s.map]}void 0!=l&&null!=l?l=this.getvaluebytype(l,s):void 0==l&&null!=l&&(l="")}if(""==l&&!s.map&&(l=i[s.name],void 0==l&&null!=l&&(l=""),void 0!=s.value&&void 0!=l)){var f=l[s.value];void 0!=f&&(l=f)}l=this.getvaluebytype(l,s),void 0!=s.displayname?i[s.displayname]=l:i[s.name]=l,"array"===s.type&&A.call(this,l)}}}};A.call(this,O)}}}(a.recordendindex<=0||c<a.recordendindex)&&(d[u+v]=e.extend({},x),d[u+v].uid=b,this.originaldata[u+v]=e.extend({},d[m]),v++)}}}this.records=d,this.cachedrecords=this.records},loadxml:function(t,r,a){"string"==typeof t&&(t=r=e(e.parseXML(t)),t=null),void 0==a.root&&(a.root=""),void 0==a.record&&(a.record="");var t;t=e.jqx.browser.msie&&r&&void 0!=r.xml?e(a.root+" "+a.record,e.parseXML(r.xml)):t||e(a.root+" "+a.record,r),t||(t=[]);var n=t.length;if(0!=t.length){this.totalrecords=this.virtualmode?a.totalrecords||n:n,this.records=new Array,this.originaldata=new Array;var i=this.records,o=this.pageable?this.pagesize*this.pagenum:a.recordstartindex;this.recordids=new Array,a.loadallrecords&&(o=0,n=this.totalrecords);var s=0;this.virtualmode&&(o=this.pageable?this.pagesize*this.pagenum:a.recordstartindex,s=o,o=0,n=this.totalrecords);var l=a.datafields?a.datafields.length:0;if(0==l){var d=t[0],c=new Array;for(obj in d){var u=obj;c[c.length]={name:u}}a.datafields=c,a.generatedfields=a.datafields,l=c.length}for(var h=o,f=!1,p=o;n>p;p++){var g=t[p];if(void 0==g)break;var v=this.getid(a.id,g,p);if(!this.recordids[v]){this.recordids[v]=g;var m={},y=!1;a.hierarchy&&a.hierarchy.root&&(y=!0);for(var b=0;l>b;b++){var x=a.datafields[b],_="";if(void 0!=x&&null!=x){if(x.map)if(e.isFunction(x.map))_=x.map(g);else{var w=x.map.indexOf("[");if(0>w)if(_=e(x.map,g),1==_.length)_=_.text();else{f=!0;for(var O=new Array,S=0;S<_.length;S++)O.push(e(_[S]).text());_=O,y&&O.length>0&&(_=O[0])}else{var L=x.map.substring(0,w-1),A=x.map.indexOf("]"),N=x.map.substring(w+1,A);_=e(L,g).attr(N),void 0==_&&(_=e(g).attr(N)),void 0==_&&(_="")}""==_&&(_=e(g).attr(x.map),void 0==_&&(_=""))}if(""==_){if(_=e(x.name,g),1==_.length)_=_.text();else{for(var O=new Array,S=0;S<_.length;S++)O.push(e(_[S]).text());_=O,y&&O.length>0&&(_=O[0])}""==_&&(_=e(g).attr(x.name),void 0==_&&(_="")),""==_&&g.nodeName&&g.nodeName==x.name&&g.firstChild&&(_=e(g.firstChild).text())}_=this.getvaluebytype(_,x),void 0!=x.displayname?m[x.displayname]=_:m[x.name]=_}}(a.recordendindex<=0||o<a.recordendindex)&&(i[s+h]=e.extend({},m),i[s+h].uid=v,this.originaldata[s+h]=e.extend({},i[p]),h++)}}if(a.hierarchy&&a.hierarchy.root)for(var p=o;n>p;p++){var g=t[p],T=i[p];if(e(g).parent().length>0){var v=this.getid(a.id,e(g).parents(a.hierarchy.record+":first"));T.parentuid=v}else T.parentuid=null}this.records=i,this.cachedrecords=this.records}},loadtext:function(t,r){if(null!=t){var a=r.rowDelimiter||this.rowDelimiter||"\n",n=t.split(a),i=n.length,o=t.split("\r");1==i&&o.length>1&&(n=o,i=n.length),this.totalrecords=this.virtualmode?r.totalrecords||i:i,this.records=new Array,this.originaldata=new Array;var s=this.records,l=this.pageable?this.pagesize*this.pagenum:r.recordstartindex;this.recordids=new Array,r.loadallrecords&&(l=0,i=this.totalrecords);var d=0;this.virtualmode&&(l=this.pageable?this.pagesize*this.pagenum:r.recordstartindex,d=l,l=0,i=this.totalrecords);var c=r.datafields.length,u=r.columnDelimiter||this.columnDelimiter;u||(u="tab"===r.datatype||"tsv"===r.datatype?"	":",");for(var h=l;i>h;h++){var f=n[h],p=null;if(!this.recordids[p]){null==r.id&&(p=h,this.recordids[p]=f);for(var g={},v=n[h].split(u),m=0;c>m;m++)if(!(m>=v.length)){var y=r.datafields[m],b=v[m];y.map&&e.isFunction(y.map)&&(b=y.map(f)),y.type&&(b=this.getvaluebytype(b,y));var x=y.map||y.name||m.toString();g[x]=b,null!=r.id&&r.id===y.name&&(p=b,this.recordids[p]=f)}null==p&&(p=h),s[d+h]=e.extend({},g),s[d+h].uid=p,this.originaldata[d+h]=e.extend({},s[h])}}this.records=s,this.cachedrecords=this.records}},getvaluebytype:function(t,r){var a=t;if(null==t)return t;if(e.isArray(t)&&"array"!=r.type){for(var n=0;n<t.length;n++)t[n]=this.getvaluebytype(t[n],r);return t}if("date"==r.type)if("NaN"==t)t="";else{var i=new Date(t);if("string"==typeof t&&r.format){var o=e.jqx.dataFormat.parsedate(t,r.format);null!=o&&(i=o)}t=("NaN"==i.toString()||"Invalid Date"==i.toString())&&e.jqx.dataFormat?e.jqx.dataFormat.tryparsedate(t):i,null==t&&(t=a)}else if("float"==r.type||"number"==r.type||"decimal"==r.type)if("NaN"==t)t="";else{var t=parseFloat(t);isNaN(t)&&(t=a)}else if("int"==r.type||"integer"==r.type){var t=parseInt(t);isNaN(t)&&(t=a)}else("bool"==r.type||"boolean"==r.type)&&(null!=t&&void 0!=t.toLowerCase&&("false"==t.toLowerCase()?t=!1:"true"==t.toLowerCase()&&(t=!0)),t=1==t?!0:0==t&&""!==t?!1:"");return t}},e.jqx.dataFormat={},e.extend(e.jqx.dataFormat,{regexTrim:/^\s+|\s+$/g,regexInfinity:/^[+-]?infinity$/i,regexHex:/^0x[a-f0-9]+$/i,regexParseFloat:/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/,toString:Object.prototype.toString,isBoolean:function(e){return"boolean"==typeof e},isObject:function(t){return t&&("object"==typeof t||e.isFunction(t))||!1},isDate:function(e){return e instanceof Date},arrayIndexOf:function(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,a=e.length;a>r;r++)if(e[r]===t)return r;return-1},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e&&isFinite(e)},isNull:function(e){return null===e},isUndefined:function(e){return"undefined"==typeof e},isValue:function(e){return this.isObject(e)||this.isString(e)||this.isNumber(e)||this.isBoolean(e)},isEmpty:function(t){return!this.isString(t)&&this.isValue(t)?!1:this.isValue(t)?(t=e.trim(t).replace(/\&nbsp\;/gi,"").replace(/\&#160\;/gi,""),""===t):!0},startsWith:function(e,t){return 0===e.indexOf(t)},endsWith:function(e,t){return e.substr(e.length-t.length)===t},trim:function(e){return(e+"").replace(this.regexTrim,"")},isArray:function(e){return"[object Array]"===this.toString.call(e)},defaultcalendar:function(){var e={"/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss",ISO:"yyyy-MM-dd hh:mm:ss",ISO2:"yyyy-MM-dd HH:mm:ss",d1:"dd.MM.yyyy",d2:"dd-MM-yyyy",zone1:"yyyy-MM-ddTHH:mm:ss-HH:mm",zone2:"yyyy-MM-ddTHH:mm:ss+HH:mm",custom:"yyyy-MM-ddTHH:mm:ss.fff",custom2:"yyyy-MM-dd HH:mm:ss.fff"},percentsymbol:"%",currencysymbol:"$",currencysymbolposition:"before",decimalseparator:".",thousandsseparator:","};return e},expandFormat:function(e,t){t=t||"F";var r,a=e.patterns,n=t.length;if(1===n){if(r=a[t],!r)throw"Invalid date format string '"+t+"'.";t=r}else 2===n&&"%"===t.charAt(0)&&(t=t.charAt(1));return t},getEra:function(e,t){if(!t)return 0;if("string"==typeof e)return 0;for(var r,a=e.getTime(),n=0,i=t.length;i>n;n++)if(r=t[n].start,null===r||a>=r)return n;return 0},toUpper:function(e){return e.split(" ").join(" ").toUpperCase()},toUpperArray:function(e){for(var t=[],r=0,a=e.length;a>r;r++)t[r]=this.toUpper(e[r]);return t},getEraYear:function(e,t,r,a){var n=e.getFullYear();return!a&&t.eras&&(n-=t.eras[r].offset),n},toUpper:function(e){return e?e.toUpperCase():""},getDayIndex:function(e,t,r){var a,n=e.days,i=e._upperDays;return i||(e._upperDays=i=[this.toUpperArray(n.names),this.toUpperArray(n.namesAbbr),this.toUpperArray(n.namesShort)]),t=t.toUpperCase(),r?(a=this.arrayIndexOf(i[1],t),-1===a&&(a=this.arrayIndexOf(i[2],t))):a=this.arrayIndexOf(i[0],t),a},getMonthIndex:function(e,t,r){var a=e.months,n=e.monthsGenitive||e.months,i=e._upperMonths,o=e._upperMonthsGen;i||(e._upperMonths=i=[this.toUpperArray(a.names),this.toUpperArray(a.namesAbbr)],e._upperMonthsGen=o=[this.toUpperArray(n.names),this.toUpperArray(n.namesAbbr)]),t=this.toUpper(t);var s=this.arrayIndexOf(r?i[1]:i[0],t);return 0>s&&(s=this.arrayIndexOf(r?o[1]:o[0],t)),s},appendPreOrPostMatch:function(e,t){for(var r=0,a=!1,n=0,i=e.length;i>n;n++){var o=e.charAt(n);switch(o){case"'":a?t.push("'"):r++,a=!1;break;case"\\":a&&t.push("\\"),a=!a;break;default:t.push(o),a=!1}}return r},getTokenRegExp:function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g},formatlink:function(e,t){var r="";return t&&t.target&&(r="target="+t.target),""!=r?"<a "+r+' href="'+e+'">'+e+"</a>":'<a href="'+e+'">'+e+"</a>"},formatemail:function(e){return'<a href="mailto:'+e+'">'+e+"</a>"},formatNumber:function(e,t,r){return this.formatnumber(e,t,r)},formatnumber:function(e,t,r){if((void 0==r||null==r||""==r)&&(r=this.defaultcalendar()),""===t||null===t)return e;this.isNumber(e)||(e*=1);var a;t.length>1&&(a=parseInt(t.slice(1),10));var n={},i=t.charAt(0).toUpperCase();switch(n.thousandsSeparator=r.thousandsseparator,n.decimalSeparator=r.decimalseparator,i){case"D":case"d":case"F":case"f":n.decimalPlaces=a;break;case"N":case"n":n.decimalPlaces=0;break;case"C":case"c":n.decimalPlaces=a,"before"==r.currencysymbolposition?n.prefix=r.currencysymbol:n.suffix=r.currencysymbol;break;case"P":case"p":n.suffix=r.percentsymbol,n.decimalPlaces=a;break;default:throw"Bad number format specifier: "+i}if(this.isNumber(e)){var o,s=0>e,l=e+"",d=n.decimalSeparator?n.decimalSeparator:".";if(this.isNumber(n.decimalPlaces)){var c=n.decimalPlaces,u=Math.pow(10,c);if(l=(e*u).toFixed(0)/u+"",o=l.lastIndexOf("."),c>0)for(0>o?(l+=d,o=l.length-1):"."!==d&&(l=l.replace(".",d));l.length-1-o<c;)l+="0"}else{var l=e+"";o=l.lastIndexOf("."),o>0&&void 0==c&&"."!==d&&(l=l.replace(".",d))}if(n.thousandsSeparator){var h=n.thousandsSeparator;o=l.lastIndexOf(d),o=o>-1?o:l.length;for(var f=l.substring(o),p=-1,g=o;g>0;g--)p++,p%3===0&&g!==o&&(!s||g>1)&&(f=h+f),f=l.charAt(g-1)+f;l=f}return l=n.prefix?n.prefix+l:l,l=n.suffix?l+n.suffix:l}return e},tryparsedate:function(e,t){(void 0==t||null==t)&&(t=this.defaultcalendar());var r=this;if(""==e)return null;if(null==e||e.substring||(e=e.toString()),null!=e&&"/Date("==e.substring(0,6)){var a=/^\/Date\((-?\d+)(\+|-)?(\d+)?\)\/$/,n=new Date(+e.replace(/\/Date\((\d+)\)\//,"$1"));if("Invalid Date"==n){var i=e.match(/^\/Date\((\d+)([-+]\d\d)(\d\d)\)\/$/),n=null;i&&(n=new Date(1*i[1]+36e5*i[2]+6e4*i[3]))}if(null==n||"Invalid Date"==n||isNaN(n)){var o=a.exec(e);if(o){var s=new Date(parseInt(o[1]));if(o[2]){var l=parseInt(o[3]);"-"===o[2]&&(l=-l);var d=s.getUTCMinutes();s.setUTCMinutes(d-l)}if(!isNaN(s.valueOf()))return s}}return n}patterns=t.patterns;for(prop in patterns)if(n=r.parsedate(e,patterns[prop],t)){if("ISO"==prop){var c=r.parsedate(e,patterns.ISO2,t);if(c)return c}return n}if(null!=e){for(var c=null,u=[":","/","-"],h=!0,f=0;f<u.length;f++)-1!=e.indexOf(u[f])&&(h=!1);if(h){var p=new Number(e);if(!isNaN(p))return new Date(p)}}return null},getparseregexp:function(e,t){var r=e._parseRegExp;if(r){var a=r[t];if(a)return a}else e._parseRegExp=r={};for(var n,i=this.expandFormat(e,t).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),o=["^"],s=[],l=0,d=0,c=this.getTokenRegExp();null!==(n=c.exec(i));){var u=i.slice(l,n.index);if(l=c.lastIndex,d+=this.appendPreOrPostMatch(u,o),d%2)o.push(n[0]);else{var h,f=n[0],p=f.length;switch(f){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":h="(\\D+)";break;case"tt":case"t":h="(\\D*)";break;case"yyyy":case"fff":case"ff":case"f":h="(\\d{"+p+"})";break;case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":h="(\\d\\d?)";break;case"zzz":h="([+-]?\\d\\d?:\\d{2})";break;case"zz":case"z":h="([+-]?\\d\\d?)";break;case"/":h="(\\"+e["/"]+")";break;default:throw"Invalid date format pattern '"+f+"'."}h&&o.push(h),s.push(n[0])}}this.appendPreOrPostMatch(i.slice(l),o),o.push("$");var g=o.join("").replace(/\s+/g,"\\s+"),v={regExp:g,groups:s};return r[t]=v},outOfRange:function(e,t,r){return t>e||e>r},expandYear:function(e,t){var r=new Date,a=this.getEra(r);if(100>t){var n=e.twoDigitYearMax;n="string"==typeof n?(new Date).getFullYear()%100+parseInt(n,10):n;var i=this.getEraYear(r,e,a);t+=i-i%100,t>n&&(t-=100)}return t},parsedate:function(e,t,r){(void 0==r||null==r)&&(r=this.defaultcalendar()),e=this.trim(e);var a=r,n=this.getparseregexp(a,t),i=new RegExp(n.regExp).exec(e);if(null===i)return null;for(var o,s=n.groups,l=null,d=null,c=null,u=null,h=null,f=0,p=0,g=0,v=0,m=null,y=!1,b=0,x=s.length;x>b;b++){var _=i[b+1];if(_){var w=s[b],O=w.length,S=parseInt(_,10);switch(w){case"dd":case"d":if(u=S,this.outOfRange(u,1,31))return null;break;case"MMM":case"MMMM":if(c=this.getMonthIndex(a,_,3===O),this.outOfRange(c,0,11))return null;break;case"M":case"MM":if(c=S-1,this.outOfRange(c,0,11))return null;break;case"y":case"yy":case"yyyy":if(d=4>O?this.expandYear(a,S):S,this.outOfRange(d,0,9999))return null;break;case"h":case"hh":if(f=S,12===f&&(f=0),this.outOfRange(f,0,11))return null;break;case"H":case"HH":if(f=S,this.outOfRange(f,0,23))return null;break;case"m":case"mm":if(p=S,this.outOfRange(p,0,59))return null;break;case"s":case"ss":if(g=S,this.outOfRange(g,0,59))return null;break;case"tt":case"t":if(y=a.PM&&(_===a.PM[0]||_===a.PM[1]||_===a.PM[2]),!y&&(!a.AM||_!==a.AM[0]&&_!==a.AM[1]&&_!==a.AM[2]))return null;break;case"f":case"ff":case"fff":if(v=S*Math.pow(10,3-O),this.outOfRange(v,0,999))return null;break;case"ddd":case"dddd":if(h=this.getDayIndex(a,_,3===O),this.outOfRange(h,0,6))return null;break;case"zzz":var L=_.split(/:/);if(2!==L.length)return null;if(o=parseInt(L[0],10),this.outOfRange(o,-12,13))return null;var A=parseInt(L[1],10);if(this.outOfRange(A,0,59))return null;m=60*o+(this.startsWith(_,"-")?-A:A);break;case"z":case"zz":if(o=S,this.outOfRange(o,-12,13))return null;m=60*o;break;case"g":case"gg":var N=_;if(!N||!a.eras)return null;N=trim(N.toLowerCase());for(var T=0,E=a.eras.length;E>T;T++)if(N===a.eras[T].name.toLowerCase()){l=T;break}if(null===l)return null}}}var j,M=new Date,C=a.convert;if(j=M.getFullYear(),null===d?d=j:a.eras&&(d+=a.eras[l||0].offset),null===c&&(c=0),null===u&&(u=1),C){if(M=C.toGregorian(d,c,u),null===M)return null}else{if(M.setFullYear(d,c,u),M.getDate()!==u)return null;if(null!==h&&M.getDay()!==h)return null}if(y&&12>f&&(f+=12),M.setHours(f,p,g,v),null!==m){var D=M.getMinutes()-(m+M.getTimezoneOffset());M.setHours(M.getHours()+parseInt(D/60,10),D%60)}return M},cleardatescache:function(){this.datescache=new Array},formatDate:function(e,t,r){return this.formatdate(e,t,r)},formatdate:function(e,t,r){function a(e,t){var r,a=e+"";return t>1&&a.length<t?(r=h[t-2]+a,r.substr(r.length-t,t)):r=a}function n(e,t){if(u)return u[t];if(void 0!=e.getMonth)switch(t){case 0:return e.getFullYear();case 1:return e.getMonth();case 2:return e.getDate()}}if((void 0==r||null==r)&&(r=this.defaultcalendar()),"string"==typeof e)return e;var i=e.toString()+"_"+t;if(this.datescache&&this.datescache[i])return this.datescache[i];if(!t||!t.length||"i"===t){var o;return o=this.formatDate(e,r.patterns.F,r)}var s=r.eras,l="s"===t;t=this.expandFormat(r,t),o=[];for(var d,c,u,h=["0","00","000"],f=0,p=this.getTokenRegExp();;){var g=p.lastIndex,v=p.exec(t),m=t.slice(g,v?v.index:t.length);if(f+=this.appendPreOrPostMatch(m,o),!v)break;if(f%2)o.push(v[0]);else{var y=v[0],b=y.length;switch(y){case"ddd":case"dddd":var x=3===b?r.days.namesAbbr:r.days.names;o.push(x[e.getDay()]);break;case"d":case"dd":c=!0,o.push(a(n(e,2),b));break;case"MMM":case"MMMM":var _=n(e,1);o.push(r.months[3===b?"namesAbbr":"names"][_]);break;case"M":case"MM":o.push(a(n(e,1)+1,b));break;case"y":case"yy":case"yyyy":_=this.getEraYear(e,r,this.getEra(e,s),l),4>b&&(_%=100),o.push(a(_,b));break;case"h":case"hh":d=e.getHours()%12,0===d&&(d=12),o.push(a(d,b));break;case"H":case"HH":o.push(a(e.getHours(),b));break;case"m":case"mm":o.push(a(e.getMinutes(),b));break;case"s":case"ss":o.push(a(e.getSeconds(),b));break;case"t":case"tt":_=e.getHours()<12?r.AM?r.AM[0]:" ":r.PM?r.PM[0]:" ",o.push(1===b?_.charAt(0):_);break;case"f":case"ff":case"fff":o.push(a(e.getMilliseconds(),3).substr(0,b));break;case"z":case"zz":d=e.getTimezoneOffset()/60,o.push((0>=d?"+":"-")+a(Math.floor(Math.abs(d)),b));break;case"zzz":d=e.getTimezoneOffset()/60,o.push((0>=d?"+":"-")+a(Math.floor(Math.abs(d)),2)+":"+a(Math.abs(e.getTimezoneOffset()%60),2));break;case"g":case"gg":r.eras&&o.push(r.eras[this.getEra(e,s)].name);break;case"/":o.push(r["/"]);break;default:throw"Invalid date format pattern '"+y+"'."}}}var w=o.join("");return this.datescache||(this.datescache=new Array),this.datescache[i]=w,w}}),e.jqx.data={};var l,d,c=/#.*$/,u=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,h=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,f=/^(?:GET|HEAD)$/,p=/^\/\//,g=/\?/,v=/([?&])_=[^&]*/,m=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,y=/\s+/,b=(e.fn.load,{}),x={},_=["*/"]+["*"];try{d=location.href}catch(w){d=document.createElement("a"),d.href="",d=d.href}l=m.exec(d.toLowerCase())||[],e.extend(e.jqx.data,{ajaxSetup:function(t,r){return r?a(t,e.jqx.data.ajaxSettings):(r=t,t=e.jqx.data.ajaxSettings),a(t,r),t},ajaxSettings:{url:d,isLocal:h.test(l[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":_},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":!0,"text json":e.parseJSON,"text xml":e.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:t(b),ajaxTransport:t(x),ajax:function(t,a){function o(t,r,a,o){var l,c,u,h,f,p=r;2!==R&&(R=2,O&&clearTimeout(O),w=void 0,d=o||"",F.readyState=t>0?4:0,a&&(h=n(N,F,a)),t>=200&&300>t||304===t?(N.ifModified&&(f=F.getResponseHeader("Last-Modified"),f&&(e.lastModified[s]=f),f=F.getResponseHeader("Etag"),f&&(e.etag[s]=f)),304===t?(p="notmodified",l=!0):(l=i(N,h),p=l.state,c=l.data,u=l.error,l=!u)):(u=p,(!p||t)&&(p="error",0>t&&(t=0))),F.status=t,F.statusText=(r||p)+"",l?j.resolveWith(T,[c,p,F]):j.rejectWith(T,[F,p,u]),F.statusCode(C),C=void 0,L&&E.trigger("ajax"+(l?"Success":"Error"),[F,N,l?c:u]),M.fireWith(T,[F,p]),L&&(E.trigger("ajaxComplete",[F,N]),--e.active||e.event.trigger("ajaxStop")))}"object"==typeof t&&(a=t,t=void 0),a=a||{};var s,d,h,w,O,S,L,A,N=e.jqx.data.ajaxSetup({},a),T=N.context||N,E=T!==N&&(T.nodeType||T instanceof e)?e(T):e.event,j=e.Deferred(),M=e.Callbacks("once memory"),C=N.statusCode||{},D={},I={},R=0,q="canceled",F={readyState:0,setRequestHeader:function(e,t){if(!R){var r=e.toLowerCase();e=I[r]=I[r]||e,D[e]=t}return this},getAllResponseHeaders:function(){return 2===R?d:null},getResponseHeader:function(e){var t;if(2===R){if(!h)for(h={};t=u.exec(d);)h[t[1].toLowerCase()]=t[2];t=h[e.toLowerCase()]}return void 0===t?null:t},overrideMimeType:function(e){return R||(N.mimeType=e),this},abort:function(e){return e=e||q,w&&w.abort(e),o(0,e),this}};if(j.promise(F),F.success=F.done,F.error=F.fail,F.complete=M.add,F.statusCode=function(e){if(e){var t;if(2>R)for(t in e)C[t]=[C[t],e[t]];else t=e[F.status],F.always(t)}return this},N.url=((t||N.url)+"").replace(c,"").replace(p,l[1]+"//"),N.dataTypes=e.trim(N.dataType||"*").toLowerCase().split(y),null==N.crossDomain&&(S=m.exec(N.url.toLowerCase()),N.crossDomain=!(!S||S[1]===l[1]&&S[2]===l[2]&&(S[3]||("http:"===S[1]?80:443))==(l[3]||("http:"===l[1]?80:443)))),N.data&&N.processData&&"string"!=typeof N.data&&(N.data=e.param(N.data,N.traditional)),r(b,N,a,F),2===R)return F;if(L=N.global,N.type=N.type.toUpperCase(),N.hasContent=!f.test(N.type),L&&0===e.active++&&e.event.trigger("ajaxStart"),!N.hasContent&&(N.data&&(N.url+=(g.test(N.url)?"&":"?")+N.data,delete N.data),s=N.url,N.cache===!1)){var U=e.now(),B=N.url.replace(v,"$1_="+U);N.url=B+(B===N.url?(g.test(N.url)?"&":"?")+"_="+U:"")}(N.data&&N.hasContent&&N.contentType!==!1||a.contentType)&&F.setRequestHeader("Content-Type",N.contentType),N.ifModified&&(s=s||N.url,e.lastModified[s]&&F.setRequestHeader("If-Modified-Since",e.lastModified[s]),e.etag[s]&&F.setRequestHeader("If-None-Match",e.etag[s])),F.setRequestHeader("Accept",N.dataTypes[0]&&N.accepts[N.dataTypes[0]]?N.accepts[N.dataTypes[0]]+("*"!==N.dataTypes[0]?", "+_+"; q=0.01":""):N.accepts["*"]);for(A in N.headers)F.setRequestHeader(A,N.headers[A]);if(N.beforeSend&&(N.beforeSend.call(T,F,N)===!1||2===R))return F.abort();q="abort";for(A in{success:1,error:1,complete:1})F[A](N[A]);if(w=r(x,N,a,F)){F.readyState=1,L&&E.trigger("ajaxSend",[F,N]),N.async&&N.timeout>0&&(O=setTimeout(function(){F.abort("timeout")},N.timeout));try{R=1,w.send(D,o)}catch(k){if(!(2>R))throw k;o(-1,k)}}else o(-1,"No Transport");return F},active:0,lastModified:{},etag:{}});var O=[],S=/\?/,L=/(=)\?(?=&|$)|\?\?/,A=e.now();e.jqx.data.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=O.pop()||e.expando+"_"+A++;return this[t]=!0,t}}),e.jqx.data.ajaxPrefilter("json jsonp",function(t,r,a){var n,i,o,s=t.data,l=t.url,d=t.jsonp!==!1,c=d&&L.test(l),u=d&&!c&&"string"==typeof s&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&L.test(s);return"jsonp"===t.dataTypes[0]||c||u?(n=t.jsonpCallback=e.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,i=window[n],c?t.url=l.replace(L,"$1"+n):u?t.data=s.replace(L,"$1"+n):d&&(t.url+=(S.test(l)?"&":"?")+t.jsonp+"="+n),t.converters["script json"]=function(){return o||e.error(n+" was not called"),o[0]},t.dataTypes[0]="json",window[n]=function(){o=arguments},a.always(function(){window[n]=i,t[n]&&(t.jsonpCallback=r.jsonpCallback,O.push(n)),o&&e.isFunction(i)&&i(o[0]),o=i=void 0}),"script"):void 0}),e.jqx.data.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(t){return e.globalEval(t),t}}}),e.jqx.data.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),e.jqx.data.ajaxTransport("script",function(e){if(e.crossDomain){var t,r=document.head||document.getElementsByTagName("head")[0]||document.documentElement;return{send:function(a,n){t=document.createElement("script"),t.async="async",e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,a){(a||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,r&&t.parentNode&&r.removeChild(t),t=void 0,a||n(200,"success"))},r.insertBefore(t,r.firstChild)},abort:function(){t&&t.onload(0,1)}}}});var N,T=window.ActiveXObject?function(){for(var e in N)N[e](0,1)}:!1,E=0;e.jqx.data.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&o()||s()}:o,function(t){e.extend(e.support,{ajax:!!t,cors:!!t&&"withCredentials"in t})}(e.jqx.data.ajaxSettings.xhr()),e.support.ajax&&e.jqx.data.ajaxTransport(function(t){if(!t.crossDomain||e.support.cors){var r;return{send:function(a,n){var i,o,s=t.xhr();if(t.username?s.open(t.type,t.url,t.async,t.username,t.password):s.open(t.type,t.url,t.async),t.xhrFields)for(o in t.xhrFields)s[o]=t.xhrFields[o];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||a["X-Requested-With"]||(a["X-Requested-With"]="XMLHttpRequest");try{for(o in a)s.setRequestHeader(o,a[o])}catch(l){}s.send(t.hasContent&&t.data||null),r=function(a,o){var l,d,c,u,h;try{if(r&&(o||4===s.readyState))if(r=void 0,i&&(s.onreadystatechange=e.noop,T&&delete N[i]),o)4!==s.readyState&&s.abort();else{l=s.status,c=s.getAllResponseHeaders(),u={},h=s.responseXML,h&&h.documentElement&&(u.xml=h);try{u.text=s.responseText}catch(f){}try{d=s.statusText}catch(f){d=""}l||!t.isLocal||t.crossDomain?1223===l&&(l=204):l=u.text?200:404}}catch(p){o||n(-1,p)}u&&n(l,d,u,c)},t.async?4===s.readyState?setTimeout(r,0):(i=++E,T&&(N||(N={},e(window).unload(T)),N[i]=r),s.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}}),e.jqx.filter=function(){this.operator="and";var t=1,r=["EMPTY","NOT_EMPTY","CONTAINS","CONTAINS_CASE_SENSITIVE","DOES_NOT_CONTAIN","DOES_NOT_CONTAIN_CASE_SENSITIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","ENDS_WITH","ENDS_WITH_CASE_SENSITIVE","EQUAL","EQUAL_CASE_SENSITIVE","NULL","NOT_NULL"],a=["EQUAL","NOT_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","GREATER_THAN","GREATER_THAN_OR_EQUAL","NULL","NOT_NULL"],n=["EQUAL","NOT_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","GREATER_THAN","GREATER_THAN_OR_EQUAL","NULL","NOT_NULL"],i=["EQUAL","NOT_EQUAL"],o=new Array,s=new Array;this.evaluate=function(e){for(var r=!0,a=0;a<o.length;a++){var n=o[a].evaluate(e);r=0==a?n:s[a]==t||"or"==s[a]?r||n:r&&n}return r},this.getfilterscount=function(){return o.length},this.setoperatorsbyfiltertype=function(e,t){switch(e){case"numericfilter":a=t;break;case"stringfilter":r=t;break;case"datefilter":n=t;break;case"booleanfilter":i=t}},this.getoperatorsbyfiltertype=function(e){var t=new Array;switch(e){case"numericfilter":t=a.slice(0);break;case"stringfilter":t=r.slice(0);break;case"datefilter":t=n.slice(0);break;case"booleanfilter":t=i.slice(0)}return t};var l=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+"-"+e()+"-"+e()};this.createfilter=function(e,t,r,a,n,i){if(null==e||void 0==e)return null;switch(e){case"numericfilter":return new u(t,r.toUpperCase());case"stringfilter":return new d(t,r.toUpperCase());case"datefilter":return new h(t,r.toUpperCase(),n,i);case"booleanfilter":return new c(t,r.toUpperCase());case"custom":return new f(t,r.toUpperCase(),a)}throw new Error("jqxGrid: There is no such filter type. The available filter types are: 'numericfilter', 'stringfilter', 'datefilter' and 'booleanfilter'")},this.getfilters=function(){for(var e=new Array,t=0;t<o.length;t++){var r={value:o[t].filtervalue,condition:o[t].comparisonoperator,operator:s[t],type:o[t].type};o[t].data&&(r.id=o[t].data),e[t]=r}return e},this.addfilter=function(e,t){o[o.length]=t,t.key=l(),s[s.length]=e},this.removefilter=function(e){for(var t=0;t<o.length;t++)if(o[t].key==e.key){o.splice(t,1),s.splice(t,1);break}},this.getoperatorat=function(e){return void 0==e||null==e?null:0>e||e>o.length?null:s[e]},this.setoperatorat=function(e,t){return void 0==e||null==e?null:0>e||e>o.length?null:void(s[t]=t)},this.getfilterat=function(e){return void 0==e||null==e?null:0>e||e>o.length?null:o[e]},this.setfilterat=function(e,t){return void 0==e||null==e?null:0>e||e>o.length?null:(t.key=l(),void(o[e]=t))},this.clear=function(){o=new Array,s=new Array};var d=function(t,r){this.filtervalue=t,this.comparisonoperator=r,this.type="stringfilter",this.evaluate=function(t){var r=this.filtervalue,a=this.comparisonoperator;if(null==t||void 0==t||""==t){if("NULL"==a)return!0;if("EQUAL"==a&&t==r)return!0;if("NOT_EQUAL"==a&&t!=r)return!0;if("EMPTY"!=a)return!1;if(""==t)return!0}var n="";try{n=t.toString()}catch(i){return!0}var o=function(t,r){switch(a){case"EQUAL":return e.jqx.string.equalsIgnoreCase(t,r);
case"EQUAL_CASE_SENSITIVE":return e.jqx.string.equals(t,r);case"NOT_EQUAL":return!e.jqx.string.equalsIgnoreCase(t,r);case"NOT_EQUAL_CASE_SENSITIVE":return!e.jqx.string.equals(t,r);case"CONTAINS":return e.jqx.string.containsIgnoreCase(t,r);case"CONTAINS_CASE_SENSITIVE":return e.jqx.string.contains(t,r);case"DOES_NOT_CONTAIN":return!e.jqx.string.containsIgnoreCase(t,r);case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return!e.jqx.string.contains(t,r);case"EMPTY":return""==t;case"NOT_EMPTY":return""!=t;case"NOT_NULL":return null!=t;case"STARTS_WITH":return e.jqx.string.startsWithIgnoreCase(t,r);case"ENDS_WITH":return e.jqx.string.endsWithIgnoreCase(t,r);case"ENDS_WITH_CASE_SENSITIVE":return e.jqx.string.endsWith(t,r);case"STARTS_WITH_CASE_SENSITIVE":return e.jqx.string.startsWith(t,r);default:return!1}},s=new Array;if(r&&r.indexOf&&(r.indexOf("|")>=0||r.indexOf(" AND ")>=0||r.indexOf(" OR ")>=0||r.indexOf(" and ")>=0||r.indexOf(" or ")>=0)){var l=o(n,r);if(l)return l;var d=r.indexOf(" AND ")>=0?r.split(" AND "):new Array,c=r.indexOf(" OR ")>=0?r.split(" OR "):new Array,u=r.indexOf(" and ")>=0?r.split(" and "):new Array,h=r.indexOf(" or ")>=0?r.split(" or "):new Array,f=r.indexOf("|")>=0?r.split("|"):new Array;if(f.length>0)for(var p=0;p<f.length;p++)f[p]=e.trim(f[p]);var g=r.indexOf(" ")>=0?r.split(" "):new Array;if(g.length>0)for(var p=0;p<g.length;p++)g[p]=e.trim(g[p]);if(d=d.concat(g),d=d.concat(u),c=c.concat(f),c=c.concat(h),d.length>0)for(var p=0;p<d.length;p++)!d[p].indexOf(" OR ")>=0&&s.push(d[p]);if(c.length>0)for(var p=0;p<c.length;p++)!c[p].indexOf(" AND ")>=0&&s.push(c[p]);for(var v=void 0,m=0;m<s.length;m++){var t=s[m],l=o(n,t),y=m<d.length?"and":"or";v=void 0==v?l:"or"==y?v||l:v&&l}return v}return o(n,r)}},c=function(e,t){this.filtervalue=e,this.comparisonoperator=t,this.type="booleanfilter",this.evaluate=function(e){var t=this.filtervalue,r=this.comparisonoperator;if(null==e||void 0==e)return"NULL"==r?!0:!1;var a=e;switch(r){case"EQUAL":return a==t||a.toString()==t.toString();case"NOT_EQUAL":return a!=t&&a.toString()!=t.toString();default:return!1}}},u=function(t,r){this.filtervalue=t,this.comparisonoperator=r,this.type="numericfilter",this.evaluate=function(t){var r=this.filtervalue,a=this.comparisonoperator;if(null===t||void 0===t||""===t){if("NOT_NULL"==a)return!1;if("NULL"==a)return!0;switch(a){case"EQUAL":return t==r;case"NOT_EQUAL":return t!=r}return!1}if("NULL"==a)return!1;if("NOT_NULL"==a)return!0;var n=t;try{n=parseFloat(n)}catch(i){if(""!=t.toString())return!1}var o=function(t,r){switch(a){case"EQUAL":return t==r;case"NOT_EQUAL":return t!=r;case"GREATER_THAN":return t>r;case"GREATER_THAN_OR_EQUAL":return t>=r;case"LESS_THAN":return r>t;case"LESS_THAN_OR_EQUAL":return r>=t;case"STARTS_WITH":return e.jqx.string.startsWithIgnoreCase(t.toString(),r.toString());case"ENDS_WITH":return e.jqx.string.endsWithIgnoreCase(t.toString(),r.toString());case"ENDS_WITH_CASE_SENSITIVE":return e.jqx.string.endsWith(t.toString(),r.toString());case"STARTS_WITH_CASE_SENSITIVE":return e.jqx.string.startsWith(t.toString(),r.toString());case"CONTAINS":return e.jqx.string.containsIgnoreCase(t.toString(),r.toString());case"CONTAINS_CASE_SENSITIVE":return e.jqx.string.contains(t.toString(),r.toString());case"DOES_NOT_CONTAIN":return!e.jqx.string.containsIgnoreCase(t.toString(),r.toString());case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return!e.jqx.string.contains(t.toString(),r.toString());default:return!0}},s=new Array;if(r&&r.indexOf&&(r.indexOf("|")>=0||r.indexOf(" AND ")>=0||r.indexOf(" OR ")>=0||r.indexOf(" and ")>=0||r.indexOf(" or ")>=0)){var l=o(n,r);if(l)return l;r=r.toString();var d=r.indexOf(" AND ")>=0?r.split(" AND "):new Array,c=r.indexOf(" OR ")>=0?r.split(" OR "):new Array,u=r.indexOf(" and ")>=0?r.split(" and "):new Array,h=r.indexOf(" or ")>=0?r.split(" or "):new Array;d=d.concat(u),c=c.concat(h);var f=r.indexOf("|")>=0?r.split("|"):new Array;if(f.length>0)for(var p=0;p<f.length;p++)f[p]=e.trim(f[p]);if(c=c.concat(f),d.length>0)for(var p=0;p<d.length;p++)!d[p].indexOf(" OR ")>=0&&s.push(d[p]);if(c.length>0)for(var p=0;p<c.length;p++)!c[p].indexOf(" AND ")>=0&&s.push(c[p]);for(var g=void 0,v=0;v<s.length;v++){var t=s[v];if(t&&t.indexOf&&t.indexOf("..")>=0){var m=t.toString().split("..");2==m.length&&(l=n>=m[0]&&n<=m[1])}else var l=o(n,t);var y=v<d.length?"and":"or";g=void 0==g?l:"or"==y?g||l:g&&l}return g}return r&&r.indexOf&&r.indexOf("..")>=0&&(s=r.toString().split(".."),2==s.length)?n>=s[0]&&n<=s[1]:o(n,r)}},h=function(t,r,a,n){if(this.filtervalue=t,this.type="datefilter",void 0!=a&&void 0!=n){var i=e.jqx.dataFormat.parsedate(t,a,n);if(null!=i)this.filterdate=i;else{var o=e.jqx.dataFormat.tryparsedate(t,n);null!=o&&(this.filterdate=o)}}else{var s=new Date(t);this.filterdate="NaN"==s.toString()||"Invalid Date"==s.toString()?e.jqx.dataFormat.tryparsedate(t):s}if(!this.filterdate){var s=new Date(t);this.filterdate="NaN"==s.toString()||"Invalid Date"==s.toString()?e.jqx.dataFormat.tryparsedate(t):s}this.comparisonoperator=r,this.evaluate=function(t){var r=this.filtervalue,i=this.comparisonoperator;if(null==t||void 0==t||""==t){if("NOT_NULL"==i)return!1;if("NULL"==i)return!0;switch(i){case"EQUAL":return t==r;case"NOT_EQUAL":return t!=r}return!1}if("NULL"==i)return!1;if("NOT_NULL"==i)return!0;var o=new Date;o.setFullYear(1900,0,1),o.setHours(12,0,0,0);try{var s=new Date(t);t="NaN"==s.toString()||"Invalid Date"==s.toString()?e.jqx.dataFormat.tryparsedate(t):s,o=t;var l=!1;if(void 0!=a&&void 0!=n&&(a.indexOf("t")>=0||a.indexOf("T")>=0||a.indexOf(":")>=0||a.indexOf("f")>=0)&&(l=!0,r&&-1==r.toString().indexOf(":"))){var d=e.jqx.dataFormat.tryparsedate(r.toString()+":00",n);null!=d&&(this.filterdate=d)}l||(o.setHours(0),o.setMinutes(0),o.setSeconds(0))}catch(c){if(""!=t.toString())return!1}if(null!=this.filterdate)r=this.filterdate;else if(r.indexOf&&(-1!=r.indexOf(":")||!isNaN(parseInt(r)))){var u=new Date(o);u.setHours(12,0,0,0);for(var h=r.split(":"),f=0;f<h.length;f++)0==f&&u.setHours(h[f]),1==f&&u.setMinutes(h[f]),2==f&&u.setSeconds(h[f]);r=u}l&&r&&r.setFullYear&&o&&o.getFullYear&&-1==a.indexOf("d")&&-1==a.indexOf("M")&&-1==a.indexOf("y")&&r.setFullYear(o.getFullYear(),o.getMonth(),o.getDate());var p=function(t,r){switch(null==t&&(t=""),i){case"EQUAL":return t.toString()==r.toString();case"NOT_EQUAL":return t.toString()!=r.toString();case"GREATER_THAN":return t>r;case"GREATER_THAN_OR_EQUAL":return t>=r;case"LESS_THAN":return r>t;case"LESS_THAN_OR_EQUAL":return r>=t;case"STARTS_WITH":return e.jqx.string.startsWithIgnoreCase(t.toString(),r.toString());case"ENDS_WITH":return e.jqx.string.endsWithIgnoreCase(t.toString(),r.toString());case"ENDS_WITH_CASE_SENSITIVE":return e.jqx.string.endsWith(t.toString(),r.toString());case"STARTS_WITH_CASE_SENSITIVE":return e.jqx.string.startsWith(t.toString(),r.toString());case"CONTAINS":return e.jqx.string.containsIgnoreCase(t.toString(),r.toString());case"CONTAINS_CASE_SENSITIVE":return e.jqx.string.contains(t.toString(),r.toString());case"DOES_NOT_CONTAIN":return!e.jqx.string.containsIgnoreCase(t.toString(),r.toString());case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return!e.jqx.string.contains(t.toString(),r.toString());default:return!0}},g=new Array;if(r&&r.indexOf&&(r.indexOf("|")>=0||r.indexOf(" AND ")>=0||r.indexOf(" OR ")>=0||r.indexOf(" and ")>=0||r.indexOf(" or ")>=0)){var d=p(o,r);if(d)return d;var v=r.indexOf(" AND ")>=0?r.split(" AND "):new Array,m=r.indexOf(" OR ")>=0?r.split(" OR "):new Array,y=r.indexOf(" and ")>=0?r.split(" and "):new Array,b=r.indexOf(" or ")>=0?r.split(" or "):new Array;v=v.concat(y),m=m.concat(b);var x=r.indexOf("|")>=0?r.split("|"):new Array;if(x.length>0)for(var f=0;f<x.length;f++)x[f]=e.trim(x[f]);if(m=m.concat(x),v.length>0)for(var f=0;f<v.length;f++)!v[f].indexOf(" OR ")>=0&&g.push(v[f]);if(m.length>0)for(var f=0;f<m.length;f++)!m[f].indexOf(" AND ")>=0&&g.push(m[f]);for(var _=void 0,w=0;w<g.length;w++){var t=g[w];if(t&&t.indexOf&&t.indexOf("..")>=0){var O=t.toString().split("..");2==O.length&&(d=o>=O[0]&&o<=O[1])}else var d=p(o,t);var S=w<v.length?"and":"or";_=void 0==_?d:"or"==S?_||d:_&&d}return _}return r&&r.indexOf&&r.indexOf("..")>=0&&(g=r.toString().split(".."),2==g.length)?o>=g[0]&&o<=g[1]:p(o,r)}},f=function(e,t,r){this.filtervalue=e,this.comparisonoperator=t,this.evaluate=function(e){return r(this.filtervalue,e,this.comparisonoperator)}}},e.jqx.longInt=function(){var e=this;e.longObj=new Object;var t=e.longObj;t.math=new Object,t.math.Long=new Object,t.math.Long=function(e,t){this.lowBits=0|e,this.highBits=0|t},t.math.Long.IntCache={},t.math.Long.fromInt=function(e){if(e>=-128&&128>e){var r=t.math.Long.IntCache[e];if(r)return r}var a=new t.math.Long(0|e,0>e?-1:0);return e>=-128&&128>e&&(t.math.Long.IntCache[e]=a),a},t.math.Long.fromNumber=function(e){return isNaN(e)||!isFinite(e)?t.math.Long.ZERO:e<=-t.math.Long.TWO_PWR_63_DBL_?t.math.Long.MIN_VALUE:e+1>=t.math.Long.TWO_PWR_63_DBL_?t.math.Long.MAX_VALUE:0>e?t.math.Long.fromNumber(-e).negate():new t.math.Long(e%t.math.Long.TWO_PWR_32_DBL_|0,e/t.math.Long.TWO_PWR_32_DBL_|0)},t.math.Long.fromBits=function(e,r){return new t.math.Long(e,r)},t.math.Long.fromString=function(e,r){if(0===e.length)throw new Error("number format error: empty string");var a=r||10;if(2>a||a>36)throw new Error("radix out of range: "+a);if("-"===e.charAt(0))return t.math.Long.fromString(e.substring(1),a).negate();if(e.indexOf("-")>=0)throw new Error('number format error: interior "-" character: '+e);for(var n=t.math.Long.fromNumber(Math.pow(a,8)),i=t.math.Long.ZERO,o=0;o<e.length;o+=8){var s=Math.min(8,e.length-o),l=parseInt(e.substring(o,o+s),a);if(8>s){var d=t.math.Long.fromNumber(Math.pow(a,s));i=i.multiply(d).add(t.math.Long.fromNumber(l))}else i=i.multiply(n),i=i.add(t.math.Long.fromNumber(l))}return i},t.math.Long.TWO_PWR_16_DBL_=65536,t.math.Long.TWO_PWR_24_DBL_=1<<24,t.math.Long.TWO_PWR_32_DBL_=t.math.Long.TWO_PWR_16_DBL_*t.math.Long.TWO_PWR_16_DBL_,t.math.Long.TWO_PWR_31_DBL_=t.math.Long.TWO_PWR_32_DBL_/2,t.math.Long.TWO_PWR_48_DBL_=t.math.Long.TWO_PWR_32_DBL_*t.math.Long.TWO_PWR_16_DBL_,t.math.Long.TWO_PWR_64_DBL_=t.math.Long.TWO_PWR_32_DBL_*t.math.Long.TWO_PWR_32_DBL_,t.math.Long.TWO_PWR_63_DBL_=t.math.Long.TWO_PWR_64_DBL_/2,t.math.Long.ZERO=t.math.Long.fromInt(0),t.math.Long.ONE=t.math.Long.fromInt(1),t.math.Long.NEG_ONE=t.math.Long.fromInt(-1),t.math.Long.MAX_VALUE=t.math.Long.fromBits(-1,2147483647),t.math.Long.MIN_VALUE=t.math.Long.fromBits(0,-2147483648),t.math.Long.TWO_PWR_24_=t.math.Long.fromInt(1<<24),t.math.Long.prototype.toInt=function(){return this.lowBits},t.math.Long.prototype.toNumber=function(){return this.highBits*t.math.Long.TWO_PWR_32_DBL_+this.getLowBitsUnsigned()},t.math.Long.prototype.toString=function(r){var a=r||10;if(2>a||a>36)throw new Error("radix out of range: "+a);if(this.isZero())return"0";var n,i;if(this.isNegative()){if(this.equals(t.math.Long.MIN_VALUE)){var o=t.math.Long.fromNumber(a),s=this.div(o);return n=s.multiply(o).subtract(this),s.toString(a)+n.toInt().toString(a)}switch(a){case 2:case 8:case 16:return i="-"+this.negate().toString(2),e._negativeBinary(i,a);default:return i="-"+this.negate().toString(a)}}var l=t.math.Long.fromNumber(Math.pow(a,6));for(n=this,i="";;){var d=n.div(l),c=n.subtract(d.multiply(l)).toInt(),u=c.toString(a);if(n=d,n.isZero())return u+i;for(;u.length<6;)u="0"+u;i=""+u+i}},t.math.Long.prototype.getHighBits=function(){return this.highBits},t.math.Long.prototype.getLowBits=function(){return this.lowBits},t.math.Long.prototype.getLowBitsUnsigned=function(){return this.lowBits>=0?this.lowBits:t.math.Long.TWO_PWR_32_DBL_+this.lowBits},t.math.Long.prototype.getNumBitsAbs=function(){if(this.isNegative())return this.equals(t.math.Long.MIN_VALUE)?64:this.negate().getNumBitsAbs();for(var e=0!==this.highBits?this.highBits:this.lowBits,r=31;r>0&&0===(e&1<<r);r--);return 0!==this.highBits?r+33:r+1},t.math.Long.prototype.isZero=function(){return 0===this.highBits&&0===this.lowBits},t.math.Long.prototype.isNegative=function(){return this.highBits<0},t.math.Long.prototype.isOdd=function(){return 1===(1&this.lowBits)},t.math.Long.prototype.equals=function(e){return this.highBits===e.highBits&&this.lowBits===e.lowBits},t.math.Long.prototype.notEquals=function(e){return this.highBits!==e.highBits||this.lowBits!==e.lowBits},t.math.Long.prototype.lessThan=function(e){return this.compare(e)<0},t.math.Long.prototype.lessThanOrEqual=function(e){return this.compare(e)<=0},t.math.Long.prototype.greaterThan=function(e){return this.compare(e)>0},t.math.Long.prototype.greaterThanOrEqual=function(e){return this.compare(e)>=0},t.math.Long.prototype.compare=function(e){if(this.equals(e))return 0;var t=this.isNegative(),r=e.isNegative();return t&&!r?-1:!t&&r?1:this.subtract(e).isNegative()?-1:1},t.math.Long.prototype.negate=function(){return this.equals(t.math.Long.MIN_VALUE)?t.math.Long.MIN_VALUE:this.not().add(t.math.Long.ONE)},t.math.Long.prototype.add=function(e){var r=this.highBits>>>16,a=65535&this.highBits,n=this.lowBits>>>16,i=65535&this.lowBits,o=e.highBits>>>16,s=65535&e.highBits,l=e.lowBits>>>16,d=65535&e.lowBits,c=0,u=0,h=0,f=0;return f+=i+d,h+=f>>>16,f&=65535,h+=n+l,u+=h>>>16,h&=65535,u+=a+s,c+=u>>>16,u&=65535,c+=r+o,c&=65535,t.math.Long.fromBits(h<<16|f,c<<16|u)},t.math.Long.prototype.subtract=function(e){return this.add(e.negate())},t.math.Long.prototype.multiply=function(e){if(this.isZero())return t.math.Long.ZERO;if(e.isZero())return t.math.Long.ZERO;if(this.equals(t.math.Long.MIN_VALUE))return e.isOdd()?t.math.Long.MIN_VALUE:t.math.Long.ZERO;if(e.equals(t.math.Long.MIN_VALUE))return this.isOdd()?t.math.Long.MIN_VALUE:t.math.Long.ZERO;if(this.isNegative())return e.isNegative()?this.negate().multiply(e.negate()):this.negate().multiply(e).negate();if(e.isNegative())return this.multiply(e.negate()).negate();if(this.lessThan(t.math.Long.TWO_PWR_24_)&&e.lessThan(t.math.Long.TWO_PWR_24_))return t.math.Long.fromNumber(this.toNumber()*e.toNumber());var r=this.highBits>>>16,a=65535&this.highBits,n=this.lowBits>>>16,i=65535&this.lowBits,o=e.highBits>>>16,s=65535&e.highBits,l=e.lowBits>>>16,d=65535&e.lowBits,c=0,u=0,h=0,f=0;return f+=i*d,h+=f>>>16,f&=65535,h+=n*d,u+=h>>>16,h&=65535,h+=i*l,u+=h>>>16,h&=65535,u+=a*d,c+=u>>>16,u&=65535,u+=n*l,c+=u>>>16,u&=65535,u+=i*s,c+=u>>>16,u&=65535,c+=r*d+a*l+n*s+i*o,c&=65535,t.math.Long.fromBits(h<<16|f,c<<16|u)},t.math.Long.prototype.div=function(e){if(e.isZero())throw new Error("division by zero");if(this.isZero())return t.math.Long.ZERO;var r,a;if(this.equals(t.math.Long.MIN_VALUE)){if(e.equals(t.math.Long.ONE)||e.equals(t.math.Long.NEG_ONE))return t.math.Long.MIN_VALUE;if(e.equals(t.math.Long.MIN_VALUE))return t.math.Long.ONE;var n=this.shiftRight(1);if(r=n.div(e).shiftLeft(1),r.equals(t.math.Long.ZERO))return e.isNegative()?t.math.Long.ONE:t.math.Long.NEG_ONE;a=this.subtract(e.multiply(r));var i=r.add(a.div(e));return i}if(e.equals(t.math.Long.MIN_VALUE))return t.math.Long.ZERO;if(this.isNegative())return e.isNegative()?this.negate().div(e.negate()):this.negate().div(e).negate();if(e.isNegative())return this.div(e.negate()).negate();var o=t.math.Long.ZERO;for(a=this;a.greaterThanOrEqual(e);){r=Math.max(1,Math.floor(a.toNumber()/e.toNumber()));for(var s=Math.ceil(Math.log(r)/Math.LN2),l=48>=s?1:Math.pow(2,s-48),d=t.math.Long.fromNumber(r),c=d.multiply(e);c.isNegative()||c.greaterThan(a);)r-=l,d=t.math.Long.fromNumber(r),c=d.multiply(e);d.isZero()&&(d=t.math.Long.ONE),o=o.add(d),a=a.subtract(c)}return o},t.math.Long.prototype.modulo=function(e){return this.subtract(this.div(e).multiply(e))},t.math.Long.prototype.not=function(){return t.math.Long.fromBits(~this.lowBits,~this.highBits)},t.math.Long.prototype.and=function(e){return t.math.Long.fromBits(this.lowBits&e.lowBits,this.highBits&e.highBits)},t.math.Long.prototype.or=function(e){return t.math.Long.fromBits(this.lowBits|e.lowBits,this.highBits|e.highBits)},t.math.Long.prototype.xor=function(e){return t.math.Long.fromBits(this.lowBits^e.lowBits,this.highBits^e.highBits)},t.math.Long.prototype.shiftLeft=function(e){if(e&=63,0===e)return this;var r=this.lowBits;if(32>e){var a=this.highBits;return t.math.Long.fromBits(r<<e,a<<e|r>>>32-e)}return t.math.Long.fromBits(0,r<<e-32)},t.math.Long.prototype.shiftRight=function(e){if(e&=63,0===e)return this;var r=this.highBits;if(32>e){var a=this.lowBits;return t.math.Long.fromBits(a>>>e|r<<32-e,r>>e)}return t.math.Long.fromBits(r>>e-32,r>=0?0:-1)},t.math.Long.prototype.shiftRightUnsigned=function(e){if(e&=63,0===e)return this;var r=this.highBits;if(32>e){var a=this.lowBits;return t.math.Long.fromBits(a>>>e|r<<32-e,r>>>e)}return 32===e?t.math.Long.fromBits(r,0):t.math.Long.fromBits(r>>>e-32,0)}}}(jqxBaseFramework);
=======
 /*
jQWidgets v3.5.0 (2014-Sep-15)
Copyright (c) 2011-2014 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(i) {
    i.jqx.dataAdapter = function(J, e) {
        if (J != undefined) {
            if (J.dataFields !== undefined) {
                J.datafields = J.dataFields
            }
            if (J.dataType !== undefined) {
                J.datatype = J.dataType
            }
            if (J.localData !== undefined) {
                J.localdata = J.localData
            }
            if (J.sortColumn !== undefined) {
                J.sortcolumn = J.sortColumn
            }
            if (J.sortDirection !== undefined) {
                J.sortdirection = J.sortDirection
            }
            if (J.sortOrder !== undefined) {
                J.sortdirection = J.sortOrder
            }
            if (J.formatData !== undefined) {
                J.formatdata = J.formatData
            }
            if (J.processData !== undefined) {
                J.processdata = J.processData
            }
            if (J.pageSize !== undefined) {
                J.pagesize = J.pageSize
            }
            if (J.pageNum !== undefined) {
                J.pagenum = J.pageNum
            }
            if (J.updateRow !== undefined) {
                J.updaterow = J.updateRow
            }
            if (J.addRow !== undefined) {
                J.addrow = J.addRow
            }
            if (J.deleteRow !== undefined) {
                J.deleterow = J.deleteRow
            }
            if (J.contentType !== undefined) {
                J.contenttype = J.contentType
            }
            if (J.totalRecords != undefined) {
                J.totalrecords = J.totalRecords
            }
            if (J.loadError != undefined) {
                J.loadError = J.loadError
            }
            if (J.sortComparer != undefined) {
                J.sortcomparer = J.sortComparer
            }
        }
        this._source = J;
        this._options = e || {};
        this.records = new Array();
        this._downloadComplete = new Array();
        this._bindingUpdate = new Array();
        if (J != undefined && J.localdata != null && typeof J.localdata == "function") {
            var I = J.localdata();
            if (I != null) {
                J._localdata = J.localdata;
                var H = this;
                if (J._localdata.subscribe) {
                    H._oldlocaldata = [];
                    J._localdata.subscribe(function(K) {
                        var L = function(M) {
                            if (i.isArray(M)) {
                                return i.makeArray(L(i(M)))
                            }
                            return i.extend(true, {}, M)
                        };
                        if (H.suspendKO == false || H.suspendKO == undefined || H._oldlocaldata.length == 0) {
                            H._oldlocaldata = L(K)
                        }
                    }, J._localdata, "beforeChange");
                    J._localdata.subscribe(function(L) {
                        if (H.suspendKO == false || H.suspendKO == undefined) {
                            var K = "";
                            H._oldrecords = H.records;
                            if (H._oldlocaldata.length == 0) {
                                J.localdata = J._localdata()
                            }
                            if (H._oldlocaldata.length == 0) {
                                K = "change"
                            } else {
                                if (L) {
                                    if (H._oldlocaldata.length == L.length) {
                                        K = "update"
                                    }
                                    if (H._oldlocaldata.length > L.length) {
                                        K = "remove"
                                    }
                                    if (H._oldlocaldata.length < L.length) {
                                        K = "add"
                                    }
                                }
                            }
                            H.dataBind(null, K)
                        }
                    }, J._localdata, "change");
                    H._knockoutdatasource = true
                }
                J.localdata = I
            }
        }
        if (this._options.autoBind == true) {
            this.dataBind()
        }
    };
    i.jqx.dataAdapter.prototype = {getrecords: function() {
            return this.records
        },beginUpdate: function() {
            this.isUpdating = true
        },endUpdate: function(e) {
            this.isUpdating = false;
            if (e != false) {
                if (this._changedrecords && this._changedrecords.length > 0) {
                    this.callBindingUpdate("update");
                    this._changedrecords = []
                } else {
                    this.dataBind(null, "")
                }
            }
        },formatDate: function(H, J, I) {
            var e = i.jqx.dataFormat.formatdate(H, J, I);
            return e
        },formatNumber: function(H, J, I) {
            var e = i.jqx.dataFormat.formatnumber(H, J, I);			
            return e
        },dataBind: function(R, Z) {
            if (this.isUpdating == true) {
                return
            }
            var W = this._source;
            if (!W) {
                return
            }
            i.jqx.dataFormat.datescache = new Array();
            if (W.dataFields != null) {
                W.datafields = W.dataFields
            }
            if (W.recordstartindex == undefined) {
                W.recordstartindex = 0
            }
            if (W.recordendindex == undefined) {
                W.recordendindex = 0
            }
            if (W.loadallrecords == undefined) {
                W.loadallrecords = true
            }
            if (W.sort != undefined) {
                this.sort = W.sort
            }
            if (W.filter != undefined) {
                this.filter = W.filter
            } else {
                this.filter = null
            }
            if (W.sortcolumn != undefined) {
                this.sortcolumn = W.sortcolumn
            }
            if (W.sortdirection != undefined) {
                this.sortdirection = W.sortdirection
            }
            if (W.sortcomparer != undefined) {
                this.sortcomparer = W.sortcomparer
            }
            this.records = new Array();
            var K = this._options || {};
            this.virtualmode = K.virtualmode != undefined ? K.virtualmode : false;
            this.totalrecords = K.totalrecords != undefined ? K.totalrecords : 0;
            this.pageable = K.pageable != undefined ? K.pageable : false;
            this.pagesize = K.pagesize != undefined ? K.pagesize : 0;
            this.pagenum = K.pagenum != undefined ? K.pagenum : 0;
            this.cachedrecords = K.cachedrecords != undefined ? K.cachedrecords : new Array();
            this.originaldata = new Array();
            this.recordids = new Array();
            this.updaterow = K.updaterow != undefined ? K.updaterow : null;
            this.addrow = K.addrow != undefined ? K.addrow : null;
            this.deleterow = K.deleterow != undefined ? K.deleterow : null;
            this.cache = K.cache != undefined ? K.cache : false;
            this.unboundmode = false;
            if (W.formatdata != undefined) {
                K.formatData = W.formatdata
            }
            if (W.data != undefined) {
                if (K.data == undefined) {
                    K.data = {}
                }
                i.extend(K.data, W.data)
            }
            if (W.mapchar != undefined) {
                this.mapChar = W.mapchar ? W.mapchar : ">"
            } else {
                this.mapChar = K.mapChar ? K.mapChar : ">"
            }
            if (K.unboundmode || W.unboundmode) {
                this.unboundmode = K.unboundmode || W.unboundmode
            }
            if (W.cache != undefined) {
                this.cache = W.cache
            }
            if (this.koSubscriptions) {
                for (var ab = 0; ab < this.koSubscriptions.length; ab++) {
                    this.koSubscriptions[ab].dispose()
                }
            }
            this.koSubscriptions = new Array();
            if (this.pagenum < 0) {
                this.pagenum = 0
            }
            var ag = this;
            var Q = W.datatype;
            if (W.datatype === "csv" || W.datatype === "tab" || W.datatype === "tsv" || W.datatype == "text") {
                Q = "text"
            }
            var N = K.async != undefined ? K.async : true;
            if (W.async != undefined) {
                N = W.async
            }
            switch (Q) {
                case "local":
                case "array":
                case "observablearray":
                default:
                    if (W.localdata == undefined && W.length) {
                        W.localdata = new Array();
                        for (var Y = 0; Y < W.length; Y++) {
                            W.localdata[W.localdata.length] = W[Y];
                            W[Y].uid = Y
                        }
                    }
                    if (W.beforeprocessing && i.isFunction(W.beforeprocessing)) {
                        W.beforeprocessing(W.localdata)
                    }
                    var M = W.localdata.length;
                    this.totalrecords = this.virtualmode ? (W.totalrecords || M) : M;
                    if (this.unboundmode) {
                        this.totalrecords = this.unboundmode ? (W.totalrecords || M) : M;
                        var ac = W.datafields ? W.datafields.length : 0;
                        if (ac > 0) {
                            for (var Y = 0; Y < this.totalrecords; Y++) {
                                var I = {};
                                for (var X = 0; X < ac; X++) {
                                    I[W.datafields[X].name] = ""
                                }
                                I.uid = Y;
                                W.localdata[W.localdata.length] = I
                            }
                        }
                    }
                    if (this.totalrecords == undefined) {
                        this.totalrecords = 0
                    }
                    var ac = W.datafields ? W.datafields.length : 0;
                    var H = function(an, ap) {
                        var ao = {};
                        for (var al = 0; al < ap; al++) {
                            var ak = W.datafields ? W.datafields[al] : {};
                            var aq = "";
                            if (undefined == ak || ak == null) {
                                continue
                            }
                            if (ak.map) {
                                if (i.isFunction(ak.map)) {
                                    aq = ak.map(an)
                                } else {
                                    var ai = ak.map.split(ag.mapChar);
                                    if (ai.length > 0) {
                                        var am = an;
                                        for (var aj = 0; aj < ai.length; aj++) {
                                            if (!am) {
                                                continue
                                            }
                                            am = am[ai[aj]]
                                        }
                                        aq = am
                                    } else {
                                        aq = an[ak.map]
                                    }
                                }
                                if (aq != undefined && aq != null) {
                                    aq = aq.toString()
                                } else {
                                    if (aq == undefined && aq != null) {
                                        aq = ""
                                    }
                                }
                            }
                            if (aq == "") {
                                aq = an[ak.name];
                                if (aq != undefined && aq != null) {
                                    if (W._localdata && aq.subscribe) {
                                        aq = aq()
                                    } else {
                                        if (ak.type != "array") {
                                            aq = aq.toString()
                                        }
                                    }
                                }
                            }
                            aq = ag.getvaluebytype(aq, ak);
                            if (ak.displayname != undefined) {
                                ao[ak.displayname] = aq
                            } else {
                                ao[ak.name] = aq
                            }
                        }
                        return ao
                    };
                    if (W._localdata) {
                        this._changedrecords = [];
                        this.records = new Array();
                        var af = W._localdata();
                        i.each(af, function(al, ao) {
                            if (typeof ao === "string") {
                                ag.records.push(ao)
                            } else {
                                var aj = {};
                                var an = 0;
                                var am = this;
                                i.each(this, function(ax, aC) {
                                    var ar = null;
                                    var aD = "string";
                                    var aB = ax;
                                    if (ac > 0) {
                                        var aF = false;
                                        var aA = false;
                                        for (var aw = 0; aw < ac; aw++) {
                                            var av = W.datafields[aw];
                                            if (av != undefined && (av.name == ax)) {
                                                aF = true;
                                                ar = av.map;
                                                aD = av.type;
                                                aB = av.name;
                                                break
                                            } else {
                                                if (av != undefined && av.map && (av.map.indexOf(ax) >= 0)) {
                                                    aF = true;
                                                    ar = av.map;
                                                    aD = av.type;
                                                    aB = av.name;
                                                    aA = true;
                                                    var aE = am[ax];
                                                    if (ar != null) {
                                                        var aq = ar.split(ag.mapChar);
                                                        if (aq.length > 0) {
                                                            var ay = am;
                                                            for (var at = 0; at < aq.length; at++) {
                                                                ay = ay[aq[at]]
                                                            }
                                                            aE = ay
                                                        } else {
                                                            aE = am[ar]
                                                        }
                                                    }
                                                    if (aD != "string") {
                                                        aE = ag.getvaluebytype(aE, {type: aD})
                                                    }
                                                    aj[aB] = aE;
                                                    if (aj[aB] != undefined) {
                                                        an += aj[aB].toString().length + aj[aB].toString().substr(0, 1)
                                                    }
                                                }
                                            }
                                        }
                                        if (!aF) {
                                            return true
                                        }
                                        if (aA) {
                                            return true
                                        }
                                    }
                                    var au = i.isFunction(am[ax]);
                                    if (au) {
                                        var aE = am[ax]();
                                        if (aD != "string") {
                                            aE = ag.getvaluebytype(aE, {type: aD})
                                        }
                                        aj[ax] = aE;
                                        if (am[ax].subscribe) {
                                            var az = al;
                                            ag.koSubscriptions[ag.koSubscriptions.length] = am[ax].subscribe(function(aH) {
                                                var aG = az;
                                                aj[ax] = aH;
                                                var aI = {index: aG,oldrecord: aj,record: aj};
                                                ag._changedrecords.push(aI);
                                                if (ag.isUpdating) {
                                                    return
                                                }
                                                ag.callBindingUpdate("update");
                                                ag._changedrecords = [];
                                                return false
                                            })
                                        }
                                    } else {
                                        var aE = am[ax];
                                        if (ar != null) {
                                            var aq = ar.split(ag.mapChar);
                                            if (aq.length > 0) {
                                                var ay = am;
                                                for (var at = 0; at < aq.length; at++) {
                                                    ay = ay[aq[at]]
                                                }
                                                aE = ay
                                            } else {
                                                aE = am[ar]
                                            }
                                        }
                                        if (aD != "string") {
                                            aE = ag.getvaluebytype(aE, {type: aD})
                                        }
                                        aj[aB] = aE;
                                        if (aj[aB] != undefined) {
                                            an += aj[aB].toString().length + aj[aB].toString().substr(0, 1)
                                        }
                                    }
                                });
                                var ak = ag.getid(W.id, am, al);
                                aj.uid = ak;
                                ag.records.push(aj);
                                aj._koindex = an;
                                if (ag._oldrecords) {
                                    var ai = ag.records.length - 1;
                                    if (Z == "update") {
                                        if (ag._oldrecords[ai]._koindex != an) {
                                            var ap = {index: ai,oldrecord: ag._oldrecords[ai],record: aj};
                                            ag._changedrecords.push(ap)
                                        }
                                    }
                                }
                            }
                        });
                        if (Z == "add") {
                            var M = ag.records.length;
                            for (var Y = 0; Y < M; Y++) {
                                var I = ag.records[Y];
                                var L = false;
                                for (var U = 0; U < ag._oldrecords.length; U++) {
                                    if (ag._oldrecords[U]._koindex === I._koindex) {
                                        L = true;
                                        break
                                    }
                                }
                                if (!L) {
                                    ag._changedrecords.push({index: Y,oldrecord: null,record: I,position: (Y != 0 ? "last" : "first")})
                                }
                            }
                        } else {
                            if (Z == "remove") {
                                var M = ag._oldrecords.length;
                                for (var Y = 0; Y < M; Y++) {
                                    var P = ag._oldrecords[Y];
                                    if (!ag.records[Y]) {
                                        ag._changedrecords.push({index: Y,oldrecord: P,record: null})
                                    } else {
                                        if (ag.records[Y]._koindex != P._koindex) {
                                            ag._changedrecords.push({index: Y,oldrecord: P,record: null})
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (!i.isArray(W.localdata)) {
                            this.records = new Array();
                            var V = 0;
                            var T = new Array();
                            i.each(W.localdata, function(ak) {
                                var aj = ag.getid(W.id, this, ak);
                                if (ac == 0) {
                                    if (!(typeof this === "string" || this instanceof String)) {
                                        for (var am in this) {
                                            V++;
                                            var an = i.type(this[am]);
                                            T.push({name: am,type: an})
                                        }
                                        ac = V;
                                        W.datafields = T
                                    }
                                }
                                if (ac > 0) {
                                    var ai = this;
                                    var al = H(ai, ac);
                                    al.uid = aj;
                                    ag.records[ag.records.length] = al
                                } else {
                                    this.uid = aj;
                                    ag.records[ag.records.length] = this
                                }
                            })
                        } else {
                            if (ac == 0) {
                                var V = 0;
                                var T = new Array();
                                i.each(W.localdata, function(ak, am) {
                                    var ai = i.extend({}, this);
                                    if (typeof am === "string") {
                                        ag.records = W.localdata;
                                        return false
                                    } else {
                                        var aj = ag.getid(W.id, ai, ak);
                                        if (typeof (aj) === "object") {
                                            aj = ak
                                        }
                                        ai.uid = aj;
                                        if (ak == 0) {
                                            for (var an in this) {
                                                V++;
                                                var ao = i.type(this[an]);
                                                T.push({name: an,type: ao})
                                            }
                                            ac = V;
                                            W.datafields = T
                                        }
                                        if (ac > 0) {
                                            var al = H(ai, ac);
                                            al.uid = aj;
                                            ag.records[ag.records.length] = al
                                        } else {
                                            ag.records[ag.records.length] = ai
                                        }
                                    }
                                })
                            } else {
                                i.each(W.localdata, function(ak) {
                                    var ai = this;
                                    var al = H(ai, ac);
                                    var aj = ag.getid(W.id, al, ak);
                                    if (typeof (aj) === "object") {
                                        aj = ak
                                    }
                                    var ai = i.extend({}, al);
                                    ai.uid = aj;
                                    ag.records[ag.records.length] = ai
                                })
                            }
                        }
                    }
                    this.originaldata = W.localdata;
                    this.cachedrecords = this.records;
                    this.addForeignValues(W);
                    if (K.uniqueDataFields) {
                        var S = this.getUniqueRecords(this.records, K.uniqueDataFields);
                        this.records = S;
                        this.cachedrecords = S
                    }
                    if (K.beforeLoadComplete) {
                        var ad = K.beforeLoadComplete(ag.records, this.originaldata);
                        if (ad != undefined) {
                            ag.records = ad;
                            ag.cachedrecords = ad
                        }
                    }
                    if (K.autoSort && K.autoSortField) {
                        var O = Object.prototype.toString;
                        Object.prototype.toString = (typeof field == "function") ? field : function() {
                            return this[K.autoSortField]
                        };
                        ag.records.sort(function(aj, ai) {
                            if (aj === undefined) {
                                aj = null
                            }
                            if (ai === undefined) {
                                ai = null
                            }
                            if (aj === null && ai === null) {
                                return 0
                            }
                            if (aj === null && ai !== null) {
                                return 1
                            }
                            if (aj !== null && ai === null) {
                                return -1
                            }
                            aj = aj.toString();
                            ai = ai.toString();
                            if (i.jqx.dataFormat.isNumber(aj) && i.jqx.dataFormat.isNumber(ai)) {
                                if (aj < ai) {
                                    return -1
                                }
                                if (aj > ai) {
                                    return 1
                                }
                                return 0
                            } else {
                                if (i.jqx.dataFormat.isDate(aj) && i.jqx.dataFormat.isDate(ai)) {
                                    if (aj < ai) {
                                        return -1
                                    }
                                    if (aj > ai) {
                                        return 1
                                    }
                                    return 0
                                } else {
                                    if (!i.jqx.dataFormat.isNumber(aj) && !i.jqx.dataFormat.isNumber(ai)) {
                                        aj = String(aj).toLowerCase();
                                        ai = String(ai).toLowerCase()
                                    }
                                }
                            }
                            try {
                                if (aj < ai) {
                                    return -1
                                }
                                if (aj > ai) {
                                    return 1
                                }
                            } catch (ak) {
                                var al = ak
                            }
                            return 0
                        });
                        Object.prototype.toString = O
                    }
                    ag.loadedData = W.localdata;
                    ag.buildHierarchy();
                    if (i.isFunction(K.loadComplete)) {
                        K.loadComplete(W.localdata, ag.records)
                    }
                    break;
                case "json":
                case "jsonp":
                case "xml":
                case "xhtml":
                case "script":
                case "text":
                    if (W.localdata != null) {
                        if (i.isFunction(W.beforeprocessing)) {
                            W.beforeprocessing(W.localdata)
                        }
                        if (W.datatype === "xml") {
                            ag.loadxml(W.localdata, W.localdata, W)
                        } else {
                            if (Q === "text") {
                                ag.loadtext(W.localdata, W)
                            } else {
                                ag.loadjson(W.localdata, W.localdata, W)
                            }
                        }
                        ag.addForeignValues(W);
                        if (K.uniqueDataFields) {
                            var S = ag.getUniqueRecords(ag.records, K.uniqueDataFields);
                            ag.records = S;
                            ag.cachedrecords = S
                        }
                        if (K.beforeLoadComplete) {
                            var ad = K.beforeLoadComplete(ag.records, this.originaldata);
                            if (ad != undefined) {
                                ag.records = ad;
                                ag.cachedrecords = ad
                            }
                        }
                        ag.loadedData = W.localdata;
                        ag.buildHierarchy.call(ag);
                        if (i.isFunction(K.loadComplete)) {
                            K.loadComplete(W.localdata, ag.records)
                        }
                        ag.callBindingUpdate(Z);
                        return
                    }
                    var ae = K.data != undefined ? K.data : {};
                    if (W.processdata) {
                        W.processdata(ae)
                    }
                    if (i.isFunction(K.processData)) {
                        K.processData(ae)
                    }
                    if (i.isFunction(K.formatData)) {
                        var e = K.formatData(ae);
                        if (e != undefined) {
                            ae = e
                        }
                    }
                    var aa = "application/x-www-form-urlencoded";
                    if (K.contentType) {
                        aa = K.contentType
                    }
                    var J = "GET";
                    if (W.type) {
                        J = W.type
                    }
                    if (K.type) {
                        J = K.type
                    }
                    if (W.url && W.url.length > 0) {
                        if (i.isFunction(K.loadServerData)) {
                            ag._requestData(ae, W, K)
                        } else {
                            this.xhr = i.jqx.data.ajax({dataType: Q,cache: this.cache,type: J,url: W.url,async: N,timeout: W.timeout,contentType: aa,data: ae,success: function(al, ai, ao) {
                                    if (i.isFunction(W.beforeprocessing)) {
                                        var an = W.beforeprocessing(al, ai, ao);
                                        if (an != undefined) {
                                            al = an
                                        }
                                    }
                                    if (i.isFunction(K.downloadComplete)) {
                                        var an = K.downloadComplete(al, ai, ao);
                                        if (an != undefined) {
                                            al = an
                                        }
                                    }
                                    if (al == null) {
                                        ag.records = new Array();
                                        ag.cachedrecords = new Array();
                                        ag.originaldata = new Array();
                                        ag.callDownloadComplete();
                                        if (i.isFunction(K.loadComplete)) {
                                            K.loadComplete(new Array())
                                        }
                                        return
                                    }
                                    var aj = al;
                                    if (al.records) {
                                        aj = al.records
                                    }
                                    if (al.totalrecords != undefined) {
                                        W.totalrecords = al.totalrecords
                                    }
                                    if (W.datatype === "xml") {
                                        ag.loadxml(null, aj, W)
                                    } else {
                                        if (Q === "text") {
                                            ag.loadtext(aj, W)
                                        } else {
                                            ag.loadjson(null, aj, W)
                                        }
                                    }
                                    ag.addForeignValues(W);
                                    if (K.uniqueDataFields) {
                                        var ak = ag.getUniqueRecords(ag.records, K.uniqueDataFields);
                                        ag.records = ak;
                                        ag.cachedrecords = ak
                                    }
                                    if (K.beforeLoadComplete) {
                                        var am = K.beforeLoadComplete(ag.records, al);
                                        if (am != undefined) {
                                            ag.records = am;
                                            ag.cachedrecords = am
                                        }
                                    }
                                    ag.loadedData = al;
                                    ag.buildHierarchy.call(ag);
                                    ag.callDownloadComplete();
                                    if (i.isFunction(K.loadComplete)) {
                                        K.loadComplete(al, ai, ao, ag.records)
                                    }
                                },error: function(ak, ai, aj) {
                                    if (i.isFunction(W.loaderror)) {
                                        W.loaderror(ak, ai, aj)
                                    }
                                    if (i.isFunction(K.loadError)) {
                                        K.loadError(ak, ai, aj)
                                    }
                                    ak = null;
                                    ag.callDownloadComplete()
                                },beforeSend: function(aj, ai) {
                                    if (i.isFunction(K.beforeSend)) {
                                        K.beforeSend(aj, ai)
                                    }
                                    if (i.isFunction(W.beforesend)) {
                                        W.beforesend(aj, ai)
                                    }
                                }})
                        }
                    } else {
                        ag.buildHierarchy(new Array());
                        ag.callDownloadComplete();
                        if (i.isFunction(K.loadComplete)) {
                            if (!ah) {
                                var ah = {}
                            }
                            K.loadComplete(ah)
                        }
                    }
                    break
            }
            this.callBindingUpdate(Z)
        },buildHierarchy: function(K) {
            var e = this._source;
            var P = new Array();
            if (!e.datafields) {
                return
            }
            if (e.hierarchy && !e.hierarchy.reservedNames) {
                e.hierarchy.reservedNames = {leaf: "leaf",parent: "parent",expanded: "expanded",checked: "checked",selected: "selected",level: "level",icon: "icon",data: "data"}
            } else {
                if (e.hierarchy) {
                    var O = e.hierarchy.reservedNames;
                    if (!O.leaf) {
                        O.leaf = "leaf"
                    }
                    if (!O.parent) {
                        O.parent = "parent"
                    }
                    if (!O.expanded) {
                        O.expanded = "expanded"
                    }
                    if (!O.checked) {
                        O.checked = "checked"
                    }
                    if (!O.selected) {
                        O.selected = "selected"
                    }
                    if (!O.level) {
                        O.level = "level"
                    }
                    if (!O.data) {
                        O.data = "data"
                    }
                }
            }
            if (!e.hierarchy) {
                return
            }
            var N = this;
            var O = e.hierarchy.reservedNames;
            if (e.hierarchy.root) {
                if (e.dataType == "xml") {
                    var P = this.getRecordsHierarchy("uid", "parentuid", "records", null, K);
                    this.hierarchy = P;
                    return P
                } else {
                    this.hierarchy = this.records;
                    var R = e.hierarchy.root;
                    for (var L = 0; L < this.records.length; L++) {
                        var M = this.records[L];
                        if (!M) {
                            continue
                        }
                        var H = function(S) {
                            if (e.hierarchy.record) {
                                S.records = S[R][e.hierarchy.record]
                            } else {
                                var U = R.split(N.mapChar);
                                var T = null;
                                if (U.length > 1) {
                                    var W = S;
                                    for (var V = 0; V < U.length; V++) {
                                        if (W != undefined) {
                                            W = W[U[V]]
                                        }
                                    }
                                    T = W
                                } else {
                                    T = S[R]
                                }
                                S.records = T
                            }
                            if (S.records == null || (S.records && S.records.length == 0)) {
                                S[O.leaf] = true
                            }
                        };
                        H(M);
                        M[O.level] = 0;
                        var I = this.getid(e.id, M, L);
                        M.uid = I;
                        M[O.parent] = null;
                        M[O.data] = M;
                        if (M[O.expanded] === undefined) {
                            M[O.expanded] = false
                        }
                        var Q = function(W, U) {
                            if (!U) {
                                W.records = new Array();
                                return
                            }
                            for (var V = 0; V < U.length; V++) {
                                var S = U[V];
                                if (!S) {
                                    continue
                                }
                                H(S);
                                S[O.level] = W[O.level] + 1;
                                S[O.parent] = W;
                                S[O.data] = S;
                                var T = N.getid(e.id, S, V);
                                if (T == V && e.id == null) {
                                    S.uid = W.uid + "_" + T
                                } else {
                                    S.uid = T
                                }
                                if (S[O.expanded] === undefined) {
                                    S[O.expanded] = false
                                }
                                Q(S, S.records)
                            }
                        };
                        Q(M, M.records)
                    }
                }
                return this.hierarchy
            }
            if (e.hierarchy.keyDataField && e.hierarchy.parentDataField) {
                var P = this.getRecordsHierarchy(e.hierarchy.keyDataField.name, e.hierarchy.parentDataField.name, "records", null, K);
                this.hierarchy = P;
                return P
            }
            if (e.hierarchy.groupingDataFields) {
                var J = new Array();
                for (var L = 0; L < e.hierarchy.groupingDataFields.length; L++) {
                    J.push(e.hierarchy.groupingDataFields[L].name)
                }
                var P = this.getGroupedRecords(J, "records", "label", null, "data", null, "parent", K);
                this.hierarchy = P;
                return P
            }
        },addRecord: function(H, e, M, I) {
            var J = this;
            var N = function() {
                return {leaf: "leaf",parent: "parent",expanded: "expanded",checked: "checked",selected: "selected",level: "level",icon: "icon",data: "data"}
            };
            if (H != undefined) {
                if (M != undefined) {
                    if (this.hierarchy.length > 0) {
                        var K = function(O) {
                            if (O) {
                                for (var P = 0; P < O.length; P++) {
                                    var Q = O[P];
                                    if (Q.uid == M) {
                                        var R = (J._source && J._source.hierarchy) ? J._source.hierarchy.reservedNames : null;
                                        if (R == null) {
                                            R = N()
                                        }
                                        H[R.parent] = Q;
                                        H[R.level] = Q[R.level] + 1;
                                        if (!Q.records) {
                                            Q.records = new Array();
                                            Q[R.leaf] = false
                                        } else {
                                            Q[R.leaf] = false
                                        }
                                        if (e == "last") {
                                            Q.records.push(H)
                                        } else {
                                            if (typeof e === "number" && isFinite(e)) {
                                                Q.records.splice(e, 0, H)
                                            } else {
                                                Q.records.splice(0, 0, H)
                                            }
                                        }
                                        return true
                                    }
                                    if (Q.records) {
                                        K(Q.records)
                                    }
                                }
                            }
                        };
                        K(this.hierarchy)
                    }
                } else {
                    if (this.hierarchy && this.hierarchy.length >= 0 && (this._source.hierarchy || I)) {
                        var L = (J._source && J._source.hierarchy) ? J._source.hierarchy.reservedNames : null;
                        if (L == null) {
                            L = N()
                        }
                        H[L.level] = 0;
                        if (e == "last") {
                            this.hierarchy.push(H)
                        } else {
                            if (typeof e === "number" && isFinite(e)) {
                                this.hierarchy.splice(e, 0, H)
                            } else {
                                this.hierarchy.splice(0, 0, H)
                            }
                        }
                    } else {
                        if (e == "last") {
                            this.records.push(H)
                        } else {
                            if (typeof e === "number" && isFinite(e)) {
                                this.records.splice(e, 0, H)
                            } else {
                                this.records.splice(0, 0, H)
                            }
                        }
                    }
                    return true
                }
            }
            return false
        },deleteRecord: function(H) {
            var J = this;
            if (this.hierarchy.length > 0) {
                var K = function(L) {
                    if (L) {
                        for (var O = 0; O < L.length; O++) {
                            var P = L[O];
                            if (P.uid == H) {
                                L.splice(O, 1);
                                if (J.recordids[H]) {
                                    delete J.recordids[H]
                                }
                                var N = function(T) {
                                    for (var Q = 0; Q < T.length; Q++) {
                                        var S = T[Q].uid;
                                        for (var R = 0; R < J.records.length; R++) {
                                            var U = J.records[R];
                                            if (U.uid == S) {
                                                J.records.splice(R, 1);
                                                break
                                            }
                                        }
                                        if (T[Q].records) {
                                            N(T[Q].records)
                                        }
                                    }
                                };
                                if (P.records) {
                                    N(P.records)
                                }
                                for (var M = 0; M < J.records.length; M++) {
                                    var P = J.records[M];
                                    if (P.uid == H) {
                                        J.records.splice(M, 1);
                                        break
                                    }
                                }
                                return true
                            }
                            if (P.records) {
                                K(P.records)
                            }
                        }
                    }
                };
                K(this.hierarchy)
            } else {
                for (var e = 0; e < this.records.length; e++) {
                    var I = this.records[e];
                    if (I.uid == H) {
                        this.records.splice(e, 1);
                        return true
                    }
                }
            }
            return false
        },addForeignValues: function(H) {
            var Q = this;
            var V = H.datafields ? H.datafields.length : 0;
            for (var N = 0; N < V; N++) {
                var L = H.datafields[N];
                if (L != undefined) {
                    if (L.values != undefined) {
                        if (L.value == undefined) {
                            L.value = L.name
                        }
                        if (L.values.value == undefined) {
                            L.values.value = L.value
                        }
                        var T = new Array();
                        var K, M;
                        if (Q.pageable && Q.virtualmode) {
                            K = Q.pagenum * Q.pagesize;
                            M = K + Q.pagesize;
                            if (M > Q.totalrecords) {
                                M = Q.totalrecords
                            }
                        } else {
                            if (Q.virtualmode) {
                                K = H.recordstartindex;
                                M = H.recordendindex;
                                if (M > Q.totalrecords) {
                                    M = Q.totalrecords
                                }
                            } else {
                                K = 0;
                                M = Q.records.length
                            }
                        }
                        for (var O = K; O < M; O++) {
                            var P = Q.records[O];
                            var I = L.name;
                            var U = P[L.value];
                            if (T[U] != undefined) {
                                P[I] = T[U]
                            } else {
                                for (var J = 0; J < L.values.source.length; J++) {
                                    var S = L.values.source[J];
                                    var e = S[L.values.value];
                                    if (e == undefined) {
                                        e = S.uid
                                    }
                                    if (e == U) {
                                        var R = S[L.values.name];
                                        P[I] = R;
                                        T[U] = R;
                                        break
                                    }
                                }
                            }
                        }
                    } else {
                        if (L.value != undefined) {
                            for (var O = 0; O < Q.records.length; O++) {
                                var P = Q.records[O];
                                P[L.name] = P[L.value]
                            }
                        }
                    }
                }
            }
        },abort: function() {
            if (this.xhr && this.xhr.readyState != 4) {
                this.xhr.abort();
                me.callDownloadComplete()
            }
        },_requestData: function(H, J, e) {
            var I = this;
            var K = function(P) {
                if (P.totalrecords) {
                    J.totalrecords = P.totalrecords;
                    I.totalrecords = P.totalrecords
                }
                if (P.records) {
                    I.records = P.records;
                    I.cachedrecords = P.records
                }
                I.addForeignValues(J);
                if (e.uniqueDataFields) {
                    var N = I.getUniqueRecords(I.records, e.uniqueDataFields);
                    I.records = N;
                    I.cachedrecords = N
                }
                if (e.beforeLoadComplete) {
                    var O = e.beforeLoadComplete(I.records, data);
                    if (O != undefined) {
                        I.records = O;
                        I.cachedrecords = O
                    }
                }
                for (var M = 0; M < I.records.length; M++) {
                    var L = I.records[M];
                    if (undefined == L.uid) {
                        L.uid = I.getid(J.id, L, M)
                    }
                }
                I.buildHierarchy.call(I);
                if (i.isFunction(e.loadComplete)) {
                    e.loadComplete(P)
                }
                I.callDownloadComplete()
            };
            e.loadServerData(H, J, K)
        },getUniqueRecords: function(I, L) {
            if (I && L) {
                var e = I.length;
                var Q = L.length;
                var N = new Array();
                var O = new Array();
                for (var P = 0; P < e; P++) {
                    var M = I[P];
                    var J = "";
                    if (M == undefined) {
                        continue
                    }
                    for (var K = 0; K < Q; K++) {
                        var H = L[K];
                        J += M[H] + "_"
                    }
                    if (!O[J]) {
                        N[N.length] = M
                    }
                    O[J] = true
                }
            }
            return N
        },getAggregatedData: function(S, P, M, H) {
            var L = M;
            if (!L) {
                L = this.records
            }
            var Q = {};
            var K = new Array();
            var J = L.length;
            if (J == 0) {
                return
            }
            if (J == undefined) {
                return
            }
            for (var O = 0; O < J; O++) {
                var R = L[O];
                for (var N = 0; N < S.length; N++) {
                    var I = S[N];
                    var U = R[I.name];
                    if (U === null) {
                        continue
                    }
                    if (I.aggregates) {
                        Q[I.name] = Q[I.name] || {};
                        K[I.name] = K[I.name] || 0;
                        K[I.name]++;
                        var e = function(W) {
                            for (obj in W) {
                                var X = Q[I.name][obj];
                                if (X == null) {
                                    Q[I.name][obj] = 0;
                                    X = 0
                                }
                                if (i.isFunction(W[obj])) {
                                    X = W[obj](X, U, I.name, R, H)
                                }
                                Q[I.name][obj] = X
                            }
                        };
                        var T = parseFloat(U);
                        if (isNaN(T)) {
                            T = false
                        } else {
                            T = true
                        }
                        if (T) {
                            U = parseFloat(U)
                        }
                        if (typeof U === "number" && isFinite(U)) {
                            i.each(I.aggregates, function() {
                                var W = Q[I.name][this];
                                if (W == null) {
                                    W = 0;
                                    if (this == "min") {
                                        W = 9999999999999
                                    }
                                    if (this == "max") {
                                        W = -9999999999999
                                    }
                                }
                                if (this == "sum" || this == "avg" || this == "stdev" || this == "stdevp" || this == "var" || this == "varp") {
                                    W += parseFloat(U)
                                } else {
                                    if (this == "product") {
                                        if (O == 0) {
                                            W = parseFloat(U)
                                        } else {
                                            W *= parseFloat(U)
                                        }
                                    } else {
                                        if (this == "min") {
                                            W = Math.min(W, parseFloat(U))
                                        } else {
                                            if (this == "max") {
                                                W = Math.max(W, parseFloat(U))
                                            } else {
                                                if (this == "count") {
                                                    W++
                                                } else {
                                                    if (typeof (this) == "object") {
                                                        e(this);
                                                        return
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                Q[I.name][this] = W
                            })
                        } else {
                            i.each(I.aggregates, function() {
                                if (this == "min" || this == "max" || this == "count" || this == "product" || this == "sum" || this == "avg" || this == "stdev" || this == "stdevp" || this == "var" || this == "varp") {
                                    var W = Q[I.name][this];
                                    if (W == null) {
                                        W = 0
                                    }
                                    Q[I.name][this] = W;
                                    return true
                                }
                                if (typeof (this) == "object") {
                                    e(this)
                                }
                            })
                        }
                    }
                }
            }
            for (var N = 0; N < S.length; N++) {
                var I = S[N];
                if (!Q[I.name]) {
                    Q[I.name] = {};
                    i.each(I.aggregates, function(W) {
                        Q[I.name][this] = 0
                    })
                }
                if (Q[I.name]["avg"] != undefined) {
                    var U = Q[I.name]["avg"];
                    var V = K[I.name];
                    if (V === 0 || V == undefined) {
                        Q[I.name]["avg"] = 0
                    } else {
                        Q[I.name]["avg"] = U / V
                    }
                } else {
                    if (Q[I.name]["count"] != undefined) {
                        Q[I.name]["count"] = J
                    }
                }
                if (Q[I.name]["stdev"] || Q[I.name]["stdevp"] || Q[I.name]["var"] || Q[I.name]["varp"]) {
                    i.each(I.aggregates, function(ac) {
                        if (this == "stdev" || this == "var" || this == "varp" || this == "stdevp") {
                            var ad = Q[I.name][this];
                            var ab = J;
                            var W = (ad / J);
                            var Y = 0;
                            for (var Z = 0; Z < J; Z++) {
                                var aa = L[Z];
                                var ae = aa[I.name];
                                Y += (ae - W) * (ae - W)
                            }
                            var X = (this == "stdevp" || this == "varp") ? ab : ab - 1;
                            if (X == 0) {
                                X = 1
                            }
                            if (this == "var" || this == "varp") {
                                Q[I.name][this] = Y / X
                            } else {
                                if (this == "stdevp" || this == "stdev") {
                                    Q[I.name][this] = Math.sqrt(Y / X)
                                }
                            }
                        }
                    })
                }
                if (I.formatStrings) {
                    i.each(I.aggregates, function(X) {
                        var W = I.formatStrings[X];
                        if (W) {
                            if (this == "min" || this == "max" || this == "count" || this == "product" || this == "sum" || this == "avg" || this == "stdev" || this == "stdevp" || this == "var" || this == "varp") {
                                var Y = Q[I.name][this];
                                Q[I.name][this] = i.jqx.dataFormat.formatnumber(Y, W, P)
                            } else {
                                if (typeof this == "object") {
                                    for (obj in this) {
                                        var Y = Q[I.name][obj];
                                        Q[I.name][obj] = i.jqx.dataFormat.formatnumber(Y, W, P)
                                    }
                                }
                            }
                        }
                    })
                }
            }
            return Q
        },bindDownloadComplete: function(H, e) {
            this._downloadComplete[this._downloadComplete.length] = {id: H,func: e}
        },unbindDownloadComplete: function(H) {
            for (var e = 0; e < this._downloadComplete.length; e++) {
                if (this._downloadComplete[e].id == H) {
                    this._downloadComplete[e].func = null;
                    this._downloadComplete.splice(e, 1);
                    break
                }
            }
        },callDownloadComplete: function() {
            for (var e = 0; e < this._downloadComplete.length; e++) {
                var H = this._downloadComplete[e];
                if (H.func != null) {
                    H.func()
                }
            }
        },setSource: function(e) {
            this._source = e
        },generatekey: function() {
            var e = function() {
                return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
            };
            return (e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e())
        },getGroupedRecords: function(aj, am, W, ae, ak, ab, ad, an, K) {
            var ag = 0;
            var aa = this;
            if (!K) {
                K = 0
            }
            var I = new Array();
            for (var N = 0; N < aj.length; N++) {
                I[N] = aa.generatekey()
            }
            if (!am) {
                am = "items"
            }
            if (!W) {
                W = "group"
            }
            if (!ak) {
                ak = "record"
            }
            if (!ad) {
                ad = "parentItem"
            }
            if (undefined === ab) {
                ab = "value"
            }
            var S = new Array();
            var L = 0;
            var J = new Array();
            var R = aj.length;
            var al = new Array();
            if (!an) {
                var an = this.records
            }
            var P = an.length;
            var af = function(ao) {
                var ap = ao;
                if (ae) {
                    i.each(ae, function() {
                        if (this.name && this.map) {
                            ap[this.map] = ap[this.name]
                        }
                    })
                }
                return ap
            };
            for (var V = 0; V < P; V++) {
                var ai = af(an[V]);
                id = ai[aa.uniqueId];
                var H = new Array();
                var X = 0;
                for (N = 0; N < R; N++) {
                    var Q = aj[N];
                    var ac = ai[Q];
                    if (null == ac) {
                        continue
                    }
                    H[X++] = {value: ac,hash: I[N]}
                }
                if (H.length != R) {
                    break
                }
                var Y = null;
                var T = "";
                var e = -1;
                for (var Z = 0; Z < H.length; Z++) {
                    e++;
                    var ah = H[Z].value;
                    var M = H[Z].hash;
                    T = T + "_" + M + "_" + ah;
                    if (J[T] != undefined && J[T] != null) {
                        Y = J[T];
                        continue
                    }
                    if (Y == null) {
                        Y = {level: 0};
                        Y[ad] = null;
                        Y[W] = ah;
                        Y[ak] = ai;
                        if (ai.expanded !== undefined) {
                            Y.expanded = ai.expanded
                        } else {
                            Y.expanded = false
                        }
                        if (ab) {
                            Y[ab] = ai[ab]
                        }
                        Y[am] = new Array();
                        var O = S.length + K;
                        if (!this._source.id || typeof ai.uid === "number" || isFinite(ai.uid)) {
                            O = "Row" + O
                        }
                        Y.uid = O;
                        S[L++] = Y
                    } else {
                        var U = {level: Y.level + 1};
                        U[ad] = Y;
                        U[W] = ah;
                        U[am] = new Array();
                        U[ak] = ai;
                        if (ai.expanded !== undefined) {
                            U.expanded = ai.expanded
                        } else {
                            U.expanded = false
                        }
                        if (ab) {
                            U[ab] = ai[ab]
                        }
                        U.uid = Y.uid + "_" + Y[am].length;
                        Y[am][Y[am].length] = U;
                        Y = U
                    }
                    J[T] = Y
                }
                if (ai) {
                    ai.leaf = true
                }
                if (Y != null) {
                    if (this._source.id == null) {
                        ai.uid = Y.uid + "_" + Y[am].length
                    }
                    ai[ad] = Y;
                    ai.level = Y.level + 1;
                    Y[am][Y[am].length] = ai
                } else {
                    if (!ai.uid) {
                        ai.uid = this.generatekey()
                    }
                }
            }
            return S
        },getRecordsHierarchy: function(L, J, aa, U, H) {
            var e = new Array();
            var I = this.records;
            if (H) {
                I = H
            }
            if (this.records.length == 0) {
                return null
            }
            var Y = aa != null ? aa : "items";
            var R = [];
            var ab = I;
            var O = ab.length;
            var P = (this._source && this._source.hierarchy) ? this._source.hierarchy.reservedNames : null;
            var W = function(ac) {
                var ad = ac;
                if (U) {
                    i.each(U, function() {
                        if (this.name && this.map) {
                            ad[this.map] = ad[this.name]
                        }
                    })
                }
                return ad
            };
            for (var X = 0; X < O; X++) {
                var Z = i.extend({}, ab[X]);
                var T = Z[J];
                var S = Z[L];
                R[S] = {parentid: T,item: Z}
            }
            for (var X = 0; X < O; X++) {
                var Z = i.extend({}, ab[X]);
                var T = Z[J];
                var S = Z[L];
                if (R[T] != undefined) {
                    var Z = {parentid: T,item: R[S].item};
                    var Q = R[T].item;
                    if (!Q[Y]) {
                        Q[Y] = []
                    }
                    var M = Q[Y].length;
                    var K = Z.item;
                    if (!P) {
                        if (K.parent == undefined) {
                            K.parent = Q
                        }
                    } else {
                        if (K[P.parent] == undefined) {
                            K[P.parent] = Q
                        }
                    }
                    var N = W(K);
                    Q[Y][M] = N;
                    R[T].item = Q;
                    R[S] = Z
                } else {
                    var K = R[S].item;
                    if (!P) {
                        if (K.parent == undefined) {
                            K.parent = null
                        }
                    } else {
                        if (K[P.parent] == undefined) {
                            K[P.parent] = null
                        }
                    }
                    var N = W(K);
                    if (!P) {
                        N.level = 0
                    } else {
                        N[P.level] = 0
                    }
                    e[e.length] = N
                }
            }
            if (e.length != 0) {
                var V = function(af, ac) {
                    for (var ad = 0; ad < ac.length; ad++) {
                        if (!P) {
                            ac[ad].level = af
                        } else {
                            ac[ad][P.level] = af
                        }
                        var ae = ac[ad][Y];
                        if (ae) {
                            if (ae.length > 0) {
                                V(af + 1, ae)
                            } else {
                                if (!P) {
                                    ac[ad].leaf = true
                                } else {
                                    ac[ad][P.leaf] = true
                                }
                            }
                        } else {
                            if (!P) {
                                ac[ad].leaf = true
                            } else {
                                ac[ad][P.leaf] = true
                            }
                        }
                    }
                };
                V(0, e)
            }
            return e
        },bindBindingUpdate: function(H, e) {
            this._bindingUpdate[this._bindingUpdate.length] = {id: H,func: e}
        },unbindBindingUpdate: function(H) {
            for (var e = 0; e < this._bindingUpdate.length; e++) {
                if (this._bindingUpdate[e].id == H) {
                    this._bindingUpdate[e].func = null;
                    this._bindingUpdate.splice(e, 1);
                    break
                }
            }
        },callBindingUpdate: function(e) {
            for (var I = 0; I < this._bindingUpdate.length; I++) {
                var H = this._bindingUpdate[I];
                if (H.func != null) {
                    H.func(e)
                }
            }
        },getid: function(N, H, K) {
            if (N != null && N.name != undefined) {
                if (N.name) {
                    var e = i(H).attr(N.name);
                    if (e != null && e.toString().length > 0) {
                        return e
                    } else {
                        if (N.map) {
                            try {
                                var e = i(H).attr(N.map);
                                if (e != null && e.toString().length > 0) {
                                    return e
                                } else {
                                    if (i(N.map, H).length > 0) {
                                        return i(N.map, H).text()
                                    } else {
                                        if (i(N.name, H).length > 0) {
                                            return i(N.name, H).text()
                                        }
                                    }
                                }
                            } catch (J) {
                                return K
                            }
                        }
                    }
                    return
                }
            }
            if (i(N, H).length > 0) {
                return i(N, H).text()
            }
            if (N) {
                if (N.toString().length > 0) {
                    var e = i(H).attr(N);
                    if (e != null && e.toString().length > 0) {
                        return e
                    } else {
                        var I = N.split(this.mapChar);
                        if (I.length > 1) {
                            var M = H;
                            for (var L = 0; L < I.length; L++) {
                                if (M != undefined) {
                                    M = M[I[L]]
                                }
                            }
                            if (M != undefined) {
                                return M
                            }
                        } else {
                            if (H[N] != undefined) {
                                return H[N]
                            }
                        }
                    }
                }
            }
            return K
        },loadjson: function(ae, af, R) {
            if (typeof (ae) == "string") {
                ae = i.parseJSON(ae)
            }
            if (R.root == undefined) {
                R.root = ""
            }
            if (R.record == undefined) {
                R.record = ""
            }
            var ae = ae || af;
            if (!ae) {
                ae = []
            }
            var ad = this;
            if (R.root != "") {
                var K = R.root.split(ad.mapChar);
                if (K.length > 1) {
                    var aa = ae;
                    for (var Q = 0; Q < K.length; Q++) {
                        if (aa != undefined) {
                            aa = aa[K[Q]]
                        }
                    }
                    ae = aa
                } else {
                    if (ae[R.root] != undefined) {
                        ae = ae[R.root]
                    } else {
                        i.each(ae, function(ah) {
                            var ag = this;
                            if (this == R.root) {
                                ae = this;
                                return false
                            } else {
                                if (this[R.root] != undefined) {
                                    ae = this[R.root]
                                }
                            }
                        })
                    }
                    if (!ae) {
                        var K = R.root.split(ad.mapChar);
                        if (K.length > 0) {
                            var aa = ae;
                            for (var Q = 0; Q < K.length; Q++) {
                                if (aa != undefined) {
                                    aa = aa[K[Q]]
                                }
                            }
                            ae = aa
                        }
                    }
                }
            } else {
                if (!ae.length) {
                    for (obj in ae) {
                        if (i.isArray(ae[obj])) {
                            ae = ae[obj];
                            break
                        }
                    }
                }
            }
            if (ae != null && ae.length == undefined) {
                ae = i.makeArray(ae)
            }
            if (ae == null || ae.length == undefined) {
                alert("JSON Parse error.");
                return
            }
            if (ae.length == 0) {
                this.totalrecords = 0;
                return
            }
            var J = ae.length;
            this.totalrecords = this.virtualmode ? (R.totalrecords || J) : J;
            this.records = new Array();
            this.originaldata = new Array();
            var W = this.records;
            var T = !this.pageable ? R.recordstartindex : this.pagesize * this.pagenum;
            this.recordids = new Array();
            if (R.loadallrecords) {
                T = 0;
                J = this.totalrecords
            }
            var P = 0;
            if (this.virtualmode) {
                T = !this.pageable ? R.recordstartindex : this.pagesize * this.pagenum;
                P = T;
                T = 0;
                J = this.totalrecords
            }
            var Y = R.datafields ? R.datafields.length : 0;
            if (Y == 0) {
                var e = ae[0];
                var ab = new Array();
                for (obj in e) {
                    var H = obj;
                    ab[ab.length] = {name: H}
                }
                R.datafields = ab;
                Y = ab.length
            }
            var M = T;
            for (var V = T; V < J; V++) {
                var I = ae[V];
                if (I == undefined) {
                    break
                }
                if (R.record && R.record != "") {
                    I = I[R.record];
                    if (I == undefined) {
                        continue
                    }
                }
                var ac = this.getid(R.id, I, V);
                if (typeof (ac) === "object") {
                    ac = V
                }
                if (!this.recordids[ac]) {
                    this.recordids[ac] = I;
                    var L = {};
                    for (var U = 0; U < Y; U++) {
                        var N = R.datafields[U];
                        var S = "";
                        if (undefined == N || N == null) {
                            continue
                        }
                        if (N.map) {
                            if (i.isFunction(N.map)) {
                                S = N.map(I)
                            } else {
                                var K = N.map.split(ad.mapChar);
                                if (K.length > 0) {
                                    var Z = I;
                                    for (var Q = 0; Q < K.length; Q++) {
                                        if (Z != undefined) {
                                            Z = Z[K[Q]]
                                        }
                                    }
                                    S = Z
                                } else {
                                    S = I[N.map]
                                }
                            }
                            if (S != undefined && S != null) {
                                S = this.getvaluebytype(S, N)
                            } else {
                                if (S == undefined && S != null) {
                                    S = ""
                                }
                            }
                        }
                        if (S == "" && !N.map) {
                            S = I[N.name];
                            if (S == undefined && S != null) {
                                S = ""
                            }
                            if (N.value != undefined) {
                                if (S != undefined) {
                                    var X = S[N.value];
                                    if (X != undefined) {
                                        S = X
                                    }
                                }
                            }
                        }
                        S = this.getvaluebytype(S, N);
                        if (N.displayname != undefined) {
                            L[N.displayname] = S
                        } else {
                            L[N.name] = S
                        }
                        if (N.type === "array") {
                            var O = function(aj) {
                                if (!aj) {
                                    return
                                }
                                for (var ap = 0; ap < aj.length; ap++) {
                                    var am = aj[ap];
                                    if (!am) {
                                        continue
                                    }
                                    for (var an = 0; an < Y; an++) {
                                        var ai = R.datafields[an];
                                        var ao = "";
                                        if (undefined == ai || ai == null) {
                                            continue
                                        }
                                        if (ai.map) {
                                            if (i.isFunction(ai.map)) {
                                                ao = ai.map(am)
                                            } else {
                                                var ag = ai.map.split(ad.mapChar);
                                                if (ag.length > 0) {
                                                    var al = am;
                                                    for (var ah = 0; ah < ag.length; ah++) {
                                                        if (al != undefined) {
                                                            al = al[ag[ah]]
                                                        }
                                                    }
                                                    ao = al
                                                } else {
                                                    ao = am[ai.map]
                                                }
                                            }
                                            if (ao != undefined && ao != null) {
                                                ao = this.getvaluebytype(ao, ai)
                                            } else {
                                                if (ao == undefined && ao != null) {
                                                    ao = ""
                                                }
                                            }
                                        }
                                        if (ao == "" && !ai.map) {
                                            ao = am[ai.name];
                                            if (ao == undefined && ao != null) {
                                                ao = ""
                                            }
                                            if (ai.value != undefined) {
                                                if (ao != undefined) {
                                                    var ak = ao[ai.value];
                                                    if (ak != undefined) {
                                                        ao = ak
                                                    }
                                                }
                                            }
                                        }
                                        ao = this.getvaluebytype(ao, ai);
                                        if (ai.displayname != undefined) {
                                            am[ai.displayname] = ao
                                        } else {
                                            am[ai.name] = ao
                                        }
                                        if (ai.type === "array") {
                                            O.call(this, ao)
                                        }
                                    }
                                }
                            };
                            O.call(this, S)
                        }
                    }
                    if (R.recordendindex <= 0 || T < R.recordendindex) {
                        W[P + M] = i.extend({}, L);
                        W[P + M].uid = ac;
                        this.originaldata[P + M] = i.extend({}, W[V]);
                        M++
                    }
                }
            }
            this.records = W;
            this.cachedrecords = this.records
        },loadxml: function(K, ai, U) {
            if (typeof (K) == "string") {
                K = ai = i(i.parseXML(K));
                K = null
            }
            if (U.root == undefined) {
                U.root = ""
            }
            if (U.record == undefined) {
                U.record = ""
            }
            var K;
            if (i.jqx.browser.msie && ai) {
                if (ai.xml != undefined) {
                    K = i(U.root + " " + U.record, i.parseXML(ai.xml))
                } else {
                    K = K || i(U.root + " " + U.record, ai)
                }
            } else {
                K = K || i(U.root + " " + U.record, ai)
            }
            if (!K) {
                K = []
            }
            var J = K.length;
            if (K.length == 0) {
                return
            }
            this.totalrecords = this.virtualmode ? (U.totalrecords || J) : J;
            this.records = new Array();
            this.originaldata = new Array();
            var aa = this.records;
            var X = !this.pageable ? U.recordstartindex : this.pagesize * this.pagenum;
            this.recordids = new Array();
            if (U.loadallrecords) {
                X = 0;
                J = this.totalrecords
            }
            var S = 0;
            if (this.virtualmode) {
                X = !this.pageable ? U.recordstartindex : this.pagesize * this.pagenum;
                S = X;
                X = 0;
                J = this.totalrecords
            }
            var ac = U.datafields ? U.datafields.length : 0;
            if (ac == 0) {
                var e = K[0];
                var af = new Array();
                for (obj in e) {
                    var H = obj;
                    af[af.length] = {name: H}
                }
                U.datafields = af;
                ac = af.length
            }
            var T = X;
            var ae = false;
            for (var Z = X; Z < J; Z++) {
                var I = K[Z];
                if (I == undefined) {
                    break
                }
                var ah = this.getid(U.id, I, Z);
                if (!this.recordids[ah]) {
                    this.recordids[ah] = I;
                    var L = {};
                    var P = false;
                    if (U.hierarchy && U.hierarchy.root) {
                        P = true
                    }
                    for (var Y = 0; Y < ac; Y++) {
                        var Q = U.datafields[Y];
                        var W = "";
                        if (undefined == Q || Q == null) {
                            continue
                        }
                        if (Q.map) {
                            if (i.isFunction(Q.map)) {
                                W = Q.map(I)
                            } else {
                                var M = Q.map.indexOf("[");
                                if (M < 0) {
                                    W = i(Q.map, I);
                                    if (W.length == 1) {
                                        W = W.text()
                                    } else {
                                        ae = true;
                                        var ag = new Array();
                                        for (var ab = 0; ab < W.length; ab++) {
                                            ag.push(i(W[ab]).text())
                                        }
                                        W = ag;
                                        if (P && ag.length > 0) {
                                            W = ag[0]
                                        }
                                    }
                                } else {
                                    var ad = Q.map.substring(0, M - 1);
                                    var O = Q.map.indexOf("]");
                                    var R = Q.map.substring(M + 1, O);
                                    W = i(ad, I).attr(R);
                                    if (W == undefined) {
                                        W = i(I).attr(R)
                                    }
                                    if (W == undefined) {
                                        W = ""
                                    }
                                }
                                if (W == "") {
                                    W = i(I).attr(Q.map);
                                    if (W == undefined) {
                                        W = ""
                                    }
                                }
                            }
                        }
                        if (W == "") {
                            W = i(Q.name, I);
                            if (W.length == 1) {
                                W = W.text()
                            } else {
                                var ag = new Array();
                                for (var ab = 0; ab < W.length; ab++) {
                                    ag.push(i(W[ab]).text())
                                }
                                W = ag;
                                if (P && ag.length > 0) {
                                    W = ag[0]
                                }
                            }
                            if (W == "") {
                                W = i(I).attr(Q.name);
                                if (W == undefined) {
                                    W = ""
                                }
                            }
                            if (W == "") {
                                if (I.nodeName && I.nodeName == Q.name && I.firstChild) {
                                    W = i(I.firstChild).text()
                                }
                            }
                        }
                        var V = W;
                        W = this.getvaluebytype(W, Q);
                        if (Q.displayname != undefined) {
                            L[Q.displayname] = W
                        } else {
                            L[Q.name] = W
                        }
                    }
                    if (U.recordendindex <= 0 || X < U.recordendindex) {
                        aa[S + T] = i.extend({}, L);
                        aa[S + T].uid = ah;
                        this.originaldata[S + T] = i.extend({}, aa[Z]);
                        T++
                    }
                }
            }
            if (U.hierarchy && U.hierarchy.root) {
                for (var Z = X; Z < J; Z++) {
                    var I = K[Z];
                    var N = aa[Z];
                    if (i(I).parent().length > 0) {
                        var ah = this.getid(U.id, i(I).parents(U.hierarchy.record + ":first"));
                        N.parentuid = ah
                    } else {
                        N.parentuid = null
                    }
                }
            }
            this.records = aa;
            this.cachedrecords = this.records
        },loadtext: function(Y, P) {
            if (Y == null) {
                return
            }
            var e = P.rowDelimiter || this.rowDelimiter || "\n";
            var L = Y.split(e);
            var J = L.length;
            var X = Y.split("\r");
            if (J == 1 && X.length > 1) {
                L = X;
                J = L.length
            }
            this.totalrecords = this.virtualmode ? (P.totalrecords || J) : J;
            this.records = new Array();
            this.originaldata = new Array();
            var U = this.records;
            var R = !this.pageable ? P.recordstartindex : this.pagesize * this.pagenum;
            this.recordids = new Array();
            if (P.loadallrecords) {
                R = 0;
                J = this.totalrecords
            }
            var N = 0;
            if (this.virtualmode) {
                R = !this.pageable ? P.recordstartindex : this.pagesize * this.pagenum;
                N = R;
                R = 0;
                J = this.totalrecords
            }
            var V = P.datafields.length;
            var O = P.columnDelimiter || this.columnDelimiter;
            if (!O) {
                O = (P.datatype === "tab" || P.datatype === "tsv") ? "\t" : ","
            }
            for (var T = R; T < J; T++) {
                var I = L[T];
                var W = null;
                if (!this.recordids[W]) {
                    if (P.id == null) {
                        W = T;
                        this.recordids[W] = I
                    }
                    var K = {};
                    var H = L[T].split(O);
                    for (var S = 0; S < V; S++) {
                        if (S >= H.length) {
                            continue
                        }
                        var M = P.datafields[S];
                        var Q = H[S];
                        if (M.map && i.isFunction(M.map)) {
                            Q = M.map(I)
                        }
                        if (M.type) {
                            Q = this.getvaluebytype(Q, M)
                        }
                        var Z = M.map || M.name || S.toString();
                        K[Z] = Q;
                        if (P.id != null) {
                            if (P.id === M.name) {
                                W = Q;
                                this.recordids[W] = I
                            }
                        }
                    }
                    if (W == null) {
                        W = T
                    }
                    U[N + T] = i.extend({}, K);
                    U[N + T].uid = W;
                    this.originaldata[N + T] = i.extend({}, U[T])
                }
            }
            this.records = U;
            this.cachedrecords = this.records
        },getvaluebytype: function(L, H) {
            var J = L;
            if (L == null) {
                return L
            }
            if (i.isArray(L) && H.type != "array") {
                for (var I = 0; I < L.length; I++) {
                    L[I] = this.getvaluebytype(L[I], H)
                }
                return L
            }
            if (H.type == "date") {
                if (L == "NaN") {
                    L = ""
                } else {
                    var K = new Date(L);
                    if (typeof L == "string") {
                        if (H.format) {
                            var e = i.jqx.dataFormat.parsedate(L, H.format);
                            if (e != null) {
                                K = e
                            }
                        }
                    }
                    if (K.toString() == "NaN" || K.toString() == "Invalid Date") {
                        if (i.jqx.dataFormat) {
                            L = i.jqx.dataFormat.tryparsedate(L)
                        } else {
                            L = K
                        }
                    } else {
                        L = K
                    }
                    if (L == null) {
                        L = J
                    }
                }
            } else {
                if (H.type == "float" || H.type == "number" || H.type == "decimal") {
                    if (L == "NaN") {
                        L = ""
                    } else {
                        var L = parseFloat(L);
                        if (isNaN(L)) {
                            L = J
                        }
                    }
                } else {
                    if (H.type == "int" || H.type == "integer") {
                        var L = parseInt(L);
                        if (isNaN(L)) {
                            L = J
                        }
                    } else {
                        if (H.type == "bool" || H.type == "boolean") {
                            if (L != null) {
                                if (L.toLowerCase != undefined) {
                                    if (L.toLowerCase() == "false") {
                                        L = false
                                    } else {
                                        if (L.toLowerCase() == "true") {
                                            L = true
                                        }
                                    }
                                }
                            }
                            if (L == 1) {
                                L = true
                            } else {
                                if (L == 0 && L !== "") {
                                    L = false
                                } else {
                                    L = ""
                                }
                            }
                        }
                    }
                }
            }
            return L
        }};
    i.jqx.dataFormat = {};
    i.extend(i.jqx.dataFormat, {regexTrim: /^\s+|\s+$/g,regexInfinity: /^[+-]?infinity$/i,regexHex: /^0x[a-f0-9]+$/i,regexParseFloat: /^[+-]?\d*\.?\d*(e[+-]?\d+)?$/,toString: Object.prototype.toString,isBoolean: function(e) {
            return typeof e === "boolean"
        },isObject: function(e) {
            return (e && (typeof e === "object" || i.isFunction(e))) || false
        },isDate: function(e) {
            return e instanceof Date
        },arrayIndexOf: function(J, I) {
            if (J.indexOf) {
                return J.indexOf(I)
            }
            for (var e = 0, H = J.length; e < H; e++) {
                if (J[e] === I) {
                    return e
                }
            }
            return -1
        },isString: function(e) {
            return typeof e === "string"
        },isNumber: function(e) {
            return typeof e === "number" && isFinite(e)
        },isNull: function(e) {
            return e === null
        },isUndefined: function(e) {
            return typeof e === "undefined"
        },isValue: function(e) {
            return (this.isObject(e) || this.isString(e) || this.isNumber(e) || this.isBoolean(e))
        },isEmpty: function(e) {
            if (!this.isString(e) && this.isValue(e)) {
                return false
            } else {
                if (!this.isValue(e)) {
                    return true
                }
            }
            e = i.trim(e).replace(/\&nbsp\;/ig, "").replace(/\&#160\;/ig, "");
            return e === ""
        },startsWith: function(H, e) {
            return H.indexOf(e) === 0
        },endsWith: function(H, e) {
            return H.substr(H.length - e.length) === e
        },trim: function(e) {
            return (e + "").replace(this.regexTrim, "")
        },isArray: function(e) {
            return this.toString.call(e) === "[object Array]"
        },defaultcalendar: function() {
            var e = {"/": "/",":": ":",firstDay: 0,days: {names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]},months: {names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]},AM: ["AM", "am", "AM"],PM: ["PM", "pm", "PM"],eras: [{name: "A.D.",start: null,offset: 0}],twoDigitYearMax: 2029,patterns: {d: "M/d/yyyy",D: "dddd, MMMM dd, yyyy",t: "h:mm tt",T: "h:mm:ss tt",f: "dddd, MMMM dd, yyyy h:mm tt",F: "dddd, MMMM dd, yyyy h:mm:ss tt",M: "MMMM dd",Y: "yyyy MMMM",S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",ISO: "yyyy-MM-dd hh:mm:ss",ISO2: "yyyy-MM-dd HH:mm:ss",d1: "dd.MM.yyyy",d2: "dd-MM-yyyy",zone1: "yyyy-MM-ddTHH:mm:ss-HH:mm",zone2: "yyyy-MM-ddTHH:mm:ss+HH:mm",custom: "yyyy-MM-ddTHH:mm:ss.fff",custom2: "yyyy-MM-dd HH:mm:ss.fff"},percentsymbol: "%",currencysymbol: "$",currencysymbolposition: "before",decimalseparator: ".",thousandsseparator: ","};
            return e
        },expandFormat: function(K, J) {
            J = J || "F";
            var I, H = K.patterns, e = J.length;
            if (e === 1) {
                I = H[J];
                if (!I) {
                    throw "Invalid date format string '" + J + "'."
                }
                J = I
            } else {
                if (e === 2 && J.charAt(0) === "%") {
                    J = J.charAt(1)
                }
            }
            return J
        },getEra: function(I, H) {
            if (!H) {
                return 0
            }
            if (typeof I === "string") {
                return 0
            }
            var L, K = I.getTime();
            for (var J = 0, e = H.length; J < e; J++) {
                L = H[J].start;
                if (L === null || K >= L) {
                    return J
                }
            }
            return 0
        },toUpper: function(e) {
            return e.split("\u00A0").join(" ").toUpperCase()
        },toUpperArray: function(e) {
            var J = [];
            for (var I = 0, H = e.length; I < H; I++) {
                J[I] = this.toUpper(e[I])
            }
            return J
        },getEraYear: function(H, J, e, K) {
            var I = H.getFullYear();
            if (!K && J.eras) {
                I -= J.eras[e].offset
            }
            return I
        },toUpper: function(e) {
            if (e) {
                return e.toUpperCase()
            }
            return ""
        },getDayIndex: function(K, J, H) {
            var e, L = K.days, I = K._upperDays;
            if (!I) {
                K._upperDays = I = [this.toUpperArray(L.names), this.toUpperArray(L.namesAbbr), this.toUpperArray(L.namesShort)]
            }
            J = J.toUpperCase();
            if (H) {
                e = this.arrayIndexOf(I[1], J);
                if (e === -1) {
                    e = this.arrayIndexOf(I[2], J)
                }
            } else {
                e = this.arrayIndexOf(I[0], J)
            }
            return e
        },getMonthIndex: function(N, M, I) {
            var e = N.months, H = N.monthsGenitive || N.months, K = N._upperMonths, L = N._upperMonthsGen;
            if (!K) {
                N._upperMonths = K = [this.toUpperArray(e.names), this.toUpperArray(e.namesAbbr)];
                N._upperMonthsGen = L = [this.toUpperArray(H.names), this.toUpperArray(H.namesAbbr)]
            }
            M = this.toUpper(M);
            var J = this.arrayIndexOf(I ? K[1] : K[0], M);
            if (J < 0) {
                J = this.arrayIndexOf(I ? L[1] : L[0], M)
            }
            return J
        },appendPreOrPostMatch: function(J, e) {
            var I = 0, L = false;
            for (var K = 0, H = J.length; K < H; K++) {
                var M = J.charAt(K);
                switch (M) {
                    case "'":
                        if (L) {
                            e.push("'")
                        } else {
                            I++
                        }
                        L = false;
                        break;
                    case "\\":
                        if (L) {
                            e.push("\\")
                        }
                        L = !L;
                        break;
                    default:
                        e.push(M);
                        L = false;
                        break
                }
            }
            return I
        },getTokenRegExp: function() {
            return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
        },formatlink: function(e, I) {
            var H = "";
            if (I && I.target) {
                H = "target=" + I.target
            }
            if (H != "") {
                return "<a " + H + ' href="' + e + '">' + e + "</a>"
            }
            return '<a href="' + e + '">' + e + "</a>"
        },formatemail: function(e) {
            return '<a href="mailto:' + e + '">' + e + "</a>"
        },formatNumber: function(e, I, H) {
            return this.formatnumber(e, I, H)
        },formatnumber: function(T, S, O) {
            if (O == undefined || O == null || O == "") {
                O = this.defaultcalendar()
            }
            if (S === "" || S === null || S === undefined) {
                return T
            }
            if (!this.isNumber(T)) {
                T *= 1
            }
            var P;
			console.log(S);
            if (S.length > 1) {
                P = parseInt(S.slice(1), 10)
            }
            var V = {};
            var Q = S.charAt(0).toUpperCase();
            V.thousandsSeparator = O.thousandsseparator;
            V.decimalSeparator = O.decimalseparator;
            switch (Q) {
                case "D":
                case "d":
                case "F":
                case "f":
                    V.decimalPlaces = P;
                    break;
                case "N":
                case "n":
                    V.decimalPlaces = 0;
                    break;
                case "C":
                case "c":
                    V.decimalPlaces = P;
                    if (O.currencysymbolposition == "before") {
                        V.prefix = O.currencysymbol
                    } else {
                        V.suffix = O.currencysymbol
                    }
                    break;
                case "P":
                case "p":
                    V.suffix = O.percentsymbol;
                    V.decimalPlaces = P;
                    break;
                default:
                    throw "Bad number format specifier: " + Q
            }
            if (this.isNumber(T)) {
                var K = (T < 0);
                var I = T + "";
                var R = (V.decimalSeparator) ? V.decimalSeparator : ".";
                var e;
                if (this.isNumber(V.decimalPlaces)) {
                    var L = V.decimalPlaces;
                    var N = Math.pow(10, L);
                    I = (T * N).toFixed(0) / N + "";
                    e = I.lastIndexOf(".");
                    if (L > 0) {
                        if (e < 0) {
                            I += R;
                            e = I.length - 1
                        } else {
                            if (R !== ".") {
                                I = I.replace(".", R)
                            }
                        }
                        while ((I.length - 1 - e) < L) {
                            I += "0"
                        }
                    }
                }
                if (V.thousandsSeparator) {
                    var U = V.thousandsSeparator;
                    e = I.lastIndexOf(R);
                    e = (e > -1) ? e : I.length;
                    var J = I.substring(e);
                    var H = -1;
                    for (var M = e; M > 0; M--) {
                        H++;
                        if ((H % 3 === 0) && (M !== e) && (!K || (M > 1))) {
                            J = U + J
                        }
                        J = I.charAt(M - 1) + J
                    }
                    I = J
                }
                I = (V.prefix) ? V.prefix + I : I;
                I = (V.suffix) ? I + V.suffix : I;
                return I
            } else {
                return T
            }
        },tryparsedate: function(T, M) {
            if (M == undefined || M == null) {
                M = this.defaultcalendar()
            }
            var Q = this;
            if (T == "") {
                return null
            }
            if (T != null && !T.substring) {
                T = T.toString()
            }
            if (T != null && T.substring(0, 6) == "/Date(") {
                var R = /^\/Date\((-?\d+)(\+|-)?(\d+)?\)\/$/;
                var J = new Date(+T.replace(/\/Date\((\d+)\)\//, "$1"));
                if (J == "Invalid Date") {
                    var K = T.match(/^\/Date\((\d+)([-+]\d\d)(\d\d)\)\/$/);
                    var J = null;
                    if (K) {
                        J = new Date(1 * K[1] + 3600000 * K[2] + 60000 * K[3])
                    }
                }
                if (J == null || J == "Invalid Date" || isNaN(J)) {
                    var N = R.exec(T);
                    if (N) {
                        var U = new Date(parseInt(N[1]));
                        if (N[2]) {
                            var e = parseInt(N[3]);
                            if (N[2] === "-") {
                                e = -e
                            }
                            var P = U.getUTCMinutes();
                            U.setUTCMinutes(P - e)
                        }
                        if (!isNaN(U.valueOf())) {
                            return U
                        }
                    }
                }
                return J
            }
            patterns = M.patterns;
            for (prop in patterns) {
                J = Q.parsedate(T, patterns[prop], M);
                if (J) {
                    if (prop == "ISO") {
                        var I = Q.parsedate(T, patterns.ISO2, M);
                        if (I) {
                            return I
                        }
                    }
                    return J
                }
            }
            if (T != null) {
                var I = null;
                var S = [":", "/", "-"];
                var O = true;
                for (var H = 0; H < S.length; H++) {
                    if (T.indexOf(S[H]) != -1) {
                        O = false
                    }
                }
                if (O) {
                    var L = new Number(T);
                    if (!isNaN(L)) {
                        return new Date(L)
                    }
                }
            }
            return null
        },getparseregexp: function(e, R) {
            var T = e._parseRegExp;
            if (!T) {
                e._parseRegExp = T = {}
            } else {
                var K = T[R];
                if (K) {
                    return K
                }
            }
            var Q = this.expandFormat(e, R).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), O = ["^"], H = [], N = 0, J = 0, W = this.getTokenRegExp(), L;
            while ((L = W.exec(Q)) !== null) {
                var V = Q.slice(N, L.index);
                N = W.lastIndex;
                J += this.appendPreOrPostMatch(V, O);
                if (J % 2) {
                    O.push(L[0]);
                    continue
                }
                var I = L[0], M = I.length, S;
                switch (I) {
                    case "dddd":
                    case "ddd":
                    case "MMMM":
                    case "MMM":
                    case "gg":
                    case "g":
                        S = "(\\D+)";
                        break;
                    case "tt":
                    case "t":
                        S = "(\\D*)";
                        break;
                    case "yyyy":
                    case "fff":
                    case "ff":
                    case "f":
                        S = "(\\d{" + M + "})";
                        break;
                    case "dd":
                    case "d":
                    case "MM":
                    case "M":
                    case "yy":
                    case "y":
                    case "HH":
                    case "H":
                    case "hh":
                    case "h":
                    case "mm":
                    case "m":
                    case "ss":
                    case "s":
                        S = "(\\d\\d?)";
                        break;
                    case "zzz":
                        S = "([+-]?\\d\\d?:\\d{2})";
                        break;
                    case "zz":
                    case "z":
                        S = "([+-]?\\d\\d?)";
                        break;
                    case "/":
                        S = "(\\" + e["/"] + ")";
                        break;
                    default:
                        throw "Invalid date format pattern '" + I + "'.";
                        break
                }
                if (S) {
                    O.push(S)
                }
                H.push(L[0])
            }
            this.appendPreOrPostMatch(Q.slice(N), O);
            O.push("$");
            var U = O.join("").replace(/\s+/g, "\\s+"), P = {regExp: U,groups: H};
            return T[R] = P
        },outOfRange: function(I, e, H) {
            return I < e || I > H
        },expandYear: function(L, J) {
            var H = new Date(), e = this.getEra(H);
            if (J < 100) {
                var I = L.twoDigitYearMax;
                I = typeof I === "string" ? new Date().getFullYear() % 100 + parseInt(I, 10) : I;
                var K = this.getEraYear(H, L, e);
                J += K - (K % 100);
                if (J > I) {
                    J -= 100
                }
            }
            return J
        },parsedate: function(ab, ai, W) {
            if (W == undefined || W == null) {
                W = this.defaultcalendar()
            }
            ab = this.trim(ab);
            var T = W, an = this.getparseregexp(T, ai), N = new RegExp(an.regExp).exec(ab);
            if (N === null) {
                return null
            }
            var aj = an.groups, Z = null, R = null, am = null, al = null, S = null, L = 0, ae, ad = 0, ak = 0, e = 0, I = null, U = false;
            for (var af = 0, ah = aj.length; af < ah; af++) {
                var H = N[af + 1];
                if (H) {
                    var aa = aj[af], K = aa.length, M = parseInt(H, 10);
                    switch (aa) {
                        case "dd":
                        case "d":
                            al = M;
                            if (this.outOfRange(al, 1, 31)) {
                                return null
                            }
                            break;
                        case "MMM":
                        case "MMMM":
                            am = this.getMonthIndex(T, H, K === 3);
                            if (this.outOfRange(am, 0, 11)) {
                                return null
                            }
                            break;
                        case "M":
                        case "MM":
                            am = M - 1;
                            if (this.outOfRange(am, 0, 11)) {
                                return null
                            }
                            break;
                        case "y":
                        case "yy":
                        case "yyyy":
                            R = K < 4 ? this.expandYear(T, M) : M;
                            if (this.outOfRange(R, 0, 9999)) {
                                return null
                            }
                            break;
                        case "h":
                        case "hh":
                            L = M;
                            if (L === 12) {
                                L = 0
                            }
                            if (this.outOfRange(L, 0, 11)) {
                                return null
                            }
                            break;
                        case "H":
                        case "HH":
                            L = M;
                            if (this.outOfRange(L, 0, 23)) {
                                return null
                            }
                            break;
                        case "m":
                        case "mm":
                            ad = M;
                            if (this.outOfRange(ad, 0, 59)) {
                                return null
                            }
                            break;
                        case "s":
                        case "ss":
                            ak = M;
                            if (this.outOfRange(ak, 0, 59)) {
                                return null
                            }
                            break;
                        case "tt":
                        case "t":
                            U = T.PM && (H === T.PM[0] || H === T.PM[1] || H === T.PM[2]);
                            if (!U && (!T.AM || (H !== T.AM[0] && H !== T.AM[1] && H !== T.AM[2]))) {
                                return null
                            }
                            break;
                        case "f":
                        case "ff":
                        case "fff":
                            e = M * Math.pow(10, 3 - K);
                            if (this.outOfRange(e, 0, 999)) {
                                return null
                            }
                            break;
                        case "ddd":
                        case "dddd":
                            S = this.getDayIndex(T, H, K === 3);
                            if (this.outOfRange(S, 0, 6)) {
                                return null
                            }
                            break;
                        case "zzz":
                            var J = H.split(/:/);
                            if (J.length !== 2) {
                                return null
                            }
                            ae = parseInt(J[0], 10);
                            if (this.outOfRange(ae, -12, 13)) {
                                return null
                            }
                            var P = parseInt(J[1], 10);
                            if (this.outOfRange(P, 0, 59)) {
                                return null
                            }
                            I = (ae * 60) + (startsWith(H, "-") ? -P : P);
                            break;
                        case "z":
                        case "zz":
                            ae = M;
                            if (this.outOfRange(ae, -12, 13)) {
                                return null
                            }
                            I = ae * 60;
                            break;
                        case "g":
                        case "gg":
                            var V = H;
                            if (!V || !T.eras) {
                                return null
                            }
                            V = trim(V.toLowerCase());
                            for (var ag = 0, ac = T.eras.length; ag < ac; ag++) {
                                if (V === T.eras[ag].name.toLowerCase()) {
                                    Z = ag;
                                    break
                                }
                            }
                            if (Z === null) {
                                return null
                            }
                            break
                    }
                }
            }
            var Q = new Date(), Y, O = T.convert;
            Y = Q.getFullYear();
            if (R === null) {
                R = Y
            } else {
                if (T.eras) {
                    R += T.eras[(Z || 0)].offset
                }
            }
            if (am === null) {
                am = 0
            }
            if (al === null) {
                al = 1
            }
            if (O) {
                Q = O.toGregorian(R, am, al);
                if (Q === null) {
                    return null
                }
            } else {
                Q.setFullYear(R, am, al);
                if (Q.getDate() !== al) {
                    return null
                }
                if (S !== null && Q.getDay() !== S) {
                    return null
                }
            }
            if (U && L < 12) {
                L += 12
            }
            Q.setHours(L, ad, ak, e);
            if (I !== null) {
                var X = Q.getMinutes() - (I + Q.getTimezoneOffset());
                Q.setHours(Q.getHours() + parseInt(X / 60, 10), X % 60)
            }
            return Q
        },cleardatescache: function() {
            this.datescache = new Array()
        },formatDate: function(e, I, H) {
            return this.formatdate(e, I, H)
        },formatdate: function(Z, ad, U) {
            if (U == undefined || U == null) {
                U = this.defaultcalendar()
            }
            if (typeof Z === "string") {
                return Z
            }
            var J = Z.toString() + "_" + ad;
            if (this.datescache && this.datescache[J]) {
                return this.datescache[J]
            }
            if (!ad || !ad.length || ad === "i") {
                var af;
                af = this.formatDate(Z, U.patterns.F, U);
                return af
            }
            var aa = U.eras, H = ad === "s";
            ad = this.expandFormat(U, ad);
            af = [];
            var M, ab = ["0", "00", "000"], Q, R, e = /([^d]|^)(d|dd)([^d]|$)/g, ae = 0, W = this.getTokenRegExp(), I;
            function O(ag, aj) {
                var ai, ah = ag + "";
                if (aj > 1 && ah.length < aj) {
                    ai = (ab[aj - 2] + ah);
                    return ai.substr(ai.length - aj, aj)
                } else {
                    ai = ah
                }
                return ai
            }
            function ac() {
                if (Q || R) {
                    return Q
                }
                Q = e.test(ad);
                R = true;
                return Q
            }
            function K(ah, ag) {
                if (I) {
                    return I[ag]
                }
                if (ah.getMonth != undefined) {
                    switch (ag) {
                        case 0:
                            return ah.getFullYear();
                        case 1:
                            return ah.getMonth();
                        case 2:
                            return ah.getDate()
                    }
                }
            }
            for (; ; ) {
                var N = W.lastIndex, V = W.exec(ad);
                var S = ad.slice(N, V ? V.index : ad.length);
                ae += this.appendPreOrPostMatch(S, af);
                if (!V) {
                    break
                }
                if (ae % 2) {
                    af.push(V[0]);
                    continue
                }
                var X = V[0], L = X.length;
                switch (X) {
                    case "ddd":
                    case "dddd":
                        var T = (L === 3) ? U.days.namesAbbr : U.days.names;
                        af.push(T[Z.getDay()]);
                        break;
                    case "d":
                    case "dd":
                        Q = true;
                        af.push(O(K(Z, 2), L));
                        break;
                    case "MMM":
                    case "MMMM":
                        var Y = K(Z, 1);
                        af.push(U.months[L === 3 ? "namesAbbr" : "names"][Y]);
                        break;
                    case "M":
                    case "MM":
                        af.push(O(K(Z, 1) + 1, L));
                        break;
                    case "y":
                    case "yy":
                    case "yyyy":
                        Y = this.getEraYear(Z, U, this.getEra(Z, aa), H);
                        if (L < 4) {
                            Y = Y % 100
                        }
                        af.push(O(Y, L));
                        break;
                    case "h":
                    case "hh":
                        M = Z.getHours() % 12;
                        if (M === 0) {
                            M = 12
                        }
                        af.push(O(M, L));
                        break;
                    case "H":
                    case "HH":
                        af.push(O(Z.getHours(), L));
                        break;
                    case "m":
                    case "mm":
                        af.push(O(Z.getMinutes(), L));
                        break;
                    case "s":
                    case "ss":
                        af.push(O(Z.getSeconds(), L));
                        break;
                    case "t":
                    case "tt":
                        Y = Z.getHours() < 12 ? (U.AM ? U.AM[0] : " ") : (U.PM ? U.PM[0] : " ");
                        af.push(L === 1 ? Y.charAt(0) : Y);
                        break;
                    case "f":
                    case "ff":
                    case "fff":
                        af.push(O(Z.getMilliseconds(), 3).substr(0, L));
                        break;
                    case "z":
                    case "zz":
                        M = Z.getTimezoneOffset() / 60;
                        af.push((M <= 0 ? "+" : "-") + O(Math.floor(Math.abs(M)), L));
                        break;
                    case "zzz":
                        M = Z.getTimezoneOffset() / 60;
                        af.push((M <= 0 ? "+" : "-") + O(Math.floor(Math.abs(M)), 2) + ":" + O(Math.abs(Z.getTimezoneOffset() % 60), 2));
                        break;
                    case "g":
                    case "gg":
                        if (U.eras) {
                            af.push(U.eras[this.getEra(Z, aa)].name)
                        }
                        break;
                    case "/":
                        af.push(U["/"]);
                        break;
                    default:
                        throw "Invalid date format pattern '" + X + "'.";
                        break
                }
            }
            var P = af.join("");
            if (!this.datescache) {
                this.datescache = new Array()
            }
            this.datescache[J] = P;
            return P
        }});
    i.jqx.data = {};
    var l, E, p = /#.*$/, a = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, f = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, j = /^(?:GET|HEAD)$/, o = /^\/\//, k = /\?/, b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, d = /([?&])_=[^&]*/, h = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, t = /\s+/, F = i.fn.load, G = {}, C = {}, q = ["*/"] + ["*"];
    try {
        E = location.href
    } catch (A) {
        E = document.createElement("a");
        E.href = "";
        E = E.href
    }
    l = h.exec(E.toLowerCase()) || [];
    function r(e) {
        return function(K, M) {
            if (typeof K !== "string") {
                M = K;
                K = "*"
            }
            var H, N, O, J = K.toLowerCase().split(t), I = 0, L = J.length;
            if (i.isFunction(M)) {
                for (; I < L; I++) {
                    H = J[I];
                    O = /^\+/.test(H);
                    if (O) {
                        H = H.substr(1) || "*"
                    }
                    N = e[H] = e[H] || [];
                    N[O ? "unshift" : "push"](M)
                }
            }
        }
    }
    function v(H, Q, L, O, N, J) {
        N = N || Q.dataTypes[0];
        J = J || {};
        J[N] = true;
        var P, M = H[N], I = 0, e = M ? M.length : 0, K = (H === G);
        for (; I < e && (K || !P); I++) {
            P = M[I](Q, L, O);
            if (typeof P === "string") {
                if (!K || J[P]) {
                    P = undefined
                } else {
                    Q.dataTypes.unshift(P);
                    P = v(H, Q, L, O, P, J)
                }
            }
        }
        if ((K || !P) && !J["*"]) {
            P = v(H, Q, L, O, "*", J)
        }
        return P
    }
    function u(I, J) {
        var H, e, K = i.jqx.data.ajaxSettings.flatOptions || {};
        for (H in J) {
            if (J[H] !== undefined) {
                (K[H] ? I : (e || (e = {})))[H] = J[H]
            }
        }
        if (e) {
            i.extend(true, I, e)
        }
    }
    i.extend(i.jqx.data, {ajaxSetup: function(H, e) {
            if (e) {
                u(H, i.jqx.data.ajaxSettings)
            } else {
                e = H;
                H = i.jqx.data.ajaxSettings
            }
            u(H, e);
            return H
        },ajaxSettings: {url: E,isLocal: f.test(l[1]),global: true,type: "GET",contentType: "application/x-www-form-urlencoded; charset=UTF-8",processData: true,async: true,accepts: {xml: "application/xml, text/xml",html: "text/html",text: "text/plain",json: "application/json, text/javascript","*": q},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText"},converters: {"* text": window.String,"text html": true,"text json": i.parseJSON,"text xml": i.parseXML},flatOptions: {context: true,url: true}},ajaxPrefilter: r(G),ajaxTransport: r(C),ajax: function(M, J) {
            if (typeof M === "object") {
                J = M;
                M = undefined
            }
            J = J || {};
            var P, ad, K, Y, R, V, I, X, Q = i.jqx.data.ajaxSetup({}, J), af = Q.context || Q, T = af !== Q && (af.nodeType || af instanceof i) ? i(af) : i.event, ae = i.Deferred(), aa = i.Callbacks("once memory"), N = Q.statusCode || {}, U = {}, ab = {}, L = 0, O = "canceled", W = {readyState: 0,setRequestHeader: function(ag, ah) {
                    if (!L) {
                        var e = ag.toLowerCase();
                        ag = ab[e] = ab[e] || ag;
                        U[ag] = ah
                    }
                    return this
                },getAllResponseHeaders: function() {
                    return L === 2 ? ad : null
                },getResponseHeader: function(ag) {
                    var e;
                    if (L === 2) {
                        if (!K) {
                            K = {};
                            while ((e = a.exec(ad))) {
                                K[e[1].toLowerCase()] = e[2]
                            }
                        }
                        e = K[ag.toLowerCase()]
                    }
                    return e === undefined ? null : e
                },overrideMimeType: function(e) {
                    if (!L) {
                        Q.mimeType = e
                    }
                    return this
                },abort: function(e) {
                    e = e || O;
                    if (Y) {
                        Y.abort(e)
                    }
                    S(0, e);
                    return this
                }};
            function S(ak, ag, al, ai) {
                var e, ao, am, aj, an, ah = ag;
                if (L === 2) {
                    return
                }
                L = 2;
                if (R) {
                    clearTimeout(R)
                }
                Y = undefined;
                ad = ai || "";
                W.readyState = ak > 0 ? 4 : 0;
                if (al) {
                    aj = B(Q, W, al)
                }
                if (ak >= 200 && ak < 300 || ak === 304) {
                    if (Q.ifModified) {
                        an = W.getResponseHeader("Last-Modified");
                        if (an) {
                            i.lastModified[P] = an
                        }
                        an = W.getResponseHeader("Etag");
                        if (an) {
                            i.etag[P] = an
                        }
                    }
                    if (ak === 304) {
                        ah = "notmodified";
                        e = true
                    } else {
                        e = c(Q, aj);
                        ah = e.state;
                        ao = e.data;
                        am = e.error;
                        e = !am
                    }
                } else {
                    am = ah;
                    if (!ah || ak) {
                        ah = "error";
                        if (ak < 0) {
                            ak = 0
                        }
                    }
                }
                W.status = ak;
                W.statusText = (ag || ah) + "";
                if (e) {
                    ae.resolveWith(af, [ao, ah, W])
                } else {
                    ae.rejectWith(af, [W, ah, am])
                }
                W.statusCode(N);
                N = undefined;
                if (I) {
                    T.trigger("ajax" + (e ? "Success" : "Error"), [W, Q, e ? ao : am])
                }
                aa.fireWith(af, [W, ah]);
                if (I) {
                    T.trigger("ajaxComplete", [W, Q]);
                    if (!(--i.active)) {
                        i.event.trigger("ajaxStop")
                    }
                }
            }
            ae.promise(W);
            W.success = W.done;
            W.error = W.fail;
            W.complete = aa.add;
            W.statusCode = function(ag) {
                if (ag) {
                    var e;
                    if (L < 2) {
                        for (e in ag) {
                            N[e] = [N[e], ag[e]]
                        }
                    } else {
                        e = ag[W.status];
                        W.always(e)
                    }
                }
                return this
            };
            Q.url = ((M || Q.url) + "").replace(p, "").replace(o, l[1] + "//");
            Q.dataTypes = i.trim(Q.dataType || "*").toLowerCase().split(t);
            if (Q.crossDomain == null) {
                V = h.exec(Q.url.toLowerCase());
                Q.crossDomain = !!(V && (V[1] !== l[1] || V[2] !== l[2] || (V[3] || (V[1] === "http:" ? 80 : 443)) != (l[3] || (l[1] === "http:" ? 80 : 443))))
            }
            if (Q.data && Q.processData && typeof Q.data !== "string") {
                Q.data = i.param(Q.data, Q.traditional)
            }
            v(G, Q, J, W);
            if (L === 2) {
                return W
            }
            I = Q.global;
            Q.type = Q.type.toUpperCase();
            Q.hasContent = !j.test(Q.type);
            if (I && i.active++ === 0) {
                i.event.trigger("ajaxStart")
            }
            if (!Q.hasContent) {
                if (Q.data) {
                    Q.url += (k.test(Q.url) ? "&" : "?") + Q.data;
                    delete Q.data
                }
                P = Q.url;
                if (Q.cache === false) {
                    var H = i.now(), ac = Q.url.replace(d, "$1_=" + H);
                    Q.url = ac + ((ac === Q.url) ? (k.test(Q.url) ? "&" : "?") + "_=" + H : "")
                }
            }
            if (Q.data && Q.hasContent && Q.contentType !== false || J.contentType) {
                W.setRequestHeader("Content-Type", Q.contentType)
            }
            if (Q.ifModified) {
                P = P || Q.url;
                if (i.lastModified[P]) {
                    W.setRequestHeader("If-Modified-Since", i.lastModified[P])
                }
                if (i.etag[P]) {
                    W.setRequestHeader("If-None-Match", i.etag[P])
                }
            }
            W.setRequestHeader("Accept", Q.dataTypes[0] && Q.accepts[Q.dataTypes[0]] ? Q.accepts[Q.dataTypes[0]] + (Q.dataTypes[0] !== "*" ? ", " + q + "; q=0.01" : "") : Q.accepts["*"]);
            for (X in Q.headers) {
                W.setRequestHeader(X, Q.headers[X])
            }
            if (Q.beforeSend && (Q.beforeSend.call(af, W, Q) === false || L === 2)) {
                return W.abort()
            }
            O = "abort";
            for (X in {success: 1,error: 1,complete: 1}) {
                W[X](Q[X])
            }
            Y = v(C, Q, J, W);
            if (!Y) {
                S(-1, "No Transport")
            } else {
                W.readyState = 1;
                if (I) {
                    T.trigger("ajaxSend", [W, Q])
                }
                if (Q.async && Q.timeout > 0) {
                    R = setTimeout(function() {
                        W.abort("timeout")
                    }, Q.timeout)
                }
                try {
                    L = 1;
                    Y.send(U, S)
                } catch (Z) {
                    if (L < 2) {
                        S(-1, Z)
                    } else {
                        throw Z
                    }
                }
            }
            return W
        },active: 0,lastModified: {},etag: {}});
    function B(P, O, L) {
        var K, M, J, e, H = P.contents, N = P.dataTypes, I = P.responseFields;
        for (M in I) {
            if (M in L) {
                O[I[M]] = L[M]
            }
        }
        while (N[0] === "*") {
            N.shift();
            if (K === undefined) {
                K = P.mimeType || O.getResponseHeader("content-type")
            }
        }
        if (K) {
            for (M in H) {
                if (H[M] && H[M].test(K)) {
                    N.unshift(M);
                    break
                }
            }
        }
        if (N[0] in L) {
            J = N[0]
        } else {
            for (M in L) {
                if (!N[0] || P.converters[M + " " + N[0]]) {
                    J = M;
                    break
                }
                if (!e) {
                    e = M
                }
            }
            J = J || e
        }
        if (J) {
            if (J !== N[0]) {
                N.unshift(J)
            }
            return L[J]
        }
    }
    function c(R, J) {
        var P, H, N, L, O = R.dataTypes.slice(), I = O[0], Q = {}, K = 0;
        if (R.dataFilter) {
            J = R.dataFilter(J, R.dataType)
        }
        if (O[1]) {
            for (P in R.converters) {
                Q[P.toLowerCase()] = R.converters[P]
            }
        }
        for (; (N = O[++K]); ) {
            if (N !== "*") {
                if (I !== "*" && I !== N) {
                    P = Q[I + " " + N] || Q["* " + N];
                    if (!P) {
                        for (H in Q) {
                            L = H.split(" ");
                            if (L[1] === N) {
                                P = Q[I + " " + L[0]] || Q["* " + L[0]];
                                if (P) {
                                    if (P === true) {
                                        P = Q[H]
                                    } else {
                                        if (Q[H] !== true) {
                                            N = L[0];
                                            O.splice(K--, 0, N)
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (P !== true) {
                        if (P && R["throws"]) {
                            J = P(J)
                        } else {
                            try {
                                J = P(J)
                            } catch (M) {
                                return {state: "parsererror",error: P ? M : "No conversion from " + I + " to " + N}
                            }
                        }
                    }
                }
                I = N
            }
        }
        return {state: "success",data: J}
    }
    var y = [], n = /\?/, D = /(=)\?(?=&|$)|\?\?/, z = i.now();
    i.jqx.data.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var e = y.pop() || (i.expando + "_" + (z++));
            this[e] = true;
            return e
        }});
    i.jqx.data.ajaxPrefilter("json jsonp", function(Q, L, P) {
        var O, e, N, J = Q.data, H = Q.url, I = Q.jsonp !== false, M = I && D.test(H), K = I && !M && typeof J === "string" && !(Q.contentType || "").indexOf("application/x-www-form-urlencoded") && D.test(J);
        if (Q.dataTypes[0] === "jsonp" || M || K) {
            O = Q.jsonpCallback = i.isFunction(Q.jsonpCallback) ? Q.jsonpCallback() : Q.jsonpCallback;
            e = window[O];
            if (M) {
                Q.url = H.replace(D, "$1" + O)
            } else {
                if (K) {
                    Q.data = J.replace(D, "$1" + O)
                } else {
                    if (I) {
                        Q.url += (n.test(H) ? "&" : "?") + Q.jsonp + "=" + O
                    }
                }
            }
            Q.converters["script json"] = function() {
                if (!N) {
                    i.error(O + " was not called")
                }
                return N[0]
            };
            Q.dataTypes[0] = "json";
            window[O] = function() {
                N = arguments
            };
            P.always(function() {
                window[O] = e;
                if (Q[O]) {
                    Q.jsonpCallback = L.jsonpCallback;
                    y.push(O)
                }
                if (N && i.isFunction(e)) {
                    e(N[0])
                }
                N = e = undefined
            });
            return "script"
        }
    });
    i.jqx.data.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /javascript|ecmascript/},converters: {"text script": function(e) {
                i.globalEval(e);
                return e
            }}});
    i.jqx.data.ajaxPrefilter("script", function(e) {
        if (e.cache === undefined) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    i.jqx.data.ajaxTransport("script", function(I) {
        if (I.crossDomain) {
            var e, H = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
            return {send: function(J, K) {
                    e = document.createElement("script");
                    e.async = "async";
                    if (I.scriptCharset) {
                        e.charset = I.scriptCharset
                    }
                    e.src = I.url;
                    e.onload = e.onreadystatechange = function(M, L) {
                        if (L || !e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            if (H && e.parentNode) {
                                H.removeChild(e)
                            }
                            e = undefined;
                            if (!L) {
                                K(200, "success")
                            }
                        }
                    };
                    H.insertBefore(e, H.firstChild)
                },abort: function() {
                    if (e) {
                        e.onload(0, 1)
                    }
                }}
        }
    });
    var w, x = window.ActiveXObject ? function() {
        for (var e in w) {
            w[e](0, 1)
        }
    } : false, m = 0;
    function g() {
        try {
            return new window.XMLHttpRequest()
        } catch (H) {
        }
    }
    function s() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP")
        } catch (H) {
        }
    }
    i.jqx.data.ajaxSettings.xhr = window.ActiveXObject ? function() {
        return !this.isLocal && g() || s()
    } : g;
    (function(e) {
        i.extend(i.support, {ajax: !!e,cors: !!e && ("withCredentials" in e)})
    })(i.jqx.data.ajaxSettings.xhr());
    if (i.support.ajax) {
        i.jqx.data.ajaxTransport(function(e) {
            if (!e.crossDomain || i.support.cors) {
                var H;
                return {send: function(N, I) {
                        var L, K, M = e.xhr();
                        if (e.username) {
                            M.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            M.open(e.type, e.url, e.async)
                        }
                        if (e.xhrFields) {
                            for (K in e.xhrFields) {
                                M[K] = e.xhrFields[K]
                            }
                        }
                        if (e.mimeType && M.overrideMimeType) {
                            M.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain && !N["X-Requested-With"]) {
                            N["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (K in N) {
                                M.setRequestHeader(K, N[K])
                            }
                        } catch (J) {
                        }
                        M.send((e.hasContent && e.data) || null);
                        H = function(W, Q) {
                            var R, P, O, U, T;
                            try {
                                if (H && (Q || M.readyState === 4)) {
                                    H = undefined;
                                    if (L) {
                                        M.onreadystatechange = i.noop;
                                        if (x) {
                                            delete w[L]
                                        }
                                    }
                                    if (Q) {
                                        if (M.readyState !== 4) {
                                            M.abort()
                                        }
                                    } else {
                                        R = M.status;
                                        O = M.getAllResponseHeaders();
                                        U = {};
                                        T = M.responseXML;
                                        if (T && T.documentElement) {
                                            U.xml = T
                                        }
                                        try {
                                            U.text = M.responseText
                                        } catch (V) {
                                        }
                                        try {
                                            P = M.statusText
                                        } catch (V) {
                                            P = ""
                                        }
                                        if (!R && e.isLocal && !e.crossDomain) {
                                            R = U.text ? 200 : 404
                                        } else {
                                            if (R === 1223) {
                                                R = 204
                                            }
                                        }
                                    }
                                }
                            } catch (S) {
                                if (!Q) {
                                    I(-1, S)
                                }
                            }
                            if (U) {
                                I(R, P, U, O)
                            }
                        };
                        if (!e.async) {
                            H()
                        } else {
                            if (M.readyState === 4) {
                                setTimeout(H, 0)
                            } else {
                                L = ++m;
                                if (x) {
                                    if (!w) {
                                        w = {};
                                        i(window).unload(x)
                                    }
                                    w[L] = H
                                }
                                M.onreadystatechange = H
                            }
                        }
                    },abort: function() {
                        if (H) {
                            H(0, 1)
                        }
                    }}
            }
        })
    }
    i.jqx.filter = function() {
        this.operator = "and";
        var M = 0;
        var J = 1;
        var P = ["EMPTY", "NOT_EMPTY", "CONTAINS", "CONTAINS_CASE_SENSITIVE", "DOES_NOT_CONTAIN", "DOES_NOT_CONTAIN_CASE_SENSITIVE", "STARTS_WITH", "STARTS_WITH_CASE_SENSITIVE", "ENDS_WITH", "ENDS_WITH_CASE_SENSITIVE", "EQUAL", "EQUAL_CASE_SENSITIVE", "NULL", "NOT_NULL"];
        var R = ["EQUAL", "NOT_EQUAL", "LESS_THAN", "LESS_THAN_OR_EQUAL", "GREATER_THAN", "GREATER_THAN_OR_EQUAL", "NULL", "NOT_NULL"];
        var S = ["EQUAL", "NOT_EQUAL", "LESS_THAN", "LESS_THAN_OR_EQUAL", "GREATER_THAN", "GREATER_THAN_OR_EQUAL", "NULL", "NOT_NULL"];
        var L = ["EQUAL", "NOT_EQUAL"];
        var K = new Array();
        var Q = new Array();
        this.evaluate = function(X) {
            var V = true;
            for (var W = 0; W < K.length; W++) {
                var U = K[W].evaluate(X);
                if (W == 0) {
                    V = U
                } else {
                    if (Q[W] == J || Q[W] == "or") {
                        V = V || U
                    } else {
                        V = V && U
                    }
                }
            }
            return V
        };
        this.getfilterscount = function() {
            return K.length
        };
        this.setoperatorsbyfiltertype = function(U, V) {
            switch (U) {
                case "numericfilter":
                    R = V;
                    break;
                case "stringfilter":
                    P = V;
                    break;
                case "datefilter":
                    S = V;
                    break;
                case "booleanfilter":
                    L = V;
                    break
            }
        };
        this.getoperatorsbyfiltertype = function(U) {
            var V = new Array();
            switch (U) {
                case "numericfilter":
                    V = R.slice(0);
                    break;
                case "stringfilter":
                    V = P.slice(0);
                    break;
                case "datefilter":
                    V = S.slice(0);
                    break;
                case "booleanfilter":
                    V = L.slice(0);
                    break
            }
            return V
        };
        var O = function() {
            var U = function() {
                return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
            };
            return (U() + "-" + U() + "-" + U())
        };
        this.createfilter = function(Y, V, X, W, U, Z) {
            if (Y == null || Y == undefined) {
                return null
            }
            switch (Y) {
                case "numericfilter":
                    return new N(V, X.toUpperCase());
                case "stringfilter":
                    return new T(V, X.toUpperCase());
                case "datefilter":
                    return new H(V, X.toUpperCase(), U, Z);
                case "booleanfilter":
                    return new I(V, X.toUpperCase());
                case "custom":
                    return new e(V, X.toUpperCase(), W)
            }
            throw new Error("jqxGrid: There is no such filter type. The available filter types are: 'numericfilter', 'stringfilter', 'datefilter' and 'booleanfilter'");
            return null
        };
        this.getfilters = function() {
            var U = new Array();
            for (var V = 0; V < K.length; V++) {
                var W = {value: K[V].filtervalue,condition: K[V].comparisonoperator,operator: Q[V],type: K[V].type};
                U[V] = W
            }
            return U
        };
        this.addfilter = function(U, V) {
            K[K.length] = V;
            V.key = O();
            Q[Q.length] = U
        };
        this.removefilter = function(V) {
            for (var U = 0; U < K.length; U++) {
                if (K[U].key == V.key) {
                    K.splice(U, 1);
                    Q.splice(U, 1);
                    break
                }
            }
        };
        this.getoperatorat = function(U) {
            if (U == undefined || U == null) {
                return null
            }
            if (U < 0 || U > K.length) {
                return null
            }
            return Q[U]
        };
        this.setoperatorat = function(V, U) {
            if (V == undefined || V == null) {
                return null
            }
            if (V < 0 || V > K.length) {
                return null
            }
            Q[U] = U
        };
        this.getfilterat = function(U) {
            if (U == undefined || U == null) {
                return null
            }
            if (U < 0 || U > K.length) {
                return null
            }
            return K[U]
        };
        this.setfilterat = function(U, V) {
            if (U == undefined || U == null) {
                return null
            }
            if (U < 0 || U > K.length) {
                return null
            }
            V.key = O();
            K[U] = V
        };
        this.clear = function() {
            K = new Array();
            Q = new Array()
        };
        var T = function(V, U) {
            this.filtervalue = V;
            this.comparisonoperator = U;
            this.type = "stringfilter";
            this.evaluate = function(af) {
                var ae = this.filtervalue;
                var al = this.comparisonoperator;
                if (af == null || af == undefined || af == "") {
                    if (al == "NULL") {
                        return true
                    }
                    if (al == "EQUAL" && af == ae) {
                        return true
                    }
                    if (al == "NOT_EQUAL" && af != ae) {
                        return true
                    }
                    if (al != "EMPTY") {
                        return false
                    } else {
                        if (af == "") {
                            return true
                        }
                    }
                }
                var an = "";
                try {
                    an = af.toString()
                } catch (ag) {
                    return true
                }
                var am = function(ap, ao) {
                    switch (al) {
                        case "EQUAL":
                            return i.jqx.string.equalsIgnoreCase(ap, ao);
                        case "EQUAL_CASE_SENSITIVE":
                            return i.jqx.string.equals(ap, ao);
                        case "NOT_EQUAL":
                            return !i.jqx.string.equalsIgnoreCase(ap, ao);
                        case "NOT_EQUAL_CASE_SENSITIVE":
                            return !i.jqx.string.equals(ap, ao);
                        case "CONTAINS":
                            return i.jqx.string.containsIgnoreCase(ap, ao);
                        case "CONTAINS_CASE_SENSITIVE":
                            return i.jqx.string.contains(ap, ao);
                        case "DOES_NOT_CONTAIN":
                            return !i.jqx.string.containsIgnoreCase(ap, ao);
                        case "DOES_NOT_CONTAIN_CASE_SENSITIVE":
                            return !i.jqx.string.contains(ap, ao);
                        case "EMPTY":
                            return ap == "";
                        case "NOT_EMPTY":
                            return ap != "";
                        case "NOT_NULL":
                            return ap != null;
                        case "STARTS_WITH":
                            return i.jqx.string.startsWithIgnoreCase(ap, ao);
                        case "ENDS_WITH":
                            return i.jqx.string.endsWithIgnoreCase(ap, ao);
                        case "ENDS_WITH_CASE_SENSITIVE":
                            return i.jqx.string.endsWith(ap, ao);
                        case "STARTS_WITH_CASE_SENSITIVE":
                            return i.jqx.string.startsWith(ap, ao);
                        default:
                            return false
                    }
                };
                var Z = new Array();
                if (ae && ae.indexOf) {
                    if (ae.indexOf("|") >= 0 || ae.indexOf(" AND ") >= 0 || ae.indexOf(" OR ") >= 0 || ae.indexOf(" and ") >= 0 || ae.indexOf(" or ") >= 0) {
                        var aa = am(an, ae);
                        if (aa) {
                            return aa
                        }
                        var ab = ae.indexOf(" AND ") >= 0 ? ae.split(" AND ") : new Array();
                        var Y = ae.indexOf(" OR ") >= 0 ? ae.split(" OR ") : new Array();
                        var X = ae.indexOf(" and ") >= 0 ? ae.split(" and ") : new Array();
                        var ac = ae.indexOf(" or ") >= 0 ? ae.split(" or ") : new Array();
                        var W = ae.indexOf("|") >= 0 ? ae.split("|") : new Array();
                        if (W.length > 0) {
                            for (var ak = 0; ak < W.length; ak++) {
                                W[ak] = i.trim(W[ak])
                            }
                        }
                        var aj = ae.indexOf(" ") >= 0 ? ae.split(" ") : new Array();
                        if (aj.length > 0) {
                            for (var ak = 0; ak < aj.length; ak++) {
                                aj[ak] = i.trim(aj[ak])
                            }
                        }
                        ab = ab.concat(aj);
                        ab = ab.concat(X);
                        Y = Y.concat(W);
                        Y = Y.concat(ac);
                        if (ab.length > 0) {
                            for (var ak = 0; ak < ab.length; ak++) {
                                if (!ab[ak].indexOf(" OR ") >= 0) {
                                    Z.push(ab[ak])
                                }
                            }
                        }
                        if (Y.length > 0) {
                            for (var ak = 0; ak < Y.length; ak++) {
                                if (!Y[ak].indexOf(" AND ") >= 0) {
                                    Z.push(Y[ak])
                                }
                            }
                        }
                        var ai = undefined;
                        for (var ah = 0; ah < Z.length; ah++) {
                            var af = Z[ah];
                            var aa = am(an, af);
                            var ad = ah < ab.length ? "and" : "or";
                            if (ai == undefined) {
                                ai = aa
                            } else {
                                if (ad == "or") {
                                    ai = ai || aa
                                } else {
                                    ai = ai && aa
                                }
                            }
                        }
                        return ai
                    }
                }
                return am(an, ae)
            }
        };
        var I = function(V, U) {
            this.filtervalue = V;
            this.comparisonoperator = U;
            this.type = "booleanfilter";
            this.evaluate = function(Y) {
                var X = this.filtervalue;
                var W = this.comparisonoperator;
                if (Y == null || Y == undefined) {
                    if (W == "NULL") {
                        return true
                    }
                    return false
                }
                var Z = Y;
                switch (W) {
                    case "EQUAL":
                        return Z == X || Z.toString() == X.toString();
                    case "NOT_EQUAL":
                        return Z != X && Z.toString() != X.toString();
                    default:
                        return false
                }
            }
        };
        var N = function(V, U) {
            this.filtervalue = V;
            this.comparisonoperator = U;
            this.type = "numericfilter";
            this.evaluate = function(ag) {
                var af = this.filtervalue;
                var al = this.comparisonoperator;
                if (ag === null || ag === undefined || ag === "") {
                    if (al == "NOT_NULL") {
                        return false
                    }
                    if (al == "NULL") {
                        return true
                    } else {
                        switch (al) {
                            case "EQUAL":
                                return ag == af;
                            case "NOT_EQUAL":
                                return ag != af
                        }
                        return false
                    }
                } else {
                    if (al == "NULL") {
                        return false
                    }
                    if (al == "NOT_NULL") {
                        return true
                    }
                }
                var an = ag;
                try {
                    an = parseFloat(an)
                } catch (ah) {
                    if (ag.toString() != "") {
                        return false
                    }
                }
                var am = function(ap, ao) {
                    switch (al) {
                        case "EQUAL":
                            return ap == ao;
                        case "NOT_EQUAL":
                            return ap != ao;
                        case "GREATER_THAN":
                            return ap > ao;
                        case "GREATER_THAN_OR_EQUAL":
                            return ap >= ao;
                        case "LESS_THAN":
                            return ap < ao;
                        case "LESS_THAN_OR_EQUAL":
                            return ap <= ao;
                        case "STARTS_WITH":
                            return i.jqx.string.startsWithIgnoreCase(ap.toString(), ao.toString());
                        case "ENDS_WITH":
                            return i.jqx.string.endsWithIgnoreCase(ap.toString(), ao.toString());
                        case "ENDS_WITH_CASE_SENSITIVE":
                            return i.jqx.string.endsWith(ap.toString(), ao.toString());
                        case "STARTS_WITH_CASE_SENSITIVE":
                            return i.jqx.string.startsWith(ap.toString(), ao.toString());
                        case "CONTAINS":
                            return i.jqx.string.containsIgnoreCase(ap.toString(), ao.toString());
                        case "CONTAINS_CASE_SENSITIVE":
                            return i.jqx.string.contains(ap.toString(), ao.toString());
                        case "DOES_NOT_CONTAIN":
                            return !i.jqx.string.containsIgnoreCase(ap.toString(), ao.toString());
                        case "DOES_NOT_CONTAIN_CASE_SENSITIVE":
                            return !i.jqx.string.contains(ap.toString(), ao.toString());
                        default:
                            return true
                    }
                };
                var aa = new Array();
                if (af && af.indexOf) {
                    if (af.indexOf("|") >= 0 || af.indexOf(" AND ") >= 0 || af.indexOf(" OR ") >= 0 || af.indexOf(" and ") >= 0 || af.indexOf(" or ") >= 0) {
                        var ab = am(an, af);
                        if (ab) {
                            return ab
                        }
                        af = af.toString();
                        var ac = af.indexOf(" AND ") >= 0 ? af.split(" AND ") : new Array();
                        var Z = af.indexOf(" OR ") >= 0 ? af.split(" OR ") : new Array();
                        var Y = af.indexOf(" and ") >= 0 ? af.split(" and ") : new Array();
                        var ad = af.indexOf(" or ") >= 0 ? af.split(" or ") : new Array();
                        ac = ac.concat(Y);
                        Z = Z.concat(ad);
                        var X = af.indexOf("|") >= 0 ? af.split("|") : new Array();
                        if (X.length > 0) {
                            for (var ak = 0; ak < X.length; ak++) {
                                X[ak] = i.trim(X[ak])
                            }
                        }
                        Z = Z.concat(X);
                        if (ac.length > 0) {
                            for (var ak = 0; ak < ac.length; ak++) {
                                if (!ac[ak].indexOf(" OR ") >= 0) {
                                    aa.push(ac[ak])
                                }
                            }
                        }
                        if (Z.length > 0) {
                            for (var ak = 0; ak < Z.length; ak++) {
                                if (!Z[ak].indexOf(" AND ") >= 0) {
                                    aa.push(Z[ak])
                                }
                            }
                        }
                        var aj = undefined;
                        for (var ai = 0; ai < aa.length; ai++) {
                            var ag = aa[ai];
                            if (ag && ag.indexOf && ag.indexOf("..") >= 0) {
                                var W = ag.toString().split("..");
                                if (W.length == 2) {
                                    ab = an >= W[0] && an <= W[1]
                                }
                            } else {
                                var ab = am(an, ag)
                            }
                            var ae = ai < ac.length ? "and" : "or";
                            if (aj == undefined) {
                                aj = ab
                            } else {
                                if (ae == "or") {
                                    aj = aj || ab
                                } else {
                                    aj = aj && ab
                                }
                            }
                        }
                        return aj
                    }
                }
                if (af && af.indexOf && af.indexOf("..") >= 0) {
                    aa = af.toString().split("..");
                    if (aa.length == 2) {
                        return an >= aa[0] && an <= aa[1]
                    }
                }
                return am(an, af)
            }
        };
        var H = function(X, V, W, aa) {
            this.filtervalue = X;
            this.type = "datefilter";
            if (W != undefined && aa != undefined) {
                var Y = i.jqx.dataFormat.parsedate(X, W, aa);
                if (Y != null) {
                    this.filterdate = Y
                } else {
                    var U = i.jqx.dataFormat.tryparsedate(X, aa);
                    if (U != null) {
                        this.filterdate = U
                    }
                }
            } else {
                var Z = new Date(X);
                if (Z.toString() == "NaN" || Z.toString() == "Invalid Date") {
                    this.filterdate = i.jqx.dataFormat.tryparsedate(X)
                } else {
                    this.filterdate = Z
                }
            }
            if (!this.filterdate) {
                var Z = new Date(X);
                if (Z.toString() == "NaN" || Z.toString() == "Invalid Date") {
                    this.filterdate = i.jqx.dataFormat.tryparsedate(X)
                } else {
                    this.filterdate = Z
                }
            }
            this.comparisonoperator = V;
            this.evaluate = function(an) {
                var am = this.filtervalue;
                var av = this.comparisonoperator;
                if (an == null || an == undefined || an == "") {
                    if (av == "NOT_NULL") {
                        return false
                    }
                    if (av == "NULL") {
                        return true
                    } else {
                        switch (av) {
                            case "EQUAL":
                                return an == am;
                            case "NOT_EQUAL":
                                return an != am
                        }
                        return false
                    }
                } else {
                    if (av == "NULL") {
                        return false
                    }
                    if (av == "NOT_NULL") {
                        return true
                    }
                }
                var ax = new Date();
                ax.setFullYear(1900, 0, 1);
                ax.setHours(12, 0, 0, 0);
                try {
                    var au = new Date(an);
                    if (au.toString() == "NaN" || au.toString() == "Invalid Date") {
                        an = i.jqx.dataFormat.tryparsedate(an)
                    } else {
                        an = au
                    }
                    ax = an;
                    var ar = false;
                    if (W != undefined && aa != undefined) {
                        if (W.indexOf("t") >= 0 || W.indexOf("T") >= 0 || W.indexOf(":") >= 0 || W.indexOf("f") >= 0) {
                            ar = true;
                            if (am && am.toString().indexOf(":") == -1) {
                                var ai = i.jqx.dataFormat.tryparsedate(am.toString() + ":00", aa);
                                if (ai != null) {
                                    this.filterdate = ai
                                }
                            }
                        }
                    }
                    if (!ar) {
                        ax.setHours(0);
                        ax.setMinutes(0);
                        ax.setSeconds(0)
                    }
                } catch (ao) {
                    if (an.toString() != "") {
                        return false
                    }
                }
                if (this.filterdate != null) {
                    am = this.filterdate
                } else {
                    if (am.indexOf) {
                        if (am.indexOf(":") != -1 || !isNaN(parseInt(am))) {
                            var ah = new Date(ax);
                            ah.setHours(12, 0, 0, 0);
                            var ag = am.split(":");
                            for (var at = 0; at < ag.length; at++) {
                                if (at == 0) {
                                    ah.setHours(ag[at])
                                }
                                if (at == 1) {
                                    ah.setMinutes(ag[at])
                                }
                                if (at == 2) {
                                    ah.setSeconds(ag[at])
                                }
                            }
                            am = ah
                        }
                    }
                }
                if (ar) {
                    if (am && am.setFullYear) {
                        if (ax && ax.getFullYear) {
                            if (W.indexOf("d") == -1 && W.indexOf("M") == -1 && W.indexOf("y") == -1) {
                                am.setFullYear(ax.getFullYear(), ax.getMonth(), ax.getDate())
                            }
                        }
                    }
                }
                var aw = function(az, ay) {
                    if (az == null) {
                        az = ""
                    }
                    switch (av) {
                        case "EQUAL":
                            return az.toString() == ay.toString();
                        case "NOT_EQUAL":
                            return az.toString() != ay.toString();
                        case "GREATER_THAN":
                            return az > ay;
                        case "GREATER_THAN_OR_EQUAL":
                            return az >= ay;
                        case "LESS_THAN":
                            return az < ay;
                        case "LESS_THAN_OR_EQUAL":
                            return az <= ay;
                        case "STARTS_WITH":
                            return i.jqx.string.startsWithIgnoreCase(az.toString(), ay.toString());
                        case "ENDS_WITH":
                            return i.jqx.string.endsWithIgnoreCase(az.toString(), ay.toString());
                        case "ENDS_WITH_CASE_SENSITIVE":
                            return i.jqx.string.endsWith(az.toString(), ay.toString());
                        case "STARTS_WITH_CASE_SENSITIVE":
                            return i.jqx.string.startsWith(az.toString(), ay.toString());
                        case "CONTAINS":
                            return i.jqx.string.containsIgnoreCase(az.toString(), ay.toString());
                        case "CONTAINS_CASE_SENSITIVE":
                            return i.jqx.string.contains(az.toString(), ay.toString());
                        case "DOES_NOT_CONTAIN":
                            return !i.jqx.string.containsIgnoreCase(az.toString(), ay.toString());
                        case "DOES_NOT_CONTAIN_CASE_SENSITIVE":
                            return !i.jqx.string.contains(az.toString(), ay.toString());
                        default:
                            return true
                    }
                };
                var af = new Array();
                if (am && am.indexOf) {
                    if (am.indexOf("|") >= 0 || am.indexOf(" AND ") >= 0 || am.indexOf(" OR ") >= 0 || am.indexOf(" and ") >= 0 || am.indexOf(" or ") >= 0) {
                        var ai = aw(ax, am);
                        if (ai) {
                            return ai
                        }
                        var aj = am.indexOf(" AND ") >= 0 ? am.split(" AND ") : new Array();
                        var ae = am.indexOf(" OR ") >= 0 ? am.split(" OR ") : new Array();
                        var ad = am.indexOf(" and ") >= 0 ? am.split(" and ") : new Array();
                        var ak = am.indexOf(" or ") >= 0 ? am.split(" or ") : new Array();
                        aj = aj.concat(ad);
                        ae = ae.concat(ak);
                        var ac = am.indexOf("|") >= 0 ? am.split("|") : new Array();
                        if (ac.length > 0) {
                            for (var at = 0; at < ac.length; at++) {
                                ac[at] = i.trim(ac[at])
                            }
                        }
                        ae = ae.concat(ac);
                        if (aj.length > 0) {
                            for (var at = 0; at < aj.length; at++) {
                                if (!aj[at].indexOf(" OR ") >= 0) {
                                    af.push(aj[at])
                                }
                            }
                        }
                        if (ae.length > 0) {
                            for (var at = 0; at < ae.length; at++) {
                                if (!ae[at].indexOf(" AND ") >= 0) {
                                    af.push(ae[at])
                                }
                            }
                        }
                        var aq = undefined;
                        for (var ap = 0; ap < af.length; ap++) {
                            var an = af[ap];
                            if (an && an.indexOf && an.indexOf("..") >= 0) {
                                var ab = an.toString().split("..");
                                if (ab.length == 2) {
                                    ai = ax >= ab[0] && ax <= ab[1]
                                }
                            } else {
                                var ai = aw(ax, an)
                            }
                            var al = ap < aj.length ? "and" : "or";
                            if (aq == undefined) {
                                aq = ai
                            } else {
                                if (al == "or") {
                                    aq = aq || ai
                                } else {
                                    aq = aq && ai
                                }
                            }
                        }
                        return aq
                    }
                }
                if (am && am.indexOf && am.indexOf("..") >= 0) {
                    af = am.toString().split("..");
                    if (af.length == 2) {
                        return ax >= af[0] && ax <= af[1]
                    }
                }
                return aw(ax, am)
            }
        };
        var e = function(V, U, W) {
            this.filtervalue = V;
            this.comparisonoperator = U;
            this.evaluate = function(Y, X) {
                return W(this.filtervalue, Y, this.comparisonoperator)
            }
        }
    }
})(jqxBaseFramework);
>>>>>>> Fig bug phan quan ly vi tri trong kho hang
