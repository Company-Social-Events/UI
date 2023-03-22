import { DatePicker } from "../../libs/chakra-datepicker";
import { DatePickerProps } from "../../libs/chakra-datepicker/props";

type CalendarProps = {
    datePickerProps: DatePickerProps;
}
const Calendar = ({datePickerProps} : CalendarProps) => {
    return ( <div className="bg-gray-100 grid grid-rows-calendar">
        <div></div>
        <div>
            <DatePicker hideHeader={true}/>


        </div>
    </div> );
}
 
export default Calendar;