<template>
<v-form v-model="valid">
  <v-container fluid>
      <v-col id="rectanguloGrande">
        <!--Aqui se agregaria el nombre del proyecto al que se esta postulando-->
        <v-col id="nombre" background-color="grey lighten-2">
            <h1>Nombre del Proyecto: </h1>
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
            label="Ingrese los responsables..."
            required
          ></v-textarea>
        </v-col>
         <v-col id="responsable">
            <v-text-field
                v-model="responsable"
                :rules="resRules"
                label="responsable"
                required
            ></v-text-field>
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
            label="Ingrese los Objetivos..."
            required
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
            label="Ingrese los alcances del proyecto..."
            required
          ></v-textarea>
        </v-col>
      </v-col>
  </v-container>
</v-form>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        responsable: '',
        resRules: [
          v => !!v || 'Responsables es requerido.',
          v => (v || '' ).length <= 200 || 'Description debe tener menos de 200 caracteres.'],
        objetivos:'',
        objRules: [
          v => !!v || 'Objetivos es requerido.',
          v => (v || '' ).length <= 200 || 'Objetivos debe tener menos de 200 caracteres.'],
    })
}
</script>

<style scoped>

#rectanguloGrande {
  margin:auto;
  width: 1500px; 
  height: 2000px; 
  border: 2px solid #555;
  background: rgb(146, 146, 146);
}
#nombre {
    margin:auto;
    margin-top: 20px;
    margin-bottom: 50px;
    width: 1447px; 
    height: 70px; 
    border: 2px solid #555;
    background: rgb(119, 112, 112);
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