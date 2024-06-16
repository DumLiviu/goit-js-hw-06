const items = document.querySelectorAll("#categories .item");

console.log("Number of categories:", items.length);
console.log("");

items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").innerText;
  console.log("Category:", categoryTitle);

  const elements = item.querySelectorAll("ul li");
  console.log("Elements:", elements.length);
  console.log("");
});
