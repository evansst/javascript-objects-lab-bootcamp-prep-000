function updateObjectWithKeyAndValue(obj,key,value) {
  var obj2 = Object.assign({key: value}, obj)
  return obj2;
}