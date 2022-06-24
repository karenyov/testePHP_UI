<template>
  <div class="container">
    <h1>Eletromésticos</h1>

    <router-link to="/eletrodomestico/add" class="btn btn-success me-md-2 btn-sm float-end" style="margin-left:5px;">Cadastrar </router-link>

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

      <div class="row" v-if="eletrodomesticos.length > 0">
          <div class="col-md-4" v-for="eletrodomestico of eletrodomesticos" :key="eletrodomestico">

            <div class="card shadow-sm" style="width: 18rem;height:14em;">
              <div class="card-body">
                <h5 class="card-title">
                  Eletroméstico
                  <button class="btn btn-danger btn-sm float-end" type="button"  @click="clickDeleteEletrodomestico(eletrodomestico.id)">
                    <i class="fa fa-trash"></i>  
                  </button>
                <router-link :to="`/eletrodomestico/edit/${eletrodomestico.id}`" class="btn btn-primary me-md-2 btn-sm float-end" style="margin-left:5px;"><i class="fa fa-pencil"></i>  </router-link>
                </h5>
                <p class="card-text">
                  {{ eletrodomestico.nome }}<br>
                  <b>Marca:</b> {{ eletrodomestico.marca }}<br> 
                  <b>Tensão:</b> {{ eletrodomestico.tensao }}
                </p>           
                <router-link :to="`/eletrodomestico/info/${eletrodomestico.id}`" class="float-end" style="margin-left:5px;"> Detalhes >>  </router-link>
              </div>
            </div>
            
          </div>
        </div>
      
    </div>

  </div>
</template>

<script>
import { EletrodomesticoService } from "@/services/EletrodomesticoService";
import SpinnerL from "@/components/SpinnerL.vue";

  export default {
    name: "EletrodomesticoList",
    data: function () {
        return {
            loading: false,
            eletrodomesticos: [],
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await EletrodomesticoService.getAllEletrodomesticos();
            this.eletrodomesticos = response.data["data"];
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        getAllEletrodomesticos: async function () {
            return await EletrodomesticoService.getAllEletrodomesticos();
        },
        clickDeleteEletrodomestico : async function(id) {
          try {
            this.loading = true;
            let response = await EletrodomesticoService.deleteEletrodomestico(id);
            
            if (response.data) {
              let response = await EletrodomesticoService.getAllEletrodomesticos();
              this.eletrodomesticos = response.data["data"];
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
