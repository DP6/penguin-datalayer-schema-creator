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

    if (propertyPlace[0].value === 'event' && 
        propertyPlace[0].checked === true) {
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
    else if(propertyPlace[1].value === 'property' && 
            propertyPlace[1].checked === true){
                
        while(btnAddProperty.onclick){
              let  caminho = schema.array.items[eventIndex]
              function search(object,chave) {
                for(let [prop,value] of Object.entries(object)){
                  if(prop === 'properties'
                     && typeof value === 'object'){
                    if(Object.entries(value).length === 0){
                      return value
                    }
                    else{
                      for(let [key,val] of Object.entries(value)){
                        if(key === chave){
                           return search(val,chave)
                        }
                      }
                    }
                  }
                }
              }
              function addInProperty(){
                search(caminho,propertyList.value)[propertyName.value] =
                {
                  type: "object",
                  properties: {},
                  required: []
                }
              return caminho
            }
            caminho = addInProperty()
            console.log(caminho)
            break
        }
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
}

btnEditProperty.onclick = function () {

}

