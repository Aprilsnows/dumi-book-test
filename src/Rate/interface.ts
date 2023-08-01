export interface RateProps {
    // 要想文档中有 api 必须这么写注释.
    /**
     * @description 设置默认评分值
     */
    defaultValue?: Number;
    /**
     * @description 当评分值发生变化时的回调函数。
     * @default 可选
     * 
     */
    onChange?: Function;
}
export interface RateStyle {
    defaultValue?:Number
    onChange?:Function
}
