import * as React from 'react';
import { TodoProps, TodoElement } from './todo-element';

const testTodo: TodoProps = {
    name: '勉強',
    deadline: new Date(),
    state: 'OnProgress',
    priority: 'Middle',
    memo: '',
};

export function TodoList() {
    return (
        <div>
            <table className="character-table">
                <thead>
                    <tr>
                        <td>タスク</td>
                        <td>期限</td>
                        <td>状態</td>
                        <td>優先度</td>
                        <td>メモ</td>
                        <td>タスクの削除</td>
                    </tr>
                </thead>
                <tbody>
                    <TodoElement {...testTodo} />
                </tbody>
            </table>
        </div>
    );
}
