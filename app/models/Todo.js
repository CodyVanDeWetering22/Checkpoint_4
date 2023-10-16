export class Todo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed || false
        this.description = data.description


    }



    get todoCardTemplate() {
        return ` 


        <input ${this.completed ? 'checked' : ''} onchange="app.TodoController.checkedBox('${this.id}')" type="checkbox">
            <i onclick="app.TodoController.deleteTodo('${this.id}')" type="button" class="mdi mdi-delete"><span>
                <label for="description">${this.description}</label>
                </span></i>
    `
    }





}


