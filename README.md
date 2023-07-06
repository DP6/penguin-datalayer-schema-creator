# Bem vindo ao Penguin DataLayer Schema Creator!
--- 

## [Clique Aqui para acessar o Penguin dataLayer Schema Creator](./public/index.html)

O Penguin DataLayer Schema Creator é um gerador de esquemas que nos auxiliará na validação da camada de dados (DataLayer). Posteriormente, poderemos adicioná-lo ao Analytics Watcher para extrair os resultados. O Analytics Watcher é uma extensão do Google Chrome que facilita a depuração do Universal Analytics.
  
---------

### JSON Schema

O JSON Schema é uma estrutura que permite a validação de documentos JSON. Esta estrutura é utilizada no projeto pois permite a declaração dos formatos de dados esperados dentro da camada de dados.

#### Tipos Suportados

Os seguintes tipos de dados são suportados:

- String
- Number
- Boolean
- Object
- Array
  
#### Regras de validação

As seguintes regras para validação são aceitas:

- Enum (Equals): A ser utilizada quando houver a necessidade de validar a igualdade entre o valor informado no schema versus o que foi enviado para a camada de dados
- Pattern (Regex - String): É possível criar expressões regulares para validar valores das chaves
- minItems (Array): Valida o número mínimo de itens contidos no array
- Required: Quando houver a obrigatoriedade de validar uma determinada chave
  
#### Estrutura do JSON Schema

A estrutura a seguir é um exemplo de um JSON Schema:
```
 {
  "$schema": "",
  "title": "Schema example",
  "array": {
    "$id": "#/properties/schema",
    "type": "array",
    "items": [
      {
        "type": "object",
        "properties": {
          "event": {
            "type": "string",
            "enum": ["teste"]
          },
          "key1": {
            "type": "object",
            "properties": {
              "key1_sub1": {
                "type": "number",
                "enum": [10]
              },
              "key1_sub2": {
                "type": "string",
                "pattern": "teste|test|.*"
              },
              "key1_sub3": {
                "type": "string",
                "enum": ["producao"]
              },
              "key1_sub4": {
                "type": "boolean",
                "enum": "desktop|mobile|msite"
              }
            },
            "required": ["key1_sub1", "key1_sub2", "key1_sub3", "key1_sub4"]
          }
        },
        "required": ["event"]
      }
    ]
  }
}
```





# Como contribuir
Pull requests são bem-vindos! Nós vamos adorar ajuda para evoluir esse modulo. Senta-se livre para navegar por open issues buscando por algo que possa fazer. Caso temha uma nova feature ou bug, por favor abra uma nova issue para ser acompanhada pelo nosso time.

### Requisitos obrigatórios

Só serão aceito as contribuições que estiverem seguindo os seguintes requisitos:

- [Padrão de commit](https://www.conventionalcommits.org/en/v1.0.0/)

### Suporte:

DP6 Koopa-troopa Team

e-mail: koopas@dp6.com.br

![koopa](../public/assets/img/koopa.png/koopa.png)
