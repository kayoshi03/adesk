import {Show, ShowFooter, ShowNavigate} from "./module/show.js"

const menu = document.getElementById("menu")
const menuList = document.getElementById("menuList")
const children = document.querySelector(".list").children
const footerNavigate = document.querySelector(".columns").children


ShowFooter(footerNavigate)
ShowNavigate(children)
Show(menu, menuList)