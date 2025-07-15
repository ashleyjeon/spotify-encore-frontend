import React from "react";

const Dashboard = ({ profile }) => {
    return (
        <div className="dashboard">
            <h1>Welcome, {profile.display_name}!</h1>
            <p>Your spotify id: {profile.id}</p>
            <p>Email: {profile.email}</p>
        </div>
    );
}

export default Dashboard;