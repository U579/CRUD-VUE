<template>
  <v-toolbar :elevation="4" :title="user.id ? 'Editar usuario' : 'Registrar usuario'">
    <v-toolbar-items>
      <v-btn to="/">Lista de usuarios</v-btn>
      <v-btn to="/register" @click="deleteCurrentUser">Registrar usuario</v-btn>
    </v-toolbar-items>
  </v-toolbar>

  <v-sheet :elevation="3" class="pa-3 ma-3" max-width="500">
    <v-form ref="form" v-model="formValid" @submit.prevent="handleSubmit">
      <v-text-field
        v-model="user.name"
        label="Nombre"
        :rules="[requiredRule]"
      />
      <v-text-field
        v-model="user.email"
        label="Correo"
        type="email"
        :rules="[requiredRule, emailRule]"
      />
      <v-text-field
        v-model="user.phone"
        label="Teléfono"
        type="tel"
        :rules="[requiredRule, phoneRule]"
      />
      <v-btn type="submit" :disabled="!formValid">
        {{ user.id ? 'Actualizar' : 'Registrar' }}
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const form = ref(null);
const formValid = ref(false);

// Datos del usuario (reactivos)
const current = store.state.currentUser;
const user = reactive({
  id: current?.id || null,
  name: current?.name || '',
  email: current?.email || '',
  phone: current?.phone || ''
});

// Reglas de validación
const requiredRule = v => !!v || 'Este campo es obligatorio';
const emailRule = v =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Correo inválido';
const phoneRule = v =>
  /^\d{7,15}$/.test(v) || 'Teléfono inválido (solo dígitos, mínimo 7)';

// Acción al enviar
const handleSubmit = () => {
  if (form.value.validate()) {
    if (user.id) {
      store.dispatch('editUser', { ...user });
    } else {
      store.dispatch('addUser', { ...user });
    }
    router.push('/');
  }
};

// Limpiar usuario actual
const deleteCurrentUser = () => {
  store.state.currentUser = null;
  user.id = null;
  user.name = '';
  user.email = '';
  user.phone = '';
};
</script>

<style scoped>
.pa-3 {
  padding: 12px !important;
  height: auto !important;
  width: 100% !important;
}
</style>
