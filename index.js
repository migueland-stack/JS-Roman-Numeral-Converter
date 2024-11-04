// Main Function
const romanToArabic = () => {
  let inputNumber = parseInt(document.getElementById("number").value);
  const outputMessage = document.getElementById("output");

  // Input validation
  if (isNaN(inputNumber)) {
    outputMessage.innerHTML = "<p>Please enter a valid number</p>";
    outputMessage.style.color = "#8e0900";
    outputMessage.style.border = "#8e0900 4px solid";
    outputMessage.style.backgroundColor = "#fb8585";
    outputMessage.style.visibility = "visible";
  } else if (inputNumber <= 0) {
    outputMessage.innerHTML =
      "<p>Please enter a number greater than or equal to 1</p>";
    outputMessage.style.color = "#8e0900";
    outputMessage.style.border = "#8e0900 4px solid";
    outputMessage.style.backgroundColor = "#fb8585";
    outputMessage.style.visibility = "visible";
  } else if (inputNumber > 3999) {
    outputMessage.innerHTML =
      "<p>Please enter a number less than or equal to 3999</p>";
    outputMessage.style.color = "#8e0900";
    outputMessage.style.border = "#8e0900 4px solid";
    outputMessage.style.backgroundColor = "#fb8585";
    outputMessage.style.visibility = "visible";
  } else {
    // Convert Arabic numeral to Roman numeral
    const roman_numeral_map = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];

    let result = ""; // Accumulate Roman Numerals
    roman_numeral_map.forEach(([romanSymbol, arabicValue]) => {
      while (inputNumber >= arabicValue) {
        result += romanSymbol; // Append the Roman numeral to the result
        inputNumber -= arabicValue; // Subtract the Arabic value from inputNumber
      }
    });
    outputMessage.innerHTML = result;
    outputMessage.style.color = "#bdc4a7";
    outputMessage.style.border = "#bdc4a7 4px solid";
    outputMessage.style.backgroundColor = "#545b5e";
    outputMessage.style.visibility = "visible";
  }
};

document.getElementById("convert-btn").addEventListener("click", romanToArabic);
