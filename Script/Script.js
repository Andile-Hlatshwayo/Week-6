document.getElementById("refresh").addEventListener('click',fetchContacts);
document.getElementById("addContact").addEventListener('click',addContact);


function addContact(){
    window.open("add-Contact.html","_self");
}


function submitForm(e){
    e.preventDefault();

    const form=new FormData(document.querySelector('#editForm'));
    form.append('apiKey',apiKey);
    fetch(rootPath + 'controller/insert-contact/', {
        method: 'POST',
        headers: {'Accept': 'application/json,*.*'},
        body: form
    })
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        if(data=="1"){
            alert("Contact added.");
            homeLink();
        } else{
            alert(data);
            homeLink();
        }
    })
}

function editContact(id){
    window.open("edit-Contact.html?id=" + id, "_self");
}
