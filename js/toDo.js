showtask();

let addtaskinput = document.getElementById("addtaskinput"),
    addtaskbtn = document.getElementById("addtaskbtn");

function showtask() {
    let t = localStorage.getItem("localtask");
    let taskObj = t === null ? [] : JSON.parse(t);
    let e = "";
    let a = document.getElementById("addedtasklist");

    taskObj.forEach((t, a) => {
        let taskCompleteValue = t.completeStatus
            ? `<td class="completed">${t.task_name}</td>`
            : `<td>${t.task_name}</td>`;
        e += `
        <tr>
            <th scope="row">${a + 1}</th>
            ${taskCompleteValue}
            <td>
                <button type="button" onclick="edittask(${a})" class="text-primary">
                    <i class="fa fa-edit me-1"></i>Edit
                </button>
            </td>
            <td>
                <button type="button" class="text-success" id="${a}">
                    <i class="fa fa-check-square me-1"></i>Completed
                </button>
            </td>
            <td>
                <button type="button" onclick="deleteitem(${a})" class="text-danger">
                    <i class="fa fa-trash me-1"></i>Delete
                </button>
            </td>
        </tr>`;
    });

    a.innerHTML = e;
}

function edittask(t) {
    let e = document.getElementById("saveindex");
    let a = document.getElementById("addtaskbtn");
    let s = document.getElementById("savetaskbtn");

    e.value = t;
    let l = JSON.parse(localStorage.getItem("localtask"));
    addtaskinput.value = l[t].task_name;

    a.style.display = "none";
    s.style.display = "block";
}

addtaskbtn.addEventListener("click", function () {
    let addtaskinputval = addtaskinput.value.trim();

    if (addtaskinputval !== "") {
        let t = localStorage.getItem("localtask");
        let taskObj = t === null ? [] : JSON.parse(t);

        taskObj.push({ task_name: addtaskinputval, completeStatus: false });
        localStorage.setItem("localtask", JSON.stringify(taskObj));

        addtaskinput.value = "";
    }

    showtask();
});

let savetaskbtn = document.getElementById("savetaskbtn");

function deleteitem(t) {
    let e = JSON.parse(localStorage.getItem("localtask"));
    e.splice(t, 1);
    localStorage.setItem("localtask", JSON.stringify(e));
    showtask();
}

savetaskbtn.addEventListener("click", function () {
    let t = document.getElementById("addtaskbtn");
    let e = JSON.parse(localStorage.getItem("localtask"));
    let a = document.getElementById("saveindex").value;

    for (keys in e[a]) {
        if (keys === "task_name") {
            e[a].task_name = addtaskinput.value;
        }
    }

    savetaskbtn.style.display = "none";
    t.style.display = "block";

    localStorage.setItem("localtask", JSON.stringify(e));
    addtaskinput.value = "";
    showtask();
});

let addedtasklist = document.getElementById("addedtasklist");

addedtasklist.addEventListener("click", function (t) {
    let e = JSON.parse(localStorage.getItem("localtask"));
    let a = t.target;

    if (a.classList.contains("text-success")) {
        let s = a.getAttribute("id");
        for (keys in e[s]) {
            if (keys === "completeStatus") {
                e[s].completeStatus = !e[s].completeStatus;
            }
        }

        localStorage.setItem("localtask", JSON.stringify(e));
        showtask();
    }
});

let deleteallbtn = document.getElementById("deleteallbtn");

deleteallbtn.addEventListener("click", function () {
    let t = document.getElementById("savetaskbtn");
    let e = document.getElementById("addtaskbtn");

    let a = localStorage.getItem("localtask");
    let s = a === null ? [] : JSON.parse(a);

    s = [];
    t.style.display = "none";
    e.style.display = "block";

    localStorage.setItem("localtask", JSON.stringify(s));
    showtask();
});

let searchtextbox = document.getElementById("searchtextbox");

searchtextbox.addEventListener("input", function () {
    Array.from(document.querySelectorAll("tr")).forEach(function (t) {
        let e = t.getElementsByTagName("td")[0]?.innerText || "";
        let a = new RegExp(searchtextbox.value, "gi");

        if (e.match(a)) {
            t.style.display = "table-row";
        } else {
            t.style.display = "none";
        }
    });
});
