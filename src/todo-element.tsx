import * as React from 'react';

export type ProgressState = 'Completed' | 'OnProgress';
export type Priority = 'High' | 'Middle' | 'Low';

export type TodoProps = {
    [key: string]: string;
    name: string;
    deadline: string;
    state: ProgressState;
    priority: Priority;
};

export function TodoElement(props: TodoProps) {
    return (
        <tr className="todo-list__element">
            <td>
                <span className="todo-list__element__name">{props.name}</span>
            </td>
            <td>
                <span className="todo-list__element__deadline">{props.deadline}</span>
            </td>
            <td>
                <span className="todo-list__element__state">{props.state}</span>
            </td>
            <td>
                <span className="todo-list__element__priority">{props.priority}</span>
            </td>
            <td>
                <input
                    type="button"
                    className="todo-list__element__delete-button"
                    name={'delete'}
                    value={'削除'}
                    onClick={() => {}}
                />
            </td>
        </tr>
    );
}
