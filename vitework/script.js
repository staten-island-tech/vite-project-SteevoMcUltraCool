const Theme = {
  "Basic Light": {
    "--bgTopColor": "#e8e8e8",
    "--bgMidColor": "#dfdfdf",
    "--bgBottomColor": "#cecece",
    "--barColor": "#dddddd",
    "--barText":  "#020202"
  },
  "Basic Dark": {
    "--bgTopColor": "#010101",
    "--bgMidColor": "#121212",
    "--bgBottomColor": "#262626",
    "--barColor": "#404040",
    "--barText":  "#f9f9f9"
  },
  Toast: {
    "--bgTopColor": "#f6e8d8",
    "--bgMidColor": "#d09050",
    "--bgBottomColor": "#682511",
    "--barColor": "#EFD2A8",
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
class _Date {
  constructor(month, day, year) {
    this.M = month
    this.D = day,
    this.Y = year
  }
  youngerThanOE2(_date){ 
    if (this.Y == _date.Y) {
      if (this.M == _date.M) {
        return ((this.D <= _date.D) && true) || false

      } else{
        return ((this.M < _date.M) && true) || false
      }
    } else{
      return ((this.Y < _date.Y) && true) || false
    }
  }
  toNumber() { //not 100% accurate but not horrible.
    return (this.Y * 365) + ((this.M-1) * 30) + this.D
  }
}

class TateCard {
  constructor(QOLArray,RFPArray,TechArray) {
    this.QOLStats = {
      Header: QOLArray[0],
      Image: QOLArray[1],
      Bio: QOLArray[2],
    }
    this.RFPData = { //relevant for purchase
      Price: RFPArray[0],
      CreatedOn: RFPArray[1],
      ForSale: RFPArray[2],
    }
    this.Technical = {
      TokenID: TechArray[0],
      OwnerID: TechArray[1],
    }
  }
}

let GrandSelection = [ //need tp find images for all the cards
  new TateCard(
    ["Sunglassed Andrew","url(https://pbs.twimg.com/media/FaiQfW7WAAAAC5x.jpg)","A glorious NFT of Andrew Tate wearing sunglasses. This amazing NFT is worth every penny." ],
    [65, new _Date(6, 22, 2022), true] , ["0xTFT2323116","0xUPD7694302"] 
  ),
  new TateCard(
    ["Kickboxing Andrew","url(https://pbs.twimg.com/media/FaiQfW7WAAAAC5x.jpg)", "Our renouwned kickboxing world champion strikes hard and fast. What an incredible image!"],
    [149, new _Date(8, 12, 2022), true] , ["0xTFT2309012","0xUPD7614801"] 
  ),
]





const DOM = {
  root: document.documentElement,
  TDDM: document.getElementById("ThemeDropDownMenu"),
  ThemeMenuSelector: document.getElementById("ThemeMenuIcon")
};

function changeTheme(theme) {
  Object.keys(theme).forEach(function(key) {
    DOM.root.style.setProperty(key, theme[key])
 });
}




changeTheme(Theme["Basic Light"])


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
function adjustTDDMposition() {
  let x = DOM.ThemeMenuSelector.getBoundingClientRect().left
  DOM.TDDM.style.setProperty("--x",`${x - 25}px`)
}
adjustTDDMposition()
window.onresize = adjustTDDMposition

function loadTateCards() {
  
}