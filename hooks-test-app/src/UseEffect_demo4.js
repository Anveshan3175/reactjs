import React, { useState, useEffect } from "react";

const UseEffect_demo4 = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then((response) => response.json())
    .then((json) => console.log(json));

    useEffect(() => {
        console.log('Resource Changed');

        return (() => {
            console.log('return from resource changed');
        });
    },[resourceType]);

  return (
    <>
      <p>&nbsp;</p>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          {" "}
          Posts
        </button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Contacts</button>
      </div>

      <h3 style = {{textAlign:"center"}}>Resource Type : {resourceType}</h3>
    </>
  );
};

export default UseEffect_demo4;
