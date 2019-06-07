export type Priority = 'High' | 'Middle' | 'Low';

export const priority: { [K in Priority]: string } = {
    High: '高',
    Middle: '中',
    Low: '低',
};
