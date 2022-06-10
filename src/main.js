let btnAddEvent = document.querySelector('#buttonAddEvent');
let btnRemoveEvent = document.querySelector('#buttonRemoveEvent');
let eventList = document.querySelector('#eventSelected');
let schemaParagraphy = document.querySelector('#schemaExample');

let schema = {
  "$schema": "",
  "title": "The Root Schema",
  "array": {
    "$id": "#/properties/schema",
    "type": "array",
    "items": []
  }
};

let updateSchemaExample = (schema) => {
  schemaParagraphy.textContent = schema;
}

let removeEventInSchema = (eventName, eventIndex) => {

  schema.array.items.splice(eventIndex, 1);

};

btnAddEvent.onclick = () => {
  let eventName = document.querySelector('#eventName').value;
  let newEvent = new Option(eventName, eventName);

  document.querySelector('#eventName').value = '';

  if (eventName == '') {
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
  eventList.add(newEvent, undefined);

  updateSchemaExample(JSON.stringify(schema));

}

eventList.addEventListener('change', () => {
  btnRemoveEvent.hidden = false;
});

btnRemoveEvent.onclick = () => {

  removeEventInSchema(eventList.value, eventList.selectedIndex - 1);
  eventList.remove(eventList.selectedIndex);

  if (eventList.length == 1) {
    eventList[0].selected = true;
    btnRemoveEvent.hidden = true;
  };

  updateSchemaExample(JSON.stringify(schema));
}