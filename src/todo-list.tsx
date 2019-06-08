import * as React from 'react';
import { TodoProps, TodoElement } from './todo-element';
import { AddTodoForm } from './add-todo-form';
import * as UUID from 'uuid';
import { ProgressState } from './progress-state';
import moment = require('moment');
import { FilterOption, ListFilter } from './list-filter';

function filterState(option: FilterOption, state: ProgressState): boolean {
    switch (option) {
        case 'All':
            return true;
        case 'NotCompleted':
            return state === 'NotStartedYet' || state === 'OnProgress';
        case 'OnProgress':
            return state === 'OnProgress';
        case 'NotStartedYet':
            return state === 'NotStartedYet';
        case 'Completed':
            return state === 'Completed';
    }
}

export type TodoListState = {
    todoList: TodoProps[];
    currentTodo: TodoProps;
    filterOption: FilterOption;
};

const initialTodo: TodoProps = {
    id: '',
    name: '',
    deadline: moment().format('YYYY-MM-DD'),
    state: 'NotStartedYet',
    priority: 'Middle',
};

export class TodoList extends React.Component<{}, TodoListState> {
    constructor(props: any) {
        super(props);

        this.state = {
            todoList: [
                { id: UUID.v4(), name: 'タスク１', deadline: '2000-01-01', state: 'OnProgress', priority: 'Middle' },
                { id: UUID.v4(), name: 'タスク２', deadline: '2000-01-02', state: 'Completed', priority: 'High' },
                { id: UUID.v4(), name: 'タスク３', deadline: '2000-01-03', state: 'OnProgress', priority: 'Middle' },
                { id: UUID.v4(), name: 'タスク４', deadline: '2000-01-04', state: 'NotStartedYet', priority: 'Low' },
            ],
            currentTodo: initialTodo,
            filterOption: 'All',
        };
    }

    addTodo() {
        const todo = { id: UUID.v4(), ...this.state.currentTodo };
        const todoList = this.state.todoList.slice();
        todoList.push(todo);

        this.setState({
            todoList,
            currentTodo: initialTodo,
        });
    }

    deleteTodo(id: string) {
        const todoList = this.state.todoList.slice().filter(x => x.id !== id);

        console.log(id, todoList);

        this.setState({
            todoList,
        });
    }

    updateCurrentProps(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        console.log(this.state.todoList);
        const currentTodo: TodoProps = { ...this.state.currentTodo };
        currentTodo[e.target.name] = e.target.value;

        this.setState({
            currentTodo,
        });
    }

    filterList(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            filterOption: e.target.value as FilterOption,
        });
    }

    render() {
        const { todoList, currentTodo, filterOption } = this.state;

        const todoElements = todoList
            .filter(todo => filterState(filterOption, todo.state))
            .map(todo => (
                <TodoElement key={todo.id} todoProps={todo} onClickDeleteButton={() => this.deleteTodo(todo.id)} />
            ));

        return (
            <div>
                <h1 className="title">Todo List</h1>
                <ListFilter filterOption={this.state.filterOption} onChangeFilter={e => this.filterList(e)} />
                <table className="todo-list">
                    <thead>
                        <tr>
                            <td>タスク</td>
                            <td>期限</td>
                            <td>状態</td>
                            <td>優先度</td>
                            <td>タスクの削除</td>
                        </tr>
                    </thead>
                    <tbody>{todoElements}</tbody>
                </table>
                <AddTodoForm
                    todoProps={currentTodo}
                    onClickAddButton={() => this.addTodo()}
                    onChangeCurrentProps={e => this.updateCurrentProps(e)}
                />
            </div>
        );
    }
}
