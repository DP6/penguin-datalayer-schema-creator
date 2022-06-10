const schemaParagraphy = document.querySelector('#schemaExample');

/* Event Variables */
const btnAddEvent = document.querySelector('#buttonAddEvent');
const btnRemoveEvent = document.querySelector('#buttonRemoveEvent');
const eventList = document.querySelector('#eventSelected');
/* *************** */

/* Property Variables */
const btnAddProperty = document.querySelector('#buttonAddProperty');
const btnRemoveProperty = document.querySelector('#buttonRemoveProperty');
const propertyList = document.querySelector('#propertySelected');

const propertyName = document.querySelector('#newPropertyName');
const propertyType = document.querySelector('#newPropertyType');
const propertyRequired = document.querySelector('#newPropertyRequired');
const propertyValue = document.querySelector('#newPropertyValue');
const propertyPlace = document.querySelector('#newPropertyPlace');

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
