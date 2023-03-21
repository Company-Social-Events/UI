
import AccountMenu from "./AccountMenu";
import EventCategories from "./EventCategories";
import MyDatePicker from "./Generic/MyDatePicker";
import Divider from "./Generic/Divider";
const Sidebar = () => {
    return ( <div className="bg-gray-200 p-2 flex flex-col gap-2">
        <AccountMenu/>
        <Divider/>
        <EventCategories/>
        <Divider/>
        <MyDatePicker/>
    </div>);
}
 
export default Sidebar;