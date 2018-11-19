<template>
  <div>
    <div class="modal fade" id="modalRegister" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" modal-dismiss="modal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter username" v-model="username" >
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            <small id="emailHelp" class="form-text text-muted">Check your email for password, We'll never share your email with anyone else.</small>
          </div>
          <button type="submit" class="btn btn-primary" v-on:click="register">Submit</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        username:'',
        email:''
      }
    },
    components:{

    },
    methods:{
      register(){
        console.log(`masuk register`)
        axios({
          method : 'POST',
          url: 'http://localhost:3000/users/register',
          data: {
            username: this.username,
            email: this.email,
          }
        })
        .then(result => {
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
      },
    }
  }
</script>

