function updateObjectWithKeyAndValue(obj,key,value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value)
{
  var obj2 = new Object(obj)
  obj2[key] = value
  return obj2;
}