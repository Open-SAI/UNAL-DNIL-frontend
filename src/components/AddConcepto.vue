<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Agregar Registro</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="concepto.titulo"
          :rules="[(v) => !!v || 'Se requiere título ...']"
          label="Título"
          required
        ></v-text-field>

        <v-textarea
          v-model="concepto.descripcion"
          :rules="[(v) => !!v || 'Se requiere descripcion...']"
          label="Descripción"
          required
          auto-grow
          counter
        ></v-textarea>
      </v-form>

<!--      <v-btn color="primary" class="mt-3" @click="saveConcepto">Guardar</v-btn>-->
      <v-btn color="primary" class="mt-3" @click="validate">Guardar</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          ¡Guardado exitosamente!
        </v-card-title>

        <v-card-subtitle>
          Click para agregar nuevo registro...
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="newConcepto">Agregar</v-btn> 
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import ConceptoDataService from "../services/ConceptoDataService";

export default {
  name: "add-concepto",
  data() {
    return {
      concepto: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveConcepto() {     
      var data = {
        titulo: this.concepto.titulo,
        descripcion: this.concepto.descripcion,
      };

      ConceptoDataService.create(data)
        .then((response) => {
          this.concepto.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    
    validate() {
       if (this.$refs.form.validate())
          this.saveConcepto();
    },

    newConcepto() {
      this.submitted = false;
      this.concepto = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 500px;
}
</style>

