btnAddObject.onclick = function () {
let newPropertyOption = new Option(propertyName.value, propertyName.value);
let selectProps = document.querySelectorAll("#propertySelected")[0];
let selectEvents = document.querySelectorAll("#eventSelected")[0];
let currentSchemaObject = schema.array.items[selectEvents.selectedIndex - 1].properties; //returns the properties object of the selected event
let selectedPropertyValue = selectProps.children[selectProps.selectedIndex].value;
    btnAddObject2.style.display = "block";
    label2.style.display = "block";
    propertyNv2.style.display = "block";
    btnRemovePropertyNv2.style.display = "block"
    
    if (selectedPropertyValue === "Properties") {
      alert("selecione a propriedade desejada");
    } else {
      switch (propertyType.value) {
        case "string":
          if (propertyValidation.value === "enum") {
            currentSchemaObject[selectedPropertyValue].properties[propertyName.value] = {
              type: "string",
              enum: propertyValue.value.split(","),
            };
          } else {
            currentSchemaObject[selectedPropertyValue].properties[propertyName.value] = {
              type: "string",
              pattern: propertyValue.value,
            };
          }
          break;
  
        case "number":
          currentSchemaObject[selectedPropertyValue].properties[propertyName.value] = {
            type: "number",
          };
          break;
  
        case "boolean":
          currentSchemaObject[selectedPropertyValue].properties[propertyName.value] = {
            type: "boolean",
          };
          break;
  
        case "object":
          currentSchemaObject[selectedPropertyValue].properties[propertyName.value] = {
            type: "object",
            properties: {},
            required: [],
          };
  
          break;
  
        case "array":
          currentSchemaObject[selectedPropertyValue].properties[propertyName.value] = {
            type: "array",
            contains: {},
          };
  
          break;
  
        default:
          break;
      }
      if (propertyRequired.value === "required") {
        currentSchemaObject[selectedPropertyValue].required.push(propertyName.value);
      }

      propertyNv2.add(newPropertyOption)
      updateSchemaExample(JSON.stringify(schema, undefined, 2));
      resetPropertyValues();
    }
  };

btnAddObject2.onclick = function () {
  let newPropertyOption = new Option(propertyName.value, propertyName.value);
let selectProps = document.querySelectorAll("#propertySelected")[0];
let selectProps2 = document.querySelectorAll("#propertyNv2")[0];
let selectEvents = document.querySelectorAll("#eventSelected")[0];
let currentSchemaObject = schema.array.items[selectEvents.selectedIndex - 1].properties; //returns the properties object of the selected event

let selectedPropertyValue = selectProps.children[selectProps.selectedIndex].value;
let selectedPropertyValue2 = selectProps2.children[selectProps2.selectedIndex].value;

    btnAddObject3.style.display = "block";
    label3.style.display = "block";
    propertyNv3.style.display = "block"; 
    btnRemovePropertyNv3.style.display = "block"
  
    
  
    if (selectedPropertyValue === "Properties") {
      alert("selecione a propriedade desejada");
    } else {
      switch (propertyType.value) {
        case "string":
          if (propertyValidation.value === "enum") {
            currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties = {
              type: "string",
              enum: propertyValue.value.split(","),
            };
          } else {
            currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties = {
              type: "string",
              pattern: propertyValue.value,
            };
          }
          break;
  
        case "number":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[propertyName.value] = {
            type: "number",
          };
          break;
  
        case "boolean":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[propertyName.value] = {
            type: "boolean",
          };
          break;
  
        case "object":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[propertyName.value] ={

            type: "object",
            properties: {},
            required: [],
          };
  
          break;
  
        case "array":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[propertyName.value] = {
            type: "array",
            contains: {},
          };
  
          break;
  
        default:
          break;
      }
      if (propertyRequired.value === "required") {
        currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].required.push(propertyName.value);
      }
      propertyNv3.add(newPropertyOption)
      updateSchemaExample(JSON.stringify(schema, undefined, 2));
      resetPropertyValues();
    }
  };

