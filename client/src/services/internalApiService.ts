import axios from "axios";

import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest!.debuggerHost!.split(':').shift()}:8080/api`;

const http = axios.create({

    baseURL: uri
});

export const testBackEnd = async () => {

    console.log(uri);
    const res = await http.get("/");
    return res.data;
}

export const testRegister = async () => {
    const data = {
        firstName: "Kevin",
        lastName: "Huynh",
        email: "kvhuynh820@gmail.com",
        password: "test",
        confirmPassword: "test"
    }
    const res = await http.post("/register", data)
    return res.data;
}

export const createUser = async (userData: object) => {
    console.log(userData);
}