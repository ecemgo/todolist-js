const addForm = document.querySelector(".addform");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// yeni task'ın html yapısı - listenin elemanı
const generateTemplate = (task) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="fa-regular fa-trash-can delete"></i>
    </li>
    `;
  list.innerHTML += html;
};

// yeni task submit etme
addForm.addEventListener("submit", (e) => {
  e.preventDefault(); // to prevent to reload the page
  const task = addForm.add.value.trim(); //trimStart() başındaki boşluğu önler, trimEnd() sondaki boşluğu önler
  //console.log(task);
  if (task.length > 0) {
    // listeye boş input girmesini önler
    generateTemplate(task);
    addForm.reset(); // input'u gönderdikten sonra, yazılan text'i inputtan kaldırır
  }
});

// delete task from list
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")); // if it contains delete class
  {
    e.target.parentElement.remove();
  }
});

// Search yapıldığında listedeki elementin var olup olmadığını kontrol etme
const filterTodos = (listElement) => {
  // console.log(listElement);
  // console.log(list.children);
  // console.log(Array.from(list.children));
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(listElement))
    .forEach((todo) => todo.classList.add("filtered")); //Search yapıldığında aranan yoksa, "css dosyasındaki .filtered class'ını ekleyerek" listeden kaldır

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(listElement))
    .forEach((todo) => todo.classList.remove("filtered")); //Aranan varsa, listede gözüksün
};

// filter task
search.addEventListener("keyup", () => {
  const listElement = search.value.trim().toLowerCase();
  //console.log(listElement);
  filterTodos(listElement);
});
