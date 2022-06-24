<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#" style="margin-left:20px;">Eletro APP</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/marca" class="nav-link">Marcas</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/eletrodomestico" class="nav-link">Elétrodomésticos</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name : 'NavBar'
  }
</script>

<style scoped>

</style>
