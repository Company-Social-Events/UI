import React from 'react';
import { DatePickerProvider } from './DatePickerContext';
import { DatePickerProps } from './props';
import { StaticDatePickerContainer } from './StaticDatePickerContainer';
export const StaticDatePicker: React.FC<DatePickerProps> = (props) => {
    return (
        <DatePickerProvider initialValue={props.initialValue} time={props.time}>
                <StaticDatePickerContainer {...props} />
        </DatePickerProvider>
    );
};

export default StaticDatePicker;