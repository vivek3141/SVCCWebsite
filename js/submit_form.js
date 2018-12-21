function makeHttpObject() {
    try {
        return new XMLHttpRequest();
    } catch (error) {
    }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (error) {
    }
    try {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (error) {
    }

    throw new Error("Could not create HTTP request object.");
}

const btn = document.getElementById("submit_button");
btn.addEventListener("click", e => {
    const text = document.getElementById("text").value;
    const check = document.getElementById("check_tos").checked;
    if (check === true) {
        url = "http://svcc-backend.herokuapp.com/submit?name=" + text
        let request = makeHttpObject();
        request.open("GET", url, true);
        request.send(null);
        request.onreadystatechange = function () {
            if (request.readyState == 4)
                var text = request.responseText;
                document.getElementById("rm").innerHTML = "<h3>Success! Please come to the next meeting to pick it up.</h3>";
        };
    }
});