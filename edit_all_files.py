"""
This is a script that finds and replaces all instances of a character with another character.
This script does this recursively.

This program takes in three parameters:

    1 find = Character to be found
    2 replace = Character to be replaced
    3 folder = folder to do replacing in
"""

import os
import sys

def main(find, replace, folder):
    """
    This function recursively edits files by finding a character and replacing it.

    Params:

    find = Character to be found
    replace = Character to be replaced
    folder = folder to do replacing in
    """

    for file in os.listdir(folder):
        if os.path.isdir(file):
            main(find, replace, folder + "/" + file)
        else:
            with open(folder + "/" + file, "r") as current_file:
                lines = []
                i = 0
                for line in current_file.readlines():
                    if find in line:
                        string = ""
                        for char in line:
                            if char == find:
                                string += replace
                            else:
                                string += char
                        lines.append(string)

                    else:
                        lines.append(line)
                    i += 1
            with open(folder + "/" + file, "w") as current_file:
                current_file.writelines(lines)

if __name__ =="__main__":
    main(sys.argv[1], sys.argv[2], sys.argv[3])
