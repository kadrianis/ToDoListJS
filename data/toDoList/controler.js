
/************************************************************************/
// Callbacks du contrôleur
/************************************************************************/

let onClickAdd = function (event) {

  let t = document.getElementById("title").value;
  let c = document.getElementById("category").value;
  let p = document.getElementById("priority").value;
  view.add(new ToDo(t, c, p));
  console.log("Click sur le bouton 'add'");
};


let onClickDel = function (event) {
  // a faire : Quand on clique sur le bouton del (la croix) d'une tâche
  console.log(event.target);
  if (event.target.tagName == "BUTTON") {
    // s'assurer qu'on a cliqué sur le bon endoit
    let li = event.target.parentNode;
    //j'ai le parent du boutton surlequel je viens de cliquer 
    toDoList.del(li.toDo);
    // supprime du tableau
    li.remove();
    // supprimer de l'interface

    /*for (let i = 0; i < toDoList.list.length; i++) {
      if (toDoList.list[i].title === nom_du_todo_selected)
        ToDoList.del(ToDoList.list[i])
    }*/

  }
}


let onclickUndel = function (event) {
  view.add(toDoList.undel());
}



let onclickToDo = function (event) {
  if (event.target.tagName != "BUTTON") {

    let li = event.target.parentNode;
    //j'ai le tout sauf le boutton avec crois  

    if (li.classList.contains("created")) { // test si le todo vient d etre crée
      li.classList.remove("created");
      li.classList.add("active");
    } else if (li.classList.contains("active")) {// test si le todo est en mode actif
      li.classList.remove("active");
      li.classList.add("done");
    } else if (li.classList.contains("done")) {// test si le todo est en mode done
      li.classList.remove("done");
      li.classList.add("active");
    } else {
      li.classList.add("active");
      console.log(li.p);
    }
  }
}




/************************************************************************/
// Acroche les callbacks à la vue
/************************************************************************/
view.DOM_button_add.addEventListener("click", onClickAdd); // boutton ajouter 
view.DOM_list_ul.addEventListener("click", onClickDel);// liste 

//------Ajouter par Anis:moi -------------------//
view.DOM_button_undel.addEventListener("click", onclickUndel);
view.DOM_list_ul.addEventListener("click", onclickToDo);

//view.DOM_title.addEventListener("click", onClickDel);
//view.DOM_priority.addEventListener("click", onClickDel);
//view.DOM_category.addEventListener("click", onClickDel);


//--------------------------------------------------------------------//


