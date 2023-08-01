export interface ModalProps {
  // 要想文档中有 api 必须这么写注释.
  /**
   * @description 按钮主题
   * @default primary
   * @default 
   */
  titles?: String;
  /**
   * @description 主体内容
   * @default 
   * 
   */
  message?: String;
  /**
   * @description 点击回调
   * @default 
   * 
   */
  onClose?: Function;
}
export interface ModalStyle {
  titles?: String;
  message?: String;
  onClose?: Function;
}
