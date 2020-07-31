import os

dire = "/Users/stephengiardina/Desktop/Personal Projects/Leet-Code-Problems"

files = sorted(os.listdir(dire))

directoriesToEdit = []

for i in range(len(files)):
  if '.' not in files[i]:
    # files[i] is changed to an int so that the array gets sorted properly.
    directoriesToEdit.append(int(files[i]))

# This is a variable containing a list of all of the problem directories and only the problem directories.
directoriesToEdit = sorted(directoriesToEdit)


# This is done just to change the elements in the array back to type str.
tempArray = []
for i in range(len(directoriesToEdit)):
  tempArray.append(str(directoriesToEdit[i]))
directoriesToEdit = tempArray


# This function gets the first line of every README.md file (the name of the problem), then puts that line into an array, then loops over that array and adds it to the README.md file in the working directory

def updateProblemList():
  problems = []
  # This loop gets all the first lines excluding the "# "
  for i in range(len(directoriesToEdit)):
    fileName = open((directoriesToEdit[i]) + "/README.md", "r")
    problems.append(fileName.readline()[2:])
  readMe = open("README.md", "a+")
  for i in range(len(problems)):
    readMe.write("## " + problems[i])
    readMe.write("\n")
  return problems

updateProblemList()

# This function loops over every directory in the working directory and checks if it has a specific type of file in it. If it does not then it will add that file to that directory.

# def addFileToListOfDirectories(fileName):
#   for i in range(len(directoriesToEdit)):
#     if "main.py" not in (os.listdir(dire + "/" + directoriesToEdit[i])):
#       print(directoriesToEdit[i],"it was not in it py")
#       f = open(directoriesToEdit[i] + "/main.py", "w+")
#     else:
#       print(directoriesToEdit[i],"it was in it py")

