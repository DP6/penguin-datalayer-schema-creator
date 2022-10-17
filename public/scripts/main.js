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


/* Obj button */

const btnAddObject = document.querySelector('#buttonAddObj')

/* Add config button */

const btnAddConfig = document.querySelector('#buttonAddConfig')
const btnRemoveConfig = document.querySelector('#buttonRemoveConfig')

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

let validator =
  {
    "validator": [
      {
        "url": "",
        "schema_name": [""],
        "dataLayer": "",
        "browserClose": true,
        "time": 0
      }
    ]
  }
/**
 * Updates the schema into the website.
 * @param {string} schema - The new schema to be updated.
 * @return {string} Returns the new schema.
 */
const updateSchemaExample = function (schema) {
  schemaParagraphy.textContent = schema;
}

/**
 * Updates the schema into the website.
 * @param {string} validator - The new schema to be updated.
 * @return {string} Returns the new schema.
 */
const updateValidatorExample = function (validator) {
  schemaParagraphy.textContent = validator;
}
