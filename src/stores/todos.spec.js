import todos from './todos';

describe('todos', () => {
  test('refresh data success', async () => {
    await todos.refresh();
    expect(todos.dataSource).toEqual([
      {
        name: 'mobx'
      },
      {
        name: 'redux',
        done: true
      },
      {
        name: 'hooks+ice-store'
      }
    ]);
  });
  test('add new todo success', async () => {
    todos.add({ name: 'leishu' });
    expect(todos.dataSource).toEqual([
      {
        name: 'mobx'
      },
      {
        name: 'redux',
        done: true
      },
      {
        name: 'hooks+ice-store'
      },
      {
        name: 'leishu'
      }
    ]);
  });
  test('remove redux  success', async () => {
    todos.remove(1);
    expect(todos.dataSource).toEqual([
      {
        name: 'mobx'
      },
      {
        name: 'hooks+ice-store'
      },
      {
        name: 'leishu'
      }
    ]);
  });
  test('toggle todo done status success', async () => {
    todos.toggle(0);
    expect(todos.dataSource).toEqual([
      {
        name: 'mobx',
        done: true
      },
      {
        name: 'hooks+ice-store'
      },
      {
        name: 'leishu'
      }
    ]);
  });
});
