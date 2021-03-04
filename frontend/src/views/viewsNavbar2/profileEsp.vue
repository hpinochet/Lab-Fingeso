<template>
    <v-container fluid>
        <BarraSupInicial />
        
        <v-col id="rectanguloGrande">
            <h2>PERFIL</h2>
            <v-row id="rectangulo1">
                <v-img
                    alt="Logo"
                    class="shrink"
                    src="../../assets/Logo.png"
                    transition="scale-transition"
                    height="10.5cm"
                    width="10cm"
                ></v-img>
                
            </v-row>
            <v-row>
                <v-row id="rectangulo2">Nombre de usuario</v-row> 
            </v-row>
            <v-row>
                <v-row id="rectangulo2">Nombre de usuario</v-row> 
            </v-row>
            <v-row>
                <v-row id="rectangulo2">RUT</v-row> 
            </v-row>
            <v-row>
                <v-row id="rectangulo2">E-MAIL</v-row> 
            </v-row>
            <v-row>
                <v-row id="rectangulo2">SERVICIOS</v-row> 
            </v-row>
            <v-row>
                <v-row id="rectangulo2">CONTRASEÑA</v-row> 
            </v-row>

        </v-col>
    </v-container>
</template>

<script>
import BarraSupInicial from'@/components/BarraSupLoginE'
export default {
    components: { BarraSupInicial },
    
}
</script>

<style>

#rectanguloGrande {
  margin:auto;
  width: 800px; 
  height: 1100px; 
  border: 2px solid #555;
  background: rgb(146, 146, 146);
}
#rectangulo1 {
    margin-top: 30px;
    margin-left: 20px;
    width: 10cm; 
    height: 10cm; 
    border: 2px solid #555;
    background: rgb(119, 112, 112);
  }
#rectangulo2 {
    margin:auto;
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 50px;
    width: 50px; 
    height: 50px; 
    border: 2px solid #555;
    background: rgb(119, 112, 112);
  }
</style>