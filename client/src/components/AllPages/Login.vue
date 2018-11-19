<template>
  <!-- Modal -->
  <div class="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" modal-dismiss="modal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
      <div v-if="error">
        <h3>Invalid email or password</h3>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter username" v-model="username" >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" placeholder="Password" v-model="password">
      </div>
      <button type="submit" data-dismiss="modal" class="btn btn-primary" v-on:click="login" @click="$emit('trigger')">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      username : '',
      password : '',
      error : false
    }
  },

  props :['isLogin'],
  methods:{
    login: function(){
      this.error = false
      console.log(`masuk sini`)
      axios({
        method : 'POST',
        url : 'http://localhost:3000/users/signin',
        data : {
          username : this.username,
          password : this.password
        }
      })
      .then((result) => {
        //console.log(result)
        let myId = result.data.myId
        localStorage.setItem('myId', result.data.myId)
        localStorage.setItem('jToken', result.data.jToken)
        this.$router.push(`/${myId}`)
      }).catch((err) => {
        console.log(err)
        this.error = true
      });

    }

  }
}
</script>

