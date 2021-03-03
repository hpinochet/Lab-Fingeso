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
            v-model="newPostuleishion.nombreProyecto"
            :rules="resRules"
            solo
            no-resize
            name="input-7-4"
            label="Ingrese los responsables..."
            required
          ></v-textarea>
        </v-col>
        <!--Ingresar los objetivos -->
        <v-col id="rectangulo1" background-color="grey lighten-2">
          <h1>Descripcion de empresa</h1>
        </v-col>
        <v-col>
          <v-textarea
            v-model="newPostuleishion.responsable"
            :rules="objRules"
            solo
            no-resize
            name="input-7-4"
            label="Ingrese una breve descripcion de la empresa..."
            required
          ></v-textarea>
        </v-col>
        <!--Ingresar los objetivos -->
        <v-col id="rectangulo1" background-color="grey lighten-2">
          <h1>Objetivos</h1>
        </v-col>
        <v-col>
          <v-textarea
            v-model="newPostuleishion.objetivos"
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
            v-model="newPostuleishion.planTrabajo"
            :rules="alcRules"
            solo
            no-resize
            name="input-7-4"
            label="Ingrese los alcances del proyecto..."
            required
          ></v-textarea>
        </v-col>
        <!--plan del proyecto-->
        <v-col id="rectangulo1" background-color="grey lighten-2">
          <h1>Plan de trabajo</h1>
        </v-col>
        <v-col>
          <v-textarea
            v-model="newPostuleishion.descripcionEmpresa"
            :rules="alcRules"
            solo
            no-resize
            name="input-7-4"
            label="Ingrese el plan de trabajo propueso..."
            required
          ></v-textarea>
        </v-col>
        <!-- Boton de Postular-->
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
                @click="postular"
                >
                Postular.
            </v-btn>
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
        newPostuleishion:{ 
        }, 
        id: false,
        idPostulacion: '',
        message:''
    }), 
    methods:{ 
        send:async function(){ 
        this.message = ''; 
        if (!this.id){
          try { 
              var result = await this.$http.post('/api/postulaciones', this.newPostuleishion); 
              let proyect = result.data;       
              this.id = true;
              this.idPostulacion = proyect.data._id;
              this.message = `${this.idPostulacion} Se creó un nuevo contacto ${proyect.data._id}`; 
          } catch (error) { 
              console.log('error', error) 
              this.message = 'Ocurrió un error' 
          }
        }else{
          await this.$http.put('/api/postulaciones'+this.idPostulacion, this.newPostuleishion);
          //this.message = `${this.idPostulacion} actualizo en la base de datos `; 
          
        } 

        

        },
        postular:async function(){
          try {
            this.newPostuleishion.visibilidad = true;
            await this.$http.put('/api/proyectos/'+this.idPostulacion, this.newPostuleishion);
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