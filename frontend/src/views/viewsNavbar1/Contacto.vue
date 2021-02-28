<template>
  <v-container fluid>
      <v-row>
      <v-col id="rectangulo">
        <v-row>
          <v-col>
              <h1 id="h1">Contacto</h1>
          </v-col>
          <v-col id="rectangulo2">
              <p class="fw-normal">Normal weight text.</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<style>
#h1{
  margin-top: 200px;
  margin-left: 300px;
  margin-right: 0px;
  width: 400px; 
  height: 500px;
}
#rectangulo {
  margin-top: 200px;
  margin-left: 0px;
  margin-right: 0px;
  width: 400px; 
  height: 500px; 
  background: #428bca;
}
#rectangulo2 {
  margin-top: 50px;
  margin-left: 0px;
  margin-right: 100px;
  width: 100px; 
  height: 400px;
  border: 2px solid #555;
  background: #ffffff;
}
</style>