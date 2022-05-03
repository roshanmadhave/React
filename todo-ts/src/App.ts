import { CreateTodo } from "./Classes/CreateTodo"
import { CreateModel } from "./Model/todo.interface"
import { HasFormatter } from "./Model/hashFormatter.interface"
import { ListTemplate } from "./Classes/ListTodo"


window.onload = () => {
    const btnCreateTodo = document.getElementById("btnCreateTodo") as HTMLButtonElement
    const txtId = document.getElementById("txtId") as HTMLInputElement
    const txtTitle = document.getElementById("txtTitle") as HTMLInputElement
    const txtBody = document.getElementById("txtBody") as HTMLInputElement
    const uList = document.getElementById("list") as HTMLUListElement
    const renderList = new ListTemplate(uList);
    // const btnUpdate = document.getElementById("btnUpdate") as HTMLButtonElement

    btnCreateTodo.addEventListener("click", (event : Event) => {
        event.preventDefault();

        let todo : CreateModel = {

            id : txtId.value,
            title : txtTitle.value,
            body : txtBody.value
        }
            let doc : HasFormatter;
            doc = new CreateTodo(todo)
            renderList.render(doc)
    })

}