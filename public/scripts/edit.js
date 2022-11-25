addEdit.onclick = function () {
  let eventNameEdit = document.querySelector("#eventNamePopup").value;
  let selectEvents = document.querySelectorAll("#eventSelected")[0];
  selectEvents.children[selectEvents.selectedIndex].value = eventNameEdit; //returns the value of events selection list
  selectEvents.children[selectEvents.selectedIndex].innerText = eventNameEdit;

  schema.array.items[selectEvents.selectedIndex - 1].properties.event.enum = [
    eventNameEdit,
  ]; //returns the name to be changed

  updateSchemaExample(JSON.stringify(schema, undefined, 2));

  //clear the fields and close the popup after edits
  document.querySelector("#eventNamePopup").value = "";
  popup.style.display = "none";
};

cancelEdit.onclick = function () {
  //function to cancel editing
  document.querySelector("#eventNamePopup").value = "";
  popup.style.display = "none";
};

// Property edit
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

  let oldSelectedProperty = selectProps.children[selectProps.selectedIndex]; //returns the property selection list
  let oldPropertyName = oldSelectedProperty.value;
  let currentSchemaObject =
    schema.array.items[selectEvents.selectedIndex - 1].properties; //returns the properties object of the selected event
  if (newProperty.name !== "") {
    //edit properties name
    oldSelectedProperty.value = newProperty.name;
    oldSelectedProperty.innerText = newProperty.name;

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
        if (currentSchemaObject[newProperty.name].properties === {}) {
          currentSchemaObject[newProperty.name] = currentSchemaObject[
            oldPropertyName
          ] = {
            type: "object",
            properties: {},
            required: [],
          };
          delete currentSchemaObject[oldPropertyName];
        } else {
          currentSchemaObject[newProperty.name] = currentSchemaObject[
            oldPropertyName
          ] = currentSchemaObject[newProperty.name]; // This line of code serves to replace the object's name. newProperty.name receives the oldPropertyName information along with the dataLayer information contained in CurrentSchema.The third newProperty.name receives all the information along with the object's new name.The delete erases the oldPropertyName information, so as not to have duplicate objects.
          delete currentSchemaObject[oldPropertyName];
        }
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
  resetPropertyValues();
  popup.style.display = "none";
};

