<template>
    <v-toolbar :elevation="4" title="Editar usuario">
        <v-toolbar-items>
            <v-btn to="/">Lista de usuarios</v-btn>
            <v-btn to="/register">Registrar usuario</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-sheet :elevation="3" :height="200" :width="200" border rounded class="pa-3 ma-3">
        <form @submit.prevent="user.id ? updateUser() : registerUser()">
            <v-text-field v-model="user.name" label="Nombre" />
            <v-text-field v-model="user.email" label="Email" />
            <v-text-field v-model="user.phone" label="Telefono" />
            <v-btn type="submit">{{ user.id ? 'Actualizar' : 'Registrar' }}</v-btn>
        </form>
    </v-sheet>
</template>

<script setup>
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const store = useStore();

    const current = store.state.currentUser;

    const user = {
        id: current ? current.id : null,
        name: current ? current.name : '',
        email: current ? current.email : '',
        phone: current ? current.phone : ''
    };

    const updateUser = () => {
        store.dispatch('editUser', user);
        router.push('/');
    };

    const registerUser = () => {
        store.dispatch('addUser', user);
        router.push('/');
    };
</script>

<style scoped>
    .pa-3 {
        padding: 12px !important;
        height: 50vh !important;
        width: 50% !important;
    }
</style>