import {
    Flex,
    Input,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    usePopover,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { DatePickerContent } from './components/DatePickerContent';
import { DatePickerHeader } from './components/DatePickerHeader';
import { useDatePicker } from './DatePickerContext';
import { DatePickerProps } from './props';

export const DatePickerContainer: React.FC<DatePickerProps> = (props) => {
    const {
        selectedDate: [date],
    } = useDatePicker();
    const onChange = () => {
        props.onDateChange?.(date);
    };
    useEffect(() => {
        onChange()
    }, [date]);

    return (
        <>
            <div className='flex flex-col'>
                {!props.hideHeader &&  <DatePickerHeader /> }
                <DatePickerContent />
            </div>
        </>
    );
};
