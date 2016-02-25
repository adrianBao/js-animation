/**
 * Created by adrian on 2015/11/27.
 */
//IE中不支持getElementsByClassName

function getClassName(cla,parent){
    var oParent = parent?document.getElementById(parent):document,
        elements=oParent.getElementsByTagName("*");
    var className = [];
    for (var i = 0 ;i<elements.length;i++){
        if (elements[i].className==cla){
            className.push(elements[i])
        }
    }
    return className;
}