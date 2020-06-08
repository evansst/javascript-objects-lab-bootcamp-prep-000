function updateObjectWithKeyAndValue(obj,key,value) {
  var obj2 = obj.assign({key: value}, obj)
  return obj2;
}