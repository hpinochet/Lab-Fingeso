<template>
  <v-container fluid>
    <BarraSupInicial />
    <v-row class="mx-auto">
      <h1 id="h2">¿Quiénes Somos?</h1>
    </v-row>
    <v-row  id="rectangulo1">
        <v-col id="rectangulo2">

        </v-col>
        <v-col >
          <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mx-auto "
          contain
          src="../../assets/Logo.png"
          transition="scale-transition"
          width="500"
        />
      </div>
        </v-col>
      </v-row>  
  </v-container> 

</template>

<script>
import BarraSupInicial from'@/components/BarraSupInicial'
export default {
    components: { BarraSupInicial },
  
}
</script>

<style>

  #h2{
    margin:auto;
    margin-top: 100px;
  }
  #row1{
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    width: 0;
    height: 0;
  }
  #rectangulo1{
    margin: auto;
    margin-top: 50px;
    width: 1800px; 
    height: 700px; 
    border: 3px solid #555;
    background: #bfd3fc;
  }
  #rectangulo2 {
    margin-top:100px;
    margin-bottom: 100px;
    margin-left: 50px;
    margin-right: 50px;
    width: 500px; 
    height: 500px; 
    border: 3px solid #555;
    background: #ffffff;
  }
  #oval {
    width: 200px;
    height: 350px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    background: #5cb85c;
  }
</style>