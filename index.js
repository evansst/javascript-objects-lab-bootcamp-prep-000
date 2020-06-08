function updateObjectWithKeyAndValue(obj,key,value) {
  var obj2 = new Object({key: value}, obj)
  return obj2;
}