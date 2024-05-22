// common function
function getInputValueById(inputFieldId) {
  const inputElement = document.getElementById(inputFieldId);
  const inputString = inputElement.value;
  const input = parseFloat(inputString);
  return input;
}
// set value
function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
// triangle
function triangleCalculation() {
  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");
  const result = 0.5 * base * height;
  setValue("triangle-result", result);
  // calculation history
  const calculationHistory = document.getElementById("calculation-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      calculationHistory.childElementCount + 1
                    }. Triangle</p>
                    <p class="w-20 p-2">${result}cm</p>
                    <button class="text-white text-base  p-2 rounded-lg bg-blue">Convert to m<sup>2</sup></button>
                </div>
  `;
  calculationHistory.appendChild(div);
}
// rectangle
function rectangleCalculation() {
  const width = getInputValueById("rectangle-width");
  const height = getInputValueById("rectangle-height");
  const rectangleResult = width * height;
  setValue("rectangle-result", rectangleResult);
  // calculation history
  const calculationHistory = document.getElementById("calculation-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      calculationHistory.childElementCount + 1
                    }. Rectangle</p>
                    <p class="w-20 p-2">${rectangleResult}cm</p>
                    <button class="text-white text-base  p-2 rounded-lg bg-blue">Convert to m<sup>2</sup></button>
                </div>
  `;
  calculationHistory.appendChild(div);
}

// Parallelogram
function parallelCalculation() {
  const base = getInputValueById("parallel-base");
  const height = getInputValueById("parallel-height");
  const parallelResult = base * height;
  setValue("parallel-result", parallelResult);
  // calculation history
  const calculationHistory = document.getElementById("calculation-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      calculationHistory.childElementCount + 1
                    }. Parallelogram</p>
                    <p class="w-20 p-2">${parallelResult}cm</p>
                    <button class="text-white text-base  p-2 rounded-lg bg-blue">Convert to m<sup>2</sup>
                    </button>
                </div>
  `;
  calculationHistory.appendChild(div);
}

// Rhombus
function rhombusCalculation() {
  const base = getInputValueById("rhombus-d1");
  const height = getInputValueById("rhombus-d2");
  const rhombusResult = 0.5 * base * height;
  setValue("rhombus-result", rhombusResult);
  // calculation history
  const calculationHistory = document.getElementById("calculation-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      calculationHistory.childElementCount + 1
                    }. Rhombus</p>
                    <p class="w-20 p-2">${rhombusResult}cm</p>
                    <button class="text-white text-base  p-2 rounded-lg bg-blue">Convert to m<sup>2</sup>
                    </button>
                </div>
  `;
  calculationHistory.appendChild(div);
}

// Pentagon
function pentagonCalculation() {
  const parameter = getInputValueById("pentagon-parameter");
  const base = getInputValueById("pentagon-base");
  const pentagonResult = 0.5 * base * parameter;
  setValue("pentagon-result", pentagonResult);
  // calculation history
  const calculationHistory = document.getElementById("calculation-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      calculationHistory.childElementCount + 1
                    }. Pentagon</p>
                    <p class="w-20 p-2">${pentagonResult}cm</p>
                    <button class="text-white text-base  p-2 rounded-lg bg-blue">Convert to m<sup>2</sup>
                    </button>
                </div>
  `;
  calculationHistory.appendChild(div);
}

// ellipse
function ellipseCalculation() {
  const area = getInputValueById("ellipse-a");
  const base = getInputValueById("ellipse-b");
  const ellipseResult = 3.1416 * base * area;
  setValue("ellipse-result", ellipseResult);
  // calculation history
  const calculationHistory = document.getElementById("calculation-history");
  const div = document.createElement("div");
  div.innerHTML = `
                <div class="py-3 flex flex-row  items-center justify-between">
                    <p class="text-[20px] font-bold text-dark2">${
                      calculationHistory.childElementCount + 1
                    }. Pentagon</p>
                    <p class="w-20 p-2">${ellipseResult}cm</p>
                    <button class="text-white text-base  p-2 rounded-lg bg-blue">Convert to m<sup>2</sup>
                    </button>
                </div>
  `;
  calculationHistory.appendChild(div);
}