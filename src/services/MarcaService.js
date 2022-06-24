import axios from "axios";

export class MarcaService {

    static serverURL = 'http://localhost:8100/api';

    static getAllMarcas() {
        let dataURL = `${this.serverURL}/marcas`;
        return axios.get(dataURL);
    }

    static getMarca(id) {
        let dataURL = `${this.serverURL}/marcas/${id}`;
        return axios.get(dataURL);
    }

    static newMarca(marca) {
        let dataURL = `${this.serverURL}/marcas`;
        return axios.post(dataURL, marca);
    }

    static updateMarca(marca, id) {
        let dataURL = `${this.serverURL}/marcas/${id}`;
        return axios.put(dataURL, marca);
    }

    static deleteMarca(id) {
        let dataURL = `${this.serverURL}/marcas/${id}`;
        return axios.delete(dataURL);
    }
}