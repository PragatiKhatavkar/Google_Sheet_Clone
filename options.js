const onFocusCellID = document.getElementById("active_cell");
const form = document.getElementById("form");

let activeElement = null;

let state = {};

const defaultProperties = {
    font_family: "arial",
    fontSize: 16,
    bold: false,
    italic: false,
    underline: false,
    textcolor: "#000000",
    cellcolor: "#ffffff",
    textAlign: "left"
}

function onFocusCell(event){
    activeElement = event.target;
    let focusedCell = event.target.id;
    onFocusCellID.innerText = focusedCell;

    if(state[focusedCell]){
        onUpdateProperties(state[focusedCell]);
    }
    else{
        onUpdateProperties(defaultProperties);
    }
}

function onUpdateProperties(cellProperties){
    form.font_family.value = cellProperties.font_family;
    form.fontSize.value = cellProperties.fontSize;
    form.bold.checked = cellProperties.bold;
    form.italic.checked = cellProperties.italic;
    form.underline.checked = cellProperties.underline;
    form.textcolor.value = cellProperties.textcolor;
    form.cellcolor.value = cellProperties.cellcolor;
    form.textAlign.value = cellProperties.textAlign;
}

function onFormChange(){
    if(onFocusCellID.innerText === "null"){
        alert("Please select the cell");
        return; 
    }

    let currentCellProperties = {
        font_family: form.font_family.value,
        fontSize: form.fontSize.value,
        bold: form.bold.checked,
        italic: form.italic.checked,
        underline: form.underline.checked,
        textcolor: form.textcolor.value,
        cellcolor: form.cellcolor.value,
        textAlign: form.textAlign.value
    }
    
    applyPropertiesOnCell(currentCellProperties);
    state[activeElement.id] = {...currentCellProperties , value:  activeElement.innerText};
}

function applyPropertiesOnCell(cellProperties){
    activeElement.style.fontFamily = cellProperties.font_family;

    if(cellProperties.fontSize > "16"){
        activeElement.style.fontSize = `${cellProperties.fontSize}px`;
        onIncreaseHeight();
    }
    else{
        activeElement.style.fontSize = `${cellProperties.fontSize}px`;
    }

    activeElement.style.fontWeight = cellProperties.bold ? "bold" : "normal";
    activeElement.style.fontStyle = cellProperties.italic ? "italic" : "normal";
    activeElement.style.textDecoration = cellProperties.underline ? "underline" : "none";
    activeElement.style.color = cellProperties.textcolor;
    activeElement.style.backgroundColor = cellProperties.cellcolor;
    //activeElement.style.textAlign = cellProperties.textAlign;
}

function onIncreaseHeight(){
    let sr_no = "";
    for(i=1;i<activeElement.id.length;i++){
        sr_no += activeElement.id[i];
    }    

    let clientHeight = activeElement.style.fontSize;

    const snoContainer = document.getElementById(sr_no);
    snoContainer.style.height = clientHeight;

    for(i=1;i<=26;i++){
        let headerName = String.fromCharCode(64 + i) + sr_no;
        let incHeightElement = document.getElementById(headerName);        
        incHeightElement.style.height = clientHeight;
    }   
}

