import getStudentData from "./../data/StudentData";
import getDeptData from "./../data/DepartmentData";
import getHodData from "./../data/HodData";

function Promise_Demo3() {
  const getStudentId = function (stdName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const stdList = getStudentData();
        const stdObj = stdList.filter((student) => student.name === stdName);
        resolve(stdObj[0].id);
      }, 2000);
    });
  };

  const getDeptOfStudent = function (stdId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const deptList = getDeptData();
        const deptObj = deptList.filter((dept) => dept.stdid === stdId);
        resolve(deptObj[0].dept);
      }, 3000);
    });
  };

  const getHod = function (deptName) {
    return new Promise((resolve, request) => {
      setTimeout(() => {
        const hodList = getHodData();
        const hodObj = hodList.filter((hod) => hod.deptName === deptName);
        resolve(hodObj[0].hod);
      }, 4000);
    });
  };

  // use then on return value of function
  getStudentId("gourav").then((id) => {
    document.getElementById("MAIN").innerHTML += " , Name : gourav , Id : " + id + " ,";
    getDeptOfStudent(id).then((dept) => {
      document.getElementById("MAIN").innerHTML += "Dept : " + dept + " ,";
      getHod(dept).then(hod => {
        document.getElementById("MAIN").innerHTML += "HOD : " + hod;
      });
    });
  });

  return (
    <>
      <div id="MAIN">Hi </div>
    </>
  );
}

export default Promise_Demo3;
