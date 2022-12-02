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

export let GS = GrandSelection,
  CusDate = _Date;