btnAddPropertyPopupNv2.onclick = function () {
  let newProperty = {
    name: document.querySelector("#propertyNamePopup").value,
    value: document.querySelector("#editPropertyValue").value,
    type: document.querySelector("#editPropertyType").value,
    requiredOption: document.querySelector("#editPropertyRequired").value,
    validationType: document.querySelector("#editPropertyValidation").value,
  };

  let selectProps = document.querySelectorAll("#propertySelected")[0];
  let selectProps2 = document.querySelectorAll("#propertyNv2")[0];
  let selectProps3 = document.querySelectorAll("#propertyNv3")[0];
  let selectProps4 = document.querySelectorAll("#propertyNv4")[0];
  let selectEvents = document.querySelectorAll("#eventSelected")[0];

  let oldSelectedProperty = selectProps.children[selectProps.selectedIndex]; //returns the property selection list

  let oldSelectedProperty2 = selectProps2.children[selectProps2.selectedIndex];
  let oldSelectedProperty3 = selectProps3.children[selectProps3.selectedIndex];
  let oldSelectedProperty4 = selectProps4.children[selectProps4.selectedIndex];

  let oldPropertyName = oldSelectedProperty.value;
  let oldPropertyName2 = oldSelectedProperty2.value;
  let oldPropertyName3 = oldSelectedProperty3.value;
  let oldPropertyName4 = oldSelectedProperty4.value;
  let currentSchemaObject =
    schema.array.items[selectEvents.selectedIndex - 1].properties; //returns the properties object of the selected event
  if (newProperty.name !== "") {
    //edit properties name
    oldSelectedProperty2.value = newProperty.name;
    oldSelectedProperty2.innerText = newProperty.name;

    currentSchemaObject[oldPropertyName].properties[newProperty.name] =
      currentSchemaObject[oldPropertyName].properties[oldPropertyName2]; //replaces a property name
    delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2]; // delete the old name

    switch (
    newProperty.type //property type conditionals
    ) {
      case "string":
        if (newProperty.validationType === "enum") {
          currentSchemaObject[oldPropertyName].properties[newProperty.name] =
            currentSchemaObject[oldPropertyName].properties[oldPropertyName2] =
            {
              type: "string",
              enum: newProperty.value.split(","),
            };
          delete currentSchemaObject[oldPropertyName].properties[
            oldPropertyName2
          ];
        } else {
          currentSchemaObject[oldPropertyName].properties[newProperty.name] =
            currentSchemaObject[oldPropertyName].properties[oldPropertyName2] =
            {
              type: "string",
              pattern: newProperty.value,
            };
          delete currentSchemaObject[oldPropertyName].properties[
            oldPropertyName2
          ];
        }
        break;

      case "number":
        currentSchemaObject[oldPropertyName].properties[newProperty.name] =
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2] = {
            type: "number",
          };
        delete currentSchemaObject[oldPropertyName].properties[
          oldPropertyName2
        ];
        break;

      case "boolean":
        currentSchemaObject[oldPropertyName].properties[newProperty.name] =
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2] = {
            type: "boolean",
          };
        delete currentSchemaObject[oldPropertyName].properties[
          oldPropertyName2
        ];
        break;

      case "object":
        if (
          currentSchemaObject[oldPropertyName].properties[newProperty.name]
            .properties === {}
        ) {
          currentSchemaObject[oldPropertyName].properties[newProperty.name] =
            currentSchemaObject[oldPropertyName].properties[oldPropertyName2] =
            {
              type: "object",
              properties: {},
              required: [],
            };
          delete currentSchemaObject[oldPropertyName].properties[
            oldPropertyName2
          ];
        } else {
          currentSchemaObject[oldPropertyName].properties[newProperty.name] =
            currentSchemaObject[oldPropertyName].properties[oldPropertyName2] =
            currentSchemaObject[oldPropertyName].properties[newProperty.name]; // This line of code serves to replace the object's name. newProperty.name receives the oldPropertyName information along with the dataLayer information contained in CurrentSchema.The third newProperty.name receives all the information along with the object's new name.The delete erases the oldPropertyName information, so as not to have duplicate objects.
          delete currentSchemaObject[oldPropertyName].properties[
            oldPropertyName2
          ];
        }
        break;

      case "array":
        currentSchemaObject[oldPropertyName].properties[newProperty.name] =
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2] = {
            type: "array",
            contains: {},
          };
        delete currentSchemaObject[oldPropertyName].properties[
          oldPropertyName2
        ];

        break;

      default:
        break;
    }
    // property modes selection conditionals
    if (newProperty.requiredOption === "required") {
      currentSchemaObject[oldPropertyName].required = [newProperty.name];
    }

    if (newProperty.requiredOption === "nonRequired") {
      currentSchemaObject[oldPropertyName].required.splice([
        selectProps3.selectedIndex,
      ]);
    }

    updateSchemaExample(JSON.stringify(schema, undefined, 2));

    //clear the fields and close the popup after edits
    resetPropertyValues();
    popup.style.display = "none";
  }
};

