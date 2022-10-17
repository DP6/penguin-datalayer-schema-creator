  btnAddConfig.onclick = function () {
    let url = document.querySelector("#url").value;
    let dataLayer = document.querySelector("#dataLayer").value;
    let schema_name = document.querySelector("#schema_name").value;
    
  
    document.querySelector("#url").value = "";
    document.querySelector("#dataLayer").value = "";
    document.querySelector("#schema_name").value = "";
    
    if (url === "" || dataLayer === "" || schema_name === "") {
      alert("Please enter a valid Name");
      return;
    }
  
     validator = {
        validator: [
          {
            url: url,
            schema_name: [schema_name],
            dataLayer: dataLayer,
            browserClose: true,
            time: 0
          },
        ]
      };
  
    updateValidatorExample(JSON.stringify(validator, undefined, 2));

    
  };
  btnRemoveConfig.onclick = function(){
    validateExample = document.getElementById("schemaExample")
    validateExample.parentNode.removeChild(validateExample)
    updateValidatorExample(JSON.stringify(validator, undefined, 2));
}