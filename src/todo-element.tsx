import * as React from 'react';
import { ProgressState, progressState } from './progress-state';
import { Priority, priority } from './priority';

export type TodoProps = {
    [key: string]: string;
    id: string;
    name: string;
    deadline: string;
    state: ProgressState;
    priority: Priority;
};

export type TodoElementProps = {
    todoProps: TodoProps;
    onClickDeleteButton: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

export function TodoElement(props: TodoElementProps) {
    return (
        <tr className="todo-list__element">
            <td>
                <span className="todo-list__element__name">{props.todoProps.name}</span>
            </td>
            <td>
                <span className="todo-list__element__deadline">{props.todoProps.deadline}</span>
            </td>
            <td>
                <span className="todo-list__element__state">{progressState[props.todoProps.state]}</span>
            </td>
            <td>
                <span className="todo-list__element__priority">{priority[props.todoProps.priority]}</span>
            </td>
            <td>
                <input
                    type="button"
                    className="todo-list__element__delete-button"
                    name={'delete'}
                    value={'削除'}
                    onClick={props.onClickDeleteButton}
                />
            </td>
        </tr>
    );
}
