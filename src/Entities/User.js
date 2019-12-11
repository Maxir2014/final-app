import {Todo} from "./Todo";

export class User {
    constructor(data){
        this.name = data.name;
        this.lastName = data.lastName;
        this.email = data.email;
        this.thingsTodo = this.populateThings(data.thingsTodo);
    }

    getFullName(){
        return `${this.name} ${this.lastName}`
    };
    setToken(token){
        this.token = token;
    };

    populateThings(data){ return data.map( thing => new Todo(thing) ) };

    thingsPending = () => { return this.thingsTodo.map( (thing) => {
        if(thing.status === 'pending'){ return thing}
    })};



}