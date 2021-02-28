<template>
  <v-app>
    <!-- Corresponde a la barra superior-->
    <v-app-bar
      app
      color="primary"
      dark
    >
    <!-- Corresponde a la imagen o logo-->
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="./assets/Logo.png"
          transition="scale-transition"
          width="60"
        />
      </div>

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
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Iniciar sesión
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <v-row>
                    <v-btn text>
                    <router-link id="router2" to="/log-cliente">Iniciar sesion cliente</router-link>
                </v-btn>

                </v-row>
                <v-row>
                <v-btn text>
                  <router-link id="router2" to="/log-especialista">Iniciar sesion especialista</router-link>
                </v-btn>

                </v-row>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- Corresponde a los menu INICIAR SESION-->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Registrarse
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <v-row>
                  <v-btn text>
                    <router-link id="router2" to="/registro-cliente">Registro cliente</router-link>
                  </v-btn>
                </v-row>
                <v-row>
                  <v-btn text>
                    <router-link id="router2" to="/registro-especialista">Registro especialista</router-link>
                  </v-btn>
                </v-row>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    </v-app-bar>
    
  
    <v-main>
      <router-view>

      </router-view>
    </v-main>
    
  </v-app>
</template>

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