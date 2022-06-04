let plans = JSON.parse(tasks);
console.table(plans);

function updateHTML(arr) {
    document.getElementById("tasklist").innerHTML = "";
    for (let data of arr) {
        if (data.priority <= 1) {
            document.getElementById("tasklist").innerHTML += `

<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <div class="card" ">
        <div class="taskBtn">
            <button type="button" class="btn btn-info btn-sm text-white">Task</button>
            <p><i class='fa fa-bookmark-o'></i>&nbsp<i class='fa fa-ellipsis-v'></i></p>
        </div>
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.task}</h5>
                <p class="card-text">${data.about}.</p>
                <hr>
                <div class="priority">
                <p><i class='fa fa-warning'></i> Priority level<a class="btn-clicks btn btn-success"><span class="result">${data.priority}</span></a></p>
                <p><i class='fa fa-calendar-times-o'></i> Deadline: ${data.deadline}</p>
                <hr>
                </div>
                <div class="buttons">
                    <button type="button" class="btn btn-danger"><i class='fa fa-trash'></i> Delete</button>
                    <button type="button" class="btn btn-success"><i class='fa fa-check-circle'></i> Done</button>
                </div>
            </div>
    </div>
</div>
    `;

            priorityAction();
        }
        if (data.priority >= 2 && data.priority <= 3) {
            document.getElementById("tasklist").innerHTML += `

<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <div class="card" ">
        <div class="taskBtn">
            <button type="button" class="btn btn-info btn-sm text-white">Task</button>
            <p><i class='fa fa-bookmark-o'></i>&nbsp<i class='fa fa-ellipsis-v'></i></p>
        </div>
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.task}</h5>
                <p class="card-text">${data.about}.</p>
                <hr>
                <div class="priority">
                <p><i class='fa fa-warning'></i> Priority level<a class="btn-clicks btn btn-warning"><span class="result">${data.priority}</span></a></p>
                <p><i class='fa fa-calendar-times-o'></i> Deadline: ${data.deadline}</p>
                <hr>
                </div>
                <div class="buttons">
                    <button type="button" class="btn btn-danger"><i class='fa fa-trash'></i> Delete</button>
                    <button type="button" class="btn btn-success"><i class='fa fa-check-circle'></i> Done</button>
                </div>
            </div>
    </div>
</div>
    `;

            priorityAction();
        }

        if (data.priority >= 4) {
            document.getElementById("tasklist").innerHTML += `

<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
<div class="card" ">
    <div class="taskBtn">
        <button type="button" class="btn btn-info btn-sm text-white">Task</button>
        <p><i class='fa fa-bookmark-o'></i>&nbsp<i class='fa fa-ellipsis-v'></i></p>
    </div>
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.task}</h5>
            <p class="card-text">${data.about}.</p>
            <hr>
            <div class="priority">
            <p><i class='fa fa-warning'></i> Priority level<a class="btn-clicks btn btn-danger"><span class="result">${data.priority}</span></a></p>
            <p><i class='fa fa-calendar-times-o'></i> Deadline: ${data.deadline}</p>
            <hr>
            </div>
            <div class="buttons">
                <button type="button" class="btn btn-danger"><i class='fa fa-trash'></i> Delete</button>
                <button type="button" class="btn btn-success"><i class='fa fa-check-circle'></i> Done</button>
            </div>
        </div>
</div>
</div>
`;

            priorityAction();
        }
    }
}

function priorityAction() {
    let importance = document.getElementsByClassName("btn-clicks");
    for (let i = 0; i < importance.length; i++) {
        importance[i].addEventListener("click", function() {
            plans[i].priority++;
            document.getElementsByClassName("result")[i].innerHTML = plans[i].priority;

            var sortedArray = plans.sort((a, b) => b.priority - a.priority);
            updateHTML(sortedArray);
        });
    }
}


updateHTML(plans);
// priorityAction();