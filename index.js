let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let days = document.getElementsByClassName("days");
let prev = document.getElementById("prv");
let nxt = document.getElementById("nxt");
let daysSp;
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("Month");
console.log(currentMonth, currentYear);
showCalendar(currentMonth, currentYear);

class Rectangle {
    constructor(month, year, day, comment) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.comment = comment;
    }
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("d-days");
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;
    let date = 1;
    let fulltext = "";
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                fulltext += '<div class="dd-day"></div>';

            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let counter = 0;
                let content = "";
                if (daysSp != null) {

                    for (let i = 0; i < daysSp.length; i++) {
                        if (daysSp[i].day == date && daysSp[i].year == year && daysSp[i].month == month) {
                            counter += 1;
                            content = daysSp[i].comment;

                            break;
                        }
                    }
                }
                if (counter > 0) {
                    fulltext += `<div class="dayy ee">${date}<p>${content}</p></div>`;
                }
                else {
                    fulltext += `<div class="dayy">${date}</div>`;

                }
                date++;
            }


            tbl.innerHTML = fulltext;
        }
    }
    days = document.getElementsByClassName("dayy");

    for (let i = 0; i < days.length; i++) {
        days[i].addEventListener("click", function () {
          let cnt = 0;
          if (daysSp == null) {
            daysSp = [];
            }
            if(daysSp.length != 0){

              for (let k = 0; k < daysSp.length; k++) {
                if (daysSp[k].day == i+1 && daysSp[k].year == currentYear && daysSp[k].month == currentMonth) {
                  alert(daysSp[k].comment);
                  cnt +=1;
                  break;
                }
                
              }
            }
            
            if(cnt== 0){
              let tt = prompt("Enter Comment")
              daysSp.push(new Rectangle(currentMonth, currentYear, this.innerHTML, tt));
              showCalendar(currentMonth, currentYear);

            }

        });

    }

}
function startPr() {
    let tf = document.getElementById("year");
    let text = "";
    for (let i = 1920; i < 2119; i++) {
        text += `<option value=${i}>${i}</option>`;
    }
    tf.innerHTML = text;
    selectYear.value = currentYear;
}
prev.addEventListener("click", function () {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);

});
nxt.addEventListener("click", function () {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);

});


startPr();