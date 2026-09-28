// TASK 1,2,3,4

const App = () => {
  let studentName = "Arun"

let age = 22

let course = "React"

let fees = 15000


let skills = ["HTML", "CSS", "JavaScript", "React", "Node"]

let mapskill = skills.map((e,i)=>{
  return <li key={i}>{e}</li>
})


let student = {

    name: "Priya",

    age: 21,

    course: "MERN Stack",

    city: "Chennai"

}

let students = [

    { id: 1, name: "Arun", course: "React" },

    { id: 2, name: "Priya", course: "Node" },

    { id: 3, name: "Kumar", course: "MongoDB" }

]

let mapnames = students.map((e,i)=>{
  return <p key={i}>Student's Names: {e.name}</p>
})



  return (<>
  <h2>Student Name: {studentName}</h2>
  <p>Age: {age}</p>
  <p>Course: {course}</p>
  <p>Fees: {fees}</p>
  
  <h3>Mapping the Skills</h3>
  <ul>
    <li>{mapskill}</li>
  </ul>

  <h3>Student Details</h3>
  <p>Name: {student.name}</p>
  <p>Age: {student.age}</p>
  <p>Course: {student.course}</p>
  <p>City: {student.city}</p>

    <h3> Array of Objects using Map()</h3>
    <p>{mapnames}</p>

    </>
  )
}

export default App



