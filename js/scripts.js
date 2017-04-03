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


    //append task name and date with checkbox and button to indicate task accomplished and complete in unordered list. strike-through function in progress.
    $("#tasks").append("<li><label><br> <input type='checkbox' name='task' value='newTask'><span class='tasks'>"
    + newTask.nameDate()
    + "</span></label><br><div class='remove'><button class='btn btn-danger'>Remove Task</button></div></li><hr>");

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

// target checkbox, go up a level to parent (li?), then back down to the spans that we're originally concerned with
    $("input:checkbox[name=task]").last().click(function() {
      $(this).parent().children("span").toggleClass("strike-through");
    });

    $("#new-task-name").val("");
    $("#new-date").val("");
    $("#new-time").val("");
    $("#new-supplies").val("");
    $("#new-notes").val("");
  });
});
