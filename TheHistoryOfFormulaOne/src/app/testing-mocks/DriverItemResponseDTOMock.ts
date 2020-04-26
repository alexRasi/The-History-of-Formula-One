export const DriverItemResponseDTOMock = { "MRData": { "xmlns": "http:\/\/ergast.com\/mrd\/1.4", "series": "f1", "url": "http://ergast.com/api/f1/drivers/abate.json", "limit": "30", "offset": "0", "total": "1", "DriverTable": { "driverId": "abate", "Drivers": [{ "driverId": "abate", "url": "http:\/\/en.wikipedia.org\/wiki\/Carlo_Mario_Abate", "givenName": "Carlo", "familyName": "Abate", "dateOfBirth": "1932-07-10", "nationality": "Italian" }] } } }

export const TransformedDriverItemResponseMock = {
  "details": [
    {
      "attribute": "Date of Birth",
      "value": "1932-07-10"
    },
    {
      "attribute": "Nationality",
      "value": "Italian"
    }
  ],
  "title": "Abate Carlo",
  "titleAbove": "Driver details",
  "description": "http://en.wikipedia.org/wiki/Carlo_Mario_Abate",
  "titleBelow": "Italian"
}
