import { useState } from "react"

function Dashboard({applied, interview, rejected, offered, darkMode}){

    return <div className={darkMode ? "dark-mode main-container" : "main-container"}>
        <div className={darkMode ? "dark-mode-body body-container" : "body-container"}>

            <div className="greeting-container">
                <h1>Welcome, Josue</h1>
            </div>
            <div className="stats-container">
                <div className="stat-card applied">
                    <h1>{applied}</h1>
                    <h1>Applied</h1>
                </div>
                <div className="stat-card interview">
                    <h1>{interview}</h1>
                    <h1>Interview</h1>
                </div>
                <div className="stat-card rejected">
                    <h1>{rejected}</h1>
                    <h1>Rejected</h1>
                </div>
                <div className="stat-card offer">
                    <h1>{offered}</h1>
                    <h1>Offered</h1>
                </div>
            </div>

        </div>
    </div>
}


export default Dashboard