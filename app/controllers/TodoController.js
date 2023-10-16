import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { Todo } from "../models/Todo.js";
import { api } from "../services/AxiosService.js";

function _drawTodos() {
    const todos = AppState.todos
    console.log('todos in draw:', todos);
    let content = ''

    todos.forEach(todo => content += todo.todoCardTemplate)
    console.log(todos.length);

    const completedBox = todos.filter(todo => todo.completed == false)
    setHTML('count', `${completedBox.length}`)

    setHTML('todo', content)



}

function _drawTime() {
    const times = new Date().toLocaleTimeString()

    setHTML('time', times)
}




export class TodoController {
    constructor() {


        setInterval(_drawTime, 1000)
        AppState.on('account', this.getTodo)
        AppState.on('todos', _drawTodos)

    }

    async getTodo() {
        try {
            await todoService.getTodos()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }


    async createTodo(event) {
        try {
            event.preventDefault()
            console.log('submitted');
            const form = event.target
            const todoFormData = getFormData(form)
            console.log('formdata', todoFormData);
            await todoService.createTodo(todoFormData)


        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }


    async deleteTodo(todoId) {
        try {
            const yes = await Pop.confirm('are you sure')
            if (!yes) {
                return
            }

            await todoService.deleteTodo(todoId)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }



    async checkedBox(todoId) {
        try {

            console.log('changed', todoId);
            await todoService.checkedBox(todoId)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }



}