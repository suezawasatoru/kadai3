let result = document.getElementById("result");

function number_button(btn) {

  let value = btn.value;

  if (result.value == "0" && value == "0") {
    result.value = "0";
  } else if (result.value == "0" && value == "00") {
    result.value = "0";
  } else if (is_ope_last() && value == "00") {
    result.value += "";
  } else if (result.value == "0") {
    result.value = value;
  } else {
    result.value += value;
  }

}



function point_button(btn) {

  let value = btn.value;

  if (result.value == "0" && value == ".") {
    result.value = "0."
  } else if (is_point_last()) {
    result.value = result.value.slice(0, -1) + value;
  } else if (is_ope_last() && ["."].includes(value)) {
    result.value += "";
  } else {
    result.value += value;
  }
}

function calculation_button(btn) {

  let value = btn.value;

  if (is_ope_last()) {
    result.value = result.value.slice(0, -1) + value;
  } else if (is_point_last() && ["+", "-", "*", "/"].includes(value)) {
    result.value += "";
  } else {
    result.value += value;
  }


}


function clear_button() {

  result.value = "0";
}

function calc_button() {

  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = "error"
  }

}

function is_ope_last() {

 return ["+", "-", "*", "/"].includes(result.value.slice(-1));
}

function is_point_last() {
  
 return ["."].includes(result.value.slice(-1));
}