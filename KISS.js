/*
  KISS - keep it simple, stupid

  write clean and straighforward code
  avoid overenginnering
  don't be clever just to look smart - clarity beats complexity
*/

// bad example
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0) * !!arr.length || null;
}

// good example
function sum(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((a, b) => a + b, 0);
}
