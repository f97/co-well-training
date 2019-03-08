function changeDiv() {
    var bgColor = document.getElementById("bgcolor").value;;
    var width = document.getElementById("width").value;;
    var height = document.getElementById("height").value;;
    document.getElementById("divtest").style.backgroundColor = bgColor;
    document.getElementById("divtest").style.width = width + 'px';
    document.getElementById("divtest").style.height = height + 'px';
}

function addBtnClick() {
    var name = document.getElementById("name").value;
    var value = document.getElementById("value").value;
    var obj = new Obj(name, value);
    obj.addObj();
}

function Obj(name, value) {
    this.addObj = function () {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(name + " : " + value);
        node.appendChild(textnode);
        document.getElementById("uljsoop").appendChild(node);
    }
}