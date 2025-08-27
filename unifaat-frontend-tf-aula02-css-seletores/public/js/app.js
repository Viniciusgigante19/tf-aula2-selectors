const ulElement = document.querySelector(".content ul.demo");
const liElementCollection = ulElement.querySelectorAll("li");

liElementCollection.forEach((li) => {
    li.addEventListener("click", (event) => {
        ulElement.querySelectorAll("li").forEach((el) => {
            el.classList.remove("selected");
        });
        event.currentTarget.classList.add("selected");
    });
});