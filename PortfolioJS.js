



filterSelection("all")

function filterSelection(filterName) {
    var project, i;
    var count = 0;
    project = document.getElementsByClassName("project")
    if (filterName == "all") {
       filterName = "";
       count = 3;
       for (i = 0; i < 3; i++) {
          removeClass(project[i], "show");
        }
    }

    for (i = count; i < project.length; i++) {
        removeClass(project[i], "show");
        if (project[i].className.indexOf(filterName) > -1)
            addClass(project[i], "show")
    }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }

var btnContainer = document.getElementById("myFilterContainer");
var btns = btnContainer.getElementsByClassName("filterbutton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}
