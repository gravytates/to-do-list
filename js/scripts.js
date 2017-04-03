//---------------------------------------------------business logic
function Task(name, date, supplies, notes) {
    this.name = name;
    this.date = date;
    this.supplies = supplies;
    this.notes = notes;
}

Task.prototype.nameDate = function() {
  return this.name + ", complete by: " + this.date;
}



//---------------------------------------------------user interface logic
$(document).ready(function() {
  $("form#new-to-do").submit(function(e) {
    e.preventDefault();

    var inputName = $("#new-task-name").val();
    var inputDate = $("#new-date").val();
    var inputSupplies = $("#new-supplies").val();
    var inputNotes = $("#new-notes").val();

    var newTask = new Task(inputName, inputDate, inputSupplies, inputNotes);

    $("#tasks").append("<li><span class='tasks'>" + newTask.nameDate() + "</span></li>");


  });
});
