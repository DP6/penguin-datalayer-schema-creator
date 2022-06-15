const schemaParagraphy = document.querySelector('#schemaExample');

/* Event Variables */
const btnAddEvent = document.querySelector('#buttonAddEvent');
const btnRemoveEvent = document.querySelector('#buttonRemoveEvent');
const btnEditEvent = document.querySelector('#buttonEditEvent');
const eventList = document.querySelector('#eventSelected');
/* *************** */

/* Property Variables */
const btnAddProperty = document.querySelector('#buttonAddProperty');
const btnRemoveProperty = document.querySelector('#buttonRemoveProperty');
const btnEditProperty = document.querySelector('#buttonEditProperty');
const propertyList = document.querySelector('#propertySelected');

const propertyName = document.querySelector('#newPropertyName');
const propertyType = document.querySelector('#newPropertyType');
const propertyValidation = document.querySelector('#newPropertyValidation');
const propertyRequired = document.querySelector('#newPropertyRequired');
const propertyValue = document.querySelector('#newPropertyValue');

/* Filtro para trazer somente o elemento que está marcado */
const propertyPlace = Array.from(document.querySelectorAll("#newPropertyPlace")).filter((item) => { return item.checked })[0];

/* ****************** */

let schema = {
  "$schema": "",
  "title": "The Root Schema",
  "array": {
    "$id": "#/properties/schema",
    "type": "array",
    "items": []
  }
};

const updateSchemaExample = function (schema) {
  schemaParagraphy.textContent = schema;
}
