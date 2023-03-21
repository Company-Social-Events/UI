import Sidebar from "../components/sidebar/Sidebar";
import Calendar from "../components/calendar/Calendar";
const Home = () => {
  
    
    return (
        <>
            <div className="h-screen grid grid-cols-sidebar-calendar">
                <Sidebar />
                <Calendar/>
            </div>
        </>


    );
}

export default Home;