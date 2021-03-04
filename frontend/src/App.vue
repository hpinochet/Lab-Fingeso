<template>
  <v-app>
    <!-- Corresponde a la barra superior-->

    
  
    <v-main>
      <router-view>

      </router-view>
    </v-main>
    
  </v-app>
</template>



<style lang="scss">
  #router{
    color:rgb(255, 255, 255);
    text-decoration: none;
  }
  #router2{
    color:rgb(0, 0, 0);
    text-decoration: none;
  }
  main {background-color: #d7e3fc;}
  
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

</style>