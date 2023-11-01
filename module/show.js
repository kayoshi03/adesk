export const Show = (el, list) => {
    el.addEventListener("click", function () {
        list.classList.toggle("show")
    })
}