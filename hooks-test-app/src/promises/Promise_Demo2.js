import getStudentData from "./../data/StudentData";
import getDeptData from "../data/DepartmentData";
import getHodData from "../data/HodData";

function Promise_Demo2() {
  // (resolve, reject) both are functions
  const studentpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const studentList = getStudentData();
      resolve(studentList);
    }, 2000);
  });

  const deptPromise = new Promise((resolve, request) => {
    setTimeout(() => {
      let deptsList = getDeptData();
      resolve(deptsList);
    }, 3000);
  });

  const hodPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const hodList = getHodData();
      resolve(hodList);
    }, 4000);
  });

  const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error from promise");
      // reject(new Error("Error from promise"));
    }, 5000);
  });

  //Promise accepting parameter
  const paramPromise = (flag) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (flag) {
          resolve("Success from promise");
        } else {
          reject("Failure from promise");
        }
      }, 6000);
    });
  };

  studentpromise.then((studentList) => {
    let student = studentList.filter((studt) => studt.id === 1003);
    document.getElementById("PM1").innerHTML += student[0].name + " , ";
    console.log(studentList);
  });

  deptPromise.then((deptsList) => {
    const dept = deptsList.filter((dept) => dept.stdid === 1003);
    document.getElementById("PM1").innerHTML += dept[0].dept + " , ";
  });

  hodPromise.then((hodList) => {
    const hodObj = hodList.filter((hodinfo) => hodinfo.deptName === "ECE");
    document.getElementById("PM1").innerHTML += hodObj[0].hod;
  });

  errorPromise
    .then(() => {
      console.log("Success from promise");
    })
    .catch((errMsg) => {
      document.getElementById("ERR1").innerHTML += errMsg;
    });

  paramPromise(true).then((msg) => {
    document.getElementById("SUCC").innerHTML += msg;
  });

  paramPromise(false).catch((msg) => {
    document.getElementById("FAIL").innerHTML += msg;
  });




  return (
    <>
      <div id="PM1">Hi </div>
      <br />
      <div id="ERR1"> </div>
      <br />
      <div id="SUCC"> </div>
      <br />
      <div id="FAIL"> </div>
      <br />
      <div id="TOTCONT"> Start here :</div>

    </>
  );
}

export default Promise_Demo2;
