import { useState } from "react";
import ActivitiesList from "./ActivitiesList";

const Activity = ({activity}) => {

    const [savedActivities, setSavedActivities] = useState([]);

    const [stateActivity, setStateActivity] = useState(
        {
            activity: "",
            type: "",
            participants: 0,
            price: 0,
        }
    )

    // const handleSave = (event) => {
    //     let propertyName = event.target.name;
    //     let copiedActivity = {...stateActivity};
    //     copiedActivity.activity = activityName;
    //     if (event.target.checked) {
    //         copiedActivity[propertyName] = event.target.value;
    //     } else {
    //         copiedActivity[propertyName] = "Not Available";
    //     }
    //     setStateActivity(copiedActivity);
    // }

    const handleActivitySave = () => {
        const savedList = [...savedActivities, stateActivity];
        setSavedActivities(savedList);
        setStateActivity({
            activity: "",
            type: "",
            participants: 0,
            price: 0,
        })
        setChecked((c) => !c)

    }

    // add a checkbox on activity name
        // onChange - update stateActivity
        // onSubmit - submit activity

    const [checked, setChecked] = useState(false);

    const handleFullSave = (event) => {
        const newActivity = activity;
        if(event.target.checked) {
            setStateActivity({
                activity: newActivity.activity,
                type: newActivity.type,
                participants: newActivity.participants,
                price: newActivity.participants,
            })
        } else {
            setStateActivity({
                activity: "",
                type: "",
                participants: 0,
                price: 0,
            })
        }
        setChecked((c) => !c)
    }

    return (
        <div>
            <div className="activity-container">
            <h3>Your Activity:</h3>
            <h4>
                {activity.activity}
                <input value={activity} type="checkbox" checked={checked} onChange={handleFullSave} name="activity"/>
            </h4>
            <button 
                type="submit" 
                value={activity.activity} 
                onClick={handleActivitySave} 
                name="activity"
                id="save-button">
                    Save for Later!
            </button>
            <ul>
                <li 
                    name="type"
                    value={activity.type}>
                    <b>Activity Type:</b> {activity.type}
                    {/* <input value={activity.type} type="checkbox" onChange={handleSave} name="type"/> */}
                </li> 
                <li 
                    name="participants"
                    value={activity.participants}>
                    <b>Number of Participants Required:</b> {activity.participants}
                    {/* <input value={activity.participants} type="checkbox" onChange={handleSave} name="participants"/> */}
                </li>
                <li 
                    name="price"
                    value={activity.price}>
                    <b>Price Rating:</b> {activity.price}
                    {/* <input value={activity.price} type="checkbox" onChange={handleSave} name="price"/> */}
                </li>
            </ul>
            </div>
            <hr />
            <ActivitiesList savedActivities={savedActivities} />
        </div>
    );

}

export default Activity;