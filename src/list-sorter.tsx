import * as React from 'react';

export type SortOption = 'DeadLineAsc' | 'DeadLineDesc' | 'PriorityAsc' | 'PriorityDesc';

const sortOption: { [K in SortOption]: string } = {
    DeadLineAsc: '締め切り昇順',
    DeadLineDesc: '締め切り降順',
    PriorityAsc: '優先度昇順',
    PriorityDesc: '優先度降順',
};

export type ListSorterProps = {
    sortOption: SortOption;
    onChangeSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function ListSorter(props: ListSorterProps) {
    return (
        <select name="sorter" className="list-sorter" value={props.sortOption} onChange={props.onChangeSort}>
            <option value="DeadLineAsc">{sortOption.DeadLineAsc}</option>
            <option value="DeadLineDesc">{sortOption.DeadLineDesc}</option>
            <option value="PriorityAsc">{sortOption.PriorityAsc}</option>
            <option value="PriorityDesc">{sortOption.PriorityDesc}</option>
        </select>
    );
}
