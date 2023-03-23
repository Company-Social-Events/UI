import { CalendarProps } from "../../libs/chakra-datepicker/props";
import { CalendarContainer } from "../../libs/chakra-datepicker/CalendarContainer"; 
type CalendarProps = {
    datePickerProps: CalendarProps;
}
const Calendar = ({datePickerProps} : CalendarProps) => {
    return ( <div className="bg-gray-100 grid grid-rows-calendar">
        <div></div>
        <div>
            <CalendarContainer hideHeader={true} {...datePickerProps} />
        </div>
    </div> );
}
 
export default Calendar;