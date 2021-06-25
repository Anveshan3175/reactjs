import { useEffect } from "react";
//https://www.youtube.com/watch?v=_8gHHBlbziw

function CallbackDemo2() {
  useEffect(() => {
    document.title = "CallbackDemo2";
  }, []);

  // Get Student Id
  function getStudentId(studentName, callback) {
    setTimeout(() => {
      let studentDetails = [
        { name: "mark", id: 1001 },
        { name: "shanu", id: 1002 },
        { name: "feroz", id: 1003 },
      ];
      let student = studentDetails.filter((studt) => studt.name == studentName);
      callback(student[0].id);
    }, 1000);
  }

  // Get Department of Student
  function getDepartmentOfStudent(id, callback) {
    setTimeout(() => {
      let deptDetails = [
        { id: 1001, dept: "ECE" },
        { id: 1002, dept: "CSE" },
        { id: 1003, dept: "MECH" },
      ];
      let dept = deptDetails.filter((dept) => dept.id == id);
      callback(dept[0].dept);
    }, 1000);
  }

  function getHODOfDept(dept,callback) {
    setTimeout(() => {
      let hodDetails = [
        { deptName: "ECE", hod: "Mr Sam" },
        { deptName: "CSE", hod: "Mr Terry" },
        { deptName: "MECH", hod: "Mr Foo" },
      ];

      let studHod = hodDetails.filter( hodDetail => hodDetail.deptName == dept);
      callback(studHod[0].hod);
    }, 1000);
  }

  getStudentId("shanu", (id) => {
    document.getElementById("CB1").innerHTML += "  , Student Id - " + id;
    getDepartmentOfStudent(id, (dept) => {
      document.getElementById("CB1").innerHTML += "  , Student Dept - " + dept;
      getHODOfDept(dept,(hod) => {
        document.getElementById("CB1").innerHTML += "  , Dept HOD - " + hod;
      })
    });
  });

  return (
    <>
      <div id="CB1"> Hi There </div>
    </>
  );
}

export default CallbackDemo2;
