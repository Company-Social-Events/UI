import React from 'react';
import { useCalendar } from '../CalendarContext';
import { CalendarDays } from './CalendarDays';
import { CalendarYears } from './CalendarYears';

export const CalendarContent = () => {
    const context = useCalendar();

    if (!context.selectingYear[0]) {
        
        return <CalendarDays />;
    } else {
        return <CalendarYears />;
    }
};
