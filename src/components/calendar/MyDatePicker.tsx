import { DatePicker } from "../../libs/chakra-datepicker";
import { DatePickerProps } from "../../libs/chakra-datepicker/props";
type MyDatePickerProps = {
  datePickerProps: DatePickerProps;
}

const MyDatePicker = ({datePickerProps } : MyDatePickerProps) => {

  return (
    <>
      <DatePicker {...datePickerProps}
      />
    </>
  );
}

export default MyDatePicker;