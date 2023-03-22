import React from 'react';
import { DatePickerContainer } from './DatePickerContainer';
import { DatePickerProps } from './props';

export const DatePicker: React.FC<DatePickerProps> = (props) => {
    return (
                <DatePickerContainer {...props} />
    );
};
