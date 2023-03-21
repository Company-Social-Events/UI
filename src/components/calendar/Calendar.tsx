import { DatePicker } from "../../libs/chakra-datepicker";

const Calendar = () => {
    return ( <div className="bg-gray-100 grid grid-rows-calendar">
        <div></div>
        <div>
            <DatePicker hideHeader={true}/>


        </div>
    </div> );
}
 
export default Calendar;