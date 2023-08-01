export interface PaginationProps {
    // 要想文档中有 api 必须这么写注释.
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
    currentPage?:Number;
  }
  export interface PaginationStyle {
    totalPages?: Number;
    maxVisiblePages?:Number;
    currentPage?:Number;
    onPageChange?:Function
  }