export interface DrawerProps {
    /**
     * @description 抽屉中数据
     */
    children?: any;
    /**
     * @description 样式
     */
    childrens?: String;
    /**
     * @description 抽屉的显示隐藏
     */
    showModal?: Boolean;
    /**
     * @description 回调函数
     */
    handleCloseDrawer?: Function;
}
export interface DrawerStyle {
    children?: any;
    childrens?: String;
    showModal?: Boolean;
    handleCloseDrawer?: Function;
}
