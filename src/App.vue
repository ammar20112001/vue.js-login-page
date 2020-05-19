<template>
  <div class='main d-flex justify-content-center align-items-center'>
      <b-card class='rounded shadow' title = "Sign Up Form">
        <b-card-text>
          <app-form></app-form>
        </b-card-text>
      </b-card>
  </div>
</template>

<script>
  
  import Forms from './components/forms'

  export default {
    components: {
      appForm: Forms 
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
