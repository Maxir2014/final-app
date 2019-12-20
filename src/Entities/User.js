import {Todo} from "./Todo";

export class User {
    constructor(data){
        this.id = data._id;
        this.name = data.name;
        this.lastName = data.lastName;
        this.email = data.email;
        this.token = "";
    }

    getFullName(){
        return `${this.name} ${this.lastName}`
    };
    setToken(token){
        this.token = token;
    };




}