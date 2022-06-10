const removePropertyInSchema = function (propertyName, propertyIndex) {

    schema.array.items.splice(propertyIndex, 1);

};

btnAddProperty.onclick = function () {
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
    propertyList.add(newEvent, undefined);

    updateSchemaExample(JSON.stringify(schema));

}

propertyList.addpropertyListener('change', () => {
    btnRemoveProperty.hidden = false;
});

btnRemoveProperty.onclick = function () {

    removeEventInSchema(propertyList.value, propertyList.selectedIndex - 1);
    propertyList.remove(propertyList.selectedIndex);

    if (propertyList.length === 1) {
        propertyList[0].selected = true;
        btnRemoveProperty.hidden = true;
    };

    updateSchemaExample(JSON.stringify(schema));
}