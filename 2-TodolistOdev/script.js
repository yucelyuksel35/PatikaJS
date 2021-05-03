const addButton = document.querySelector('.addButton')
const input = document.querySelector('.input')
const container = document.querySelector('.container')


class item {
    constructor(itemName){
        //Create the item div
        this.createDiv(itemName)
    }
    createDiv(itemName){
        let input = document.createElement('input')
        input.value=itemName
        input.disabled=true
        input.classList.add('item_input')
        input.type="text"

        let itemBox = document.createElement('div')
        itemBox.classList.add('item')

        let editButton = document.createElement('button')
        let addIcon = document.createElement('i')
        addIcon.classList.add('fa','fa-edit')
        editButton.appendChild(addIcon)
        editButton.classList.add('editButton')
        
        

        editButton.classList.add('editButton')

        let removeButton = document.createElement('button')
        let addRemoveIcon = document.createElement('i')
        addRemoveIcon.classList.add('fa','fa-trash')
        removeButton.appendChild(addRemoveIcon)
        removeButton.classList.add('removeButton')

        container.appendChild(itemBox)
        
        itemBox.appendChild(input)
        itemBox.appendChild(editButton)
        itemBox.appendChild(removeButton)

        editButton.addEventListener('click', () => this.edit(input))
        removeButton.addEventListener('click', () => this.remove(itemBox))

       }

    edit(input){
        input.disabled = !input.disabled
    }
    remove(item){
        
        if(confirm("Are you sure?")==true){
        container.removeChild(item)
    }
    
    }
}
function check(){
      if(input.value != ""){
          new item(input.value)
          localStorage.setItem("yucel",input.value)
          input.value=""
          
          
      }
}
addButton.addEventListener('click',check)
window.addEventListener('keydown',(e) =>{
    if(e.which == 13){
        check()
    }
})

