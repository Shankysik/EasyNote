const Note={
    idCounter: 1,
    process(NoteElement){
       NoteElement.addEventListener('dblclick', function (event) {
            NoteElement.setAttribute('contenteditable', 'true')
            NoteElement.focus()
            //Проверка на нажатие клавиши Enter во время редактирования задания
            NoteElement.addEventListener('keydown', function(e) {
                if (e.keyCode === 13) {
                    NoteElement.removeAttribute('contenteditable')
                    NoteElement.blur()
                }
            })
        })
        //Если элемент теряет фокус, оно сохраняется (если оно не пустое)
        NoteElement.addEventListener('blur', function (event) {
            NoteElement.removeAttribute('contenteditable')
            let MainText=document.querySelector('.notepad')
            if(!NoteElement.textContent.trim().length){
                NoteElement.remove()
                Note.idCounter -= 1
                return
            }

            else {
                NoteElement.click()
            }

            NoteElement.setAttribute('description',MainText.value)
            MainText.value=''
            Application.save()
        })
        NoteElement.addEventListener('click', function (event) {
            const MainText = document.querySelector('.notepad')
            MainText.value=''
            const Noteid=NoteElement.getAttribute('note-id')
            let vsenotes=document.querySelectorAll('.note')
            vsenotes.forEach(element=>{element.classList.remove('active')})
            NoteElement.classList.add('active')
            MainText.value=NoteElement.getAttribute('description')
            MainText.addEventListener('blur',function (event) {
                document.querySelector('.active').setAttribute('description',MainText.value)
                Application.save()
                //NoteElement.setAttribute('description',MainText.value)

            })
        })


    },
    createNote(id=null,content='',description=''){
        const NoteElement=document.createElement('div')
        NoteElement.classList.add('note')
        if(id){
            NoteElement.setAttribute('note-id',id)
            Note.idCounter=id+1
        }
        else{
            NoteElement.setAttribute('note-id',Note.idCounter)
            Note.idCounter++
        }
        NoteElement.textContent=content

        NoteElement.setAttribute('description',description)
        Note.process(NoteElement)
        return NoteElement
    }
}