import React from 'react';
import { DatePickerContainer } from './DatePickerContainer';
import { DatePickerProvider } from './DatePickerContext';
import { DatePickerProps } from './props';

export const DatePicker: React.FC<DatePickerProps> = (props) => {
    return (
        <DatePickerProvider initialValue={props.initialValue} time={props.time}>
                <DatePickerContainer {...props} />
        </DatePickerProvider>
    );
};
