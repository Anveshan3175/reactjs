function deptInfo() {
  const stdDepts = [
    { stdid: 1001, dept: "ECE" },
    { stdid: 1002, dept: "CSE" },
    { stdid: 1003, dept: "MECH" },
    { stdid: 1004, dept: "EEE" },
    { stdid: 1005, dept: "MECH" },
    { stdid: 1006, dept: "CSE" },
    { stdid: 1007, dept: "CHE" },
  ];
  return stdDepts;
}

// To ACT AS ASYNC FUNCTION USE PROMISE
export function getDeptData() {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(deptInfo())
        },5000);
    });
}

export function getStudentData() {
  const studentList = [
    { name: "mark", id: 1001 },
    { name: "joe", id: 1002 },
    { name: "sharma", id: 1003 },
    { name: "gourav", id: 1004 },
    { name: "hussain", id: 1005 },
    { name: "jack", id: 1006 },
    { name: "jill", id: 1007 },
  ];

  return studentList;
}

export default getDeptData;
