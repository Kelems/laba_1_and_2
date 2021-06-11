function square_equation() {
  var a = document.equation.equation_a.value;
  var b = document.equation.equation_b.value;
  var c = document.equation.equation_c.value;

  var x1;
  var x2;

  var d = b * b - 4 * a * c;
  if (a == 0) alert("введен неправильный коэффициент");
  else if (d < 0) alert("решений нет");
  else if (d == 0) {
    // два одинаковых вещественных корня
    x1 = x2 = -b / (2 * a);
  } else {
    // два различных вещественных корня
    x1 = -b / (2 * a) - Math.sqrt(d) / (2 * a);
    x2 = -b / (2 * a) + Math.sqrt(d) / (2 * a);
  }
  document.getElementById("x1").innerHTML = x1;
  document.getElementById("x2").innerHTML = x2;
}

// X<i><sub>1</sub></i>
