(function(){
  var colors = [
    "#3498db",
    "#c0392b",
    "#16a085",
    "#2980b9",
    "#2c3e50",
    "#d35400",
    "#e67e22"
  ];

  setInterval(function(){
    var color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
  }, 30000);

})()
