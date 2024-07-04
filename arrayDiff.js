function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}


// Test Cases
const testCases = [
  {
    name: "Basic Difference",
    a: [1, 2, 3, 4],
    b: [2, 3],
    expected: [1, 4],
  },
  {
    name: "Duplicates",
    a: [1, 2, 2, 3, 4],
    b: [2, 3, 1],
    expected: [4],
  },
  {
    name: "Empty Arrays",
    a: [],
    b: [1, 2, 3],
    expected: [],
  },
  {
    name: "Different Data Types",
    a: [1, "apple", true],
    b: [2, 1],
    expected: ["apple", true],
  },
];


for (const testCase of testCases) {
  const result = array_diff(testCase.a, testCase.b);
  console.log(`Test: ${testCase.name}`);
  console.log(`Input: a = [${testCase.a}], b = [${testCase.b}]`);
  console.log(`Expected: [${testCase.expected}]`);
  console.log(`Result: [${result}]`);

  if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
    console.log("✅ Passed");
  } else {
    console.error("❌ Failed");
  }
  console.log("---");
}
  
    
  
  
 
