// const { createElement } = require("react")

const form = document.getElementById("form")
const input = document.getElementById("input")
const list = document.getElementById("list")

let tasks = [

    ]
// Галочка
list.addEventListener("click", event => {
    if (!event.target.classList.contains("edit")) return

    const li = event.target.closest("li")
    const id = Number(li.dataset.id)

    const task = tasks.find(task => task.id === id)

    const newTitle = prompt("Введите новое название задачи", task.title)

    if (newTitle === null || !newTitle.trim()) return

    task.title = newTitle.trim()

    render()
})
// Добавление
form.addEventListener("submit", event => {
    event.preventDefault()

    const title = input.value.trim()

    if (!title) return

    tasks.push({
        id: Date.now(),
        title: title,
        done: false
    })

    render()
    input.value = ""
    console.log(tasks)
})
// Удаление
list.addEventListener("click", event => {
    if (!event.target.classList.contains("delete")) return

    const li = event.target.closest("li")
    const id = Number(li.dataset.id)

    tasks = tasks.filter(task => task.id !== id)

    render()
})
// Меняние
list.addEventListener("change", event => {
    if (!event.target.classList.contains("toggle-input")) return

    const li = event.target.closest("li")
    const id = Number(li.dataset.id)

    const task = tasks.find(task => task.id === id)

    task.done = event.target.checked

    render()
})



function render() {
    list.innerHTML = ""

    tasks.forEach(task => {
        const li = document.createElement("li")
        li.dataset.id = task.id

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = task.done
        checkbox.className = "toggle-input"

        const span = document.createElement("span")
        span.textContent = task.title

        if (task.done) {
            li.classList.add("done")
        }

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Удалить"
        deleteBtn.className = "delete"

        const editBtn = document.createElement("button")
        editBtn.textContent = "Изменить"
        editBtn.className = "edit"

        li.append(checkbox, span, editBtn,deleteBtn)
        list.append(li)
    })
}