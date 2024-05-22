// common function
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputString = inputField.value;
  const input = parseFloat(inputString);
  return input;
}
// set value
function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function triangleCalculation() {
  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");
  const result = 0.5 * base * height;
  setValue("triangle-result", result);
}
