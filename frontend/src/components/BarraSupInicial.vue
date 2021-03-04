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
        <router-link id="router" to="/">Inicio</router-link>
      </v-btn>
      
      <v-btn text>
        <router-link id="router" to="/about">¿Quiénes somos?</router-link>
      </v-btn>
        
      <v-btn text>
        <router-link id="router" to="/contacto">Contacto</router-link>
      </v-btn>    

      <!-- Corresponde a los menus desplegables-->
        <!-- Corresponde a los menu INICIAR SESION-->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              color = "white"            
              v-bind="attrs"
              v-on="on"
            >
              Iniciar sesión
            </v-btn>
          </template>      
          <v-list>
            <v-list-item
              v-for = "(item, i) in inicioSecion"
              :key = "i"
            >
              <v-list-item-title>
                <v-btn text>
                    <router-link id='router2' :to="item.to" >{{item.text}}</router-link>
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        
        <!-- Corresponde a los menu INICIAR SESION-->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              color="white"
              v-bind="attrs"
              v-on="on"
            >
              Registrarse
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for = "(item, i) in registro"
              :key = "i"
            >
              <v-list-item-title>
                <v-btn text>
                    <router-link id='router2' :to="item.to" >{{item.text}}</router-link>
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    
    
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