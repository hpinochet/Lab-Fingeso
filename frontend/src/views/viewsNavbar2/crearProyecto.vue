
<template>
<v-form v-model="valid">
  <v-container fluid>
    <v-col id="rectanguloGrande">
      <!--Aqui se agregaria el nombre del proyecto al que se esta postulando-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
          <h1>Nombre del Proyecto</h1>
      </v-col>
      <v-col id="titulo">
          <v-text-field
              single-line
              solo
              v-model="newProyect.nombreProyecto"
              :rules="titRules"
              label="Nombre del proyecto..."
              required
          ></v-text-field>
      </v-col>
      <!--Aqui el usuario agregar los responsables que estaran acargo de este trabajo-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Responsable</h1>
      </v-col>
      <v-col>
        <v-textarea
          v-model="newProyect.responsable"
          :rules="resRules"
          solo
          no-resize
          name="input-7-4"
          label="Ingrese los responsables..."
        ></v-textarea>
      </v-col>
        
      <!--Ingresar los objetivos -->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Objetivos</h1>
      </v-col>
      <v-col>
        <v-textarea
          v-model="newProyect.objetivos"
          :rules="objRules"
          solo
          no-resize
          name="input-7-4"
          label="Ingrese los Objetivos..."
        ></v-textarea>
      </v-col>
      <!--Alcances del proyecto-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Alcances</h1>
      </v-col>
      <v-col>
        <v-textarea
          v-model="newProyect.alcance"
          :rules="alcRules"
          solo
          no-resize
          name="input-7-4"
          label="Ingrese los alcances del proyecto..."
        ></v-textarea>
      </v-col>
      <!--Criterios de evaluacion-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Criterios de evaluacion</h1>
      </v-col>
      <v-col id="duracion">
          <v-text-field
              single-line
              solo
              v-model="newProyect.criteriosEvaluacion"
              label="Criterios..."
          ></v-text-field>
      </v-col>
      <!--Duracion del proyecto-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Duración</h1>
      </v-col>
      <v-col id="duracion">
          <v-text-field
              single-line
              solo
              v-model="newProyect.duracionEstimada"
              :rules="durRules"
              label="Duración del proyecto..."
          ></v-text-field>
      </v-col>
      <!--Requisitos funcionales del proyecto-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Requisitos Funcioneles.</h1>
      </v-col>
      <v-col>
        <v-textarea
          v-model="newProyect.requisitosFuncionales"
          :rules="rfRules"
          solo
          name="input-7-4"
          label="Ingrese los requisitos funcionales del proyecto..."
        ></v-textarea>
      </v-col>
      <!--Requisitos tecnicos del proyecto-->
      <v-col id="rectangulo1" background-color="grey lighten-2">
        <h1>Requisitos Técnicos.</h1>
      </v-col>
      <v-col>
        <v-textarea
          v-model="newProyect.requisitosTecnicos"
          :rules="rtRules"
          solo
          name="input-7-4"
          label="Ingrese los requisitos técnicos del proyecto..."
        ></v-textarea>
      </v-col>
      <!-- Botones de Guardar y Publicar-->
      <v-col>
          <v-btn
              class=" ma-auto "
              color = "primary"
              width ="100"
              @click="send"
              >
              Guardar.
          </v-btn>
          <v-btn
              class=" ma-auto ml-5 "
              color = "success"
              width ="150"
              @click="publicar"
              >
              Publicar.
          </v-btn>
          <p class="message"> 
          {{message}} 
        </p>
      </v-col>
    </v-col>
  </v-container>
</v-form>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        titulo: '',
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
          v => (v || '' ).length <= 1000 || 'Requesitos Técnicos debe tener menos de 1000 caracteres.'], 
        newProyect:{ 
        },
        message:'', 
        id: false,
        idProyecto: ''
    }), 
    methods:{ 
        send:async function(){ 
        this.message = ''; 
        if (!this.id){
          try { 
              var result = await this.$http.post('/api/proyectos', this.newProyect); 
              let proyect = result.data;       
              this.id = true;
              this.idProyecto = proyect.data._id;
              this.message = `${this.idProyecto} Se creó un nuevo contacto ${proyect.data._id}`; 
          } catch (error) { 
              console.log('error', error) 
              this.message = 'Ocurrió un error' 
          }
        }else{
          await this.$http.put('/api/proyectos/'+this.idProyecto, this.newProyect);
          //this.message = `${this.idProyecto} actualizo en la base de datos `; 
          
        } 

        

        },
        publicar:async function(){
          try {
            this.newProyect.visibilidad = true;
            await this.$http.put('/api/proyectos/'+this.idProyecto, this.newProyect);
            this.message = `Ocurrió un error ${proyect.data.duracionEstimada}`
          } catch (error) { 
              console.log('error', error) 
              this.message = 'Ocurrió un error' 
          }
        } 
    } 
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