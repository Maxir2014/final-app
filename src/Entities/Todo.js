import moment from "moment";

export class Todo {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.date = moment(data.date).format('DD/MM/YYYY');
        this.status = data.status
    }
}
