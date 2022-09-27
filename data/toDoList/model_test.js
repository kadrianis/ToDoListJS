// Lance le test du modèle
let runTest = function() {
  let expected; // ce qu'on attend dans les tests

  // La liste des ToDo doit être vide au début
  expected = 0;
  if (toDoList.length != expected) {
    throw 'wrong toDoList.length='+toDoList.length+", expected: "+expected;
  }

  // On ajoute une nouvelle tâche, avec une catégorie et une priorité par défaut
  let toDo1 = new ToDo("Vider la poubelle");
  // La liste doit avoir 1 élément
  expected = 1;
  if (toDoList.length != expected) {
    throw 'wrong toDoList.length='+toDoList.length+", expected: "+expected;
  }

  // On ajoute une nouvelle tâche, catégorie Loisir
  let toDo2 = new ToDo("Aller au cinéma","Loisir");
  expected = 2;
  if (toDoList.length != expected) {
    throw 'wrong toDoList.length='+toDoList.length+", expected: "+expected;
  }

  // On ajoute une nouvelle tâche
  let toDo3 = new ToDo("Finir le rapport","Travail");
  expected = 3;
  if (toDoList.length != expected) {
    throw 'wrong toDoList.length='+toDoList.length+", expected: "+expected;
  }

  // Supprime la premier élément
  toDoList.del(toDo1)
  // Il doit en rester 2
  expected = 2;
  if (toDoList.length != expected) {
    throw 'wrong toDoList.length='+toDoList.length+", expected: "+expected;
  }

  // Vérifie  les deux éléments qui restent
  expected = toDo2;
  if (toDoList.list[0] != expected) {
    throw 'wrong toDo at 0: '+toDoList.list[0].title+", expected: "+expected.title;
  }

  expected = toDo3;
  if (toDoList.list[1] != expected) {
    throw 'wrong toDo at 1: '+toDoList.list[1].title+", expected: "+expected.title;
  }

  // Vérifie que la tâche supprimé est dans la liste
  expected = toDo1;
  if (toDoList.listDeleted[0] != expected) {
    throw 'wrong déleted toDo at 0: '+toDoList.list[0].title+", expected: "+expected.title;
  }

  // Annule la suppression
  let toDo = toDoList.undel();
  // Vérifie que la tâche retrouvée est est bien toDo1
  expected = toDo1;
  if (toDoList.list[2] != expected) {
    throw 'wrong toDo at 2: '+toDoList.list[2].title+", expected: "+expected.title;
  }

  return true
}
