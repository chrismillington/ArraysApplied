const output = document.querySelector(".output");

const aList = [1, 2, 3, 4];

const items = aList.map((n) => "<li>" + n + "</li>");

const html = "<ul>" + items.join("") + "</ul>";

output.innerHTML = html;
