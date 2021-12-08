class ReferencesService {
  getCounterCopyingReferences(object) {
    const anotherObject = object;
    return anotherObject;
  }

  getCounterWithoutCopyingReferences(object) {
    return { ...object };
  }

  
  // @TIP: if you want to do the extra sub-challenge, uncomment and implement the following function:
  getCounterWithoutDeepCopyingReferences(object) {
    const objToString = JSON.stringify(object);
    return JSON.parse(objToString);
  }
  
}

module.exports = ReferencesService;
