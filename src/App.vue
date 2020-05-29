<template>
  <div>
    <!-- <ul class="nav nav-pills">
      <li class="nav-item"><router-link to='/' class='nav-link'>Sign Up</router-link></li>
      <li class="nav-item"><router-link to='/signin' class='nav-link'>Sign In</router-link></li>
    </ul>
    <router-view></router-view> -->


    <div id='signUp' class='main d-flex justify-content-center align-items-center'>
      <b-card class='rounded shadow' title = "Sign Up">
        <b-card-text>
          <app-sign-up></app-sign-up>
        </b-card-text>
      </b-card>
    </div>

    <div id='signIn' class='main d-flex justify-content-center align-items-center'>
        <b-card class='rounded shadow' title = "Sign In">
          <b-card-text>
            <app-sign-in></app-sign-in>
          </b-card-text>
        </b-card>
    </div>

  </div>
</template>

<script>
  
  import SignUp from './components/SignUp'
  import SignIn from './components/SignIn'

  export default {
    components: {
      appSignUp: SignUp,
      appSignIn: SignIn 
    }
  }
</script>

<style scoped>

.main {
  height: 947px;
  background-color: #f8f9fa
}

.card-title {
  text-align: center;
}

.card-title, .label {
  background-color: orange;
}

@media only screen and (max-width: 576px) {
  .main {
    background-color: white;
    height: 100%;
  }
}

</style>
