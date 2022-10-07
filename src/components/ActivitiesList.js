const ActivitiesList = ({savedActivities}) => {

    const handleStrickeThrough = (event) => {
        if (event.target.checked) {
            event.target.value.style.textDecoration='line-through'
        }
    }

    return (
        <>
        <h3>Your Saved Activities:</h3>
        <div>
            <div className="saved-container">{savedActivities.map((activity) => {
                return (
                    <>
                    <details>
                    <summary id="saved-name">{activity.activity} <input value={activity.activity} type="checkbox" onChange={handleStrickeThrough}/></summary>
                        <li className="feature"><b>Activity Type:</b> {activity.type} </li>
                        <li className="feature"><b>Number of Participants Required: </b> {activity.participants}</li>
                        <li className="feature"><b>Price Rating: </b> {activity.price}</li>
                    </details>
                    </>
                )
            })}</div>
        </div>
        </>
    );

}

export default ActivitiesList;