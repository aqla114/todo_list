import * as React from 'react';
import { TodoProps } from './todo-element';
import { progressState } from './progress-state';
import { priority } from './priority';

type AddTodoFormProps = {
    todoProps: TodoProps;
    onClickAddButton: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    onChangeCurrentProps: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
};

export function AddTodoForm(props: AddTodoFormProps) {
    return (
        <div className="add-todo">
            <h2 className="add-todo__title">新しい予定の追加</h2>
            <table className="add-todo__form">
                <thead>
                    <tr>
                        <td>タスク</td>
                        <td>期限</td>
                        <td>状態</td>
                        <td>優先度</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                className="add-todo__form__name"
                                name={'name'}
                                value={props.todoProps.name}
                                onChange={props.onChangeCurrentProps}
                            />
                        </td>
                        <td>
                            <input
                                type="date"
                                className="add-todo__form__deadline"
                                name={'deadline'}
                                value={props.todoProps.deadline}
                                onChange={props.onChangeCurrentProps}
                            />
                        </td>
                        <td>
                            <select
                                name="state"
                                className="add-todo__form__state"
                                value={props.todoProps.state}
                                onChange={props.onChangeCurrentProps}
                            >
                                <option value="NotStartedYet">{progressState.NotStartedYet}</option>
                                <option value="OnProgress">{progressState.OnProgress}</option>
                                <option value="Completed">{progressState.Completed}</option>
                            </select>
                        </td>
                        <td>
                            <select
                                name="priority"
                                className="add-todo__form__priority"
                                value={props.todoProps.priority}
                                onChange={props.onChangeCurrentProps}
                            >
                                <option value="High">{priority.High}</option>
                                <option value="Middle">{priority.Middle}</option>
                                <option value="Low">{priority.Low}</option>
                            </select>
                        </td>
                        <td>
                            <input
                                type="button"
                                className="add-todo__add-button"
                                name={'add'}
                                value={'予定の追加'}
                                onClick={props.onClickAddButton}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
