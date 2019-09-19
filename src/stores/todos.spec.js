import todos from './todos';

describe('todos', () => {
  test('refresh data success', async () => {
    await todos.refresh();
    expect(todos.dataSource).toEqual([
      {
        name: 'react'
      },
      {
        name: 'vue',
        done: true
      },
      {
        name: 'angular'
      }
    ]);
  });
  test('add new todo success', async () => {
    todos.add({ name: 'rax' });
    expect(todos.dataSource).toEqual([
      {
        name: 'react'
      },
      {
        name: 'vue',
        done: true
      },
      {
        name: 'angular'
      },
      {
        name: 'rax'
      }
    ]);
  });
  test('remove todo success', async () => {
    todos.remove(1);
    expect(todos.dataSource).toEqual([
      {
        name: 'react'
      },
      {
        name: 'angular'
      },
      {
        name: 'rax'
      }
    ]);
  });
  test('toggle todo done status success', async () => {
    todos.toggle(0);
    expect(todos.dataSource).toEqual([
      {
        name: 'react',
        done: true
      },
      {
        name: 'angular'
      },
      {
        name: 'rax'
      }
    ]);
  });
});
