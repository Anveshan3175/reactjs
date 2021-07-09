import { useEffect, useState } from "react";

function Promise_Demo4() {
  const [person, setPerson] = useState("");

  //   useEffect(() => {
  //     const fetchData = () =>
  //       fetch("https://randomuser.me/api")
  //         .then((res) => res.json())
  //         .then((json) => {
  //           person = json;
  //           document.getElementById("userDiv").innerHTML += person;
  //         });
  //     fetchData();
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("https://randomuser.me/api");
      const json = await resp.json();
      console.log(json.results[0].name.first);
      setPerson(json.results[0]);
    };
    fetchData();
  }, []);

  if (person != "") {
    return <PersonDetails person={person}></PersonDetails>;
  } else {
    return <Loading></Loading>;
  }
}

function PersonDetails({ person }) {
  return (
    <div id="personDetails">
      <table>
        <tr>
          <td>
            <b>Name : </b>
          </td>
          <td>
            {person.name.title} {person.name.first} {person.name.last}
          </td>
        </tr>
        <tr>
          <td>
            <b>Email : </b>
          </td>
          <td>{person.email}</td>
        </tr>
        <tr>
          <td>
            <b>Phone : </b>
          </td>
          <td>{person.phone}</td>
        </tr>
      </table>
    </div>
  );
}

function Loading() {
  return (
    <div id="content">
      <div id="loading">Hi there, Loading ......</div>
    </div>
  );
}

export default Promise_Demo4;
