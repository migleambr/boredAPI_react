import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import GetActivity from "../components/GetActivity";
import Activity from "../components/Activity";
import ActivitiesList from "../components/ActivitiesList";


const BoredomContainer = () => {

    const [activity, setActivity] = useState("");

    const fetchData = async () => {
        const response = await fetch("https://www.boredapi.com/api/activity");
        const jsonData = await response.json();
        setActivity(jsonData);
    } 
    // console.log(activity);   

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <BrowserRouter>
        <h1>Hello from the Boredom Container!</h1>
        <div className="nav-bars">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/saved-activities'>Saved Activities</Link></li>
            </ul>
        </div>
        <div className="boredom-container">
        <GetActivity onClick={fetchData}/>
        <Routes>
            <Route path='/' element={<Activity activity={activity} />} />
            {/* saved-activities path is not functioning appropriately */}
            <Route path='/saved-activities' element={<ActivitiesList savedActivities={activity} />} />
        </Routes>
        </div>
        </BrowserRouter>
    );

}

export default BoredomContainer;


//--------------------//--------------------//

// Structure:

// All Saved Activities
    // Search function - by keywork: e.g., cook.. (extension)
    // On click - more details: type, participants, price
    // Checkbox - to strike through

// Home - Find New Activity
    // Get random activity - (extension: to get random activity after specifying activity type)
    // Option to save to all activities list
