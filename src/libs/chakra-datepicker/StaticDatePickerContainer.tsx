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

export const StaticDatePickerContainer: React.FC<DatePickerProps> = (props) => {
    const {
        selectedDate: [date],
    } = useDatePicker();

    const onChange = () => {
        console.log('date', date)
        props.onDateChange?.(date);
    };

    useEffect(() => {
        onChange()
    }, [date]);

    return (
        <>
            <Flex direction="column" className='bg-white'>
                <DatePickerHeader />
                <DatePickerContent />
            </Flex>
        </>
    );
};
