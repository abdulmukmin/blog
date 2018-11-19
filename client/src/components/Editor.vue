<template>
  <div class="container">
    <div id="title">
      Title :
      <input type="text" placeholder="Title here.." v-model="title"/>
    </div>
    <div id="editor">
       Description :
      <vue-editor v-model="content" placeholder="Content here.."/>
    </div>
  </div>

 </template>
 
 <script>
   import { VueEditor } from 'vue2-editor'
 
   export default {
 
   components: {
      VueEditor
   },
 
   data() {
       return {
         content: '',
         title:''
       }
     }
   }
 </script> 

 <style>
  #editor{
    margin-top: 1%;
    margin-bottom: 1%;
  }

  #title{
    margin-top: 5%;
    margin-bottom: 1%;
  }
 </style>
 