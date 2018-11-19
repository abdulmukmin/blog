<template>
<div id="navbarComponent">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">abc
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/">Home</router-link>
            </li>
            <button type="button" v-if="!isLogin" class="btn btn-primary" data-toggle="modal" data-target="#modalLogin">
              Login
            </button>
            <li class="nav-item" v-if="!isLogin">
            <button type="button" v-if="!isLogin" class="btn btn-primary" data-toggle="modal" data-target="#modalRegister">
              Register
            </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <modal-login/>
    <modalRegister/>
</div>
</template>

<script>
import modalLogin from '@/components/AllPages/Login.vue'
import modalRegister from '@/views/Register.vue'

export default {
  name:'navbar',
  props: ['isLogin'],
  components:{
    modalLogin,
    modalRegister
  }
}
</script>

<style>
#navbarComponent {
  margin-bottom: 5%
}
</style>
