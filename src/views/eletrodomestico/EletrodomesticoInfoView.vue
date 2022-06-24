<template>
  <div class="container">
    <h1>Eletromésticos</h1>

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
        <p><b>Nome: </b>{{ eletrodomestico.nome }}</p>
        <p><b>Descrição: </b>{{ eletrodomestico.descricao }}</p>
        <p><b>Marca: </b>{{ eletrodomestico.marca }}</p>
        <p><b>Tensão: </b>{{ eletrodomestico.tensao }}</p>
      </div>
    
    </div>
  </div>
</template>

<script>
import { EletrodomesticoService } from '@/services/EletrodomesticoService';

  export default {
    name : 'EletrodomesticoInfo',
    data : function () {
      return {
        id : this.$route.params.id,
        loading : false,
        eletrodomestico : {},
        errorMessage : null
      }
    },
    created : async function () {
      try {
        this.loading = true;
        let response = await EletrodomesticoService.getEletrodomestico(this.id);
        this.eletrodomestico = response.data["data"];
        this.loading = false;
      }
      catch (error) {
        this.errorMessage = error;
        this.loading = false;
      }
    },
    methods : {
      isDone : function () {
        return Object.keys(this.eletrodomestico).length > 0;
      }
    }
  }
</script>

<style>

</style>
