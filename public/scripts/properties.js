const removePropertyInSchema = function (propertyName, propertyIndex) {};

const resetPropertyValues = function () {
  propertyName.value = "";
  propertyValue.value = "";
  propertyType[0].selected = true;
  propertyRequired[0].selected = true;
  propertyValidation.hidden = true;
};

btnAddProperty.onclick = function () {
  let newProperty = new Option(propertyName.value, propertyName.value);

  if (
    propertyName.value === "" ||
    (propertyValue.value === "" && propertyType.value === "string") ||
    propertyType.value === "Property Type" ||
    propertyRequired.value === "Property Mode"
  ) {
    alert("Please enter all values !");
    return;
  }

  let eventIndex = eventList.selectedIndex - 1;

  if (propertyPlace.value === "event") {
    switch (propertyType.value) {
      case "string":
        if (propertyValidation.value === "enum") {
          schema.array.items[eventIndex].properties[propertyName.value] = {
            type: "string",
            enum: propertyValue.value.split(","),
          };
        } else {
          schema.array.items[eventIndex].properties[propertyName.value] = {
            type: "string",
            pattern: propertyValue.value,
          };
        }
        break;

      case "number":
        schema.array.items[eventIndex].properties[propertyName.value] = {
          type: "number",
        };
        break;

      case "boolean":
        schema.array.items[eventIndex].properties[propertyName.value] = {
          type: "boolean",
        };
        break;

      case "object":
        schema.array.items[eventIndex].properties[propertyName.value] = {
          type: "object",
          properties: {},
          required: [],
        };

        break;

      case "array":
        schema.array.items[eventIndex].properties[propertyName.value] = {
          type: "array",
          contains: {},
        };

        break;

      default:
        break;
    }
  } else {
  }

  if (propertyRequired.value === "required") {
    schema.array.items[eventIndex].required.push(propertyName.value);
  }

  propertyList.add(newProperty);
  updateSchemaExample(JSON.stringify(schema, undefined, 2));
  resetPropertyValues();
};

propertyType.addEventListener("change", () => {
  if (propertyType.value === "string") {
    propertyValidation.hidden = false;
    propertyValue.hidden = false;
  } else {
    propertyValidation.hidden = true;
    propertyValue.hidden = true;
  }
});

propertyList.addEventListener("change", () => {
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
  }

  updateSchemaExample(JSON.stringify(schema, undefined, 2));
};

//the following lines refers to editing Properties
//popup function
const popupProperties = document.querySelector(".popup-wrapperProperties");
const closeProperties = document.querySelector(".popup-closeProperties");
btnEditProperty.onclick = function () {
  popupProperties.style.display = "block";
};

closeProperties.onclick = function () {
  popupProperties.style.display = "none";
};

// the following lines refers to editing Properties
const btnAddPropertyPopup = document.querySelector("#buttonAddPropertyPopup");
const btnCancelPropertyPopup = document.querySelector(
  "#buttonCancelPropertyPopup"
);
btnAddPropertyPopup.onclick = function () {
  let newProperty = {
    name: document.querySelector("#propertyNamePopup").value,
    value: document.querySelector("#editPropertyValue").value,
    type: document.querySelector("#editPropertyType").value,
    requiredOption: document.querySelector("#editPropertyRequired").value,
    validationType: document.querySelector("#editPropertyValidation").value,
  };

  let selectProps = document.querySelectorAll("#propertySelected")[0];
  let selectEvents = document.querySelectorAll("#eventSelected")[0];

  if (newProperty.name !== "") {
    //edit properties name
    let oldSelectedProperty = selectProps.children[selectProps.selectedIndex]; //returns the property selection list
    let oldPropertyName = oldSelectedProperty.value;

    oldSelectedProperty.value = newProperty.name;
    oldSelectedProperty.innerText = newProperty.name;

    let currentSchemaObject =
      schema.array.items[selectEvents.selectedIndex - 1].properties; //returns the properties object of the selected event

    currentSchemaObject[newProperty.name] =
      currentSchemaObject[oldPropertyName]; //replaces a property name
    delete currentSchemaObject[oldPropertyName]; // delete the old name

    switch (
      newProperty.type //property type conditionals
    ) {
      case "string":
        if (newProperty.validationType === "enum") {
          currentSchemaObject[newProperty.name] = currentSchemaObject[
            oldPropertyName
          ] = {
            type: "string",
            enum: newProperty.value.split(","),
          };
          delete currentSchemaObject[oldPropertyName];
        } else {
          currentSchemaObject[newProperty.name] = currentSchemaObject[
            oldPropertyName
          ] = {
            type: "string",
            pattern: newProperty.value,
          };
          delete currentSchemaObject[oldPropertyName];
        }
        break;

      case "number":
        currentSchemaObject[newProperty.name] = currentSchemaObject[
          oldPropertyName
        ] = {
          type: "number",
        };
        delete currentSchemaObject[oldPropertyName];
        break;

      case "boolean":
        currentSchemaObject[newProperty.name] = currentSchemaObject[
          oldPropertyName
        ] = {
          type: "boolean",
        };
        delete currentSchemaObject[oldPropertyName];
        break;

      case "object":
        currentSchemaObject[newProperty.name] = currentSchemaObject[
          oldPropertyName
        ] = {
          type: "object",
          properties: {},
          required: [],
        };
        delete currentSchemaObject[oldPropertyName];

        break;

      case "array":
        currentSchemaObject[newProperty.name] = currentSchemaObject[
          oldPropertyName
        ] = {
          type: "array",
          contains: {},
        };
        delete currentSchemaObject[oldPropertyName];

        break;

      default:
        break;
    }
  }

  // property modes selection conditionals
  if (newProperty.requiredOption === "required") {
    schema.array.items[selectEvents.selectedIndex - 1].required[
      selectProps.selectedIndex
    ] = newProperty.name;
  }

  if (newProperty.requiredOption === "nonRequired") {
    schema.array.items[selectEvents.selectedIndex - 1].required.splice([
      selectProps.selectedIndex,
    ]);
  }

  updateSchemaExample(JSON.stringify(schema, undefined, 2));

  //clear the fields and close the popup after edits
  document.querySelector("#eventNamePopup").value = "";
  popup.style.display = "none";
};

//property type change in string case
let changes = {
  value: document.querySelector("#editPropertyValue"),
  type: document.querySelector("#editPropertyType"),
  validationType: document.querySelector("#editPropertyValidation"),
};

changes.type.addEventListener("change", () => {
  if (changes.type.value === "string") {
    changes.validationType.hidden = false;
    changes.value.hidden = false;
    popupProperties.style.height = "115%";
  } else {
    changes.validationType.hidden = true;
    changes.value.hidden = true;
  }
});

btnCancelPropertyPopup.onclick = function () {
  //function to cancel editing
  document.querySelector("#eventNamePopup").value = "";
  popup.style.display = "none";
};
