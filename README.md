# React-Calculator
Calculator App
This is a simple calculator application built using React. It features a display and buttons for basic arithmetic operations. Users can perform calculations by clicking on the buttons and the results will be displayed in real-time.

Features
Calculator Display: Displays the current input and calculation result.
Button Container: Contains buttons for numbers, operators, and actions such as "C" for clear and "=" for evaluating the expression.
Responsive Design: Uses CSS styling from App.module.css to provide a responsive and user-friendly interface.

How It Works
The application uses a state (CaVal) to keep track of the current input value for the calculator.
When a button is clicked, the onButtonClick function handles the button press and updates the calculator state accordingly.
If the "=" button is clicked, the current expression is evaluated using JavaScript's eval function and the result is displayed.
If the "C" button is clicked, the display is cleared.

App: The main application component that contains the calculator layout and state.
Display: A component that renders the calculator display.
ButtonContainer: A component that renders the calculator buttons and handles button clicks.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please create a pull request or open an issue.
