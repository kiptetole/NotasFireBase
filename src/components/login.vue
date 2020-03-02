<template lang="html">

  <div class="login container-flid ">
    <div class="row">
      <div class="col-12 justify-content-center">
        <p class="display-4">LOGIN</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
          <div class="form-group">
            <label for="Correo">Correo Electronico</label>
            <input type="email" class="form-control" id="Correo" aria-describedby="emailHelp" placeholder="Correo Electronico" v-model="email">
          </div>
          <div class="form-group">
            <label for="Contraseña">Contraseña</label>
            <input type="password" class="form-control" id="Contraseña" v-model="password">
          </div>
          <button class="btn btn-primary" @click="login" >Entrar</button>
      </div>
    </div>
    <button class="btn btn-primary" @click="login" ><router-link class="nav-link text-white" to="/registro">Registro</router-link></button>
  </div>

</template>

<script lang="js">
  import firebase from 'firebase'

  export default  {
    name: 'login',
    props: [],
    mounted () {

    },
    data () {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      login: function () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.$router.replace("/listanotas")
            });
        },
    },
    computed: {

    }
}


</script>

<style scoped>

</style>
