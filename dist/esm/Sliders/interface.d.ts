export interface SliderProps {
    /**
     * @description 最小值
     */
    min?: Number;
    /**
     * @description 最大值
     */
    max?: Number;
    /**
     * @description 滑块的当前值
     */
    value?: Number;
    /**
     * @description 滑块值变化时的回调函数
     * @default (value) => void;
     *
     */
    onChange?: Function;
}
export interface SliderStyle {
    min?: Number;
    max?: Number;
    value?: Number;
    onChange?: Function;
}
