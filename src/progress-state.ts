export type ProgressState = 'Completed' | 'OnProgress' | 'NotStartedYet';

export const progressState: { [K in ProgressState]: string } = {
    Completed: '完了',
    OnProgress: '進行中',
    NotStartedYet: '未着手',
};
