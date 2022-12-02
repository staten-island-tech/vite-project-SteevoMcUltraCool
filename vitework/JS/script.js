import { GS } from "./tates.js";
let GrandSelection = GS;
import { Theme } from "./themes.js";
const DOM = {
  root: document.documentElement,
  TDDM: document.getElementById("ThemeDropDownMenu"),
  ThemeMenuSelector: document.getElementById("ThemeMenuIcon"),
  mommy: document.getElementById("mommy"),
};

let currentTheme = Theme["Basic Light"];
const themeChangeEvent = new Event("changeTheme", {
  bubbles: true,
  cancelable: true,
  composed: false,
});
function changeTheme(theme) {
  currentTheme = theme;
  Object.keys(theme).forEach(function (key) {
    DOM.root.style.setProperty(key, theme[key]);
  });
}

changeTheme(currentTheme);

function loadThemeDropDownMenu() {
  Object.keys(Theme).forEach((key) => {
    let newDIV = document.createElement("div");
    newDIV.className = "themeBu";
    newDIV.onclick = function () {
      changeTheme(Theme[key]);
    };
    newDIV.onmousedown = function () {
      let bgColor = currentTheme["--bgBottomColor"];
      newDIV.style.backgroundColor = bgColor;
    };
    newDIV.onmouseup = function () {
      newDIV.style.backgroundColor = "var(--bgMidColor)";
    };
    newDIV.onmouseleave = function () {
      newDIV.style.backgroundColor = "var(--bgMidColor)";
    };
    newDIV.innerHTML = key;
    DOM.TDDM.appendChild(newDIV);
  });
}
loadThemeDropDownMenu();
function adjustTDDMposition() {
  let x = DOM.ThemeMenuSelector.getBoundingClientRect().left;
  DOM.TDDM.style.setProperty("--x", `${x - 25}px`);
  DOM.mommy.style.height = `${window.innerHeight - 110}px`;
}
adjustTDDMposition();
window.onresize = adjustTDDMposition;
function boolToForSale(boolean) {
  if (boolean) {
    return '<span class="good">Up for Sale. </span>';
  }
  return '<span class="bad">Not Purchasable </span>';
}
function loadTateCards(filterBy) {
  filterBy =
    filterBy ||
    function () {
      return true;
    };
  let mommySTR = "";
  let LoadCardToString = function (card) {
    mommySTR = `${mommySTR} 
    <div class="TC">
      <h3>${card.Display.Header}</h3>
      <div class="stats">
        <div class="image" style="background-image:${card.Display.Image}"></div>
        <div class="text">
          <p>Price: <span class="pricetag">$${card.RFPData.Price}</span></p>
          <p>Created On: ${card.RFPData.CreatedOn.toString()}</p>
          <p>${boolToForSale(card.RFPData.ForSale)}</p>
        </div>
      </div>
      <p>${card.Display.Bio}</p>
    </div>
    `;
  };
  GrandSelection.filter(filterBy).forEach(LoadCardToString);
  DOM.mommy.innerHTML = mommySTR;
}
loadTateCards();
let ForSaleFilter = false;
function toggleForSaleFilter() {
  ForSaleFilter = !ForSaleFilter;
  if (ForSaleFilter) {
    return loadTateCards(function (value) {
      return value.RFPData.ForSale;
    });
  } else {
    return loadTateCards(function () {
      return 0 == 0;
    });
  }
}
