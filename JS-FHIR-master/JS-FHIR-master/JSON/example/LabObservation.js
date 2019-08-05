var a =
    {
  "resourceType": "Observation",
  "id": "1553115",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2019-03-05T10:08:01.798+00:00"
  },
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/observation-category",
          "code": "laboratory",
          "display": "Laboratory"
        }
      ],
      "text": "Laboratory"
    },
    {
      "coding": [
        {
          "system": "urn:oid:1.2.840.114350.1.13.0.1.7.10.798268.30",
          "code": "Lab",
          "display": "Lab"
        }
      ],
      "text": "Lab"
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "11277-1",
        "display": "Epithelial cells.squamous [#/area] in Urine sediment by Microscopy high power field"
      }
    ],
    "text": "Squamous Epithelial, Urine"
  },
  "subject": {
    "reference": "Patient/1552245"
  },
  "effectiveDateTime": "2013-07-27T05:00:00Z",
  "issued": "2013-07-27T05:00:00Z",
  "valueString": "0-1",
  "referenceRange": [
    {
      "low": {
        "value": 1,
        "unit": "/HPF"
      },
      "text": "1 /HPF"
    }
  ]
}