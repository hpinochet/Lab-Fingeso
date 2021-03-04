<template>
    <!-- Corresponde a la barra superior-->
    <v-app-bar
      app
      color="primary" 
    >
      <!-- Corresponde a la imagen o logo-->
      <v-img
        alt="Logo"
        class="shrink mr-2"
        contain
        :src="require('../assets/Logo.png')"
        transition="scale-transition"
        width="60"
      />

      <!-- Espaciado-->
      <v-spacer></v-spacer>

      <!-- Corresponde a los botones-->
      <v-btn text>
        <router-link id="router" to="/proyectos-disponibles">Proyectos Disponibles</router-link>
      </v-btn>
      
      <v-spacer></v-spacer>


      <v-btn text>
        <router-link id="router" to="/about">Mis Proyectos</router-link>
      </v-btn>

      <v-btn text>
        <router-link id="router" to="/crearPro">Crear Proyecto</router-link>
      </v-btn>        
        
      <v-btn text>
        <router-link id="router" to="/profile">Perfil</router-link>
      </v-btn>    


    
    
    </v-app-bar>
    
</template>

<script>
  export default {
    data: () => ({
      registro: [
        { text: 'Registro cliente', to: '/registro-cliente'},
        { text: 'Registro especialista', to: '/registro-especialista'},
      ],
      inicioSecion: [
        { text: 'Iniciar sesion cliente', to: '/log-cliente'},
        { text: 'Iniciar sesion especialista', to: '/log-especialista'},
      ]
    }),
  }
</script>

<style>
  #router{
    color:rgb(255, 255, 255);
    text-decoration: none;
  }
  #router2{
    color:rgb(0, 0, 0);
    text-decoration: none;
  }
  main {background-color: #d7e3fc;}
</style>