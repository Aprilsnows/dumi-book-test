export interface SwitchProps {
  // 要想文档中有 api 必须这么写注释.
  /**
   * @description 默认开关
   */
  checked?: Boolean;
  /**
   * @description 开关回调函数
   * @default (value) => void;
   *
   */
  onChange?: Function;
}
export interface SwitchStyle {
  checked?: Boolean;
  onChange?: Function;
}
