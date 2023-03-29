import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Calendar from "../components/calendar/Calendar";
import { CalendarProvider } from '../components/context/CalendarContext';
import { useMyAccount } from "../components/context/MyAccountContext";
import NotAuthenticated from "../components/generic/NotAuthenticated";
const Home = () => {
    const [date, setDate] = useState(new Date());
    const handleDateChange = (d : Date | null) => {
        // window.console.log("ChakraCalendar::d", d)
    }
    const context = useMyAccount();
    const [isAuthenticated] = context.isAuthenticated;
    return (
        <>
            {isAuthenticated ? 
            (
            <div className="h-screen grid grid-cols-sidebar-calendar">
                <CalendarProvider initialValue={date} >
                    <Sidebar datePickerProps={{
                        onDateChange: handleDateChange 
                    }} />
                    <Calendar datePickerProps={{
                        onDateChange: handleDateChange
                    }}/>
                </CalendarProvider>
            </div>)
            : (<NotAuthenticated/>)
}
        </>


    );
}

export default Home;