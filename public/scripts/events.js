const removeEventInSchema = function (eventName, eventIndex) {

    schema.array.items.splice(eventIndex, 1);

};

btnAddEvent.onclick = function () {
    let eventName = document.querySelector('#eventName').value;
    let newEvent = new Option(eventName, eventName);

    document.querySelector('#eventName').value = '';

    if (eventName === '') {
        alert('Please enter a valid Name');
        return;
    }

    let eventObjt = {
        "type": "object",
        "properties": {
            "event": {
                "type": "string",
                "enum": [eventName]
            }
        },
        "required": ["event"]
    }
    schema.array.items.push(eventObjt);
    eventList.add(newEvent);

    updateSchemaExample(JSON.stringify(schema, undefined, 2));

}

eventList.addEventListener('change', () => {
    btnRemoveEvent.hidden = false;
    btnEditEvent.hidden = false;
    btnAddProperty.hidden = false;

    propertyName.disabled = false;
    propertyType.disabled = false;
    propertyRequired.disabled = false;
    propertyValue.disabled = false;
});

btnRemoveEvent.onclick = function () {

    removeEventInSchema(eventList.value, eventList.selectedIndex - 1);
    eventList.remove(eventList.selectedIndex);

    if (eventList.length === 1) {
        eventList[0].selected = true;
        propertyType[0].selected = true;
        propertyRequired[0].selected = true;

        btnRemoveEvent.hidden = true;
        btnEditEvent.hidden = true;
        btnAddProperty.hidden = true;

        propertyName.disabled = true;
        propertyType.disabled = true;
        propertyRequired.disabled = true;
        propertyValue.disabled = true;

        propertyName.value = '';
        propertyValue.value = '';
    };

    updateSchemaExample(JSON.stringify(schema, undefined, 2));
}

//Funções do popup
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup-close')
btnEditEvent.onclick = function () {
popup.style.display = 'block'
}

close.onclick = function() {
    popup.style.display = 'none'
}

//Foções de edit de evento
const addEdit = document.querySelector('#buttonAddEventPopup')
const cancelEdit = document.querySelector('#buttonCancelEventPopup')

addEdit.onclick = function(){
    
    removeEventInSchema(eventList.value, eventList.selectedIndex - 1);
    eventList.remove(eventList.selectedIndex);
    updateSchemaExample(JSON.stringify(schema, undefined, 2));

    let eventNameEdit = document.querySelector('#eventNamePopup').value;
    let newEventEdit = new Option(eventNameEdit, eventNameEdit);

    document.querySelector('#eventNamePopup').value = '';

    if (eventNameEdit === '') {
        alert('Please enter a valid Name');
        return;
    }

    let eventObjtEdit = {
        "type": "object",
        "properties": {
            "event": {
                "type": "string",
                "enum": [eventNameEdit]
            }
        },
        "required": ["event"]
    }
    schema.array.items.push(eventObjtEdit);
    eventList.add(newEventEdit);

    updateSchemaExample(JSON.stringify(schema, undefined, 2));
    popup.style.display = 'none'
}

cancelEdit.onclick = function() {
    document.querySelector('#eventNamePopup').value = ""
    popup.style.display = 'none'
}