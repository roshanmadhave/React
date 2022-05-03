export class CreateTodo {
    constructor(createTodo) {
        this.createTodo = createTodo;
    }
    format() {
        return `<p>Todo id : ${this.createTodo.id}</p> <p>Title :  ${this.createTodo.title.toUpperCase()}</p> <p>body : ${this.createTodo.body}</p>`;
    }
}
