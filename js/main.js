const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

//yeni task'ın html yapısı - listenin elemanı
const generateTemplate = task =>{
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="fa-regular fa-trash-can delete"></i>
    </li>
    `;
    list.innerHTML+=html;
}

// yeni task submit etme
addForm.addEventListener('submit', e=>{
    e.preventDefault(); // sayfanın yenilenmesini önleme
    const task=addForm.add.value.trim(); //trimStart() başındaki boşluğu önler, trimEnd() sondaki boşluğu önler
    //console.log(task);
    if(task.length > 0) // listeye boş input girmesini önler
    {
        generateTemplate(task);
        addForm.reset(); // input'u gönderdikten sonra, yazılan text'i inputtan kaldırır
    }
})

// listeden task silme
list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')); //delete class'ını içeriyorsa
    {
        e.target.parentElement.remove();
    }
})

//filtreleme
