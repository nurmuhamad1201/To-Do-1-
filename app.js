let tbody = document.querySelector(".tbody")


let data = [
    {
       id: 1,
       name : 'John',
       email : 'john@example.com',
       complited : false,
       
    },
  
]


///info variables
let dialogInfo = document.querySelector(".dialogInfo")
let infoName = document.querySelector("#infoName")
let btnClose = document.querySelector(".btnCloseinfo")
let infoEmail = document.querySelector("#infoEmail")
let infocl = document.querySelector(".infocl")

infocl.onclick = () => {
    dialogInfo.close()
}

function get(data){
    tbody.innerHTML = ""
    data.forEach(elem => {

        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.textContent = elem.id

        let td2 = document.createElement("td")
        td2.textContent = elem.name

        let td3 = document.createElement("td")
        td3.textContent = elem.email

        let td4 = document.createElement("td")
        td4.textContent = elem.complited
        td4.style.backgroundColor = elem.complited? "#00AF50" : "#C0BEBF"

        let buttons = document.createElement("td")
        let btnInfo = document.createElement("button")
        let imgInfo = document.createElement("img")
        imgInfo.src = "/img/icons8-info-50.png"
        imgInfo.style.width = "30px"
        imgInfo.style.height = "30px"

        btnInfo.appendChild(imgInfo)
        btnInfo.onclick = () => {

            dialogInfo.showModal();

            infoName.innerHTML = elem.name
            infoEmail.innerHTML = elem.email

        }

        let btnEdit = document.createElement("button")
        let imgEdit = document.createElement("img")
        imgEdit.src = "/img/icons8-edit-24.png"
        imgEdit.style.width = "30px"
        imgEdit.style.height = "30px"

        btnEdit.appendChild(imgEdit)


        btnEdit.onclick = () => {
            openModal(elem.id)
        }


        let btnDelete = document.createElement("button")
        let imgdel = document.createElement("img")
        imgdel.src = "/img/icons8-delete-24.png"
        imgdel.style.width = "30px"
        imgdel.style.height = "30px"
        btnDelete.appendChild(imgdel)

        btnDelete.onclick = () => {
          deleteTable(elem.id)
            
           
        }

        let check = document.createElement("input")
        check.type = "checkbox"
        check.checked = elem.complited

        check.onclick = () => {
          checkUser(elem.id)
        }
        

        buttons.append(btnInfo,btnEdit,btnDelete,check)

        tr.append(td1,td2,td3,td4,buttons)
        tbody.append(tr)
        
    });
}

get(data)

///All for ADD\''

let btnAdd = document.querySelector(".btnAdd")

let dialodAdd = document.querySelector(".dialodAdd")
let nameAd = document.querySelector("#nameAd");

let emailAd = document.querySelector("#emailAd");

let AddUserbt = document.querySelector(".AddUserbt")
let btnCancel = document.querySelector(".btnCancel")

btnAdd.onclick = () => {

dialodAdd.showModal()

}

btnCancel.onclick = () => {
    dialodAdd.close()
}



function add() {
    let Newdata = {
        id : data.length + 1,
        name : nameAd.value,
        email : emailAd.value,
        complited : false,
    }
    data.push(Newdata)

    nameAd.value = ""
    emailAd.value = ""

    dialodAdd.close()

    

}

AddUserbt.onclick = () => {
    add();
    get(data);

}


/// DELETE 

function deleteTable(id) {
    data = data.filter(el => el.id != id)
    get(data)
}


///search


let search = document.querySelector(".search")

search.oninput = () => {
    let value = search.value.toUpperCase().trim();
    let newUser = data.filter((el) => {
      return el.name.toUpperCase().trim().includes(value);
    });
  
    get(newUser);
}
search.oninput = () => {
    let value = search.value.toUpperCase().trim();
    let newUser = data.filter((el) => {
      return el.email.toUpperCase().trim().includes(value);
    });
  
    get(newUser);
}

/// ALL FOR edit 

let dialogEdit = document.querySelector(".dialogEdit")
let editName = document.querySelector("#editName");
let editEmail = document.querySelector("#editEmail");

let btnCloseEdit = document.querySelector(".btnCloseEdit")
let editbt = document.querySelector(".editbt");

function openModal (id) {
    dialogEdit.showModal()
    let user = data.find(el => el.id == id)
    editName.value = user.name
    editEmail.value = user.email
    editbt.onclick = () => {
        let user = data.find(el => el.id == id)
        user.name = editName.value
        user.email = editEmail.value
        dialogEdit.close()
        get(data)
    
    }

}

btnCloseEdit.onclick = () => {
    dialogEdit.close()
}

function checkUser(id) {
    let user = data.find(el => el.id == id)
    user.complited = !user.complited
    get(data)
}
 
