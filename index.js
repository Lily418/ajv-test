const Ajv = require("ajv");
const ajv = new Ajv({ useDefaults: true });
const validate = ajv.compile({
  type: "object",
  properties: {
    coloursOrNumbers: {
      oneOf: [
        {
          title: "Colours",
          type: "object",
          additionalProperties: false,
          properties: {
            name: {
              title: "Color Name",
              type: "string",
              default: "Red"
            }
          }
        },
        {
          title: "Numbers",
          type: "object",
          additionalProperties: false,
          properties: {
            animal: {
              title: "animal",
              type: "string"
            }
          }
        }
      ]
    }
  }
});

const validateSubset = ajv.compile({
  title: "Colours",
  type: "object",
  additionalProperties: false,
  properties: {
    name: {
      title: "Color Name",
      type: "string",
      default: "Red"
    }
  }
});

const data1 = {
  coloursOrNumbers: {}
};

const dataEmptyObj = {};

const valid = validate(data1);
console.log("Data 1");
if (!valid) {
  console.log(data1);
  console.log("errors");
  console.log(validate.errors);
} else {
  console.log(data1);
  console.log("Is Valid");
}

const valid2 = validate(dataEmptyObj);
console.log("Data 2");
if (!valid2) {
  console.log(dataEmptyObj);
  console.log("errors");
  console.log(validate.errors);
} else {
  console.log(dataEmptyObj);
  console.log("Is Valid");
}


const valid3 = validateSubset(dataEmptyObj)
console.log("Data 3");
if (!valid3) {
  console.log(dataEmptyObj);
  console.log("errors");
  console.log(validate.errors);
} else {
  console.log(dataEmptyObj);
  console.log("Is Valid");
}
