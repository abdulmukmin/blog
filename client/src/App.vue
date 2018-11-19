<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <blogFooter/>
  </div>
</template>

<script>
  import navbar from '@/components/NavBar.vue'
  import blogFooter from '@/components/Footer.vue'
  
  export default {
    name : 'app',
    data : function(){
      return{
        isLogin : false
      }
    },
    components : {
      navbar,
      blogFooter,

    },
    mounted(){
      this.cekLogin()
    }, 
    methods : {
      cekLogin: function(){
        let jToken = localStorage.getItem('jToken')
        if (jToken) {
          this.isLogin = true
        } else {
          this.isLogin = false
        }
      }
    }
  }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
