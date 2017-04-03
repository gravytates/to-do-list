//---------------------------------------------------business logic
function Task(name, date, time, supplies, notes) {
    this.name = name;
    this.date = date;
    this.time = time;
    this.supplies = supplies;
    this.notes = notes;
}

Task.prototype.nameDate = function() {
  return this.name + ", complete by: " + this.date;
}

Task.prototype.hideTask = function() {
  this.hide()
}



//---------------------------------------------------user interface logic
$(document).ready(function() {
  $("form#new-to-do").submit(function(e) {
    e.preventDefault();

    var inputName = $("#new-task-name").val();
    var inputDate = $("#new-date").val();
    var inputTime = $("#new-time").val();
    var inputSupplies = $("#new-supplies").val();
    var inputNotes = $("#new-notes").val();

    var newTask = new Task(inputName, inputDate, inputTime, inputSupplies, inputNotes);

    $("#tasks").append("<li><label> <br> <input type='checkbox' name='task' value='newTask'> <span class='tasks'>" + newTask.nameDate() + "</span> </label><br><div class='remove'><button class='btn btn-danger'>Remove Task</button></div></li>");

    $(".tasks").last().click(function(){
      $("#show-tasks").toggle();
      $("#show-tasks h2").text(newTask.name);
      $(".taskName").text(newTask.name);
      $(".date").text(newTask.date);
      $(".time").text(newTask.time);
      $(".supplies").text(newTask.supplies);
      $(".notes").text(newTask.notes);
    });

    $(".remove").last().click(function(){
      $(this).parent().remove();
    });


    $("#new-task-name").val("");
    $("#new-date").val("");
    $("#new-time").val("");
    $("#new-supplies").val("");
    $("#new-notes").val("");
  });
});
