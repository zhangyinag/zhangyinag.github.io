webpackJsonp([44],{oz0I:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("viA7"),l=n("0xDb"),i={name:"exportExcel",data:function(){return{list:null,listLoading:!0,downloadLoading:!1,filename:""}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(a.c)().then(function(e){t.list=e.data.items,t.listLoading=!1})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([n.e(2),n.e(53)]).then(function(){var e=n("zWO4").export_json_to_excel,a=t.list;e(["序号","文章标题","作者","阅读数","发布时间"],t.formatJson(["id","title","author","pageviews","display_time"],a),t.filename),t.downloadLoading=!1}.bind(null,n)).catch(n.oe)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(l.c)(e[t]):e[t]})})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入文件名(默认excel-list)","prefix-icon":"el-icon-document"},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}}),t._v(" "),n("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",icon:"document",loading:t.downloadLoading},on:{click:t.handleDownload}},[t._v("导出excel")]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"文章标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"作者",width:"95",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"阅读数",width:"115",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pageviews)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"发布时间",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1)],1)},staticRenderFns:[]},r=n("VU/8")(i,o,!1,null,null,null);e.default=r.exports}});