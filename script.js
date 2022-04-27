/* This function prompts the user for a new profile name then sets the #user-id on the profile to that value */
function changeName(editLink) {
    // console.log("changing profile user name...");
    var newName = window.prompt("Change profile username to:")
    document.getElementById("user-name").innerText = newName;
}

/* This function decreases the #request-counter value by 1 on the profile */
function decreaseRequestCount() {
    /*  My Code
    var requestCounter = document.getElementById("request-counter").innerText;
    requestCounter = parseInt(requestCounter)-1;
    document.getElementById("request-counter").innerText = requestCounter;
    */
   //Solution Code
    var requestCounter = document.querySelector("#request-counter");
    requestCounter.innerText--;

}

/* This function removes the user list item (entire row) from the list of .request-names*/
function removeRequest(request) {
    var user = document.querySelector(request);
    user.remove();
    decreaseRequestCount();
}

/* This function increases the #connection-counter value by 1 on the profile */
function increaseConnectionCount() {
    /* My Code
    var connectionCounter = document.getElementById("connection-counter").innerText;
    connectionCounter = parseInt(connectionCounter) + 1;
    document.getElementById("connection-counter").innerText = connectionCounter;
    */
   //Solution Code
    var connectionCounter = document.querySelector("#connection-counter");
    connectionCounter.innerText++;
}