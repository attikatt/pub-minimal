function MenuItem(name, vegan, gluten,taste,imgSrc){
  this.name=name;
  this.vegan=vegan;
  this.gluten=gluten;
  this.taste=taste; //instead of calories
  this.imgSrc=imgSrc;
  this.info = function() {
    return this.name + " tastes like " + this.taste
  };
  this.burgerName = function() {
    return this.name
  };
  this.pic = function(){
    return this.imgSrc
  };
}


function displayItems(menuArr){
  for(var i = 0; i<menuArr.length; i++){
    var element = document.getElementById("burgerspace");
    var cell = document.createElement("td")
    element.appendChild(cell);
    cell.appendChild(document.createTextNode(menuArr[i].info()));

    var picture = document.createElement("img");
    picture.src = menuArr[i].pic();
    picture.setAttribute("height", "150px");
    cell.appendChild(picture);
    cell.appendChild(document.createElement("br"));

    if(menuArr[i].vegan){
      cell.appendChild(document.createTextNode("Vegan!"));
      cell.appendChild(document.createElement("br"));
    }
    if(menuArr[i].gluten){
      cell.appendChild(document.createTextNode("Glutenfree"));
      cell.appendChild(document.createElement("br"));
    }

    var box = document.createElement("input");
    box.type ="checkbox";
    box.name = "burgerBox";
    box.value = menuArr[i].burgerName();
    cell.appendChild(box);
  }
}

var menu = [];
for (var i=0; i < food.length; i++){
  var current = new MenuItem(food[i].name, food[i].vegan, food[i].gluten, food[i].taste, food[i].imgSrc);
  menu.push(current);
}

displayItems(menu);

/*new Vue({
  el: '#sendButton',
  //mixins:[sharedVueStuff],
  methods: {
    placeOrder: function(){
//var sendButton = document.getElementById("sendButton");
//sendButton.addEventListener("click", function clicked(){
  var sodaType = document.getElementsByName("sodaType");
  var chosenSoda;
  for (var i = 0; i<sodaType.length; i++) {
    if (sodaType[i].checked){
      chosenSoda = sodaType[i].value;
    }
  }
  var waterType = document.getElementById("waterType");
  var chosenWater = waterType.options[waterType.selectedIndex].value;

  var chosenBurgers = [];
  var burgerArr = document.getElementsByName("burgerBox");
  for (var i = 0; i<burgerArr.length; i++){
      if (burgerArr[i].checked) {
        chosenBurgers.push(menu[i].burgerName());
      }
  }
  for(var i = 0; i < chosenBurgers.length; i++){
    console.log(chosenBurgers[i]);
  }
  console.log(chosenSoda);
  console.log(chosenWater);
}
}
});
//);
*/
