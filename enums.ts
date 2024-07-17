//Enums

//1. Numeric Enums

enum Direction {
  East,
  West,
  North,
  South,
}

console.log("East value : ", Direction.East);
console.log("South value : ", Direction.South);

enum Directions {
  East = 11,
  West,
  North,
  South,
}

console.log("East value : ", Directions.East);
console.log("South value : ", Directions.South);

enum AllDirections {
  East, // logs 0
  West = 12,
  North,
  South, // logs 14
}

console.log("East value : ", AllDirections.East);
console.log("South value : ", AllDirections.South);

enum StatusCode {
  Success = 200,
  NotFound = 404,
  Accepted = 202,
  BadRequest = 400,
}

console.log("StatusCode value : ", StatusCode.NotFound);
console.log("StatusCode value : ", StatusCode.Success);

// 2. String Enums

enum CardinalDirections {
  East = "East",
  West = "West",
  North = "North",
  South = "South",
}

console.log(CardinalDirections.East);
console.log(CardinalDirections.South);

enum cardinalDirections {
  East, // logs 0
  West = "West",
  North = "North",
  South = "South",
}

console.log(cardinalDirections.East);
console.log(cardinalDirections.South);
