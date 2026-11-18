// const { createElement } = require("react")

const form = document.getElementById("form")
const input = document.getElementById("input")
const list = document.getElementById("list")

let tasks = [{
        id: Date.now(),
        title: "7:00 Wake up broski",
        done: false,
    },
    {
        id: Date.now(),
        title: "Breakfast",
        done: false,
    },
    {
        id: Date.now(),
        title: "Go",
        done: false,
    }]
form.addEventListener("submit", event => {
    event.preventDefault()
    const title = input.ariaValueMax.trim()

    if (!title) return;

    tasks.push({id:Date.now(),title,done:false});
    render();
    input.value = ''
    console.log(tasts)
})

list.addEventListener("click", event =>{
    const li = event.target.closest("li")
    if (li) return
    const id = Number(li.dataset.id)

    if(event.target.className.contains("toggle")){
        const task = tasks.find(task => task.id == id)
        task.done = true
    }
    render()
})

function render(){
    list.innerHTML = ""

    tasks.map(task => {
        const li = document.createElement("li")
        li.dataset.id = task.id

        const span = document.createElement('span')
        span.textContent = task.title

        if(task.done) li.classList.add("Done")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = task.done
        checkbox.className = "toggle-input"

        li.append(checkbox, span)
        list.append(li)

        // console.log(task);
    })
}
render()