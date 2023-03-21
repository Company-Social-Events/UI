import Sidebar from "../components/Sidebar";
import Calendar from "../components/Calendar";
const Home = () => {
    return (
            <div className="h-screen grid grid-cols-sidebar-calendar">
                <Sidebar />
                <Calendar />
            </div>


    );
}

export default Home;