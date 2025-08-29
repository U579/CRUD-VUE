<template>
    <v-toolbar :elevation="4" title="Registrar nuevo usuario">
        <v-toolbar-items>
            <v-btn to="/">Lista de usuarios</v-btn>
            <v-btn to="/register">Registrar usuario</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-sheet :elevation="3" :height="200" :width="200" border rounded class="pa-3 ma-3">
        <form @submit.prevent="registerUser">
            <v-text-field v-model="user.name" label="Nombre" />
            <v-text-field v-model="user.email" label="Correo" />
            <v-text-field v-model="user.number" label="Telefono" />
            <v-btn type="submit">Registrar</v-btn>
        </form>
    </v-sheet>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'RegisterUser',
    setup() {
        const user = ref({
            name: '',
            email: ''
        });

        const registerUser = () => {
            // Lógica para registrar el usuario
        };

        return {
            user,
            registerUser
        };
    }
};
</script>


<style scoped>
.pa-3 {
    padding: 12px !important;
    height: 50vh !important;
    width: 50% !important;
}
</style>