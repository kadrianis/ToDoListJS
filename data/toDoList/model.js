// title: string, description de ce qu'il faut faire
// category: la catégorie, une chaine
// priority

//---------------------------------------------------------------------------------------//

class ToDo {
  constructor(title,category="Maison",priority=0) {
    this.title = title;
    this.category = category;
    this.priority = priority;
    this.state = State.created;
    // Ajoute à la liste
    toDoList.push(this);
  }
}

//---------------------------------------------------------------------------------------//


// Etat de chaque tâche
const State = {
  created: "created",
  active: "active",
  done: "done"
}

// Une ToDo list est composée de taches à faire
// Chaque tâche et un objet ToDo

//---------------------------------------------------------------------------------------//

class ToDoList {
  constructor() {
    // Vide la liste des toDo
    this.list = []
    // Vide la liste des toDo supprimés
    this.listDeleted = []
  }

  get length() {
  // Raccourci sur la taille de la liste
    return this.list.length;
  }

  push(toDo) {
  // Ajout d'une tâche à la liste
  this.list.push(toDo);
  console.log("push fonctionne");
  }

  // Supprime la tâche de la liste
  del(toDo) {  // avec l'aide de badis
    this.list.splice(this.list.indexOf(toDo), 1);
    this.listDeleted.push(toDo);
  }

  // annule la dernière suppression d'une tâche
  // Retourne la tâche qui a été retrouvée
  undel() {// avec une legeres aide de badis 
    let toDo = this.listDeleted[this.listDeleted.length-1];
    this.listDeleted.pop();
    this.list.push(toDo);
    return toDo;
  }
}

// Crée l'instance unique
toDoList = new ToDoList();
