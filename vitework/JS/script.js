import { GS } from "./tates.js";
import "../styles/style.css";
let GrandSelection = GS;
import { Theme } from "./themes.js";
const DOM = {
  root: document.documentElement,
  TDDM: document.getElementById("ThemeDropDownMenu"),
  ThemeMenuSelector: document.getElementById("ThemeMenuIcon"),
  mommy: document.getElementById("mommy"),
  bozo: document.getElementById("bozo"),
  bozo2: document.getElementById("bozo2"),
};

let currentTheme = Theme["Basic Light"];

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
let forSaleFilter = false;
let expensiveFilter = false;
function loadTateCards() {
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
  GrandSelection.filter(
    (element) =>
      (!forSaleFilter || element.RFPData.ForSale) &&
      (!expensiveFilter || element.RFPData.Price >= 1000)
  ).forEach(LoadCardToString);
  DOM.mommy.innerHTML = mommySTR;
}
loadTateCards();
function toggleForSaleFilter() {
  forSaleFilter = !forSaleFilter;
  loadTateCards();
}
function toggleExpensiveFilter() {
  expensiveFilter = !expensiveFilter;
  loadTateCards();
}

DOM.bozo.addEventListener("click", toggleForSaleFilter);
DOM.bozo2.addEventListener("click", toggleExpensiveFilter);