btnAddPropertyPopupNv3.onclick = function () {
  let newProperty = {
    name: document.querySelector("#propertyNamePopup").value,
    value: document.querySelector("#editPropertyValue").value,
    type: document.querySelector("#editPropertyType").value,
    requiredOption: document.querySelector("#editPropertyRequired").value,
    validationType: document.querySelector("#editPropertyValidation").value,
  };

  let selectProps = document.querySelectorAll("#propertySelected")[0];
  let selectProps2 = document.querySelectorAll("#propertyNv2")[0];
  let selectProps3 = document.querySelectorAll("#propertyNv3")[0];
  let selectProps4 = document.querySelectorAll("#propertyNv4")[0];
  let selectEvents = document.querySelectorAll("#eventSelected")[0];

  let oldSelectedProperty = selectProps.children[selectProps.selectedIndex]; //returns the property selection list

  let oldSelectedProperty2 = selectProps2.children[selectProps2.selectedIndex];
  let oldSelectedProperty3 = selectProps3.children[selectProps3.selectedIndex];
  let oldSelectedProperty4 = selectProps4.children[selectProps4.selectedIndex];

  let oldPropertyName = oldSelectedProperty.value;
  let oldPropertyName2 = oldSelectedProperty2.value;
  let oldPropertyName3 = oldSelectedProperty3.value;
  let oldPropertyName4 = oldSelectedProperty4.value;
  let currentSchemaObject =
    schema.array.items[selectEvents.selectedIndex - 1].properties; //returns the properties object of the selected event
  if (newProperty.name !== "") {
    //edit properties name
    oldSelectedProperty3.value = newProperty.name;
    oldSelectedProperty3.innerText = newProperty.name;

    currentSchemaObject[oldPropertyName].properties[
      oldPropertyName2
    ].properties[newProperty.name] =
      currentSchemaObject[oldPropertyName].properties[
        oldPropertyName2
      ].properties[oldPropertyName3]; //replaces a property name
    delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2]
      .properties[oldPropertyName3]; // delete the old name

    switch (
    newProperty.type //property type conditionals
    ) {
      case "string":
        if (newProperty.validationType === "enum") {
          currentSchemaObject[oldPropertyName].properties[
            oldPropertyName2
          ].properties[newProperty.name] = currentSchemaObject[
            oldPropertyName
          ].properties[oldPropertyName2].properties[oldPropertyName3] = {
              type: "string",
              enum: newProperty.value.split(","),
            };
          delete currentSchemaObject[oldPropertyName].properties[
            oldPropertyName2
          ].properties[oldPropertyName3];
        } else {
          currentSchemaObject[oldPropertyName].properties[
            oldPropertyName2
          ].properties[newProperty.name] = currentSchemaObject[
            oldPropertyName
          ].properties[oldPropertyName2].properties[oldPropertyName3] = {
              type: "string",
              pattern: newProperty.value,
            };
          delete currentSchemaObject[oldPropertyName].properties[
            oldPropertyName2
          ].properties[oldPropertyName3];
        }
        break;

      case "number":
        currentSchemaObject[oldPropertyName].properties[
          oldPropertyName2
        ].properties[newProperty.name] = currentSchemaObject[
          oldPropertyName
        ].properties[oldPropertyName2].properties[oldPropertyName3] = {
            type: "number",
          };
        delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2]
          .properties[oldPropertyName3];
        break;

      case "boolean":
        currentSchemaObject[oldPropertyName].properties[
          oldPropertyName2
        ].properties[newProperty.name] = currentSchemaObject[
          oldPropertyName
        ].properties[oldPropertyName2].properties[oldPropertyName3] = {
            type: "boolean",
          };
        delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2]
          .properties[oldPropertyName3];
        break;

      case "object":
        if (
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[newProperty.name].properties === {}
        ) {
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3] = {
              type: "object",
              properties: {},
              required: [],
            };
          delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3];
        } else {
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[newProperty.name] = 
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3] =
            currentSchemaObject[oldPropertyName].properties[oldPropertyName2 ].properties[newProperty.name]; // This line of code serves to replace the object's name. newProperty.name receives the oldPropertyName information along with the dataLayer information contained in CurrentSchema.The third newProperty.name receives all the information along with the object's new name.The delete erases the oldPropertyName information, so as not to have duplicate objects.
          delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3];
        }
        break;

      case "array":
        currentSchemaObject[oldPropertyName].properties[
          oldPropertyName2
        ].properties[newProperty.name] = currentSchemaObject[
          oldPropertyName
        ].properties[oldPropertyName2].properties[oldPropertyName3] = {
            type: "array",
            contains: {},
          };
        delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2]
          .properties[oldPropertyName3];

        break;

      default:
        break;
    }
    // property modes selection conditionals
    if (newProperty.requiredOption === "required") {
      currentSchemaObject[oldPropertyName].properties[oldPropertyName2].required = [newProperty.name];
    }

    if (newProperty.requiredOption === "nonRequired") {
      currentSchemaObject[oldPropertyName].properties[oldPropertyName2].required.splice([
        selectProps3.selectedIndex,
      ]);
    }

    updateSchemaExample(JSON.stringify(schema, undefined, 2));

    //clear the fields and close the popup after edits
    resetPropertyValues();
    popup.style.display = "none";
  };
};

