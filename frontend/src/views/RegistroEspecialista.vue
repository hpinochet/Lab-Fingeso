<template>
    
    <v-container fluid>
        <BarraSupInicial />
        <v-row>
            <v-col>
                <h2 id="texto1">Registro</h2>
                <v-col id="rectangulo">
                    <v-row id= "fullName">
                        <v-text-field
                            v-model="newSpecialist.nombreTrabajador"
                            :rules="fullRules"
                            label="Ingrese su nombre completo..."
                            required
                        ></v-text-field>
                    </v-row>
                    <v-row id= "empresaName">
                        <v-text-field
                            v-model="newSpecialist.nombreEmpresa"
                            :rules="empresaRules"
                            label="Ingrese nombre de la empresa..."
                            required
                        ></v-text-field>
                    </v-row>
                    <v-row id= "rut">
                        <v-text-field type="number"
                            v-model="newSpecialist.rutEmpresa"
                            :rules="rutRules"
                            label="Ingrese rut de la empresa..."
                            required
                        ></v-text-field>
                    </v-row>
                    <v-row id= "email">
                        <v-text-field
                            v-model="newSpecialist.correoTrabajador"
                            :rules="emailRules"
                            label="Ingrese correo institucional..."
                            required
                        ></v-text-field>
                    </v-row>
                    <v-row id= "servicios">
                        <v-text-field
                            v-model="newSpecialist.servicioEmpresa"
                            :rules="serviciosRules"
                            label="Ingrese breve descripcion de los servicios..."
                            required
                        ></v-text-field>
                    </v-row>
                    <v-row id= "password">
                        <v-text-field
                            :type="show1 ? 'text' : 'password'"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            v-model="newSpecialist.contrasena"
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
                            height = "80"
                            width ="400"
                            @click="send"
                            >
                            Registrarse.
                        </v-btn>
                        <code>{{newSpecialist}}</code> 
                        <p class="message"> 
                            {{message}} 
                        </p>
                    </v-row>
                </v-col>
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
import BarraSupInicial from'@/components/BarraSupInicial'
export default {
    components: { BarraSupInicial },
    data: () => ({
        valid: false,
        rut: '',
        rutRules: [
        v => !!v || 'Rut is required'],
        valid: false,
        email: '',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid', 
        ],
        password: '',
        passRules: [
            v => v.length >= 8 || 'Min 8 characters',  
            v => !!v || 'Password is required'
        ],
        message:'', 
        newSpecialist:{ 
        }
    }), 
    methods:{ 
        send:async function(){ 
        this.message = ''; 
        if (this.newSpecialist.nombreTrabajador == ''){ 
            this.message = 'Debes ingresar un nombre' 
            return false 
        } 
        try { 
            await this.$http.post('/api/especialistas', this.newSpecialist); 
            this.message = `Se creó un nuevo contacto`; 
            this.newSpecialist = {}; 
        } catch (error) { 
            console.log('error', error) 
            this.message = 'Ocurrió un error' 
        } 
        } 
    } 
}
</script>

<style>
#texto1{
    font-style: normal;
    font-size: 30px;
    margin-top: 17px;
    margin-left: 60px;
    margin-right: 0px;
    color: rgb(68, 57, 57); 
}
#rectangulo {
    margin-top: 15px;
    margin-right: 400px;
    margin-left: 60px;
    width: 800px; 
    height: 600px; 
    border: 2px solid #555;
    background: #bfd3fc;
}
#fullName{
    margin-top: 10px;
    margin-left: 10px;
    width: 750px; 
    height: 50px; 
    background: #ffffff;
    border: 1px solid rgb(0, 0, 0);
}
#empresaName{
    margin-top: 25px;
    margin-left: 10px;
    width: 750px; 
    height: 50px; 
    background: #ffffff;
    border: 1px solid rgb(0, 0, 0);
}
#rut{
    margin-top: 25px;
    margin-left: 10px;
    width: 750px; 
    height: 50px; 
    background: #ffffff;
    border: 1px solid rgb(0, 0, 0);
}
#email{
    margin-top: 25px;
    margin-left: 10px;
    width: 750px; 
    height: 50px; 
    background: #ffffff;
    border: 1px solid rgb(0, 0, 0);
}
#servicios{
    margin-top: 25px;
    margin-left: 10px;
    width: 750px; 
    height: 50px; 
    background: #ffffff;
    border: 1px solid rgb(0, 0, 0);
}
#password{
    margin-top: 25px;
    margin-left: 10px;
    width: 750px; 
    height: 50px; 
    background: #ffffff;
    border: 1px solid rgb(0, 0, 0);
}
</style>