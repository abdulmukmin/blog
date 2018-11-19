<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <router-view :myList='myArticle'/>
        <ul v-if="isLogin === 'true'" v-for="article in listArticle" :key="article._id">
          <blogpost
            :title = "article.title"
            :description = "article.description"
            :createdAt = "article.createdAt"
          />
        </ul>
      </div>
      <div class="col-md-4">
        <widget/>
      </div>
    </div>
    <login v-on:trigger="getUserArticle()"/>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/AllPages/Login.vue'
import blogpost from '@/components/BlogPost.vue'
import widget from '@/components/Widget.vue'
import pagination from '@/components/Pagination.vue'
import loopingArticle from '@/components/AllPages/ListArticle.vue';

export default {
  name: 'home',
  data: function(){
    return {
      listArticle :[],
      myArticle: [],
      isLogin : 'false'
    }
  },
  components: {
    blogpost,
    widget,
    pagination,
    loopingArticle,
    login
  },
  mounted(){
    this.getAllArticle()
    this.getUserArticle()
  },
  methods: {

    getAllArticle(){
      console.log(`masuk get all article`)
      axios({
        method : 'GET',
        url : 'http://localhost:3000/articles/readAll',
      })
      .then(result => {
        console.log(result)
        this.listArticle = result.data.articles
      })
      .catch(error => {
        console.log(error)
      })
    },

    getUserArticle(){
      this.isLogin = 'true'
      console.log(`masuk user article`)
      let myId = localStorage.getItem('myId')
      let jToken = localStorage.getItem('jToken')
      axios({
        method : 'POST',
        url : `http://localhost:3000/articles/${myId}`,
        body : { jToken }
      })
      .then(result => {
        console.log(`masuk result get user article`)
        console.log(result)
        this.myArticle=result.data
      })
      .catch( err => {
        console.log(err)
      })
    },
  }
}
</script>
