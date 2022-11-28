const removePropertyInSchema = function (propertyName, propertyIndex) {
  //schema.array.items[eventList.selectedIndex-1].properties.delete(propertyIndex,1)
};

const resetPropertyValues = function () {
  propertyName.value = "";
  propertyValue.value = "";
  propertyType[0].selected = true;
  propertyRequired[0].selected = true;
  propertyValidation.hidden = true;
};

btnAddProperty.onclick = function () {
  btnAddObjectNv2.style.display = "block";
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
  let selectProps = document.querySelectorAll("#propertySelected")[0];
  let selectEvents = document.querySelectorAll("#eventSelected")[0];
  let selectedProperty = selectProps.children[selectProps.selectedIndex].value
  delete schema.array.items[selectEvents.selectedIndex - 1].properties[selectedProperty]
  propertyList.remove(propertyList.selectedIndex);
  schema.array.items[selectEvents.selectedIndex - 1].required.splice(selectProps.selectedIndex,1)

  if (propertyList.length === 1) {
    propertyList[0].selected = true;
    btnRemoveProperty.hidden = true;
    btnEditProperty.hidden = true;
  }

  updateSchemaExample(JSON.stringify(schema, undefined, 2));
};