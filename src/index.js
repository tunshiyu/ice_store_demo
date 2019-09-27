import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import stores from './stores';
import { func } from 'prop-types';

function Todo() {
  // 拿到store库
  const todos = stores.useStore('todos');
  const { refresh, add, remove, toggle } = todos;
  const { dataSource } = stores.getState('todos');

  async function fetchData() {
    const data = await refresh();
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function onAdd(name) {
    add({ name });
  }

  function onRemove(index) {
    remove(index);
  }

  function onCheck(index) {
    toggle(index);
  }

  const noTaskView = <span>no task</span>;
  const loadingView = <span>loading...</span>;
  const taskView = dataSource.length ? (
    <ul>
      {dataSource.map(({ name, done = false }, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={done}
              onChange={() => onCheck(index)}
            />
            {done ? <s>{name}</s> : <span>{name}</span>}
          </label>
          <button onClick={() => onRemove(index)}>-</button>
        </li>
      ))}
    </ul>
  ) : (
    noTaskView
  );

  return (
    <div>
      <h2>Todos</h2>
      {!refresh.loading ? taskView : loadingView}
      <div>
        <input
          onKeyDown={event => {
            if (event.keyCode === 13) {
              event.preventDefault();
              onAdd(event.target.value);
              event.target.value = '';
            }
          }}
          placeholder="Press Enter"
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Todo />, rootElement);
