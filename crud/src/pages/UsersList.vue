<template>
    <v-toolbar :elevation="4" title="Gestión de Usuarios">
        <v-toolbar-items>
            <v-btn to="/">Lista de usuarios</v-btn>
            <v-btn to="/register">Registrar usuario</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-container fluid>
        <v-row dense>
            <template v-if="users.length > 0">
                <v-col v-for="(user, index) in users" :key="index" cols="3" class="pa-3">
                    <v-card class="pa-3" outlined>
                        <v-card-title class="text-h6">{{ user.name }}</v-card-title>
                        <v-card-subtitle>{{ user.email }}</v-card-subtitle>
                        <v-card-text>{{ user.phone }}</v-card-text>
                        <v-card-actions>
                            <v-btn @click="editItem(user)">Editar</v-btn>
                            <v-btn @click="deleteItem(user.id)">Eliminar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </template>
            <template v-else>
                <v-col cols="12" class="text-center">
                    <v-alert text="No hay usuarios registrados."></v-alert>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const store = useStore();
    const router = useRouter();

    const users = computed(() => store.getters.allUsers);

    const editItem = (user) => {
        store.state.currentUser = user;
        router.push(`/edit`);
    };

    const deleteItem = (id) => {
        store.dispatch('deleteUser', id);
    };
</script>

<style scoped>
.v-card {
    width: 100%;
}
</style>
