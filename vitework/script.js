const Theme = {
  Toast: {
    "--bgTopColor": "#f6e8d8",
    "--bgMidColor": "#d09050",
    "--bgBottomColor": "#682511",
    "--barColor": "#e0b781",
    "--barText":  "#332511"
  },
  Avocado: {
    "--bgTopColor": "#f9f5b6",
    "--bgMidColor": "#bad149",
    "--bgBottomColor": "#123512",
    "--barColor": "#602c18",
    "--barText":  "#bfd74b"
  },
};


const DOM = {
  root: document.documentElement,
  TDDM: document.getElementById("ThemeDropDownMenu")
};

function changeTheme(theme) {
  Object.keys(theme).forEach(function(key) {
    DOM.root.style.setProperty(key, theme[key])
 });
}




changeTheme(Theme.Avocado)


function loadThemeDropDownMenu() {
  Object.keys(Theme).forEach((key) => {
    let newDIV = document.createElement("div")
    newDIV.onclick = function(){changeTheme(Theme[key])}
    newDIV.onmousedown = function(){newDIV.style.backgroundColor ="lightgray"}
    newDIV.onmouseup = function(){newDIV.style.backgroundColor ="rgb(225,225,225)"}
    newDIV.onmouseleave = function(){newDIV.style.backgroundColor ="rgb(225,225,225)"}

    newDIV.innerHTML = key
    DOM.TDDM.appendChild(newDIV)
  } )
}
loadThemeDropDownMenu()