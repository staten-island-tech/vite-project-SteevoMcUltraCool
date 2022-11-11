const Theme = {
  "Basic Light": {
    "--bgTopColor": "#e8e8e8",
    "--bgMidColor": "#dfdfdf",
    "--bgBottomColor": "#cecece",
    "--barColor": "#dddddd",
    "--barText": "#020202",
    "--fontColor": "#000",
    "--cardBorder": "#999",
    "--boxShadow": "#000"
  },
  "Basic Dark": {
    "--bgTopColor": "#010101",
    "--bgMidColor": "#121212",
    "--bgBottomColor": "#262626",
    "--barColor": "#272727",
    "--barText": "#f9f9f9",
    "--fontColor": "#EAEAEA",
    "--cardBorder": "#bbb",
    "--boxShadow": "#d2d2d2"
  },
  Toast: {
    "--bgTopColor": "#f6e8d8",
    "--bgMidColor": "#d09050",
    "--bgBottomColor": "#682511",
    "--barColor": "#EFD2A8",
    "--barText": "#332511",
    "--fontColor": "#000",
    "--cardBorder": "#522714",
    "--boxShadow": "#181002"
  },
  Avocado: {
    "--bgTopColor": "#f9f5b6",
    "--bgMidColor": "#bad149",
    "--bgBottomColor": "#123512",
    "--barColor": "#602c18",
    "--barText": "#bfd74b",
    "--fontColor": "#eee",
    "--cardBorder": "#bad149",
    "--boxShadow": "#082008"
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
      "url(https://talksport.com/wp-content/uploads/sites/5/2022/08/Screenshot-2022-08-05-172052.jpg?strip=all&w=705&quality=40)",
      "Our renouwned kickboxing world champion strikes hard and fast. What an incredible image!",
    ],
    [149, new _Date(8, 12, 2022), true],
    ["0xTFT2409012", "0xUPD7614801"]
  ),
  new TateCard(
    [
      "Queen Andrew",
      "url(https://img.buzzfeed.com/buzzfeed-static/static/2022-08/17/19/asset/4ff0a073fb14/sub-buzz-1076-1660765272-1.png?resize=625:430)",
      "OMG SLAYYY QUEEN. This immaculate image of Andrew Tate is just so STUNNING",
    ],
    [2000, new _Date(3, 26, 2022), false],
    ["0xTFT1308216", "0xUPD7614804"]
  ),
  new TateCard(
    [
      "SUS TATE",
      "url(https://www.famousbirthdays.com/headshots/andrew-tate-3.jpg)",
      "Andrew Tate lookin SUS",
    ],
    [9999, new _Date(9, 20, 2022), true],
    ["0xTFT1308217", "0xUPD7614805"]
  ),
  new TateCard(
    [
      "Fish-Face Tate",
      "url(https://th.bing.com/th/id/OIP.tmklL3kJHJ-ESviQmVv5lQHaDy?pid=ImgDet&rs=1)",
      "Andrew tate spittin facts and lookin cute",
    ],
    [16730, new _Date(9, 18, 2022), false],
    ["0xTFT1308218", "0xUPD7614804"]
  ),
  new TateCard(
    [
      "Cigar Tate",
      "url(https://styles.redditmedia.com/t5_3yxceo/styles/communityIcon_9563wn17ksh61.png?width=256&s=dbbdba0368bf643ce51365af9da0738128e8e3d4)",
      "Like a boss",
    ],
    [1972854, new _Date(10, 18, 2022), true],
    ["0xTFT1308228", "0xUPD7614826"]
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
  DOM.mommy.style.height = `${window.innerHeight - 110}px`
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
loadTateCards(function(){return 0==0});
let ForSaleFilter = false
function toggleForSaleFilter(){
  ForSaleFilter = !ForSaleFilter
  if (ForSaleFilter) {
    return loadTateCards(function(value){return value.RFPData.ForSale})
  }else{
    return loadTateCards(function(){return 0==0});
  }
}
