# SpendWise — JavaScript Foundation

SpendWise is a beginner-friendly personal budget planner. The page lets a user enter a monthly budget and multiple expenses through JavaScript prompts. It calculates total expenses and the remaining balance, then prints a clear summary in the browser console.

## Project files

- **`index.html`** — Provides the SpendWise page structure and the button that starts the budget calculation. It links the CSS and JavaScript files.
- **`style.css`** — Styles the dashboard with a responsive layout, a green theme built with CSS variables, Google Fonts, and subtle hover effects.
- **`script.js`** — Collects user input, stores budget and expense data, performs calculations, and displays labeled console output.
- **`README.md`** — Explains the project and how to run it.

## JavaScript concepts implemented

### Variables and data types

- `const appName` stores the application name as a string.
- `const currency` stores the currency label as a string.
- `let monthlyBudget` stores the user's budget as a number.
- `let expenses` stores expense objects in an array. Each object has a string `name` and numeric `amount`.
- `let totalExpenses` and `let remainingBalance` store calculation results as numbers.

### Collecting user input

The `askForAmount()` function uses `prompt()` to ask for amounts, converts text to numbers with `Number()`, and checks that the value is valid and greater than zero. The main planner uses prompts to collect the monthly budget, expense names, and expense amounts. The user can cancel or leave the expense name blank to finish adding expenses.

### Calculations

- `calculateTotalExpenses(expenseList)` adds all expense amounts using `reduce()`.
- `calculateRemainingBudget(budget, spent)` subtracts total expenses from the monthly budget.
- The result may be positive (money remains), zero (budget is fully used), or negative (spending is over budget).

### Reusable functions

- `askForAmount()` validates numeric input.
- `calculateTotalExpenses()` totals an array of expenses.
- `calculateRemainingBudget()` calculates the balance.
- `displayBudgetSummary()` prints the budget, each expense, total expenses, remaining balance, and budget status.
- `runBudgetPlanner()` coordinates the input and calculation process.

### Console output

The script logs a startup message when the page loads. After a budget run, it prints a labeled summary to the browser Console using `console.log()` and `console.warn()`.

## How to test the project

1. Open `index.html` in a browser, or run it with the Live Server extension in Visual Studio Code.
2. Open Developer Tools: press **F12** on Windows, or right-click the page and choose **Inspect**, then select **Console**.
3. Click **Start budget calculation**.
4. Enter a monthly budget, then enter one or more expense names and amounts.
5. Cancel the expense-name prompt or leave it blank to finish.
6. Check the Console for the expense breakdown, total expenses, remaining balance, and budget status.
7. Try invalid amounts, cancel the prompts, and test spending that is both below and above the budget.

All values are sample user inputs. The project is an educational JavaScript foundation and does not save information after the page is refreshed.
