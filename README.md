# CSE 110 Lab 8

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed. Explanation: using GitHub actions, we can avoid manually testing our code. The tests will run automatically every time we push the code which can save us a lot of effort. Also the test results can be easily shared with teammates if this is a group project.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No. Explanation: we should use a unit test to check a single function's output.