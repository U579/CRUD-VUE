<template>
    <!-- Barra superior con título fijo -->
    <v-toolbar :elevation="4" title="Gestión de Usuarios">
        <v-toolbar-items>
            <!-- Botón para navegar a la lista de usuarios -->
            <v-btn to="/">Lista de usuarios</v-btn>
            <!-- Botón para ir al formulario de registro y limpiar el usuario actual -->
            <v-btn to="/register" @click="store.state.currentUser = null">Registrar usuario</v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <!-- Contenedor principal con diseño fluido -->
    <v-container fluid>
        <v-row dense>
            <!-- Si hay usuarios registrados, se muestran en tarjetas -->
            <template v-if="users.length > 0">
                <v-col v-for="(user, index) in users" :key="index" cols="3" class="pa-3">
                    <!-- Tarjeta individual para cada usuario -->
                    <v-card class="pa-3" outlined>
                        <v-card-title class="text-h6">{{ user.name }}</v-card-title>
                        <v-card-subtitle>{{ user.email }}</v-card-subtitle>
                        <v-card-text>{{ user.phone }}</v-card-text>
                        <v-card-actions>
                            <!-- Botón para editar el usuario -->
                            <v-btn @click="editItem(user)">Editar</v-btn>
                            <!-- Botón para eliminar el usuario -->
                            <v-btn @click="deleteItem(user.id)">Eliminar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </template>

            <!-- Si no hay usuarios, se muestra un mensaje informativo -->
            <template v-else>
                <v-col cols="12" class="text-center">
                    <v-alert text="No hay usuarios registrados."></v-alert>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>

<script setup>
// Importa funciones reactivas y herramientas de Vue
import { computed } from 'vue';
import { useStore } from 'vuex';       // Acceso al estado global
import { useRouter } from 'vue-router'; // Navegación entre rutas

const store = useStore();   // Instancia del store Vuex
const router = useRouter(); // Instancia del router

// Obtiene la lista de usuarios desde el getter del store
const users = computed(() => store.getters.allUsers);

// Función para editar un usuario: guarda el usuario actual y navega a la vista de edición
const editItem = (user) => {
    store.state.currentUser = user;
    router.push(`/edit`);
};

// Función para eliminar un usuario por su ID
const deleteItem = (id) => {
    store.dispatch('deleteUser', id);
};
</script>

<style scoped>
/* Asegura que las tarjetas ocupen todo el ancho de su columna */
.v-card {
    width: 100%;
}
</style>
