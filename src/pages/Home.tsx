import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Calendar from "../components/calendar/Calendar";
import { DatePickerProvider } from '../libs/chakra-datepicker/DatePickerContext';
const Home = () => {
    const [date, setDate] = useState(new Date());


    return (
        <>
            <div className="h-screen grid grid-cols-sidebar-calendar">
                <DatePickerProvider initialValue={date} >
                    <Sidebar datePickerProps={{
                        onDateChange: (d) => window.console.log("ChakraDatePicker::d", d)
                    }} />
                    <Calendar datePickerProps={{
                        onDateChange: (d) => window.console.log("ChakraDatePicker::d", d)
                    }}/>
                </DatePickerProvider>
            </div>
        </>


    );
}

export default Home;