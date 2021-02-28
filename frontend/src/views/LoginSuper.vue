<template>
  <v-form v-model="valid">
    <v-container fluid >
        <v-row>
            <v-col id="inicio">
                <h2 id="texto1">Inicio</h2>
            </v-col>
            <v-col id="cliente">
                <h1 id="texto2">Inicio Sesión</h1>
            </v-col>
        </v-row>
        <v-row id="rectangulo">
        <v-col>
            <v-row id= "email">
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>
            </v-row>
            <v-row id= "password">
                <v-text-field
                    :type="show1 ? 'text' : 'password'"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="password"
                    :rules="passRules"
                    label="Password"
                    @click:append="show1 = !show1"
                    required
                ></v-text-field>
            </v-row>
            <v-row>
                <v-btn
                    class=" mt-10 ml-15"
                    color = "success"
                    width ="200"
                    @click="submit"
                    >
                    Iniciar sesión.
                </v-btn>
            </v-row>
            <v-row>
                <a 
                    class="mt-4 ml-16"
                    href="#"
                >Recuperar contraseña</a>
            </v-row>
        </v-col>
        </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
        data: () => ({
        valid: false,
        show1:false,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passRules: [
            v => v.length >= 8 || 'Min 8 characters',
            v => !!v || 'Password is required'
      ]
    })
  }
</script>

<style>
#inicio{
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 300px;
    width: 10px; 
    height: 100px; 
    border: 2px solid #555; 
    background: #ffffff;
    -moz-border-radius: 0 50px 50px 0;
    -webkit-border-radius: 0 50px 50px 0;
    border-radius: 0 50px 50px 0; 
}
#cliente{
    margin-top: 50px;
    margin-right: 860px;
}
#texto1{
    font-style: normal;
    font-size: 25px;
    margin-top: 17px;
    margin-right: 0px;
    margin-left: 250px;
    color: rgb(173, 16, 16); 
}
#texto2{
    font-style: normal;
    font-size: 50px;
    color:#555; 
}
#email{
    margin-top: 80px;
    margin-left: 50px;
    margin-right: 50px;
    width: 460px; 
    height: 60px; 
    background: #ffffff;
    border: 1px solid rgb(0, 0, 0);
}
#password{
    margin-top: 90px;
    margin-left: 50px;
    margin-right: 50px;
    width: 460px; 
    height: 60px; 
    background: #ffffff;
    border: 1px solid rgb(0, 0, 0);
}
#rectangulo {
    margin-top: 0px;
    margin-left: 600px;
    width: 600px; 
    height: 550px; 
    border: 2px solid #555;
    background: #bfd3fc;
  }

</style>