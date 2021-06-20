import React, { useState, useEffect } from "react";

function UseEffect_demo2() {
  const [resourceType, setResourceType] = useState("posts");
  const [items,setItems] = useState([]);

  console.log("render");

  useEffect(() => {
    console.log("resource type changed");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]); // Whenever resourceType changes, hook is going to run

  useEffect(() => {
    console.log("Only on Mount");
  }, []);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
      </div>
      <h1 style={{ textAlign: "center" }}>Resource Type : {resourceType}</h1>

      {items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}

export default UseEffect_demo2;
