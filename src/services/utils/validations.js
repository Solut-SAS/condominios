const minLength = (a, b) => a > b;
const isRequired = (value) => value.length > 0;

const rules = {
  minLength: (a, b) => minLength(a, b),
  required: (value) => isRequired(value),
};

const validate = (type, rule, value) => {
  // console.log(type, rule, value);
  // rules[type as keyof validationsProps]
};

export default function validateFields(validations, value) {
  Object.entries(validations).map((v) => {
    // validate(v[0], v[1], value)
    return "";
  });
  return "";
}
