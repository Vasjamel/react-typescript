import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {Todo} from './todo.model'

const App: React.FunctionComponent = () => {
  // const todos = [{id: 1, text: 'Finish the course'}, {id: 2, text: 'Sleep'}, {id: 3, text: 'Pes'}]

  const [todos, setTodos] = useState<Todo[]>([])
  const addTodo: (text: string) => void = (todoText) => {
    const todoObject = {
      id: todos.length + 1,
      text: todoText,
    }
    setTodos(prevTodos => [...prevTodos, todoObject])
  }

  const deleteTodoHandler = (todoId: number) => {
      setTodos(prevTodos => {
        return prevTodos.filter(todo => todo.id !== todoId)
      })
  }

  return <div className="App">
    <NewTodo addTodo={addTodo}/>
    <TodoList todos={todos} deleteTodo={deleteTodoHandler}/>
  </div>
};

export default App;
