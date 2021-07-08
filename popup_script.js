Application.load()

document
    .querySelectorAll('.Notes')
    .forEach(Column.process)
document
    .querySelectorAll('.note')
    .forEach(Note.process)



