export const Show = (el, list) => {
    el.addEventListener("click", function () {
        list.classList.toggle("show")
    })
}

export const ShowNavigate = (children) => {
    for (let i = 0; i < children.length; i++) {
        let button= children[i].children
        if (button.length === 1) {
            children[i].addEventListener("click", function () {
                button[0].classList.toggle("rotate")
            })
        }
        if (button.length > 1) {
            children[i - 1].addEventListener("click", function () {
                children[i].classList.toggle("showNav")
            })
        }
    }
}

export const ShowFooter = (children) => {

    for (let i = 0; i < children.length; i++) {
        if (children[i].children.length < 3) {
            children[i].children[0].addEventListener("click", function () {
                children[i].children[0].children[0].classList.toggle("rotate")
                children[i].children[1].classList.toggle("showFooter")
            })
        }
        else {
            for(let j = 2; j < children[i].children.length; j++){
                children[i].children[1].addEventListener("click", function () {
                    children[i].children[j].classList.toggle("showFooter")
                })
            }
            children[i].children[0].children[0].addEventListener("click", function () {
                children[i].children[0].children[0].children[0].classList.toggle("rotate")
                children[i].children[0].children[1].classList.toggle("showFooter")
            })
            children[i].children[1].addEventListener("click", function () {
                children[i].children[1].children[0].classList.toggle("rotate")
            })

        }

    }
}