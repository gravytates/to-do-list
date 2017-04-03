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

    $(".tasks").last().click(function(){
      $("#show-tasks").toggle();
      $("#show-tasks h2").text(newTask.name);
      $(".taskName").text(newTask.name);
      $(".date").text(newTask.date);
      $(".supplies").text(newTask.supplies);
      $(".notes").text(newTask.notes);

    });

    $("#new-task-name").val("");
    $("#new-date").val("");
    $("#new-supplies").val("");
    $("#new-notes").val("");
  });
});
