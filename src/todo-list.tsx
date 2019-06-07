import * as React from 'react';
import { TodoProps, TodoElement } from './todo-element';
import { AddTodoForm } from './add-todo-form';
import * as UUID from 'uuid';

export type TodoListState = {
    todoList: TodoProps[];
    currentTodo: TodoProps;
};

const initialTodo: TodoProps = {
    id: UUID.v4(),
    name: '',
    deadline: '',
    state: 'NotStartedYet',
    priority: 'Middle',
};

export class TodoList extends React.Component<{}, TodoListState> {
    constructor(props: any) {
        super(props);

        this.state = {
            todoList: [
                { id: UUID.v4(), name: '勉強', deadline: '2000-01-01', state: 'OnProgress', priority: 'Middle' },
            ],
            currentTodo: initialTodo,
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
        console.log(this, id);
        const todoList = this.state.todoList.slice().filter(x => x.id !== id);

        console.log(id, todoList);

        this.setState({
            todoList,
        });
    }

    updateCurrentProps(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        const currentTodo: TodoProps = { ...this.state.currentTodo };
        console.log(currentTodo);
        console.log(e.target.name, e.target.value);
        currentTodo[e.target.name] = e.target.value;

        this.setState({
            currentTodo,
        });
    }

    render() {
        const { todoList, currentTodo } = this.state;

        const todoElements = todoList.map(todo => (
            <TodoElement key={todo.id} todoProps={todo} onClickDeleteButton={() => this.deleteTodo(todo.id)} />
        ));
        return (
            <div>
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
