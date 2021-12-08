class ReferencesService {
  getCounterCopyingReferences(object) {
    const anotherObject = object;
    return anotherObject;
  }

  getCounterWithoutCopyingReferences(object) {
    return { ...object };
  }

  getCounterWithoutDeepCopyingReferences(object) {
    const objToString = JSON.stringify(object);
    return JSON.parse(objToString);
  }
  
}

module.exports = ReferencesService;
