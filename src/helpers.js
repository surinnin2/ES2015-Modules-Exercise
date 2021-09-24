function choice(items) {
    const idx = Math.floor(Math.random() * items.length) 
    return items[idx]
} 

function remove(items, item) {
    const f = items.find(i => i === item)
    if (f) items.splice(items.indexOf(item), 1)
    
    return items
}

export {choice, remove}