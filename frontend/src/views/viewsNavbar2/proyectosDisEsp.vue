
<template>
<div>
  <BarraSupInicial />
  <v-container v-for="proyecto in proyectos"     :key="proyecto" >
    
    <v-row no-gutters class="col-sm-12" id="rectanguloGrande">
      <v-row>
        <v-col class="col-sm-3" id="cuadrado1">
          <h2>Logo Empresa</h2>
        </v-col>
        <v-col class="col-sm-6" id="rectanguloMedio">
          <v-row class="col-sm-12">
            <v-col class="col-sm-4">
              {{proyecto.nombreProyecto}}
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
            <v-col>
              <a href="/postulacion">Postular>></a>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="col-sm-3" id="cuadrado1">
          <v-row class="mb-5 mt-8 ml-10">{{proyecto.responsable}}</v-row>
          <v-row class="mb-5 ml-10">Duracion proyecto {{proyecto.duracionEstimada}} dias</v-row>
          <v-row class="mb-5 ml-10">Período</v-row>
        </v-col>
          
      </v-row>
      
    </v-row> 

  </v-container>
</div>
</template>

<script>
import BarraSupInicial from'@/components/BarraSupLoginE'
export default {
    components: { BarraSupInicial },
    data () {
      return {
        page: 1,
        proyectos:{}
      }
    },
    created() {
      this.function();
    },
    methods:{
        async function(){
          try {
            var result = await this.$http.get('/api/proyectos');
            let poyect = result.data; 
            this.proyectos = poyect.data;
           
          } catch (error) { 
              console.log('error', error) 
              this.message = 'Ocurrió un error' 
          }
        }
    }
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