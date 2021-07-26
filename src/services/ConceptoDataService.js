import http from "../http-common";

class ConceptoDataService {
  getAll() {
    return http.get("/concepto");
  }

  get(id) {
    return http.get(`/concepto/${id}`);
  }

  create(data) {
    return http.post("/concepto", data);
  }

  update(id, data) {
    return http.put(`/concepto/${id}`, data);
  }

  delete(id) {
    return http.delete(`/concepto/${id}`);
  }

  deleteAll() {
    return http.delete(`/concepto`);
  }

  findByTitle(title) {
    return http.get(`/concepto?titulo=${title}`);
  }
}

export default new ConceptoDataService();
