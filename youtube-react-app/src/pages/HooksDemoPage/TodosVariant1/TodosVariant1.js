import React, { useRef, useState } from 'react';

const TodosVariant1 = () => {
  // create a ref for the input field to capture the entered input in a fn comp.
  const todoInput = useRef('');
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'Complete task 1'
    },
    {
      id: 2,
      title: 'Complete task 2'
    }
  ]);

  console.log(todoInput);

  const handleAddTodo = () => {
    console.log(todoInput.current.value); // entered input
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        title: todoInput.current.value
      }
    ]);
  };

  return (
    <div style={{ background: '#ddd', padding: '20px' }}>
      <h3>Todos App</h3>
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
        <div className='col-md-4'>
          <div className='card'>
            <ul className='list-group list-group-flush'>
              {todoList?.map((todo) => {
                return (
                  <li className='list-group-item' key={todo.id}>
                    {todo.id} {todo.title}
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

export default TodosVariant1;
