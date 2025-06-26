import { useState } from "react"


function AddNew({addToList, darkMode}){

    const [jobStatus, setJobStatus] = useState("---")
    const [jobCompany, setJobCompany] = useState("")
    const [jobTitle, setJobTitle] = useState("")

    const handleChangeStatus = (e) => {
        setJobStatus(e.target.value)     
    }

    const handleChangeCompany = (e) => {
        setJobCompany(e.target.value)
        console.log(e.target.value)
    }

    const handleChangeJobTitle = (e) => {
        setJobTitle(e.target.value)
        console.log(e.target.value)
    }






    function handleSubmit(){
        
        const applicationDate = new Date().toLocaleDateString()

        const applicationObject = {
            id : Date.now(),
            company: jobCompany,
            title: jobTitle,
            date: applicationDate,
            status: jobStatus
        }

        console.log(applicationObject.id)

        if (applicationObject.company === ""){
            alert("Enter a company for the job application")
            return
        }

        if (applicationObject.title === ""){
            alert("Enter a job title for the job application")
            return
        }

        if (applicationObject.status === "---"){
            alert("Enter a status for the job application!")
            return
        }

        addToList(applicationObject)
        
        setJobCompany("")
        setJobTitle("")
    }


    

    return <div className="main-container">
        <div className={darkMode ? "dark-mode-body body-container-addnew" : "body-container-addnew"}>
           
        <h1>Add a new job that you applied for!</h1>

        <div className="input-container-addnew">


            <div className="input-field">
                <label htmlFor="">Company</label>
                <input className="input-box" type="text" value={jobCompany} onChange={handleChangeCompany}/>
            </div>


            <div className="input-field">
                <label htmlFor="">Job Title</label>
                <input className="input-box" type="text" value={jobTitle} onChange={handleChangeJobTitle}/>
            </div>

            
            <div className="input-field">
                <label htmlFor="">Job Status</label>
                <select value={jobStatus} onChange={handleChangeStatus}>
                    <option value="---">----------</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Offered">Offered</option>
                </select>
            </div>


            <div className="input-field">
                <button className="submit-button" onClick={handleSubmit}>Add!</button>
            </div>

            
        </div>

        </div>
        
    
    </div>
}

export default AddNew