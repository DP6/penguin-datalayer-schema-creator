const removePropertyInSchema = function (propertyName, propertyIndex) {
};

const resetPropertyValues = function () {
    propertyName.value = '';
    propertyValue.value = '';
    propertyType[0].selected = true;
    propertyRequired[0].selected = true;
    propertyValidation.hidden = true;
};

btnAddProperty.onclick = function () {

    let newProperty = new Option(propertyName.value, propertyName.value);

    if (
        propertyName.value === ''
        || (propertyValue.value === '' && propertyType.value === 'string')
        || propertyType.value === 'Property Type'
        || propertyRequired.value === 'Property Mode'
    ) {
        alert('Please enter all values !');
        return;
    }

    let eventIndex = eventList.selectedIndex - 1;

    if (propertyPlace.value === 'event') {
        switch (propertyType.value) {
            case 'string':

                if (propertyValidation.value === 'enum') {
                    schema.array.items[eventIndex]
                        .properties[propertyName.value] =
                    {
                        "type": "string",
                        "enum": propertyValue.value.split(',')
                    }
                } else {
                    schema.array.items[eventIndex]
                        .properties[propertyName.value] =
                    {
                        "type": "string",
                        "pattern": propertyValue.value
                    }
                }
                break;

            case 'number':
                schema.array.items[eventIndex]
                    .properties[propertyName.value] =
                {
                    "type": "number"
                }
                break;

            case 'boolean':
                schema.array.items[eventIndex]
                    .properties[propertyName.value] =
                {
                    "type": "boolean"
                }
                break;

            case 'object':
                schema.array.items[eventIndex]
                    .properties[propertyName.value] =
                {
                    "type": "object",
                    "properties": {
                    },
                    "required": [
                    ]
                }

                break;

            case 'array':
                schema.array.items[eventIndex]
                    .properties[propertyName.value] =
                {
                    "type": "array",
                    "contains": {
                    }
                }

                break;

            default:
                break;
        }
    }
    else {

    }

    if (propertyRequired.value === 'required') {
        schema.array.items[eventIndex].required.push(propertyName.value)
    }

    propertyList.add(newProperty);
    updateSchemaExample(JSON.stringify(schema, undefined, 2));
    resetPropertyValues();
}

propertyType.addEventListener('change', () => {
    if (propertyType.value === "string") {
        propertyValidation.hidden = false;
        propertyValue.hidden = false;
    } else {
        propertyValidation.hidden = true;
        propertyValue.hidden = true;
    }
});

propertyList.addEventListener('change', () => {
    btnRemoveProperty.hidden = false;
    btnEditProperty.hidden = false;
});

btnRemoveProperty.onclick = function () {

    removeEventInSchema(propertyList.value, propertyList.selectedIndex - 1);
    propertyList.remove(propertyList.selectedIndex);

    if (propertyList.length === 1) {
        propertyList[0].selected = true;
        btnRemoveProperty.hidden = true;
        btnEditProperty.hidden = true;
    };

    updateSchemaExample(JSON.stringify(schema, undefined, 2));
} //popup function
const popupProperties = document.querySelector('.popup-wrapperProperties')
const closeProperties = document.querySelector('.popup-closeProperties')
btnEditProperty.onclick = function () {
popupProperties.style.display = 'block'
}

closeProperties.onclick = function() {
    popupProperties.style.display = 'none'
}

// edit function

const btnAddPropertyPopup = document.querySelector('#buttonAddPropertyPopup')


btnAddPropertyPopup.onclick = function () {

    let newProperty = {
        name: document.querySelector('#propertyNamePopup').value,
        value: document.querySelector('#editPropertyValue'),
        type: document.querySelector('#editPropertyType'),
        requiredOption: document.querySelector('#editPropertyRequired'),
        validationType: document.querySelector('#editPropertyValidation')
    }
    
    // edit properties name
    let selectProps = document.querySelectorAll('#propertySelected')[0];
    let oldSelectedProperty = selectProps.children[selectProps.selectedIndex];
    let oldPropertyName = oldSelectedProperty.value;

    oldSelectedProperty.value = newProperty.name
    oldSelectedProperty.innerText = newProperty.name

    let currentSchemaObject = schema.array.items[selectProps.selectedIndex-1].properties

    currentSchemaObject[newProperty.name] = currentSchemaObject[oldPropertyName]
    delete currentSchemaObject[oldPropertyName]

    updateSchemaExample(JSON.stringify(schema, undefined, 2));
}  