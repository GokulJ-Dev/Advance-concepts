export function calculateCircumference(radius) {
  console.log("Find circumference call");
  const circumference = 2 * Math.PI * radius;
  return circumference.toFixed(2);
}
