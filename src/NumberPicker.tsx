import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { find } from './utils/array.utils';
import type {
  NumberPickerProps,
  NumberPickerItem,
  NumberPickerValue,
} from './NumberPicker.interface';
import range from './utils/range';
import { Picker } from '@react-native-picker/picker';

const PickerFactory: React.FC<any> = React.forwardRef(
  (
    { pickerProps, selectedValue, onChange, style, itemStyle, disabled }: any,
    ref: any
  ) => {
    const { id, label = '', min, max } = pickerProps;
    const numbers = range(min, max);

    return (
      <Picker
        testID={`${id}-picker`}
        ref={ref}
        style={{ ...styles.picker, ...style }}
        selectedValue={selectedValue}
        onValueChange={(value: any) => onChange({ [id]: value })}
        itemStyle={itemStyle}
        enabled={!disabled}
      >
        {numbers.map((number, index) => (
          <Picker.Item
            key={`${id}-${number}-${index}`}
            value={number}
            label={`${number} ${label}`}
            enabled={!disabled}
          />
        ))}
      </Picker>
    );
  }
);

const NumberPicker: React.FC<NumberPickerProps> = ({
  items,
  values,
  onValueChange,
  itemStyle,
  style,
  ...rest
}: any) => {
  React.useEffect(() => {
    Object.keys(values).some((id) => {
      if (!find(items, (item) => item.id === id)) {
        throw new Error(
          `Picker with id '${id}' not found. Double check your initialValues.`
        );
      }
    });
  }, [values, items]);

  const onChangeHandle = (value: NumberPickerValue) => {
    onValueChange({
      ...values,
      ...value,
    });
  };

  const findPickerValue = (item: NumberPickerItem) => {
    return values[item.id];
  };

  return (
    <View style={styles.container}>
      {items.map((item: any, index: any) => {
        const { id, ref, disabled = false } = item;
        const itemValue = findPickerValue(item);
        return (
          <PickerFactory
            ref={ref}
            key={`${id}-picker-${index}`}
            pickerProps={item}
            selectedValue={itemValue}
            onChange={onChangeHandle}
            disabled={disabled}
            itemStyle={itemStyle}
            style={style}
            {...rest}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: '100%',
    flex: 1,
  },
});

export default NumberPicker;