btnAddPropertyPopupNv4.onclick = function () {
  let newProperty = {
    name: document.querySelector("#propertyNamePopup").value,
    value: document.querySelector("#editPropertyValue").value,
    type: document.querySelector("#editPropertyType").value,
    requiredOption: document.querySelector("#editPropertyRequired").value,
    validationType: document.querySelector("#editPropertyValidation").value,
  };

  let selectProps = document.querySelectorAll("#propertySelected")[0];
  let selectProps2 = document.querySelectorAll("#propertyNv2")[0];
  let selectProps3 = document.querySelectorAll("#propertyNv3")[0];
  let selectProps4 = document.querySelectorAll("#propertyNv4")[0];
  let selectEvents = document.querySelectorAll("#eventSelected")[0];

  let oldSelectedProperty = selectProps.children[selectProps.selectedIndex]; //returns the property selection list

  let oldSelectedProperty2 = selectProps2.children[selectProps2.selectedIndex];
  let oldSelectedProperty3 = selectProps3.children[selectProps3.selectedIndex];
  let oldSelectedProperty4 = selectProps4.children[selectProps4.selectedIndex];

  let oldPropertyName = oldSelectedProperty.value;
  let oldPropertyName2 = oldSelectedProperty2.value;
  let oldPropertyName3 = oldSelectedProperty3.value;
  let oldPropertyName4 = oldSelectedProperty4.value;
  let currentSchemaObject =
    schema.array.items[selectEvents.selectedIndex - 1].properties; //returns the properties object of the selected event
  if (newProperty.name !== "") {
    //edit properties name
    oldSelectedProperty4.value = newProperty.name;
    oldSelectedProperty4.innerText = newProperty.name;

    currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[newProperty.name] =
      currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4]; //replaces a property name
    delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4]; // delete the old name

    switch (
    newProperty.type //property type conditionals
    ) {
      case "string":
        if (newProperty.validationType === "enum") {
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4] = {
              type: "string",
              enum: newProperty.value.split(","),
            };
          delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4];
        } else {
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4] = {
              type: "string",
              pattern: newProperty.value,
            };
          delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4];
        }
        break;

      case "number":
        currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4] = {
            type: "number",
          };
        delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4];
        break;

      case "boolean":
        currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4] = {
            type: "boolean",
          };
        delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4];
        break;

      case "object":
        if (
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[newProperty.name].properties === {}
        ) {
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4] = {
              type: "object",
              properties: {},
              required: [],
            };
          delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4];
        } else {
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4] =
            currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[newProperty.name]; // This line of code serves to replace the object's name. newProperty.name receives the oldPropertyName information along with the dataLayer information contained in CurrentSchema.The third newProperty.name receives all the information along with the object's new name.The delete erases the oldPropertyName information, so as not to have duplicate objects.
          delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4];
        }
        break;

      case "array":
        currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4] = {
            type: "array",
            contains: {},
          };
        delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4];

        break;

      default:
        break;
    }
    // property modes selection conditionals
    if (newProperty.requiredOption === "required") {
      currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].required = [newProperty.name];
    }

    if (newProperty.requiredOption === "nonRequired") {
      currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].required.splice([
        selectProps4.selectedIndex,
      ]);
    }

    updateSchemaExample(JSON.stringify(schema, undefined, 2));

    //clear the fields and close the popup after edits
    resetPropertyValues();
    popup.style.display = "none";
  };
}

