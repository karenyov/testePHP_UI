<template>
  <NavBar/>
  <router-view class="template"/>

</template>

<style>
  .template {
    margin-top: 20px;
  }
</style>
<script>
import NavBar from "@/components/NavBar";

  export default {
    name: 'App',
    components: { NavBar } 
  }
</script>