<template>
  <div v-if="currentConcepto" class="edit-form py-3">
    <p class="headline">Editar Registro</p>

    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="currentConcepto.titulo"
        :rules="[(v) => !!v || 'Titulo es requerido...']"
        label="Título"
        required
      ></v-text-field>

      <v-textarea
        v-model="currentConcepto.descripcion"
        :rules="[(v) => !!v || 'Se requiere Descripción']"
        label="Descripción"
	auto-grow
	counter
        required
      ></v-textarea>

      <label><strong>Status:</strong></label>
      {{ currentConcepto.published ? "Publicado" : "Pendiente" }}

      <v-divider class="my-5"></v-divider>

      <v-btn v-if="currentConcepto.published"
        @click="updatePublished(false)"
        color="primary" small class="mr-2"
      >
        Despublicar
      </v-btn>

      <v-btn v-else
        @click="updatePublished(true)"
        color="primary" small class="mr-2"
      >
        Publicar
      </v-btn>

      <v-btn color="error" small class="mr-2" @click="deleteConcepto">
        Borrar
      </v-btn>

      <v-btn color="success" small @click="updateConcepto">
        Actualizar
      </v-btn>
    </v-form>

    <p class="mt-3">{{ message }}</p>
  </div>

  <div v-else>
    <p>Haga click en un registro...</p>
  </div>
</template>

<script>
import ConceptoDataService from "../services/ConceptoDataService";

export default {
  name: "concepto",
  data() {
    return {
      currentConcepto: null,
      message: "",
    };
  },
  methods: {
    getConcepto(id) {
      ConceptoDataService.get(id)
        .then((response) => {
          this.currentConcepto = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentConcepto.id,
        title: this.currentConcepto.titulo,
        description: this.currentConcepto.descripcion,
        published: status,
      };

      ConceptoDataService.update(this.currentConcepto.id, data)
        .then((response) => {
          this.currentConcepto.published = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateConcepto() {
      ConceptoDataService.update(this.currentConcepto.id, this.currentConcepto)
        .then((response) => {
          console.log(response.data);
          this.message = "¡Se actualizó el registro!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteConcepto() {
      ConceptoDataService.delete(this.currentConcepto.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "concepto" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getConcepto(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 500px;
  margin: auto;
}
</style>

