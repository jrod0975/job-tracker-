function Navbar({ changeScreen, setDarkMode, darkMode }){


    function handleClick(event, newScreen){
        event.preventDefault()
        changeScreen(newScreen)

    }


    function handleLight(event){
        event.preventDefault()
        setDarkMode(prev => !prev)
    }



    return <div className={darkMode ? "navbar-dark navbar-container": "navbar-container"}>
        <div className="title-section">
            <h2 className="gradient-text">Job Tracker</h2>
        </div>
        <div className="links-section">
            <ol className={darkMode ? "navbar-dark-links links-list" : "links-list"}>
                <li> <a onClick={(event) => handleClick(event, "dashboard")} href="">Dashboard</a></li>
                <li> <a onClick={(event) => handleClick(event, "applications")} href="">Applications</a></li>
                <li> <a onClick={(event) => handleClick(event, "addnew")} href="">Add New</a></li>
                <li> <a onClick={(event) => handleClick(event, "login")} href="">Log Out</a></li>
                <li><a onClick={handleLight} href="">{darkMode ? "🔆" : "🌙"}</a></li>
            </ol>
        </div>
    </div>
}

export default Navbar