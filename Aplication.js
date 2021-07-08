const Application = {
    //Метод, сохраняющий данные в локальное хранилище
    save () {
        const notes = {
            idCounter: Note.idCounter,
            items: []
        }
        document
            .querySelectorAll('.note')
            .forEach(NoteElement => {
                const note = {
                    id: parseInt(NoteElement.getAttribute('note-id')),
                    description: NoteElement.getAttribute('description'),
                    content: NoteElement.textContent
                }
                notes.items.push(note)
            })

        //Загрузка данных в локальное хранилище
        const json = JSON.stringify(notes)
        localStorage.setItem('checkItBox', json)
        return notes

    },
    load(){
        if(!localStorage.getItem('checkItBox')){
            return
        }
        const Elements=document.querySelector('.Notes')
        Elements.innerHTML=''
        const Object=JSON.parse(localStorage.getItem('checkItBox'))
        for (const note of Object.items){
            const NoteElement=Note.createNote(note.id,note.content,note.description)
            Elements.append(NoteElement)

        }
    }
}