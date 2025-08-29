<template>
    <v-toolbar :elevation="4" title="Editar usuario">
        <v-toolbar-items>
            <v-btn to="/">Lista de usuarios</v-btn>
            <v-btn to="/register">Registrar usuario</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <div>
        <form @submit.prevent="updateUser">
            <v-text-field v-model="user.name" label="Nombre" />
            <v-text-field v-model="user.email" label="Email" />
            <v-btn type="submit">Actualizar</v-btn>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'EditUser',
    setup() {
        const route = useRoute();
        const user = ref({
            id: route.params.id,
            name: '',
            email: ''
        });

        const updateUser = () => {
            // Lógica para actualizar el usuario
        };

        return {
            user,
            updateUser
        };
    }
};
</script>
