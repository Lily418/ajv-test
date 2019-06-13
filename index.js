const Ajv = require('ajv');
const ajv = new Ajv({ useDefaults: true });
const validate = ajv.compile({
  "type": "object",
  "properties": {
    "coloursOrNumbers": {
      "oneOf": [
        {
          "title": "Colours",
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "name": {
              "title": "Color Name",
              "type": "string",
              "default": "Red"
            }
          }
        },
        {
          "title": "Numbers",
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "animal": {
              "title": "animal",
              "type": "string"
            }
          }
        }
      ]
    }
  }
});

const data1 = {
  'coloursOrNumbers': {
  }
}

const data2 = {}

const valid = validate(data1);

if (!valid) {
  console.log("Data 1")
  console.log(data1)
  console.log("errors")
  console.log(validate.errors);
} else {
  console.log(data1)
  console.log("Is Valid")
}

const valid2 = validate(data2);
if (!valid2) {
  console.log("Data 2")
  console.log(data2)
  console.log("errors")
  console.log(validate.errors);
} else {
  console.log(data2)
  console.log("Is Valid")
}
