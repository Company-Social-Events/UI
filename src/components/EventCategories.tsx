import CheckboxList from "./Generic/CheckboxList";
const EventCategories = () => {
    return ( <div>
        <h6 > Events  </h6>
        <CheckboxList listItems={['Parties','Game Nights','Reminders']}/>
    </div> );
}
 
export default EventCategories;