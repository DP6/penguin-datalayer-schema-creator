let opa = {
  type: "object",
  properties: {opa:{
    type: "object",
    properties: {opa:{
      type: "object",
      properties: {opa:{
        type: "object",
        properties: {opa:{
          type: "object",
          properties: {opa:{
            type: "object",
            properties: {opa2:{
              type: "object",
              properties: {},
              required: []
            }},
            required: []
          }},
          required: []
        }},
        required: []
      }},
      required: []
    }},
    required: []
  }},
  required: []
}
const chave = Object.keys(opa.properties)[0]
function search(object,chave) {
  for(let [prop,value] of Object.entries(object)){
    if(prop === 'properties' && typeof value === 'object'){
      if(Object.entries(value).length === 0){
        return value
      }
      else{
        for(let [key,val] of Object.entries(value)){
          if(key === chave){
             return search(val,chave)
          }
        }
      }
    }
  }
}

console.log(search(opa,chave))
console.log(chave)
// function addInProperty(){
//     search(opa,chave).result =
//     {
//       type: "object",
//       properties: {},
//       required: []
//     }
//   return opa
// }


// console.log(addInProperty())