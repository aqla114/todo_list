import * as React from 'react';
import { ProgressState } from './progress-state';

export type FilterOption = ProgressState | 'All' | 'NotCompleted';

export type ListFilterProps = {
    filterOption: FilterOption;
    onChangeFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function ListFilter(props: ListFilterProps) {
    return (
        <select name="filter" className="list-filter" value={props.filterOption} onChange={props.onChangeFilter}>
            <option value="All">全て表示</option>
            <option value="NotCompleted">未完のみ表示</option>
            <option value="OnProgress">進行中のみ表示</option>
            <option value="NotStartedYet">未着手のみ表示</option>
            <option value="Completed">完了済のみ表示</option>
        </select>
    );
}
