const Theme = {
  "Basic Light": {
    "--bgTopColor": "#e8e8e8",
    "--bgMidColor": "#dfdfdf",
    "--bgBottomColor": "#cecece",
    "--barColor": "#dddddd",
    "--barText": "#020202",
    "--fontColor": "#000",
    "--cardBorder": "#999",
  },
  "Basic Dark": {
    "--bgTopColor": "#010101",
    "--bgMidColor": "#121212",
    "--bgBottomColor": "#262626",
    "--barColor": "#404040",
    "--barText": "#f9f9f9",
    "--fontColor": "#EAEAEA",
    "--cardBorder": "#bbb",
  },
  Toast: {
    "--bgTopColor": "#f6e8d8",
    "--bgMidColor": "#d09050",
    "--bgBottomColor": "#682511",
    "--barColor": "#EFD2A8",
    "--barText": "#332511",
    "--fontColor": "#000",
    "--cardBorder": "#522714",
  },
  Avocado: {
    "--bgTopColor": "#f9f5b6",
    "--bgMidColor": "#bad149",
    "--bgBottomColor": "#123512",
    "--barColor": "#602c18",
    "--barText": "#bfd74b",
    "--fontColor": "#000",
    "--cardBorder": "#bad149",
  },
};
function sleep(delayMs) {
  let start = new Date().getTime();
  while (new Date().getTime() < start + delayMs) {}
  return "hi";
}
class _Date {
  constructor(month, day, year) {
    this.M = month;
    (this.D = day), (this.Y = year);
  }
  youngerThanOE2(_date) {
    if (this.Y == _date.Y) {
      if (this.M == _date.M) {
        return (this.D <= _date.D && true) || false;
      } else {
        return (this.M < _date.M && true) || false;
      }
    } else {
      return (this.Y < _date.Y && true) || false;
    }
  }
  toString() {
    let M = this.M;
    let D = this.D;
    if (this.M < 10) {
      M = `0${this.M}`;
    }
    if (this.D < 10) {
      D = `0${this.M}`;
    }
    return `${M}/${D}/${this.Y}`;
  }
}

class TateCard {
  constructor(QOLArray, RFPArray, TechArray) {
    this.Display = {
      Header: QOLArray[0],
      Image: QOLArray[1],
      Bio: QOLArray[2],
    };
    this.RFPData = {
      //relevant for purchase
      Price: RFPArray[0],
      CreatedOn: RFPArray[1],
      ForSale: RFPArray[2],
    };
    this.Technical = {
      TokenID: TechArray[0],
      OwnerID: TechArray[1],
    };
  }
}

let GrandSelection = [
  //need tp find images for all the cards
  new TateCard(
    [
      "Sunglassed Andrew",
      "url(https://pbs.twimg.com/media/FaiQfW7WAAAAC5x.jpg)",
      "A glorious NFT of Andrew Tate wearing sunglasses. This amazing NFT is worth every penny.",
    ],
    [65, new _Date(6, 22, 2022), true],
    ["0xTFT2323116", "0xUPD7694302"]
  ),
  new TateCard(
    [
      "Kickboxing Andrew",
      "url(https://pbs.twimg.com/media/FaiQfW7WAAAAC5x.jpg)",
      "Our renouwned kickboxing world champion strikes hard and fast. What an incredible image!",
    ],
    [149, new _Date(8, 12, 2022), true],
    ["0xTFT2309012", "0xUPD7614801"]
  ),
];

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
  let bus = document.getElementsByClassName("themeBu");
  Array.prototype.forEach.call(bus, (value) => {
    value.style.transition = "all 0s";
    value.dispatchEvent(themeChangeEvent);
    sleep(10);
    value.style.transition = "all 0.099s";
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
      let bgColor = currentTheme["--bgMidColor"];
      newDIV.style.backgroundColor = bgColor;
    };
    newDIV.onmouseleave = function () {
      let bgColor = currentTheme["--bgMidColor"];
      newDIV.style.backgroundColor = bgColor;
    };
    newDIV.addEventListener("changeTheme", (event) => {
      let bgColor = currentTheme["--bgMidColor"];
      newDIV.style.backgroundColor = bgColor;
    });
    newDIV.innerHTML = key;
    DOM.TDDM.appendChild(newDIV);
  });
}
loadThemeDropDownMenu();
function adjustTDDMposition() {
  let x = DOM.ThemeMenuSelector.getBoundingClientRect().left;
  DOM.TDDM.style.setProperty("--x", `${x - 25}px`);
}
adjustTDDMposition();
window.onresize = adjustTDDMposition;
function boolToForSale(boolean) {
  if (boolean) {
    return "Up for Sale.";
  }
  return "Not purchasable";
}
function loadTateCards(filter) {
  let mommySTR = "";
  let LoadCardToString = function (card) {
    mommySTR = `${mommySTR} 
    <div class="TC">
      <h3>${card.Display.Header}</h3>
      <div class="stats">
        <div class="image" style="background-image:${card.Display.Image}"></div>
        <div class="text">
          <p>Price: ${card.RFPData.Price}</p>
          <p>Created On: ${card.RFPData.CreatedOn.toString()}</p>
          <p>Created On: ${boolToForSale(card.RFPData.ForSale)}</p>
        </div>
        <p>${card.Display.Bio}</p>
      </div>
    </div>
    `;
  };
  GrandSelection.forEach(LoadCardToString);
  DOM.mommy.innerHTML = mommySTR;
}
loadTateCards();
