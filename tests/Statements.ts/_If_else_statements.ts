// if ststement
let a = 7;
if (a%2 == 0){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}

//--------------------------------------------------------------------------------------
// //nested if else statments
// Student Grade Calculator
// Problem: Take marks (0–100) and print the grade based on these rules:
// - 90 and above → A
// - 80–89 → B
// - 70–79 → C
// - 60–69 → D
// - Below 60 → Fail

let Marks = 40;
if(Marks >= 90){
    console.log("A grade")
}
else if (Marks >= 80){
    console.log("B grade")}
    else if(Marks >= 60){
        console.log("C grade")}
        else{
            console.log("Still processing")
        }
//-------------------------------------------------------------------------------------
// Take a year and check if it's a leap year.
// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year
// Else → Not a leap year

let year = 2026;
if ((year%4 === 0 && year%100 !==0) || (year%400 ===0)){
    console.log("leap year");
} else {
    console.log("Not a leap year");
}
//-------------------------------------------------------------

// Given an HTTP status code, print which category it belongs to.
// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid

let statusCode = 400;

if(statusCode >= 200 && statusCode <= 299)
{
    console.log("Success");
}
else if(statusCode >= 300 && statusCode <= 399)
{
    console.log("Redirection");
}
else if(statusCode >= 400 && statusCode <= 499)
{
    console.log("Client Error");
}
else if(statusCode >= 500 && statusCode <= 599)
{
    console.log("Server Error");
}
else
{
    console.log("Invalid");
}

//---------------------------------------------------------------------

// Compare actual result with expected result and print test verdict.
// Sample Input/Output:
// expected = "Login Successful"
// actual   = "Login Successful"
// Output: ✅ Test Passed
// expected = "Login Successful"
// actual   = "Invalid Credentials"
// Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials

let expectedResult = "Login Successful";
let actualResult = "Invalid Credentials";

if (expectedResult === actualResult)
{
    console.log("✅ Test Passed");
}
else if (expectedResult !== actualResult)
{
    console.log(`❌ Test Failed - Expected: ${expectedResult}, Got: ${actualResult}`);
}

//------------------------------------------------------------------------------

// Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical (block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score
// Sample Input/Output:
// Input: 9
// Output: Severity: Critical — Block release
// Input: 5
// Output: Severity: Medium

let bugSeverity = 5;

if (bugSeverity === 9 || bugSeverity === 10)
{
    console.log("Severity: Critical - Block release");
}
else if (bugSeverity === 7 || bugSeverity === 8)
{
    console.log("High");
}
else if (bugSeverity >= 4 && bugSeverity <= 6)
{
    console.log("Medium");
}
else if (bugSeverity >= 1 && bugSeverity <= 3)
{
    console.log("Low");
}
else
{
    console.log("Invalid Score");
}

//----------------------------------------------------------------------

// Given the percentage of test cases passed in a CI build, report build health.
// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)
// Sample Input/Output:
// Input: 95
// Output: 🟡 Stable — Investigate failures
// Input: 65
// Output: 🔴 Broken Build — Block deployment

let buildHealthPercentage = 90;

if (buildHealthPercentage === 100)
{
    console.log("🟢 Green Build");
}
else if (buildHealthPercentage >= 90 && buildHealthPercentage <= 99)
{
    console.log("🟡 Stable - Investigate failures");
}
else if (buildHealthPercentage >= 70 && buildHealthPercentage <= 89)
{
    console.log("🟠 Unstable");
}
else if (buildHealthPercentage < 70)
{
    console.log("🔴 Broken Build - Block deployment");
}
else
{
    console.log("Invalid percentage");
}

//=========================================================================

// Problem: Track failed login attempts. Lock the account after 3 failed attempts.
// Sample Input/Output:
// Input: attempts = 2
// Output: 1 attempt left before lockout
// Input: attempts = 3
// Output: 🔒 Account Locked — Contact support
// Input: attempts = 0
// Output: Login successful
let attempt = 3;

if (attempt === 0)
{
    console.log("Login successful");
}
else if (attempt === 1)
{
    console.log("2 attempts left before lockout");
}
else if (attempt === 2)
{
    console.log("1 attempt left before lockout");
}
else if (attempt >= 3)
{
    console.log("🔒 Account Locked - Contact support");
}