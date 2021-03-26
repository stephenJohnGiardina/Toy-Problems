import os
import sys
import inquirer

def initialize(directory):
  """
  This is a function that takes in a path name and creates a new folder with that path name,
  then creates a README.md file, a main.js file, and a main.py file within that folder. This
  function also initializes the test suite. It doesn't write the tests, but it does write a
  skeleton for the tests.
  """
  directory = "Problems/" + str(directory)
  os.mkdir(directory)
  open(directory + "/README.md", "a+")
  jsContents = [
    '\n\n\n',
    '// TEST SUITE',
    '\n\n',
    '// TEST 1',
    '\n\n',
    'function test1() {',
    '\n',
    '  const actual;',
    '\n',
    '  const expected;',
    '\n',
    '  if (actual === expected) {',
    '\n',
    '    return \'PASSED!\';',
    '\n',
    '  }',
    '\n',
    '  return \'FAILED!\';',
    '\n',
    '}',
    '\n\n',
    'console.log(test1());',
    '\n\n',
    '// TEST 2',
    '\n\n',
    'function test2() {',
    '\n',
    '  const actual;',
    '\n',
    '  const expected;',
    '\n',
    '  if (actual === expected) {',
    '\n',
    '    return \'PASSED!\';',
    '\n',
    '  }',
    '\n',
    '  return \'FAILED!\';',
    '\n',
    '}',
    '\n\n',
    'console.log(test2());',
    '\n',
  ]
  pyContents = [
    '\n\n\n',
    '# TEST SUITE',
    '\n\n',
    '# TEST 1',
    '\n\n',
    'def test1():',
    '\n',
    '  actual = None',
    '\n',
    '  expected = None',
    '\n',
    '  if actual == expected:',
    '\n',
    '    return \'PASSED!\'',
    '\n',
    '  return \'FAILED!\'',
    '\n\n',
    'print(test1())',
    '\n\n',
    '# TEST 2',
    '\n\n',
    'def test2():',
    '\n',
    '  actual = None',
    '\n',
    '  expected = None',
    '\n',
    '  if actual == expected:',
    '\n',
    '    return \'PASSED!\'',
    '\n',
    '  return \'FAILED!\'',
    '\n\n',
    'print(test2())',
    '\n',
  ]

  with open(directory + "/main.js", "a+")as js:
    for i in range(len(jsContents)):
      print(jsContents[i])
      js.write(jsContents[i])
  
  with open(directory + "/main.py", "a+") as py:
    for i in range(len(pyContents)):
      py.write(pyContents[i])

def obtain_number():
  """
  This is a simple function that uses the inquirer library
  to obtain the new file name from the user.
  """

  # Obtain all current already existing problem numbers
  all_problem_numbers = os.listdir("Problems")
  
  while True:

    print("You are about to initialize a new Leetcode problem workspace.")

    questions = [
      inquirer.Text(
        "problem_number",
        message="What is the number of the Leetcode problem you would like to initialize?",
      )
    ]

    answers = inquirer.prompt(questions)

    problem_number = answers["problem_number"]

    if problem_number in all_problem_numbers:
      print("This problem has already been initialized. Please pick another problem number.")
      continue

    print("You chose " + problem_number + ". This problem number has not yet been initialized.")

    correct_choice_questions = [
      inquirer.List(
        "Correct problem_number",
        message=(
          "Are you sure this is the problem number you want to create? " + problem_number
        ),
        choices=[
          "Yes",
          "No"
        ]
      )
    ]

    correct_choice = inquirer.prompt(correct_choice_questions)
    correct_choice_yes_or_no = correct_choice["Correct problem_number"]
    if correct_choice_yes_or_no == "Yes":
      initialize(problem_number)
      break
    else:
      continue

if __name__ == "__main__":
  obtain_number()
