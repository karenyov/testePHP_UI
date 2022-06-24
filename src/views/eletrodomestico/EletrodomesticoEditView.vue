<template>
  <div class="container">
    <h1>Editar Eletroméstico</h1>

    <div class="container" style="margin-top:20px;">
    
      <!-- Spinner-->
      <div v-if="loading">
        <SpinnerL/>
      </div>

      <form v-if="!loading && isDone()" @submit.prevent="updateSubmit()">
          <div class="row mb-3">
              <div class="col-md-6">
                  <input v-model="eletrodomestico.nome" type="text" class="form-control" name="nome" placeholder="Nome">
              </div>
          </div>
          <div class="row mb-3">
              <div class="col-md-6">
                <textarea v-model="eletrodomestico.descricao" class="form-control" id="descricao" rows="3"  placeholder="Descrição"></textarea>
              </div>
          </div>
          <div class="row mb-3">
              <div class="col-md-3">
                  <select class="form-select" aria-label="Tensão">
                    <option value="110" :selected="eletrodomestico.tensao == 110">110 V</option>
                    <option value="220" :selected="eletrodomestico.tensao == 220">220 V</option>
                  </select>
              </div>
              <div class="col-md-3">
                <select class="form-select"  :disabled="marcas.length <= 0" v-model="eletrodomestico.marca_id" name="marca_id" aria-label="Marca">
                    <option value="" selected>Selecione a Marca</option>
                    <option :value="marca.id" v-for="marca of marcas" :key="marca.id" :selected="marca.id == eletrodomestico.marca_id">{{ marca.nome }}</option>
                  </select>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div v-bind:class="alertClass" role="alert" id="alert-msg" v-html="alertMsg"></div>
            </div>
          </div>
          <div class="row">
              <div class="col-md-6">
                  <button :disabled="loading" type="submit" class="btn btn-primary float-end"  style="margin-left:5px;">Salvar</button>
                  <button type="reset" class="btn btn-default float-end">Limpar</button>
              </div>
          </div>
      </form>
    
    </div>
  </div>
</template>

<script>
import { EletrodomesticoService } from '@/services/EletrodomesticoService';
import { MarcaService } from '@/services/MarcaService'

  export default {
    name : 'EletrodomesticoEditView',
    data : function () {
      return {
        id : this.$route.params.id,
        loading : false,
        eletrodomestico : {
          nome: "",
          descricao: "",
          tensao: "",
          marca_id: ""
        },
        errorMessage : null,
        marcas : [],
        alertClass : '',
        alertMsg : '',
      }
    },
    created : async function () {
      try {
        this.loading = true;
        let response = await EletrodomesticoService.getEletrodomestico(this.id);
        this.eletrodomestico = response.data["data"];

        let marcaResponse = await MarcaService.getAllMarcas();
        this.marcas = marcaResponse.data["data"];

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
      },
      updateSubmit : async function () {
        try {
          this.alertMsg = '';
          this.alertClass = '';
          this.loading = true;
          let response = await EletrodomesticoService.updateEletrodomestico(this.eletrodomestico, this.id);
         
          if (response.data) {
            this.loading = false;
            response = response.data;

            if (response.success) {
              this.alertClass = 'alert alert-success';
              this.alertMsg = response.message;
            } else {
              this.alertClass = 'alert alert-danger';

              let errors = response.data;
              for (var e in errors) {
                this.alertMsg += "" + errors[e] + "<br>";
              }
            }
          } 
        }
        catch (error) {
          this.loading = false;
          console.log(error);
        }
      }
    }
  }
</script>

<style>

</style>
