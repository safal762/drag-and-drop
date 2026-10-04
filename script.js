const boxes = document.querySelectorAll('.box')
const cards = document.querySelectorAll('.card')

for (const card of cards) {
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
}

for (const box of boxes) {
    box.addEventListener("dragover", dragOver)
    box.addEventListener("dragenter", dragEnter)
    box.addEventListener("dragleave", dragLeave)
    box.addEventListener("drop", dragDrop)
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', this.id)
}

function dragEnd() {
    console.log('Drag completed')
}

function dragEnter(e) {
    e.preventDefault()
}

function dragLeave(e) {
    e.preventDefault()
}

function dragOver(e) {
    // REQUIRED: Tells browser this area accepts drops
    e.preventDefault()
}

function dragDrop(e) {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    const cardElement = document.getElementById(id)
    
    // Find the closest parent column (.box) in case the drop happened on an h1 or existing card
    const targetBox = e.target.closest('.box')
    
    if (cardElement && targetBox) {
        targetBox.appendChild(cardElement)
    }
}