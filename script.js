/*
 * SpendWise budget calculator
 * This project demonstrates variables, data types, prompt input,
 * calculations, reusable functions, and clearly labeled console output.
 */

"use strict";

// Store a sample of the application's budget and expense data.
const appName = "SpendWise";
const currency = "KSh";
let monthlyBudget = 0; // number: user's budget for the month
let expenses = []; // array: stores expense objects
let totalExpenses = 0; // number: total of all expense amounts
let remainingBalance = 0; // number: budget left after expenses

/**
 * Ask the user for a valid positive amount.
 * Returns a number, or null if the user cancels.
 */
function askForAmount(message) {
  while (true) {
    const answer = prompt(message);

    if (answer === null) {
      return null;
    }

    const amount = Number(answer.trim());

    if (answer.trim() !== "" && Number.isFinite(amount) && amount > 0) {
      return amount;
    }

    alert("Please enter a valid number greater than zero.");
  }
}

/**
 * Calculate the sum of all expense amounts.
 * @param {Array<{name: string, amount: number}>} expenseList
 * @returns {number}
 */
function calculateTotalExpenses(expenseList) {
  return expenseList.reduce(function (total, expense) {
    return total + expense.amount;
  }, 0);
}

/**
 * Calculate the remaining budget after expenses.
 * @param {number} budget
 * @param {number} spent
 * @returns {number}
 */
function calculateRemainingBudget(budget, spent) {
  return budget - spent;
}

/**
 * Print a clearly labeled budget summary to the browser console.
 */
function displayBudgetSummary() {
  console.clear();
  console.log("=== " + appName + " Budget Summary ===");
  console.log("Monthly budget: " + currency + " " + monthlyBudget.toFixed(2));
  console.log("Number of expenses: " + expenses.length);

  if (expenses.length > 0) {
    console.log("Expense details:");
    expenses.forEach(function (expense, index) {
      console.log((index + 1) + ". " + expense.name + ": " + currency + " " + expense.amount.toFixed(2));
    });
  } else {
    console.log("Expense details: No expenses were added.");
  }

  console.log("Total expenses: " + currency + " " + totalExpenses.toFixed(2));
  console.log("Remaining balance: " + currency + " " + remainingBalance.toFixed(2));

  if (remainingBalance < 0) {
    console.warn("Budget status: Over budget by " + currency + " " + Math.abs(remainingBalance).toFixed(2));
  } else {
    console.log("Budget status: Within budget.");
  }
  console.log("==================================");
}

/**
 * Start the prompt-based budget flow.
 */
function runBudgetPlanner() {
  const enteredBudget = askForAmount("Enter your total monthly budget in KSh:");
  if (enteredBudget === null) {
    console.log("SpendWise: Budget calculation cancelled.");
    return;
  }

  monthlyBudget = enteredBudget;
  expenses = [];

  while (true) {
    const expenseNameAnswer = prompt("Enter an expense name (for example, Food). Press Cancel or leave blank to finish adding expenses.");

    if (expenseNameAnswer === null || expenseNameAnswer.trim() === "") {
      break;
    }

    const expenseAmount = askForAmount("Enter the amount for " + expenseNameAnswer.trim() + " in KSh:");
    if (expenseAmount === null) {
      break;
    }

    // Each expense is an object containing a string name and numeric amount.
    const expense = {
      name: expenseNameAnswer.trim(),
      amount: expenseAmount
    };
    expenses.push(expense);
  }

  totalExpenses = calculateTotalExpenses(expenses);
  remainingBalance = calculateRemainingBudget(monthlyBudget, totalExpenses);
  displayBudgetSummary();

  alert(
    "SpendWise budget summary\n" +
    "Monthly budget: " + currency + " " + monthlyBudget.toFixed(2) + "\n" +
    "Total expenses: " + currency + " " + totalExpenses.toFixed(2) + "\n" +
    "Remaining balance: " + currency + " " + remainingBalance.toFixed(2) +
    "\n\nOpen your browser Console to see the full breakdown."
  );
}

// Connect the button to the reusable budget planner function.
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-budget");

  if (startButton) {
    startButton.addEventListener("click", runBudgetPlanner);
  }

  console.log(appName + " JavaScript loaded successfully. Click “Start budget calculation” to begin.");
});
