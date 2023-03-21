import { HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { DAY_NAMES } from '../constants';
import { useDatePicker } from '../DatePickerContext';
import { getWeeksOfMonth } from '../helpers/getWeeksOfMonth';
import { DateColumn } from './DateColumn';

export const DatePickerDays = () => {
    const context = useDatePicker();
    const [date] = context.date;
    const [weeks, setWeeks] = useState<Date[][]>();

    useEffect(() => {
        setWeeks(getWeeksOfMonth(date || new Date()));
    }, [date]);

    return (
        <div className='grid grid-cols-7'>
            {DAY_NAMES.map((title, idx) => {
                // console.log('title', title)
                return(
                <DateColumn
                    key={idx}
                    {...{ title }}
                    dates={weeks?.[idx] ?? []}
                />
            )})}
        </div>
    );
};
