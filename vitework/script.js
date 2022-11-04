const Theme = {
  Toast: {
    "--bgTopColor": "#f6e8d8",
    "--bgMidColor": "#d09050",
    "--bgBottomColor": "#782511",
    "--barColor": "#e0b781",
  },
  Avocado: {
    "--bgTopColor": "#f9f5b6",
    "--bgMidColor": "#bad149",
    "--bgBottomColor": "#123512",
    "--barColor": "#702c18",
  },
};


const DOM = {
  root: document.documentElement,
};

function changeTheme(theme) {
  Object.keys(theme).forEach(function(key) {
    DOM.root.style.setProperty(key, theme[key])
 });
}

changeTheme(Theme.Avocado)
