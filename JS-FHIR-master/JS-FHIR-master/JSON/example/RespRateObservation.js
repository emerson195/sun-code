var a =
{
  "resourceType": "Observation",
   "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/observation-category",
          "code": "vital-signs",
          "display": "Vital Signs"
        }
      ],
      "text": "Vital Signs"
    }
  ],
  "code": {
    "coding": [
      {
        "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.707679",
        "code": "9",
        "display": "Resp"
      },
      {
        "system": "http://loinc.org",
        "code": "8716-3",
        "display": "Vital signs"
      },
      {
        "system": "http://loinc.org",
        "code": "9279-1",
        "display": "Respiratory rate"
      }
    ],
    "text": "Resp"
  },
  "subject": {
    "reference": "Patient/1856173"
  },

  "effectiveDateTime": "2023-04-26T16:51:00Z",
  "issued": "2023-04-26T18:45:04Z",
  "performer": [
    {
      "reference": "https://apporchard.epic.com/interconnect-aocurprd-oauth/api/FHIR/STU3/Practitioner/ezIpoEeKz89EabNN6Hx26xg3",
      "display": "Circ Nurse Optime, RN"
    }
  ],
  "valueQuantity": {
    "value": 28,
    "unit": "/min",
    "system": "http://unitsofmeasure.org",
    "code": "/min"
  }
}