
import AccountMenu from "./AccountMenu";
import EventCategories from "./EventCategories";
import MyDatePicker from "../calendar/MyDatePicker";
import { Divider } from '@chakra-ui/react'
import { DatePickerProps } from "../../libs/chakra-datepicker/props";
type SidebarProps = {
    datePickerProps: DatePickerProps;
}
const Sidebar = ({datePickerProps} : SidebarProps) => {
    return (<div className="bg-gray-200 p-2 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
            <AccountMenu />
            <Divider />
            <EventCategories />
        </div>
        <div>
            <Divider />
            <MyDatePicker datePickerProps={{...datePickerProps}} />
        </div>
    </div>);
}

export default Sidebar;