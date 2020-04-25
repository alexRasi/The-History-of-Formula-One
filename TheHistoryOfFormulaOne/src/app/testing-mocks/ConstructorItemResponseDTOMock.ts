export const ConstructorItemResponseDTO_MOCK = {"MRData":{"xmlns":"http:\/\/ergast.com\/mrd\/1.4","series":"f1","url":"http://ergast.com/api/f1/constructors/adams.json","limit":"30","offset":"0","total":"1","ConstructorTable":{"constructorId":"adams","Constructors":[{"constructorId":"adams","url":"http:\/\/en.wikipedia.org\/wiki\/Adams_(constructor)","name":"Adams","nationality":"American"}]}}}

export const TransformedConstructorItemResponseMock = {
  "details": [
    {
      "attribute": "Nationality",
      "value": "American"
    }
  ],
  "title": "Adams",
  "titleAbove": "Constructor details",
  "description": "http://en.wikipedia.org/wiki/Adams_(constructor)",
  "titleBelow": "American"
};
