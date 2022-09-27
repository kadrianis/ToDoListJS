// La vue : un seul objet
const view = {
  DOM_button_add: document.getElementsByName("add")[0],
  DOM_button_undel: document.getElementsByName("undel")[0],
  DOM_title: document.getElementById("title"),
  DOM_priority: document.getElementById("priority"),
  DOM_category: document.getElementById("category"),
  DOM_list_ul: document.getElementsByTagName("ul")[0]
}

// Initialisation de la vue

// Ajoute une toDo à la vue
view.add = function (toDo) {
  // Crée une balise li
  let li = document.createElement("li");
  // Garde le lien avec l'objet doDo qui a affiché
  li.toDo = toDo;
  // Crée une balise p
  let p = document.createElement("p");
  // Crée du texte
  let txt = document.createTextNode(toDo.title);
  // L'ajoute à p
  p.appendChild(txt);
  // Ajoute à li
  li.appendChild(p);

  //-------------------------------------------------//
  let sp_cat = document.createElement("span");
  let txt_category = document.createTextNode(toDo.category);
  sp_cat.className = "category";
  sp_cat.appendChild(txt_category);
  li.appendChild(sp_cat);
  //-------------------------------------------------//
  let sp_pr = document.createElement("span");
  let txt_priority = document.createTextNode(toDo.priority);
  sp_pr.className = "priority";
  sp_pr.appendChild(txt_priority);
  li.appendChild(sp_pr);
  //-------------------------------------------------//
  let button_valid = document.createElement("button");
  let txt_button  = document.createTextNode("\u00D7");
  button_valid.type="button"
  button_valid.name="del"

  button_valid.appendChild(txt_button);
  li.appendChild(button_valid);
  //-------------------------------------------------//
  this.DOM_list_ul.appendChild(li);
  //-------------------------------------------------//

}
