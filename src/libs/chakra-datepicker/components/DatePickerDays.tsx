import { HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { DAY_NAMES } from '../constants';
import { useDatePicker } from '../DatePickerContext';
import { getWeeksOfMonth } from '../helpers/getWeeksOfMonth';
import { Days } from './Days';

export const DatePickerDays = () => {
    const context = useDatePicker();
    const [date] = context.date;
    const [weeks, setWeeks] = useState<Date[]>();

    useEffect(() => {
        // console.log(getWeeksOfMonth(date || new Date()))
        setWeeks(getWeeksOfMonth(date || new Date()));
    }, [date]);

    return (
        <div className='grid grid-cols-7 grid-rows-6'>
            {DAY_NAMES.map((title, idx) => {
                return  Boolean(title) && (
                    <div key={title + idx} className='my-2 text-center font-semibold'>
                        {title}
                    </div>
                )
            }
            )}
              <Days
                    dates={weeks ?? []}
                />
        </div>
    );
};
