import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"
import { Todo } from "../models/Todo.js";
import { Pop } from "../utils/Pop.js";

class TodoService {
    async deleteTodo(todoId) {
        const res = await api.delete(`api/todos/${todoId}`)
        console.log('res data', res.data);
        AppState.todos = AppState.todos.filter((todo) => todo.id != todoId)


    }
    async createTodo(todoFormData) {
        const res = await api.post('api/todos', todoFormData)
        console.log('created todo', res.data);
        const newTodo = new Todo(res.data)
        AppState.todos.push(newTodo)
        AppState.emit('todos')








    }
    async getTodos() {
        const res = await api.get('api/todos')
        const newTodos = res.data.map(todoPOJO => new Todo(todoPOJO))
        AppState.todos = newTodos



    }

    async checkedBox(todoId) {
        const todoIndex = AppState.myTodos.findIndex(todo => todo.id == todoId)

        const foundTodo = AppState.myTodos[todoIndex]



        const todoData = {

            completed: !foundTodo.completed


        }



        const res = await api.put(`api/todos/${todoId}`, todoIndex)
        console.log('updated', res.data);
        const newBox = new Todo(res.data)

        AppState.todos.splice(todoIndex, 1, newBox)
        AppState.emit('todos')

    }

}

export const todoService = new TodoService() 