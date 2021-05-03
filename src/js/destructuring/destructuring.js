function destructuring({ special = []}) {
    for (let prop of special) {
        if (!prop.description){
            prop.description = 'Описание недоступно';
        }
    }
    return special;
}