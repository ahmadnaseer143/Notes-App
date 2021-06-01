const addBtn=document.querySelector(".add-item");

addBtn.addEventListener("click", function(){
    addNewNote();
});

function addNewNote(){
    const note=document.createElement('div');
    note.classList.add(".container");
    note.innerHTML=`
    <div class="container">
        <header>
            <button class="delete-btn">delete</button>
        </header>
        <div class="text-area">
            <textarea></textarea>
        </div>
    </div>
    `;
    const deleteBtn=note.querySelector(".delete-btn");
    const textArea= note.querySelector("textarea");

    deleteBtn.addEventListener("click", function(){
        note.remove();
    });
    document.body.appendChild(note);
}