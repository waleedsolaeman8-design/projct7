# Exercise 7: Modal Dialog & Toast Notifications

## Goal
Build a confirmation window (modal) that appears over the page before an action runs, plus small temporary messages (toasts) that report success or failure.

## Requirements
- Add a button that opens a window asking "Do you want to confirm this action?".
- Put Confirm and Cancel buttons in the window, each with a different result.
- After an action, show a Success or Error toast that disappears after a short time.
- Support several toasts at once, neatly stacked, without one removing another.

## How to test
- Try Confirm and Cancel and check that the results are different.
- Trigger several toasts in a row and check that they appear without overlapping.

## Topics to research
- HTML `dialog`: using the dialog element and the ways to open and close it.
- Focus management: moving focus into the window and giving it back afterwards.
- `setTimeout`: hiding a temporary message after a set time.

## Bonus (optional)
Add a close button to each toast, and pause its auto-hide timer while the mouse is over it.

## Hint
A modal is more than a div on top of the page; handle focus movement and accessibility properly.

## Running
Open this folder with VS Code Live Server, or run `python3 -m http.server 8000` in this folder and open `http://localhost:8000`.

## Files
- `index.html`: the open button, a `<dialog>` with Cancel/Confirm, and the empty `#toast-region`.
- `styles.css`: base styles plus dialog styles and suggested `toast`, `success` and `error` classes.
- `script.js`: your work goes under each `TODO`.

## Submission notes
Fill these in before you submit:
- How to run:
- Features implemented:
- What I tested:
- Challenges I faced:
