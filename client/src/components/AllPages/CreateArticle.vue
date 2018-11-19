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
    <button type="button" class="btn btn-primary mx-2" v-on:click="CreateArticle()">Save</button>
    <button type="button" class="btn btn-secondary btn-ml-2">Cancle</button>
  </div>
 </template>
 
<script>
  // import { constants } from 'http2';
  import { VueEditor } from 'vue2-editor';

  export default {
    data:function(){
      return {
        myId : localStorage.getItem('myId'),
        jToken : localStorage.getItem('jToken'),
        content: '',
        title:''
      }
    },
  components: {
    VueEditor,
    // constants
  },
  methods:{
    CreateArticle(){
      console.log(`masuk create article`)
      axios({
        method: 'POST',
        url: `http://localhost:3000/articles/`,
        data: {
            title:this.title,
            description:this.content
        },
        headers:{
          jToken:this.jToken,
          myId:this.myId
        }
      })
      .then( result => {
        console.log(`berhasil masuk result create article`)
        console.log(result)
      })
      .catch( err => {
        console.log(`masuk error create article`)
        console.log(err)
      })
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