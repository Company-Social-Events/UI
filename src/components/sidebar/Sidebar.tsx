
import AccountMenu from "./AccountMenu";
import EventCategories from "./EventCategories";
import MyDatePicker from "../calendar/MyDatePicker";
import { Divider } from '@chakra-ui/react'
const Sidebar = () => {
    return (<div className="bg-gray-200 p-2 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
            <AccountMenu />
            <Divider />
            <EventCategories />
        </div>
        <div>
            <Divider />
            <MyDatePicker />
        </div>
    </div>);
}

export default Sidebar;