btnAddPropertyPopupNv5.onclick = function () {
  let newProperty = {
    name: document.querySelector("#propertyNamePopup").value,
    value: document.querySelector("#editPropertyValue").value,
    type: document.querySelector("#editPropertyType").value,
    requiredOption: document.querySelector("#editPropertyRequired").value,
    validationType: document.querySelector("#editPropertyValidation").value,
  };

  let selectProps = document.querySelectorAll("#propertySelected")[0];
  let selectProps2 = document.querySelectorAll("#propertyNv2")[0];
  let selectProps3 = document.querySelectorAll("#propertyNv3")[0];
  let selectProps4 = document.querySelectorAll("#propertyNv4")[0];
  let selectProps5 = document.querySelectorAll("#propertyNv5")[0];
  let selectEvents = document.querySelectorAll("#eventSelected")[0];

  let oldSelectedProperty = selectProps.children[selectProps.selectedIndex]; //returns the property selection list

  let oldSelectedProperty2 = selectProps2.children[selectProps2.selectedIndex];
  let oldSelectedProperty3 = selectProps3.children[selectProps3.selectedIndex];
  let oldSelectedProperty4 = selectProps4.children[selectProps4.selectedIndex];
  let oldSelectedProperty5 = selectProps5.children[selectProps5.selectedIndex];

  let oldPropertyName = oldSelectedProperty.value;
  let oldPropertyName2 = oldSelectedProperty2.value;
  let oldPropertyName3 = oldSelectedProperty3.value;
  let oldPropertyName4 = oldSelectedProperty4.value;
  let oldPropertyName5 = oldSelectedProperty5.value;
  let currentSchemaObject =
    schema.array.items[selectEvents.selectedIndex - 1].properties; //returns the properties object of the selected event
  if (newProperty.name !== "") {
    //edit properties name
    oldSelectedProperty5.value = newProperty.name;
    oldSelectedProperty5.innerText = newProperty.name;

    currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[newProperty.name] =
      currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5]; //replaces a property name
    delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5]; // delete the old name

    switch (
    newProperty.type //property type conditionals
    ) {
      case "string":
        if (newProperty.validationType === "enum") {
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5] = {
              type: "string",
              enum: newProperty.value.split(","),
            };
          delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5];
        } else {
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5] = {
              type: "string",
              pattern: newProperty.value,
            };
          delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5];
        }
        break;

      case "number":
        currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5] = {
            type: "number",
          };
        delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5];
        break;

      case "boolean":
        currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5] = {
            type: "boolean",
          };
        delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5];
        break;

      case "object":
        if (
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[newProperty.name].properties === {}
        ) {
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5] = {
              type: "object",
              properties: {},
              required: [],
            };
          delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5];
        } else {
          currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5] =
            currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[newProperty.name]; // This line of code serves to replace the object's name. newProperty.name receives the oldPropertyName information along with the dataLayer information contained in CurrentSchema.The third newProperty.name receives all the information along with the object's new name.The delete erases the oldPropertyName information, so as not to have duplicate objects.
          delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5];
        }
        break;

      case "array":
        currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[newProperty.name] = currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5] = {
            type: "array",
            contains: {},
          };
        delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].properties[oldPropertyName5];

        break;

      default:
        break;
    }
    // property modes selection conditionals
    if (newProperty.requiredOption === "required") {
      currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].required = [newProperty.name];
    }

    if (newProperty.requiredOption === "nonRequired") {
      currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[oldPropertyName4].required.splice([
        selectProps5.selectedIndex,
      ]);
    }

    updateSchemaExample(JSON.stringify(schema, undefined, 2));

    //clear the fields and close the popup after edits
    resetPropertyValues();
    popup.style.display = "none";
  };
}

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