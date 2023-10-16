import { Todo } from './models/Todo.js'
import { Value } from './models/Value.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {
  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null
  values = loadState('values', [Value])
  socketData = []



  /** @type {Todo[]} */
  todos = []



  /** @type {Todo[]} */
  myTodos = []

  /** @type {import('./models/Image.js').Image | null} */
  image = null



  /** @type {import('./models/Image.js').Image | null} */
  quote = null



  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})