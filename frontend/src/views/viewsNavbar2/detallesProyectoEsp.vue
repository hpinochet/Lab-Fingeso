
<template>
  <v-container fluid>
    <BarraSupInicial />
    <v-col id="rectanguloGrande">
      <!--Aqui se agregaria el nombre del proyecto al que se esta postulando-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
          <h1>Nombre del Proyecto</h1>
      </v-col>
      <v-col id="titulo">
          <v-text-field
              single-line
              solo
              v-model="titulo"
              :rules="titRules"
              label="Supongo que aqui deberia ir el nombre del proyecto que se esta viendo"
              v-bind:disabled="titulo"
          ></v-text-field>
      </v-col>
      <!--Aqui el usuario agregar los responsables que estaran acargo de este trabajo-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Responsable</h1>
      </v-col>
      <v-col>
        <v-textarea
          v-model="responsable"
          :rules="resRules"
          solo
          no-resize
          name="input-7-4"
          label="Supongo que aqui deberia ir el responsable del proyecto que se esta viendo"
          v-bind:disabled="responsable"
        ></v-textarea>
      </v-col>
        
      <!--Ingresar los objetivos -->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Objetivos</h1>
      </v-col>
      <v-col>
        <v-textarea
          v-model="objetivos"
          :rules="objRules"
          solo
          no-resize
          name="input-7-4"
          label="Supongo que aqui deberia ir los objetivos del proyecto que se esta viendo"
          v-bind:disabled="objetivos"
        ></v-textarea>
      </v-col>
      <!--Alcances del proyecto-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Alcances</h1>
      </v-col>
      <v-col>
        <v-textarea
          v-model="alcances"
          :rules="alcRules"
          solo
          no-resize
          name="input-7-4"
          label="Supongo que aqui deberia ir los alcances del proyecto que se esta viendo"
          v-bind:disabled="alcances"
        ></v-textarea>
      </v-col>
      <!--Duracion del proyecto-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Duración</h1>
      </v-col>
      <v-col id="duracion">
          <v-text-field
            single-line
            solo
            v-model="duracion"
            :rules="durRules"
            label="Supongo que aqui deberia ir la duracion del proyecto que se esta viendo"
            v-bind:disabled="duracion"
          ></v-text-field>
      </v-col>
      <!--Requisitos funcionales del proyecto-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Requisitos Funcioneles.</h1>
      </v-col>
      <v-col>
        <v-textarea
            v-model="rf"
            :rules="rfRules"
            solo
            name="input-7-4"
            label="Supongo que aqui deberia ir los requisitos funcionales del proyecto que se esta viendo"
            v-bind:disabled="rf"
        ></v-textarea>
      </v-col>
      <!--Requisitos tecnicos del proyecto-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Requisitos Técnicos.</h1>
      </v-col>
      <v-col>
        <v-textarea
            v-model="rt"
            :rules="rtRules"
            solo
            name="input-7-4"
            label="Supongo que aqui deberia ir los requisitos tecnicos del proyecto que se esta viendo"
            v-bind:disabled="rt"
        ></v-textarea>
      </v-col>
      <!-- Boton de Postular-->
      <v-col>
          <v-btn
              class=" ma-auto ml-5 "
              color = "success"
              width ="150"
              @click="submit"
              >
              Postular.
          </v-btn>
      </v-col>
    </v-col>
  </v-container>
</template>

<script>
import BarraSupInicial from'@/components/BarraSupLoginE'
export default {
    components: { BarraSupInicial },
    data: () => ({
        valid: false,
        titulo: '',
        disabled: 0,
        titRules: [
            v => !!v || 'Nombre del proyecto es requerido.',
            v => (v || '' ).length <= 50 || 'Nombre debe tener menos de 50 caracteres.'
        ],
        durRules: [
            v => !!v || 'Duracion del proyecto es requerido.',
            v => (v || '' ).length <= 20 || 'Duracion debe tener menos de 20 caracteres.'
        ],
        responsable: '',
        resRules: [
          v => !!v || 'Responsables es requerido.',
          v => (v || '' ).length <= 200 || 'Description debe tener menos de 200 caracteres.'],
        objetivos:'',
        objRules: [
          v => !!v || 'Objetivos es requerido.',
          v => (v || '' ).length <= 200 || 'Objetivos debe tener menos de 200 caracteres.'],
        rf:'',
        rfRules: [
          v => !!v || 'Requesitos Funcionales requeridos.',
          v => (v || '' ).length <= 1000 || 'Requesitos Funcionales debe tener menos de 1000 caracteres.'],
        rt:'',
        rtRules: [
          v => !!v || 'Requesitos Técnicos requeridos.',
          v => (v || '' ).length <= 1000 || 'Requesitos Técnicos debe tener menos de 1000 caracteres.']
    })
}
</script>

<style scoped>

#rectanguloGrande {
  margin:auto;
  width: 1500px; 
  height: 2250px; 
  border: 2px solid #555;
  background: rgb(146, 146, 146);
}
#rectangulo1 {
    margin:auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 1447px; 
    height: 70px; 
    border: 2px solid #555;
    background: rgb(119, 112, 112);
  }
#rectangulo2 {
    margin-top: 20px;
    margin-left: 20px;
    width: 1400px; 
    height: 200px; 
    border: 2px solid #555;
    background: rgb(255, 255, 255);
  }
#responsable{
    margin-top: 20px;
    margin-left: 20px;
    width: 750px; 
    height: 80px; 
    background: #ffffff;
    border: 1px solid rgb(0, 0, 0);
}
</style>