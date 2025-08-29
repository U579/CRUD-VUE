<template>
    <!-- Barra superior con título dinámico según si se está editando o registrando -->
    <v-toolbar :elevation="4" :title="(user && user.id) ? 'Editar usuario' : 'Registrar usuario'">
        <v-toolbar-items>
            <!-- Botón para volver a la lista de usuarios -->
            <v-btn to="/">Lista de usuarios</v-btn>
            <!-- Botón para limpiar el formulario y registrar un nuevo usuario -->
            <v-btn to="/register" @click="deleteCurrentUser">Registrar usuario</v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <!-- Contenedor del formulario con estilo de hoja elevada -->
    <v-sheet :elevation="3" :height="200" :width="200" border rounded class="pa-3 ma-3">
        <!-- Formulario que previene el envío por defecto y ejecuta la acción correspondiente -->
        <form @submit.prevent="user.id ? updateUser() : registerUser()">
            <!-- Campo para el nombre del usuario -->
            <v-text-field v-model="user.name" type="text" label="Nombre" />
            <!-- Campo para el correo electrónico del usuario -->
            <v-text-field v-model="user.email" type="email" label="Correo" />
            <!-- Campo para el teléfono del usuario -->
            <v-text-field v-model="user.phone" type="number" label="Telefono" />
            <!-- Botón para enviar el formulario, cambia según si se edita o registra -->
            <v-btn type="submit">{{ user.id ? 'Actualizar' : 'Registrar' }}</v-btn>
        </form>
    </v-sheet>
</template>


<script setup>
// Importa el store global de Vuex
import { useStore } from 'vuex';
// Importa el router para navegación entre páginas
import { useRouter } from 'vue-router';

// Inicializa el router y el store
const router = useRouter();
const store = useStore();

// Obtiene el usuario actual desde el estado global
const current = store.state.currentUser;

// Crea una copia local del usuario para edición o registro
const user = {
    id: current ? current.id : null,
    name: current ? current.name : '',
    email: current ? current.email : '',
    phone: current ? current.phone : ''
};

// Función para actualizar un usuario existente
const updateUser = () => {
    store.dispatch('editUser', user); // Envía los datos al store
    router.push('/'); // Redirige a la lista de usuarios
};

// Función para registrar un nuevo usuario
const registerUser = () => {
    store.dispatch('addUser', user); // Agrega el usuario al store
    router.push('/'); // Redirige a la lista de usuarios
};

// Limpia el usuario actual y reinicia el formulario
const deleteCurrentUser = () => {
    store.state.currentUser = null; // Elimina el usuario del estado global
    user.id = null;
    user.name = '';
    user.email = '';
    user.phone = '';
};
</script>


<style scoped>
/* Estilo personalizado para el contenedor del formulario */
.pa-3 {
    padding: 12px !important;
    height: 50vh !important;
    width: 50% !important;
}
</style>
