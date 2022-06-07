let schemaItens = [];
let btnAddEvent = document.querySelector('#buttonAddEvent');

btnAddEvent.onclick = () => {
    let eventName = document.querySelector('#eventName').value;

    if (eventName == '') {
        alert('Please enter a valid Name');
        return;
    }

    let eventObjt = {
        "type": "object",
        "properties": {
          "event": {
            "type": "string",
            "enum": [eventName]
          }
        },
        "required": ["event"]
      }

    schemaItens.push(eventObjt)

    console.log(schemaItens);
}