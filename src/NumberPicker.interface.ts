import type { RefObject } from 'react';
import type { PickerProps } from '@react-native-picker/picker';

export type NumberPickerItemId = string;

export interface NumberPickerItem {
  /**
   * ID of the picker, which will be used as key in the returned value object.
   * @example if you have a picker with {id: 'amountOfPizzas', ... }, the returned value object will be: {amountOfPizzas: 3}
   * @type {string}
   * @memberof NumberPickerItem
   */
  id: NumberPickerItemId;
  /**
   * Picker ref
   * @type {*}
   * @memberof NumberPickerItem
   */
  ref?: RefObject<{ focus: () => void; blur: () => void }>;
  /**
   * Add a label which will prefix a picker item.
   * @example if label:'EURO' your picker item will look like: 3 EURO
   * @type {string}
   * @memberof NumberPickerItem
   */
  label?: string;
  /**
   * Min value of the picker to start with.
   * @type {number}
   * @memberof NumberPickerItem
   */
  min: number;
  /**
   * Max value of the picker to end with.
   * @type {number}
   * @memberof NumberPickerItem
   */
  max: number;
  /**
   * Amount to increment/decrement the value by.
   * @type {number}
   * @memberof NumberPickerItem
   */
  step?: number;
}

export interface NumberPickerValue {
  [key: string]: any;
}

export interface NumberPickerProps extends PickerProps {
  /**
   * Initialise all the items with the given values.
   * @type {NumberPickerItem[]}
   * @memberof NumberPickerProps
   */
  items: NumberPickerItem[];
  /**
   * Controlled value to be displayed in the items.
   * @type {NumberPickerValue}
   * @memberof NumberPickerProps
   */
  values: NumberPickerValue;
  /**
   * Callback function to be called when the value of any picker changes.
   * @param {*} value
   * @return {*}  {*}
   * @memberof NumberPickerProps
   */
  onChange: (value: any) => void;
  /**
   * Divider to be used to separate items.
   * @type {*}
   * @memberof NumberPickerProps
   */
  divider?: any;
}
