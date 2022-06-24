<template>
  <div class="container">
    <h1>Eletroméstico</h1>

    <div class="container" style="margin-top:20px;">

      <!-- Spinner-->
      <div v-if="loading">
        <SpinnerL/>
      </div>

      <div>
        <form @submit.prevent="submitCreate()" ref="frm">
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
                    <select class="form-select" v-model="eletrodomestico.tensao" aria-label="Tensão">
                      <option selected>Selecione a Tensão</option>
                      <option value="110">110 V</option>
                      <option value="220">220 V</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <select class="form-select"  :disabled="marcas.length <= 0" v-model="eletrodomestico.marca_id" name="marca_id" aria-label="Marca">
                      <option value="" selected>Selecione a Marca</option>
                      <option :value="marca.id" v-for="marca of marcas" :key="marca.id">{{ marca.nome }}</option>
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

  </div>
</template>

<script>
import { EletrodomesticoService } from '@/services/EletrodomesticoService';
import { MarcaService } from '@/services/MarcaService'

  export default {
    name : 'EletrodomesticoNew',
    data : function () {
      return {
        eletrodomestico : {
          nome: "",
          descricao: "",
          tensao: "",
          marca_id: ""
        },
        marcas : [],
        loading : false,
        errorMessage : null,
        alertClass : '',
        alertMsg : '',
      }
    },
    created : async function () {
      try {
        let response = await MarcaService.getAllMarcas();
        this.marcas = response.data["data"];
      }
      catch (error) {
        this.errorMessage = error;
        console.log(error);
      }
    },
    methods: {
      submitCreate : async function () {
        try {
          this.alertMsg = '';
          this.alertClass = '';
          this.loading = true;

          let response = await EletrodomesticoService.newEletrodomestico(this.eletrodomestico);
         
          if (response.data) {
            this.loading = false;
            response = response.data;

            if (response.success) {
              this.$refs.frm.reset();
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
