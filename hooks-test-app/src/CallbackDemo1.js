function CallbackDemo1() {
  function displayName() {
    setTimeout(() => {
      document.getElementById("CB1").innerHTML = "callBack Demo by Anveshan";
    }, 2000);
  }

  displayName();

  return (
    <>
      <div id="CB1"> Callback Demo</div>
      {}
    </>
  );
}

export default CallbackDemo1;
