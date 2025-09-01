import {style} from "@vanilla-extract/css"

//全体
export const hobby = style ({
    paddingTop:"100px",
    backgroundColor:"aqua",
})


//h2 最近はまっていること
export const title = style ({
    paddingLeft:"540px",
    fontSize:"40px",
})

export const nav = style ({
    
})

export const list = style ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 440px)",
  gap: "50px",
  padding: "40px",
  listStyle: "none",
})

//共通Item
const baseItem = style({
    listStyle:"none",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:"40px",
    backgroundColor:"#f1f5f0ec",
    width:"400px",
    height:"500px",
    borderRadius:"20px",
})

//個別Item
export const animeItem = baseItem;
export const gameItem =  baseItem;
export const outdoorItem =  baseItem;

//共通Title
const baseTitle = style({
    backgroundColor:"#0ecef0ec",
})
//個別Title
export const animeTitle = baseTitle;
export const gameTitle = baseTitle;
export const outdoorTitle = baseTitle;

//共通Img
const baseImg = style({
    width:"100%",
    height:"auto",
})

//個別Img
export const animeImg = baseImg;
export const gameImg = baseImg;
export const outdoorImg = style([baseImg, {height:"220px"}]);

//共通Text
const baseText = style({
    fontSize:"20px",

})

//個別Text
export const animeText = baseText;
export const gameText = baseText;
export const outdoorText = baseText;