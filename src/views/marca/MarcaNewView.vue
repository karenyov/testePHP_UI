<template>
  <div class="container">
    <h1>Cadastrar Marca</h1>

     <div class="container" style="margin-top:20px;">

        <!-- Spinner-->
        <div v-if="loading">
          <SpinnerL/>
        </div>

        <form @submit.prevent="submitCreate()">
          <div class="row mb-3">
              <div class="col-md-6">
                  <input v-model="marca.nome" type="text" class="form-control" name="nome" placeholder="Nome">
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
import { MarcaService } from '@/services/MarcaService'

  export default {
    name : 'MarcaNew',
    data : function () {
      return {
        marca : {
          nome : '',
        },
        alertClass : '',
        alertMsg : '',
        loading : false,
      }
    },
    methods: {
      submitCreate : async function () {
        try {
          this.alertMsg = '';
          this.alertClass = '';
          this.loading = true;
          let response = await MarcaService.newMarca(this.marca);
         
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
                this.alertMsg += errors[e] + '<br>';
              }
            }
          } 
        }
        catch (error) {
          this.loading = false;
          console.log(error);
        }
      }
    },
  }
</script>

<style>

</style>
