<template>
  <div class="container">
    <h1>Marca</h1>

    <div class="container" style="margin-top:20px;">

      <!-- Spinner-->
      <div v-if="loading">
        <SpinnerL/>
      </div>

      <div v-if="!loading && errorMessage">
        <div class="container">
          <div class="row">
            <div class="col">
              <p class="h4 text-danger fw-bold">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3" v-if="!loading && isDone()">
        <p><b>Nome: </b>{{ marca.nome }}</p>
      </div>
    
    </div>

  </div>
</template>

<script>
import { MarcaService } from '@/services/MarcaService'

  export default {
    name : 'MarcaInfo',
    data : function () {
      return {
        id : this.$route.params.id,
        loading : false,
        marca : {},
        errorMessage : null
      }
    },
    created : async function () {
      try {
        this.loading = true;
        let response = await MarcaService.getMarca(this.id);
        this.marca = response.data["data"];
        this.loading = false;
      }
      catch (error) {
        this.errorMessage = error;
        this.loading = false;
      }
    },
    methods : {
      isDone : function () {
        return Object.keys(this.marca).length > 0;
      }
    }
  }
</script>

<style>

</style>
