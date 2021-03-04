<template>
<v-container fluid>
  <BarraSupInicial />
  <v-row>
    <v-col id="semiC">
      <v-row>
        <!--Contiene la imagen -->
        <v-col>
          <v-img
            alt="Logo"
            class="shrink"
            src="../../assets/Logo.png"
            transition="scale-transition"
            height="590"
            width="561"
          ></v-img>
        </v-col>
        <!--Contiene los textos -->
        <v-col>
          <!--Primer texto-->
          <v-row class="mx-auto">
            <v-col id="rectangulo">
              <h1>The Five Minds</h1>
            </v-col>
          </v-row>
          <!--Segundo texto-->
          <v-row class="mx-auto">
            <v-col id="rectangulo2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat eius nulla soluta iusto aliquid ducimus, ipsam reprehenderit nostrum, nemo architecto recusandae in, accusamus unde quidem possimus facere voluptas nihil.
              
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      
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

<style >

#semiC {
  margin-top: 150px;
  margin-left: 300px;
  padding: 0px;
  width: 100px; 
  height: 558px; 
  background: #bfd3fc;
  -moz-border-radius: 200px 0 0 200px;
  -webkit-border-radius: 200px 0 0 200px;
  border-radius: 300px 0 0 300px;
}
#rectangulo{
  margin-top: 50px;
  margin-right: 500px;
  width: 100px; 
  height: 80px; 
  border: 2px solid #555;
  border-radius: 5px;
  background: #428bca;
}
#rectangulo2{
  margin-top: 25px;
  margin-right: 200px;
  width: 100px;
  height: 300px; 
  border: 2px solid #555;
  border-radius: 5px;
  background: #428bca;
}


</style>
