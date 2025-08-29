<template>
    <v-toolbar :elevation="4" title="Gestión de Usuarios">
        <v-toolbar-items>
            <v-btn to="/">Lista de usuarios</v-btn>
            <v-btn to="/register">Registrar usuario</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-container fluid>
        <v-row dense>
            <v-col v-for="(item, index) in items" :key="index" cols="3" class="pa-3">
                <v-card class="pa-3" outlined>
                    <v-card-title class="text-h6">{{ item.nombre }}</v-card-title>
                    <v-card-subtitle>{{ item.correo }}</v-card-subtitle>
                    <v-card-text>{{ item.telefono }}</v-card-text>
                    <v-card-actions>
                        <v-btn @click="editItem(item.id)">Editar</v-btn>
                        <v-btn @click="deleteItem(item.id)">Eliminar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, nombre: 'Ana Torres', correo: 'ana.torres@example.com', telefono: '555-123-4567' },
                { id: 2, nombre: 'Luis Gómez', correo: 'luis.gomez@example.com', telefono: '555-234-5678' },
                { id: 3, nombre: 'María López', correo: 'maria.lopez@example.com', telefono: '555-345-6789' },
                { id: 4, nombre: 'Carlos Ruiz', correo: 'carlos.ruiz@example.com', telefono: '555-456-7890' },
                { id: 5, nombre: 'Sofía Martínez', correo: 'sofia.martinez@example.com', telefono: '555-567-8901' },
                { id: 6, nombre: 'Jorge Herrera', correo: 'jorge.herrera@example.com', telefono: '555-678-9012' },
                { id: 7, nombre: 'Valeria Castro', correo: 'valeria.castro@example.com', telefono: '555-789-0123' },
                { id: 8, nombre: 'Diego Navarro', correo: 'diego.navarro@example.com', telefono: '555-890-1234' },
                { id: 9, nombre: 'Fernanda Ríos', correo: 'fernanda.rios@example.com', telefono: '555-901-2345' },
                { id: 10, nombre: 'Ricardo Salas', correo: 'ricardo.salas@example.com', telefono: '555-012-3456' },
                { id: 11, nombre: 'Laura Mendoza', correo: 'laura.mendoza@example.com', telefono: '555-111-2222' },
                { id: 12, nombre: 'Andrés Vega', correo: 'andres.vega@example.com', telefono: '555-222-3333' },
                { id: 13, nombre: 'Camila Ortiz', correo: 'camila.ortiz@example.com', telefono: '555-333-4444' },
                { id: 14, nombre: 'Héctor Ramírez', correo: 'hector.ramirez@example.com', telefono: '555-444-5555' },
                { id: 15, nombre: 'Paola Jiménez', correo: 'paola.jimenez@example.com', telefono: '555-555-6666' },
                { id: 16, nombre: 'Emilio Paredes', correo: 'emilio.paredes@example.com', telefono: '555-666-7777' },
                { id: 17, nombre: 'Natalia León', correo: 'natalia.leon@example.com', telefono: '555-777-8888' },
                { id: 18, nombre: 'Sebastián Cruz', correo: 'sebastian.cruz@example.com', telefono: '555-888-9999' },
                { id: 19, nombre: 'Isabel Duarte', correo: 'isabel.duarte@example.com', telefono: '555-999-0000' },
                { id: 20, nombre: 'Tomás Aguilar', correo: 'tomas.aguilar@example.com', telefono: '555-000-1111' }
            ]

        }
    },
    methods: {
        editItem(id) {
            this.$router.push(`/edit/${id}`);
        },
        deleteItem(id) {
            alert(`Delete item with id: ${id}`);
        }
    }
}
</script>

<style scoped>
.v-card {
    width: 100%;
}
</style>