btnAddObject3.onclick = function () {
  let newPropertyOption = new Option(propertyName.value, propertyName.value);
let selectProps = document.querySelectorAll("#propertySelected")[0];
let selectProps2 = document.querySelectorAll("#propertyNv2")[0];
let selectProps3 = document.querySelectorAll("#propertyNv3")[0];
let selectEvents = document.querySelectorAll("#eventSelected")[0];
let currentSchemaObject = schema.array.items[selectEvents.selectedIndex - 1].properties; //returns the properties object of the selected event


let selectedPropertyValue = selectProps.children[selectProps.selectedIndex].value;
let selectedPropertyValue2 = selectProps2.children[selectProps2.selectedIndex].value;
let selectedPropertyValue3 = selectProps3.children[selectProps3.selectedIndex].value;

    btnAddObject4.style.display = "block";
    label4.style.display = "block";
    propertyNv4.style.display = "block";
    btnRemovePropertyNv4.style.display = "block"

    if (selectedPropertyValue === "Properties") {
      alert("selecione a propriedade desejada");
    } else {
      switch (propertyType.value) {
        case "string":
          if (propertyValidation.value === "enum") {
            currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties = {
              type: "string",
              enum: propertyValue.value.split(","),
            };
          } else {
            currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties = {
              type: "string",
              pattern: propertyValue.value,
            };
          }
          break;
  
        case "number":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties[propertyName.value] = {
            type: "number",
          };
          break;
  
        case "boolean":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties[propertyName.value] = {
            type: "boolean",
          };
          break;
  
        case "object":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties[propertyName.value] ={

            type: "object",
            properties: {},
            required: [],
          };
  
          break;
  
        case "array":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties[propertyName.value] = {
            type: "array",
            contains: {},
          };
  
          break;
  
        default:
          break;
      }
      if (propertyRequired.value === "required") {
        currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].required.push(propertyName.value)
      }
      propertyNv4.add(newPropertyOption)
      updateSchemaExample(JSON.stringify(schema, undefined, 2));
      resetPropertyValues();
    }
  };

btnAddObject4.onclick = function () {
  let newPropertyOption = new Option(propertyName.value, propertyName.value);
let selectProps = document.querySelectorAll("#propertySelected")[0];
let selectProps2 = document.querySelectorAll("#propertyNv2")[0];
let selectProps3 = document.querySelectorAll("#propertyNv3")[0];
let selectProps4 = document.querySelectorAll("#propertyNv4")[0];
let selectEvents = document.querySelectorAll("#eventSelected")[0];
let currentSchemaObject = schema.array.items[selectEvents.selectedIndex - 1].properties; //returns the properties object of the selected event

let selectedPropertyValue = selectProps.children[selectProps.selectedIndex].value;
let selectedPropertyValue2 = selectProps2.children[selectProps2.selectedIndex].value;
let selectedPropertyValue3 = selectProps3.children[selectProps3.selectedIndex].value;
let selectedPropertyValue4 = selectProps4.children[selectProps4.selectedIndex].value;
    
    label5.style.display = "block";
    propertyNv5.style.display = "block";
    btnRemovePropertyNv5.style.display = "block"    
  
    if (selectedPropertyValue === "Properties") {
      alert("selecione a propriedade desejada");
    } else {
      switch (propertyType.value) {
        case "string":
          if (propertyValidation.value === "enum") {
            currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties[selectedPropertyValue4].properties = {
              type: "string",
              enum: propertyValue.value.split(","),
            };
          } else {
            currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties[selectedPropertyValue4].properties = {
              type: "string",
              pattern: propertyValue.value,
            };
          }
          break;
  
        case "number":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties[selectedPropertyValue4].properties[propertyName.value] = {
            type: "number",
          };
          break;
  
        case "boolean":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties[selectedPropertyValue4].properties[propertyName.value] = {
            type: "boolean",
          };
          break;
  
        case "object":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties[selectedPropertyValue4].properties[propertyName.value] ={

            type: "object",
            properties: {},
            required: [],
          };
  
          break;
  
        case "array":
          currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties[selectedPropertyValue4].properties[propertyName.value] = {
            type: "array",
            contains: {},
          };
  
          break;
  
        default:
          break;
      }
      if (propertyRequired.value === "required") {
        currentSchemaObject[selectedPropertyValue].properties[selectedPropertyValue2].properties[selectedPropertyValue3].properties[selectedPropertyValue4].required.push(propertyName.value)
      }
      propertyNv5.add(newPropertyOption)
      updateSchemaExample(JSON.stringify(schema, undefined, 2));
      resetPropertyValues();
    }
  };