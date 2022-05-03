import { CreateTodo } from "./Classes/CreateTodo";
import { ListTemplate } from "./Classes/ListTodo";
window.onload = () => {
    const btnCreateTodo = document.getElementById("btnCreateTodo");
    const txtId = document.getElementById("txtId");
    const txtTitle = document.getElementById("txtTitle");
    const txtBody = document.getElementById("txtBody");
    const uList = document.getElementById("list");
    const renderList = new ListTemplate(uList);
    // const btnUpdate = document.getElementById("btnUpdate") as HTMLButtonElement
    btnCreateTodo.addEventListener("click", (event) => {
        event.preventDefault();
        let todo = {
            id: txtId.value,
            title: txtTitle.value,
            body: txtBody.value
        };
        let doc;
        doc = new CreateTodo(todo);
        renderList.render(doc);
    });
};
