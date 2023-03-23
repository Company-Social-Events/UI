import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Calendar from "../components/calendar/Calendar";
import { CalendarProvider } from '../libs/chakra-datepicker/CalendarContext';
const Home = () => {
    const [date, setDate] = useState(new Date());


    return (
        <>
            <div className="h-screen grid grid-cols-sidebar-calendar">
                <CalendarProvider initialValue={date} >
                    <Sidebar datePickerProps={{
                        onDateChange: (d) => window.console.log("ChakraCalendar::d", d)
                    }} />
                    <Calendar datePickerProps={{
                        onDateChange: (d) => window.console.log("ChakraCalendar::d", d)
                    }}/>
                </CalendarProvider>
            </div>
        </>


    );
}

export default Home;