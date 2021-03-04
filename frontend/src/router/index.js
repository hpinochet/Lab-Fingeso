import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import('../views/viewsNavbar1/Home.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/viewsNavbar1/About.vue')
    }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: function () {
      return import('../views/viewsNavbar1/Contacto.vue')
    }
  },
  {
    path: '/log-cliente',
    name: 'LogCliente',
    component: function () {
      return import('../views/LoginCliente.vue')
    }
  },
  {
    path: '/log-especialista',
    name: 'LogEspecialista',
    component: function () {
      return import('../views/LoginEspecialista.vue')
    }
  },
  {
    path: '/log-super',
    name: 'LogSuper',
    component: function () {
      return import('../views/LoginSuper.vue')
    }
  },
  {
    path: '/registro-cliente',
    name: 'RegistroCliente',
    component: function () {
      return import('../views/RegistroCliente.vue')
    }
  },
  {
    path: '/registro-especialista',
    name: 'RegistroEspecialista',
    component: function () {
      return import('../views/RegistroEspecialista.vue')
    }
  },
  {
    path: '/proyectos-disponibles',
    name: 'ProyectosDisponibles',
    component: function () {
      return import('../views/viewsNavbar2/proyectosDis.vue')
    }
  },
  {
    path: '/proyectos-disponiblesEsp',
    name: 'ProyectosDisponiblesEsp',
    component: function () {
      return import('../views/viewsNavbar2/proyectosDisEsp.vue')
    }
  },
  {
    path: '/postulacion',
    name: 'postularProyecto',
    component: function () {
      return import('../views/viewsNavbar2/postularProyecto.vue')
    }
  },
  {
    path: '/crearPro',
    name: 'crearProyecto',
    component: function () {
      return import('../views/viewsNavbar2/crearProyecto.vue')
    }
  },
  {
    path: '/proyectoDetails/:id',
    name: 'detallesProyecto',
    component: function () {
      return import('../views/viewsNavbar2/detallesProyecto.vue')
    }
  },
  {
    path: '/proyectoDetailsEsp/:id',
    name: 'detallesProyectoEsp',
    component: function () {
      return import('../views/viewsNavbar2/detallesProyectoEsp.vue')
    }
  },
  {
    path: '/profile',
    name: 'perfil',
    component: function () {
      return import('../views/viewsNavbar2/profile.vue')
    }
  },
  {
    path: '/profileEsp',
    name: 'perfilEsp',
    component: function () {
      return import('../views/viewsNavbar2/profileEsp.vue')
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
