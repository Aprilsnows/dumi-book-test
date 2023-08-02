export interface TabsProps {
  // 要想文档中有 api 必须这么写注释.
  /**
   * @description 加载数据
   * @default Number
   */
  tabs?: any;
  /**
   * @description 回调函数
   * @default
   */
  handleTabClick?: Function;
  /**
   * @description
   */
  activeTab?: Number;
}
export interface TabsStyle {
  tabs?: any;
  handleTabClick?: Function;
  activeTab?: Number;
}
