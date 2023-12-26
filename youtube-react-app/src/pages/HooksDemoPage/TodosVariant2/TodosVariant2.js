import React, { useEffect, useReducer, useRef } from 'react';
import todoReducer from '../../../reducers/todoReducer';

const TodosVariant2 = () => {
  // create a ref for the input field to capture the entered input in a fn comp
  const todoInput = useRef('');
  console.log(todoInput);

  const [todoList, todoDispatch] = useReducer(todoReducer);
  console.log(todoList); // get the state data from reducer here
  console.log(todoDispatch); // fn to update the state data
  // dispatch must be called with action.

  // useEffect hook called onload itself
  useEffect(() => {
    // ideal place for making rest api calls
    // using fetch get the data from backend
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((res) => {
        return res.json();
      })
      .then((todoItems) => {
        console.log(todoItems);
        todoDispatch({
          type: 'LIST_TODOS',
          payload: todoItems
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddTodo = () => {
    console.log(todoInput.current.value); // entered input
    todoDispatch({
      type: 'ADD_TODO',
      payload: {
        id: Math.floor(Math.random() * 10000),
        title: todoInput.current.value,
        isCompleted: false
      }
    });
  };

  const handleCheck = (todo) => {
    todoDispatch({
      type: 'CHECK_TODO',
      payload: todo
    });
  };

  const handleEdit = (todoId) => {
    todoInput.current.value = todoList[todoId - 1].title;
  };

  const handleDelete = (todoId) => {
    todoDispatch({
      type: 'DELETE_TODO',
      payload: {
        id: todoId,
        isCompleted: false
      }
    });
  };

  return (
    <div style={{ background: '#00dd00', padding: '20px' }}>
      <h3>Todos App with useReducer</h3>
      <div className='row'>
        <div className='col-auto'>
          <input type='text' className='form-control' ref={todoInput} />
        </div>
        <div className='col-auto'>
          <button type='button' className='btn btn-primary' onClick={handleAddTodo}>
            ADD TODO
          </button>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col-md-8'>
          <div className='card'>
            <ul className='list-group list-group-flush'>
              {todoList?.map((todo) => {
                return (
                  <li className='list-group-item' key={todo.id}>
                    <input
                      type='checkbox'
                      className='me-2'
                      onClick={handleCheck.bind(this, todo)}
                    />
                    <span className={todo.isChecked ? 'text-decoration-line-through' : ''}>
                      {todo.title}
                    </span>
                    <button
                      type='button'
                      className='ms-2 btn btn-primary'
                      onClick={() => handleEdit(todo.id)}>
                      Edit
                    </button>
                    <button className='ms-2 btn btn-danger' onClick={() => handleDelete(todo.id)}>
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosVariant2;
