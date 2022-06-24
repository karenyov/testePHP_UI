import axios from "axios";

export class EletrodomesticoService {

    static serverURL = 'http://localhost:8100/api';

    static getAllEletrodomesticos() {
        let dataURL = `${this.serverURL}/eletrodomesticos`;
        return axios.get(dataURL);
    }

    static getEletrodomestico(id) {
        let dataURL = `${this.serverURL}/eletrodomesticos/${id}`;
        return axios.get(dataURL);
    }

    static newEletrodomestico(eletrodomestico) {
        let dataURL = `${this.serverURL}/eletrodomesticos`;
        return axios.post(dataURL, eletrodomestico);
    }

    static updateEletrodomestico(eletrodomestico, id) {
        let dataURL = `${this.serverURL}/eletrodomesticos/${id}`;
        return axios.put(dataURL, eletrodomestico);
    }

    static deleteEletrodomestico(id) {
        let dataURL = `${this.serverURL}/eletrodomesticos/${id}`;
        return axios.delete(dataURL);
    }
}