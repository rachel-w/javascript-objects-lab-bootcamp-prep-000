var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value})
  //returns original key value pairs and new key value pair
  //doesn't modify original "recipes" object, returns clone with new data
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
  //modifies original object with new key and value
}

function deleteFromObjectByKey(object, key){
  var newObj = object
  delete newObj.key
  return newObj

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}
