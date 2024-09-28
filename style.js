const headerContainer = document.getElementById("header");
const snoContainer = document.getElementById("sno");
const editableCells = document.getElementById("editableCells");

function headerCells(){
    for(i=0;i<=26;i++){
        let header_element = document.createElement("div");
        header_element.className = "header_cell";
        if(i !== 0){
            header_element.innerText = String.fromCharCode(64 + i);
        }
        headerContainer.appendChild(header_element);
    }
}

function serialNumber(){
    for(i=1;i<=100;i++){
        let sno_element = document.createElement("div");
        sno_element.className = "sno_cell";
        sno_element.innerText = i;
        snoContainer.appendChild(sno_element);
    }
}

function createRow(headerName){
    let row = document.createElement("div");
    for(i=1;i<=100;i++){
        let bodyCell = document.createElement("div");
        
        bodyCell.contentEditable = true;
        bodyCell.className = "body_cell";
        bodyCell.id = String.fromCharCode(64 + headerName) + i;

        bodyCell.addEventListener("focus" , onFocusCell)

        row.appendChild(bodyCell);
    }
    editableCells.appendChild(row)
}

function mainEditableSection(){
    for(j=1;j<=26;j++){
        createRow(j);
    }
}

serialNumber();
headerCells();
mainEditableSection();