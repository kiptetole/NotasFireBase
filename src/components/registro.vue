<template lang="html">

  <div class="registro container-flid ">
    <div class="row">
      <div class="col-12 justify-content-center">
        <p class="display-4">REGISTRO</p>
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
            <input type="password" class="form-control" id="Contraseña" placeholder="Nueva contraseña" v-model="password">
          </div>
          <button class="btn btn-primary" @click="registro">Registrarse</button>
      </div>
    </div>  
  </div>

</template>

<script lang="js">
import firebase from 'firebase'

  export default  {
    name: 'registro',
    email: '',
    password: '',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      registro: function () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then()
      }
    },
    computed: {

    }
}


</script>

<style scoped>
  .registro {
    color: black;
  }
</style>
