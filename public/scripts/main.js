const schemaParagraphy = document.querySelector('#schemaExample');
let schema = {
  "$schema": "",
  "title": "The Root Schema",
  "array": {
    "$id": "#/properties/schema",
    "type": "array",
    "items": []
  }
};

/* Event Variables */
const btnAddEvent = document.querySelector('#buttonAddEvent');
const btnRemoveEvent = document.querySelector('#buttonRemoveEvent');
const btnEditEvent = document.querySelector('#buttonEditEvent');
const eventList = document.querySelector('#eventSelected');
/* *************** */
//edit event
const addEdit = document.querySelector("#buttonAddEventPopup");
const cancelEdit = document.querySelector("#buttonCancelEventPopup");
/* Property Variables */
const btnAddProperty = document.querySelector('#buttonAddProperty');
const propertyNv2 = document.querySelector('#propertyNv2');
const propertyNv3 = document.querySelector('#propertyNv3');
const propertyNv4 = document.querySelector('#propertyNv4');
const propertyNv5 = document.querySelector('#propertyNv5');
const btnRemoveProperty = document.querySelector('#buttonRemoveProperty');
const btnRemovePropertyNv2 = document.querySelector('#buttonRemovePropertyNv2');
const btnRemovePropertyNv3 = document.querySelector('#buttonRemovePropertyNv3');
const btnRemovePropertyNv4 = document.querySelector('#buttonRemovePropertyNv4');
const btnRemovePropertyNv5 = document.querySelector('#buttonRemovePropertyNv5');
const btnEditProperty = document.querySelector('#buttonEditProperty');
const propertyList = document.querySelector('#propertySelected');

const propertyName = document.querySelector('#newPropertyName');
const propertyType = document.querySelector('#newPropertyType');
const propertyValidation = document.querySelector('#newPropertyValidation');
const propertyRequired = document.querySelector('#newPropertyRequired');
const propertyValue = document.querySelector('#newPropertyValue');


//edit property


/* Obj button */

const btnAddObjectNv2 = document.querySelector('#buttonNv2')
const btnAddObjectNv3 = document.querySelector('#buttonNv3')
const btnAddObjectNv4 = document.querySelector('#buttonNv4')
const btnAddObjectNv5 = document.querySelector('#buttonNv5')

//Add In Obj



/* Add config button */

const btnAddConfig = document.querySelector('#buttonAddConfig')
const btnRemoveConfig = document.querySelector('#buttonRemoveConfig')

//Popup
const popupProperties = document.querySelector(".popup-wrapperProperties");
const closeProperties = document.querySelector(".popup-closeProperties");
const popup = document.querySelector(".popup-wrapper");
const closePopup = document.querySelector(".popup-close");


//property popup buttons
const btnAddPropertyPopup = document.querySelector("#buttonAddPropertyPopup");
const btnAddPropertyPopupNv2 = document.querySelector("#buttonAddPropertyNv2Popup");
const btnAddPropertyPopupNv3 = document.querySelector("#buttonAddPropertyNv3Popup");
const btnAddPropertyPopupNv4 = document.querySelector("#buttonAddPropertyNv4Popup");
const btnAddPropertyPopupNv5 = document.querySelector("#buttonAddPropertyNv5Popup");
const btnCancelPropertyPopup = document.querySelector("#buttonCancelPropertyPopup");

//event popup buttons







/* Filtro para trazer somente o elemento que está marcado */
//const propertyPlace = Array.from(document.querySelectorAll("#newPropertyPlace")).filter((item) => { return item.checked })[0];

/* ****************** */



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

// label names

const label2 = document.querySelector('#propertyLabel2')
const label3 = document.querySelector('#propertyLabel3')
const label4 = document.querySelector('#propertyLabel4')
const label5 = document.querySelector('#propertyLabel5')

const schemaName = document.querySelector('#schema_name')