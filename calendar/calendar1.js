window.onload = function () { buildCalendar(); image(nMonth.getMonth()); }

let nMonth = new Date();

let today = new Date();


function buildCalendar() {
    let tbodyCal = document.querySelector(".Calendar > tbody");
    document.getElementById("calYear").innerText = nMonth.getFullYear();
    document.getElementById("calMonth").innerText = nMonth.getMonth() + 1;
    
    while (tbodyCal.rows.length > 0) {
        tbodyCal.deleteRow(tbodyCal.rows.length - 1);
    }

    let firstD = new Date(nMonth.getFullYear(), nMonth.getMonth(), 1);
    let lastD = new Date(nMonth.getFullYear(), nMonth.getMonth() + 1, 0);

    let nRow = tbodyCal.insertRow();

    for (let j = 0; j < firstD.getDay(); j++) {
        let nCol = nRow.insertCell(); 
    }
    for (let nDay = firstD; nDay <= lastD; nDay.setDate(nDay.getDate() + 1)) {
        let nCol = nRow.insertCell();
        nCol.innerText = nDay.getDate();
    
        if (nDay.getDay() == 0) {
            nCol.className = "SUN";
        }
        else if (nDay.getDay() == 6) {
            nCol.className = "SAT";
            nRow = tbodyCal.insertRow();
        }
    }
}

function prev() {   // < 버튼
    nMonth = new Date(nMonth.getFullYear(), nMonth.getMonth() - 1, nMonth.getDate());   // 현재 달을 1 감소
    buildCalendar();
}
function next() {   // > 버튼
    nMonth = new Date(nMonth.getFullYear(), nMonth.getMonth() + 1, nMonth.getDate());   // 현재 달을 1 증가
    buildCalendar();
}

function image(m) {
    let pic;
    if (m === 0) {
        pic = "1월.jpg";
    } else if (m === 1) {
        pic = "2월.jpg"
    } else if (m === 2) {
        pic = "3월.jpg"
    } else if (m === 3) {
        pic = "4월.jpg"
    } else if (m === 4) {
        pic = "5월.jpg"
    } else if (m === 5) {
        pic = "6월.jpg"
    } else if (m === 6) {
        pic = "7월.jpg"
    } else if (m === 7) {
        pic = "8월.jpg"
    } else if (m === 8) {
        pic = "9월.jpg"
    } else if (m === 9) {
        pic = "10월.jpg"
    } else if (m === 10) {
        pic = "11월.jpg"
    } else if (m === 11) {
        pic = "12월.jpg"
    }
    document.getElementById("img").src = pic;
}