import { useEffect, useState } from "react";
import getDeptData from "../data/CommonData";

function AsyncAwait1() {
  const [depts, setDepts] = useState([]);

  useEffect(() => {
    async function getDeparts() {
      const deptdets = await getDeptData(); //getDeptData should be async / promise
      setDepts(deptdets);
    }
    getDeparts();
  }, []);

  if (depts.length != 0) {
    return <PopulateDeptList stdDepts={depts}></PopulateDeptList>;
  } else {
    return <div id="Content"> Hi there</div>;
  }
}

function PopulateDeptList({ stdDepts }) {
  return (
    <div>
      <ul>
        {stdDepts.map((dept) => {
          return <li>{dept.dept}</li>;
        })}
      </ul>
    </div>
  );
}

export default AsyncAwait1;
