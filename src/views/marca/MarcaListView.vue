<template>
  <div class="container">
    <h1>Marcas</h1>

    <router-link to="/marca/add" class="btn btn-success me-md-2 btn-sm float-end" style="margin-left:5px;">Cadastrar </router-link>

    <div class="container md-12" style="margin-top:20px;">

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

      <div class="row" v-if="marcas.length > 0">
        <div class="col-md-4" v-for="marca of marcas" :key="marca">
          <div class="card my-2 list-group-item shadow-sm" style="width: 17rem;height:10em;">
            <div class="card-body">
              <h5 class="card-title">
                 Marca
                <button class="btn btn-danger btn-sm float-end" type="button" @click="clickDeleteMarca(marca.id)">
                  <i class="fa fa-trash"></i>  
                </button>
                <router-link :to="`/marca/edit/${marca.id}`" class="btn btn-primary me-md-2 btn-sm float-end" style="margin-left:5px;"><i class="fa fa-pencil"></i>  </router-link>
              </h5>
                <p class="card-text">{{ marca.nome }}</p>
                <router-link :to="`/marca/info/${marca.id}`" class="float-end" style="margin-left:5px;"> Detalhes >>  </router-link>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { MarcaService } from "@/services/MarcaService";
import SpinnerL from "@/components/SpinnerL.vue";

  export default {
    name : 'MarcaList',
    data: function () {
      return {
        loading : false,
        marcas : [],
        errorMessage : null
      }
    },
    created : async function () {
      try {
        this.loading = true;
        let response = await MarcaService.getAllMarcas();
        this.marcas = response.data['data'];
        this.loading = false;

      } catch(error) {
        this.errorMessage = error;
        this.loading = false;
      }
    },
    methods : {
      getAllMarcasData : async function () {
        return await MarcaService.getAllMarcas();
      },
      clickDeleteMarca : async function (id) {
        try {
            this.loading = true;
            let response = await MarcaService.deleteMarca(id);
        
            if (response.data) {
              let response = await MarcaService.getAllMarcas();
              this.marcas = response.data['data'];
            }
            this.loading = false;
          }
          catch (error) {
              this.errorMessage = error;
              this.loading = false;
          }
      }
    },
    components: { SpinnerL }
  }
</script>

<style>

</style>
