import { useState } from "react";
import { DatePicker } from "../libs/chakra-datepicker";

const MyDatePicker = () => {
    const [date, setDate] = useState(new Date());
 
return (          
<DatePicker
        initialValue={date}
        onDateChange={(d) => window.console.log("ChakraDatePicker::d", d)}
      />);
}
 
export default MyDatePicker;