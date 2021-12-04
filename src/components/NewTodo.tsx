import React, {useRef} from 'react';

import './NewTodo.css'

type NewTodoProps = { addTodo: (text: string) => void }

const NewTodo: React.FC<NewTodoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value
    props.addTodo(enteredText);
    textInputRef.current!.value = '';
  }

  return <form onSubmit={submitHandler}>
    <div className='form-control'>
      <label htmlFor="todo-text">Todo text</label>
      <input type="text" id="todo-text" ref={textInputRef}/>
    </div>
    <button type="submit">Submit</button>
  </form>
}

export default NewTodo
