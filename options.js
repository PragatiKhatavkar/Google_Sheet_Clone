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
    text_align: left
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
    form.text_align.value = cellProperties.text_align;
}

function onFormChange(){
    if(onFocusCellID.innerText === "null"){
        alert("hello");
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
        text_align: form.text_align.value
    }
    
    applyPropertiesOnCell(currentCellProperties);

    state[activeElement.id] = {...currentCellProperties , value:  activeElement.innerText};
    console.log(state);
}

function applyPropertiesOnCell(cellProperties){
    activeElement.style.font_family = cellProperties.font_family;
    activeElement.style.textcolor = cellProperties.textcolor;

    //need to add few more properties, changes are not reflecting to cell
}

