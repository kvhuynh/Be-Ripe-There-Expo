import axios from "axios";

import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:8080/`;

const http = axios.create({

    baseURL: uri
});

export const testBackEnd = async () => {

    console.log(uri);
    const res = await http.get("/");
    return res.data;
}

