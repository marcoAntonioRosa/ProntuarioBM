(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-276d5ac8"],{"744f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-1 ma-2",attrs:{headers:t.headers,items:t.desserts,search:t.search,"footer-props":{"items-per-page-options":[8,10,12,14]}},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"5"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":"",outlined:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),a("v-snackbar",{staticClass:"snackbar",attrs:{bottom:"bottom"===t.y,color:t.color,left:"left"===t.x,"multi-line":"multi-line"===t.mode,right:"right"===t.x,timeout:t.timeout,top:"top"===t.y,vertical:"vertical"===t.mode},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.textoSnackbar)+" "),a("v-btn",{attrs:{dark:"",text:"",icon:""},on:{click:function(e){t.snackbar=!1}}},[a("v-icon",{staticClass:"mr-2",on:{click:function(e){t.snackbar=!1}}},[t._v("mdi-close")])],1)],1),a("div",{staticClass:"flex-grow-1"}),a("v-dialog",{attrs:{"max-width":"1000px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary"}},i),[t._v("Nova")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{rules:[function(t){return!!t||"Obrigatório prencher a hierarquia!"}],label:"Hierarquia",outlined:""},model:{value:t.editedItem.hierarquia,callback:function(e){t.$set(t.editedItem,"hierarquia",e)},expression:"editedItem.hierarquia"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{rules:[function(t){return!!t||"Obrigatório prencher a descrição!"}],label:"Descrição",outlined:""},model:{value:t.editedItem.descricao,callback:function(e){t.$set(t.editedItem,"descricao",e)},expression:"editedItem.descricao"}})],1)],1)],1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Salvar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0}])})},r=[],s={data:()=>({dialog:!1,search:"",textoSnackbar:"",color:"success",mode:"",snackbar:!1,timeout:6e3,x:null,y:"top",rowsPerPageItems:[8,12,15],pagination:{rowsPerPage:20},headers:[{text:"Hierarquia",align:"left",sortable:!0,value:"hierarquia"},{text:"Descrição",value:"descricao"},{text:"Ações",value:"action",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{hierarquia:"",descricao:"",createdAt:"",updatedAt:""},defaultItem:{hierarquia:"",descricao:"",createdAt:"",updatedAt:""}}),computed:{formTitle(){return-1===this.editedIndex?"Nova Hierarquia":"Editar Hierarquia"}},watch:{dialog(t){t||this.close()}},created(){this.initialize()},methods:{initialize(){this.axios.get("https://prontuario6bbm.herokuapp.com/api/hierarquia").then(t=>{this.desserts=t.data})},editItem(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem(t){this.axios.delete("https://prontuario6bbm.herokuapp.com/api/hierarquia/"+t.id+"/delete").then(t=>{t.data?(this.snackbar=!0,this.color="success",this.textoSnackbar="Hierarquia apagada com sucesso!",this.initialize()):(this.snackbar=!0,this.color="error",this.textoSnackbar="Ocorreu um erro ao tentar apagar o registro!")})},close(){this.dialog=!1,setTimeout(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},300)},validaCampos(){return""!=this.editedItem.abreviacao&&""!=this.editedItem.descricao},save(){this.editedIndex>-1?this.axios.put("https://prontuario6bbm.herokuapp.com/api/hierarquia",this.editedItem).then(t=>{t.data?(this.textoSnackbar="Registro atualizado com sucesso!",this.snackbar=!0,this.color="success",this.initialize(),this.close()):(this.snackbar=!0,this.color="error",this.textoSnackbar="Ocorreu um erro ao atualizar!",this.close())}):this.validaCampos()?this.axios.post("https://prontuario6bbm.herokuapp.com/api/hierarquia",this.editedItem).then(t=>{t.data.id?(this.textoSnackbar="Hierarquia inserido com sucesso!",this.snackbar=!0,this.color="success",this.initialize(),this.close()):(this.snackbar=!0,this.color="error",this.textoSnackbar="Ocorreu um erro ao cadastrar!",this.close())}):(this.snackbar=!0,this.color="error",this.textoSnackbar="Existe campos vazios ou incorretos!",this.close())}}},o=s,c=(a("de24"),a("2877")),n=a("6544"),l=a.n(n),d=a("8336"),u=a("b0af"),h=a("99d9"),m=a("62ad"),b=a("a523"),p=a("8fea"),v=a("169a"),k=a("132d"),f=a("0fd9"),x=a("2db4"),g=a("8654"),I=a("71d9"),q=Object(c["a"])(o,i,r,!1,null,null,null);e["default"]=q.exports;l()(q,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:m["a"],VContainer:b["a"],VDataTable:p["a"],VDialog:v["a"],VIcon:k["a"],VRow:f["a"],VSnackbar:x["a"],VTextField:g["a"],VToolbar:I["a"]})},b1f8:function(t,e,a){},de24:function(t,e,a){"use strict";var i=a("b1f8"),r=a.n(i);r.a}}]);
//# sourceMappingURL=chunk-276d5ac8.6c68e285.js.map