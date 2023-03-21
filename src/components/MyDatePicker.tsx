import { useState } from "react";
import { DatePicker } from "../libs/chakra-datepicker";
import StaticDatePicker from "../libs/chakra-datepicker/StaticDatePicker";

const MyDatePicker = () => {
    const [date, setDate] = useState(new Date());
 
return (      
  <>
{/* <DatePicker
        initialValue={date}
        onDateChange={(d) => window.console.log("ChakraDatePicker::d", d)}
      /> */}
      <StaticDatePicker/>
  </>    
      );
}
 
export default MyDatePicker;