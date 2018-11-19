<template>
  <div class="container">
    <router-view/>
    <button v-if="show === true" id="createBtn"  @click="show = false" type="button" class="btn btn-primary"><router-link v-bind:to= "'/'+myId+'/CreateArticle'">Create New</router-link></button>
    <div v-for="list in myList" :key="list._id">
      {{list}}
      <articleList v-if="show === true" :nameList="list.name"/>

    </div>
    {{myList}}
  </div>
</template> 

<script>
import articleList from '@/components/ArticleList.vue'

export default {
  data:function(){
    return {

      myId : localStorage.getItem('myId'),
      show: true
    }
  },
  components:{
    articleList,

  },
  props:['myList'],
  computed: {
    checkParams: function () {
      console.log(`masuk computed`)
      console.log($route.params.id)
      if($route.params.id){
        this.show = true
      }
    }
  },
  methods: {

  }
}
</script>

<style>
#list{
  margin-top: 10%;
  text-align: left;

}

#createBtn {
  margin-bottom: 2%;
  text-align: left;
}

</style>
