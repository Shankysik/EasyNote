const Column={
    process(ColumnElement){
        const addNote=document.querySelector('#bot')
        addNote.addEventListener('click',function (event) {
            const NoteElement=Note.createNote()
            const Notes=document.querySelector('.Notes').append(NoteElement)
            NoteElement.setAttribute('contenteditable',true)
            NoteElement.focus()
            NoteElement.addEventListener('keydown', function(e) {
                if (e.keyCode === 13) {
                    // можете делать все что угодно со значением текстового поля
                    NoteElement.blur()
                }
            })
        })
        const deleteNote=document.querySelector('.delete-note')
        deleteNote.addEventListener('click',function (event) {
            document.querySelector('.active').remove()
            document.querySelector('.notepad').value=''
            Application.save()


           /*
           const activeNote = document.querySelector('.active')
            let idNote=activeNote.getAttribute('note-id')
            console.log(idNote)
           let Objects=JSON.parse(localStorage.getItem('checkItBox'))
            for(const Note of Objects.items){
                const notesid=Note.id
                if(idNote==notesid){
                    console.log(idNote)
                    console.log(notesid)
                    console.log(typeof (Objects))

                }

            }*/


            document.querySelector('.active').remove()
            MainText.value=''
        })
    }
}