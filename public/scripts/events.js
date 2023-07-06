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
    type: 'object',
    properties: {
      event: {
        type: 'string',
        enum: [eventName],
      },
    },
    required: ['event'],
  };
  schema.array.items.push(eventObjt);
  eventList.add(newEvent);

  updateSchemaExample(JSON.stringify(schema, undefined, 2));
};

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
  }

  updateSchemaExample(JSON.stringify(schema, undefined, 2));
};
