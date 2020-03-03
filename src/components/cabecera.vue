<template lang="html">
<nav class="cabecera navbar navbar-expand-sm navbar-dark bg-primary justify-content-between fixed-top">
    <router-link class="nav-link text-white" to="/listanotas">lista Notas</router-link>
    <router-link class="nav-link text-white" to="/login">Login</router-link>
</nav>
</template>

<script lang="js">

  export default  {
    name: 'cabecera',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
</style>
