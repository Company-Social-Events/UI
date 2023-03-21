import { useState } from "react";
import { DatePicker as ChakraDatePicker } from "./chakra-datepicker";

const MyDatePicker = () => {
    const [date, setDate] = useState(new Date());
 
return (          
<ChakraDatePicker
        initialValue={date}
        onDateChange={(d) => window.console.log("ChakraDatePicker::d", d)}
      />);
}
 
export default MyDatePicker;