<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="title" label="Buscar por Título" @keyup.enter="searchTitle"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchTitle" >
        Buscar
      </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Registros</v-card-title>

        <v-data-table
          :headers="headers"
          :items="conceptos"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editConcepto(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteConcepto(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

        <v-card-actions v-if="conceptos.length > 0">
          <v-btn small color="error" @click="removeAllConceptos">
            ¡Borrar todo!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ConceptoDataService from "../services/ConceptoDataService";
export default {
  name: "concepto-list",
  data() {
    return {
      conceptos: [],
      title: "",
      headers: [
        { text: "Título", align: "start", sortable: false, value: "title" },
        { text: "Descripción", value: "description", sortable: false },
        { text: "Estado", value: "status", sortable: false },
        { text: "Acciones", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    retrieveConceptos() {
      ConceptoDataService.getAll()
        .then((response) => {
          this.conceptos = response.data.map(this.getDisplayConcepto);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveConceptos();
    },

    removeAllConceptos() {
      ConceptoDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      ConceptoDataService.findByTitle(this.title)
        .then((response) => {
          this.conceptos = response.data.map(this.getDisplayConcepto);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editConcepto(id) {
      this.$router.push({ name: "concepto-details", params: { id: id } });
    },

    deleteConcepto(id) {
      ConceptoDataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayConcepto(concepto) {
      return {
        id: concepto.id,
        title: concepto.titulo.length > 30 ? concepto.titulo.substr(0, 30) + "..." : concepto.titulo,
        description: concepto.descripcion.length > 30 ? concepto.descripcion.substr(0, 30) + "..." : concepto.descripcion,
        status: concepto.published ? "Publicado" : "Pendiente",
      };
    },
  },
  mounted() {
    this.retrieveConceptos();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>

