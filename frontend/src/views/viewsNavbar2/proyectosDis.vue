
<template>
  <v-container >
    
    <v-row no-gutters class="col-sm-12" id="rectanguloGrande">
      <v-row>
        <v-col class="col-sm-3" id="cuadrado1">
          <h2>Logo Empresa</h2>
        </v-col>
        <v-col class="col-sm-6" id="rectanguloMedio">
          <v-row class="col-sm-12">
            <v-col class="col-sm-4">
              Titulo
            </v-col>
          </v-row>
          <v-row class="col-sm-12">
            <v-col></v-col>
            <v-col class="col-sm-8">
              Resumen o info.
            </v-col>
          </v-row>
          <v-row class="col-sm-12">
            <v-col></v-col>
            <v-col></v-col>
            <v-col>
              <a href="#">Detalles>></a>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="col-sm-3" id="cuadrado1">
          <v-row class="mb-5 mt-8 ml-10">Datos empresa</v-row>
          <v-row class="mb-5 ml-10">Plazo</v-row>
          <v-row class="mb-5 ml-10">Período</v-row>
        </v-col>
          
      </v-row>
      
    </v-row> 

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        page: 1,
      }
    },
  }
</script>

<style>
#rectanguloGrande {
  margin:auto;
  width: 1300px; 
  height: 250px; 
  border: 2px solid #555;
  background: rgb(146, 146, 146);
  }
#cuadrado1{
  margin: auto;
  width: 100px; 
  height: 225px; 
  border: 3px solid #555;
}
#rectanguloMedio {
  margin:auto;

  padding: 0px;
  width: 700px; 
  height: 225px; 
  border: 2px solid #555;
  background: #bfd3fc;
  }
</style>