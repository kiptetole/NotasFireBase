<template lang="html">

  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-5 justify-content-center">
        <div class="card" style="width: 100%;">
          <div class="card-body">
            <form @submit.prevent="anadenota">
              <div class="form-group">
                <label for="nota">Nota</label>
                <input type="text" class="form-control" placeholder="nota" v-model="nuevanota.nota">
              </div>
              <div class="form-group">
                <label for="autor">Autor</label>
                <input type="text" class="form-control" placeholder="autor" v-model="nuevanota.autor">
                {{nuevanota.texto}}
              </div>
              <button class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-6 justify-content-center">
        <div class="card" style="width: 100%;">
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <td>Autor</td>
                <td>Nota</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="nota in documents" v-bind:key="nota">
                <td>{{nota.autor}}</td>
                <td>{{nota.nota}}</td>
                <td>
                  <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </td>
              </tr>
            </tbody> 
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
  import { db } from '../db.js'

  export default {
    name: 'listanotas',
    components: {
    },

    data() {
      return {
        documents: [],
        nuevanota:{
          nota:"",
          autor:"",
          Archivo: {
            Nombre: "",
            URL: ""
          }
        }
      }
    },

    firestore: {
      documents: db.collection('listanotas'),
    },
    methods:{
      anadenota:function(){
        db.collection('listanotas').add(this.nuevanota)



        this.nuevanota.nota = ""
        this.nuevanota.autor = ""
      }
    }
}
</script>

<style scoped>
</style>
