import "./faculty.css";
function Faculty({faculty}) {
    return (
        
        <div className="facultyy-container">
            <div className="facultyy-content">

            <h2>Faculty Profile</h2>
            <p>Name:{faculty.name}</p>
            <p>Dept:{faculty.dept}</p>
            <p>Email:{faculty.email}</p>
            <p>Age:{faculty.age}</p>
            </div>
        </div>
    )
}

export default Faculty