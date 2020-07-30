// import React from 'react';
import { observable, computed } from 'mobx';

class GlobalStore {
  @observable todos = [];

  @computed get countTodos() {
    return this.todos.length;
  }

  addTodo(todoModel) {
    this.todos.push(todoModel);
  }
}

const store = new GlobalStore();

export { GlobalStore };
export default store;
