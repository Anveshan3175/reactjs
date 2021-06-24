

function Promise_Demo1 () {

    const promise = new Promise((resolve,reject) => {

        setTimeout( () => {
            resolve ("Data from server");
        }
            ,3000
        );


        setTimeout(() => {
            resolve("Data not returned from server")
        }
            ,4000   // Make it 4000, you will see succes in page else error message will be seen
        );

    });

    promise.then((result) => {
        document.getElementById('divElement').innerHTML = result;
    }).catch((error) => {
        document.getElementById('divElement').innerHTML = error;
    })

    return (
        <>
            <h1> Hi there . Promise_Demo1 here </h1>
            <div id='divElement'></div>
        </>
    );
};

export default Promise_Demo1;