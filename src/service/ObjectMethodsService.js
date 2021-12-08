class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    rawObject.valueOf = function() {
      return this.age;
    }

    return rawObject;

  }

  getEnhancedObject2(rawObject) {
    rawObject.toString = function() {
      return `[name="${this.name}",age=${this.age}]`
    }

    return rawObject;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    rawObject[Symbol.toPrimitive] = function(coercionType) {
      const mapTypes = new Map([
        ['string', `[name="${this.name}",age=${this.age}]`],
        ['number', this.age]
      ]);

      return mapTypes.get(coercionType);
    }

    return rawObject;
  }
}

module.exports = ObjectMethodsService;
