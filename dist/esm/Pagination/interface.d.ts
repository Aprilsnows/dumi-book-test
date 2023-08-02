export interface PaginationProps {
    /**
     * @description 总数据
     */
    totalPages?: Number;
    /**
     * @description 点击回调
     */
    onPageChange?: Function;
    /**
     * @description 展示的个数
     */
    maxVisiblePages?: Number;
    /**
     * @description 当前的页数
     */
    currentPage?: Number;
}
export interface PaginationStyle {
    totalPages?: Number;
    maxVisiblePages?: Number;
    currentPage?: Number;
    onPageChange?: Function;
}
