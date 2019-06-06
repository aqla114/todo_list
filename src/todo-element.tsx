import * as React from 'react';

export type ProgressState = 'Completed' | 'OnProgress';
export type Priority = 'High' | 'Middle' | 'Low';

export type TodoProps = {
    name: string;
    deadline: Date;
    state: ProgressState;
    priority: Priority;
    memo: string;
};

export function TodoElement(props: TodoProps) {
    return (
        <tr className="todo-list__element">
            <td>
                <span className="todo-list__element__name">{props.name}</span>
            </td>
            <td>
                <span className="todo-list__element__deadline">{props.deadline.toDateString()}</span>
            </td>
            <td>
                <span className="todo-list__element__state">{props.state}</span>
            </td>
            <td>
                <span className="todo-list__element__priority">{props.priority}</span>
            </td>
            <td>
                <input
                    type="text"
                    className="todo-list__element__memo"
                    name={'actionPriority'}
                    value={props.memo}
                    onChange={() => {}}
                />
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
