// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

//timer
function displayTime(){
  var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  timeDisplayEl.text(rightNow);
}


//handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate){
  var projectRowEl = $('<tr>');
//Why not use <th>?
  var projectNameTdEl = $('<td>').addClass('p-2').text(name);

  var projectTypeTdEl = $('<td>').addClass('p-2').text(type);

  var rateTdEl = $('<td>').addClass('p-2').text(hourlyRate);

  var dueDateTdEl = $('<td>').addClass('p-2').text(dueDate);
//what is diff()method?
  var daysToDate = moment(dueDate,'MM/DD/YYYY').diff(moment(),'days');
  var dayLeftTdEl = $('<td>').addClass('p-2').text(daysToDate);

  var totalEarings = calculateTotalEarning(hourlyRate, daysToDate);

  //You can also chain methods onto new lines to keep code clean
  var totalTdEl = $('<td>')
    .addClass('p-2')
    .text('$' + totalEarings);

  var deleteProjectBtn = $('<td>')
    .addClass('p-2 delete-project-btn text-center')
    .text('X')

  //By listing each `<td>` variables as an argument,each will be appended in that order
  projectRowEl.append(

    projectNameTdEl,
    projectTypeTdEl,
    rateTdEl,
    dueDateTdEl,
    dayLeftTdEl,
    totalTdEl,
    deleteProjectBtn,
  );

  projectDisplayEl.append(projectRowEl);

  projectModalEl.modal('hide');

}

function calculateTotalEarning(rate, days){
  var total = rate * 8 *days;
  return total;

}

function handleDeleteProject(event){
  console.log(event.target);

  var btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

//handle project from submission
function handleProjectFormSubmit(event){
  event.preventDefault();

  //why use trim()?
  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  projectFormEl[0].reset();
}

//When click submit, handleProjectFormSubmit function will sent all input value to projectFormEl
projectFormEl.on('submit', handleProjectFormSubmit);
//
projectDisplayEl.on('click', 'delete-project-btn', handleDeleteProject);
dueDateInputEl.datepicker({ minDate: 1});

setInterval(displayTime, 1000);







