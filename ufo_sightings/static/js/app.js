// from data.js
var tableData = data;

// YOUR CODE HERE!
var whatevs = document.getElementById("ufo-table")
var whatevs_body = whatevs.getElementsByTagName("tbody")[0];

mTableBody = ""

//loop
//  (start=___; condition.___stop__ ; jump)
var i;
for (i = 0; i < tableData.length ; i++) {
  mTableRow = "<tr>"
  data_dict = tableData[i]

  mTableRow = mTableRow + "<td>" + data_dict["datetime"] + "</td>"
  mTableRow = mTableRow + "<td>" + data_dict["city"] + "</td>"
  mTableRow = mTableRow + "<td>" + data_dict["state"] + "</td>"
  mTableRow = mTableRow + "<td>" + data_dict["country"] + "</td>"
  mTableRow = mTableRow + "<td>" + data_dict["shape"] + "</td>"
  mTableRow = mTableRow + "<td>" + data_dict["durationMinutes"] + "</td>"
  mTableRow = mTableRow + "<td>" + data_dict["comments"] + "</td>"

  mTableRow = mTableRow + "</tr>"
  mTableBody = mTableBody + mTableRow
}

whatevs_body.innerHTML = mTableBody

function filterDate() {
    inputForm = document.getElementById("datetime");
    inputDate = inputForm.value

    inputForm = document.getElementById("city");
    inputCity = inputForm.value

    inputForm = document.getElementById("state");
    inputState = inputForm.value

    inputForm = document.getElementById("country");
    inputCountry = inputForm.value

    inputForm = document.getElementById("shape");
    inputShape = inputForm.value


    mTableBody = ""

    //loop
    //  (start=___; condition.___stop__ ; jump)
    // the "!" means "not" .. so != means not equale to.
    var i;
    for (i = 0; i < tableData.length ; i++) {
      data_dict = tableData[i]

      if(data_dict["datetime"] != inputDate && inputDate!=""){
        continue
      }
      if(data_dict["city"] != inputCity && inputCity!=""){
        continue
      }
      if(data_dict["state"] != inputState && inputState!=""){
        continue
      }
      if(data_dict["country"] != inputCountry && inputCountry!=""){
        continue
      }
      if(data_dict["shape"] != inputShape && inputShape!=""){
        continue
      }

      mTableRow = "<tr>"

      mTableRow = mTableRow + "<td>" + data_dict["datetime"] + "</td>"
      mTableRow = mTableRow + "<td>" + data_dict["city"] + "</td>"
      mTableRow = mTableRow + "<td>" + data_dict["state"] + "</td>"
      mTableRow = mTableRow + "<td>" + data_dict["country"] + "</td>"
      mTableRow = mTableRow + "<td>" + data_dict["shape"] + "</td>"
      mTableRow = mTableRow + "<td>" + data_dict["durationMinutes"] + "</td>"
      mTableRow = mTableRow + "<td>" + data_dict["comments"] + "</td>"

      mTableRow = mTableRow + "</tr>"
      mTableBody = mTableBody + mTableRow
    }

    whatevs_body.innerHTML = mTableBody

}
