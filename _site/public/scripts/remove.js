btnRemovePropertyNv2.onclick = function () {
  let selectProps = document.querySelectorAll('#propertySelected')[0];
  let selectProps2 = document.querySelectorAll('#propertyNv2')[0];
  let selectProps3 = document.querySelectorAll('#propertyNv3')[0];
  let selectProps4 = document.querySelectorAll('#propertyNv4')[0];
  let selectEvents = document.querySelectorAll('#eventSelected')[0];

  let oldSelectedProperty = selectProps.children[selectProps.selectedIndex]; //returns the property selection list

  let oldSelectedProperty2 = selectProps2.children[selectProps2.selectedIndex];
  let oldSelectedProperty3 = selectProps3.children[selectProps3.selectedIndex];
  let oldSelectedProperty4 = selectProps4.children[selectProps4.selectedIndex];

  let oldPropertyName = oldSelectedProperty.value;
  let oldPropertyName2 = oldSelectedProperty2.value;
  let oldPropertyName3 = oldSelectedProperty3.value;
  let oldPropertyName4 = oldSelectedProperty4.value;
  let currentSchemaObject = schema.array.items[selectEvents.selectedIndex - 1].properties;

  delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2];
  selectProps2.remove(selectProps2.selectedIndex);
  currentSchemaObject[oldPropertyName].required.splice(selectProps2.selectedIndex, 1);

  if (selectProps2.length === 1) {
    selectProps2[0].selected = true;
    btnRemoveProperty.hidden = true;
    btnEditProperty.hidden = true;
  }
  updateSchemaExample(JSON.stringify(schema, undefined, 2));
};

btnRemovePropertyNv3.onclick = function () {
  let selectProps = document.querySelectorAll('#propertySelected')[0];
  let selectProps2 = document.querySelectorAll('#propertyNv2')[0];
  let selectProps3 = document.querySelectorAll('#propertyNv3')[0];
  let selectProps4 = document.querySelectorAll('#propertyNv4')[0];
  let selectEvents = document.querySelectorAll('#eventSelected')[0];

  let oldSelectedProperty = selectProps.children[selectProps.selectedIndex]; //returns the property selection list

  let oldSelectedProperty2 = selectProps2.children[selectProps2.selectedIndex];
  let oldSelectedProperty3 = selectProps3.children[selectProps3.selectedIndex];
  let oldSelectedProperty4 = selectProps4.children[selectProps4.selectedIndex];

  let oldPropertyName = oldSelectedProperty.value;
  let oldPropertyName2 = oldSelectedProperty2.value;
  let oldPropertyName3 = oldSelectedProperty3.value;
  let oldPropertyName4 = oldSelectedProperty4.value;
  let currentSchemaObject = schema.array.items[selectEvents.selectedIndex - 1].properties;

  delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3];
  selectProps3.remove(selectProps3.selectedIndex);
  currentSchemaObject[oldPropertyName].properties[oldPropertyName2].required.splice(selectProps3.selectedIndex, 1);

  if (selectProps3.length === 1) {
    selectProps3[0].selected = true;
    btnRemoveProperty.hidden = true;
    btnEditProperty.hidden = true;
  }
  updateSchemaExample(JSON.stringify(schema, undefined, 2));
};

btnRemovePropertyNv4.onclick = function () {
  let selectProps = document.querySelectorAll('#propertySelected')[0];
  let selectProps2 = document.querySelectorAll('#propertyNv2')[0];
  let selectProps3 = document.querySelectorAll('#propertyNv3')[0];
  let selectProps4 = document.querySelectorAll('#propertyNv4')[0];
  let selectProps5 = document.querySelectorAll('#propertyNv5')[0];
  let selectEvents = document.querySelectorAll('#eventSelected')[0];

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
  let currentSchemaObject = schema.array.items[selectEvents.selectedIndex - 1].properties;

  delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[
    oldPropertyName4
  ];
  selectProps4.remove(selectProps4.selectedIndex);
  currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].required.splice(
    selectProps4.selectedIndex,
    1
  );

  if (selectProps4.length === 1) {
    selectProps4[0].selected = true;
    btnRemoveProperty.hidden = true;
    btnEditProperty.hidden = true;
  }
  updateSchemaExample(JSON.stringify(schema, undefined, 2));
};

btnRemovePropertyNv5.onclick = function () {
  let selectProps = document.querySelectorAll('#propertySelected')[0];
  let selectProps2 = document.querySelectorAll('#propertyNv2')[0];
  let selectProps3 = document.querySelectorAll('#propertyNv3')[0];
  let selectProps4 = document.querySelectorAll('#propertyNv4')[0];
  let selectProps5 = document.querySelectorAll('#propertyNv5')[0];
  let selectEvents = document.querySelectorAll('#eventSelected')[0];

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
  let currentSchemaObject = schema.array.items[selectEvents.selectedIndex - 1].properties;

  delete currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[
    oldPropertyName4
  ].properties[oldPropertyName5];
  selectProps5.remove(selectProps5.selectedIndex);
  currentSchemaObject[oldPropertyName].properties[oldPropertyName2].properties[oldPropertyName3].properties[
    oldPropertyName4
  ].required.splice(selectProps5.selectedIndex, 1);

  if (selectProps5.length === 1) {
    selectProps5[0].selected = true;
    btnRemoveProperty.hidden = true;
    btnEditProperty.hidden = true;
  }
  updateSchemaExample(JSON.stringify(schema, undefined, 2));
};
