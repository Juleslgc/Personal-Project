#!/usr/bin/python3
import random
import string

def generator_password(length=12, digit=True, uppercase=True, symbol=True):
    """
    Generates a secure password with several options:
    - length: total length of the password (default = 12)
    - digit: includes at least one digit if True
    - uppercase: includes at least one capital letter if True
    - symbol: includes at least one symbol if True
    """
    character = list(string.ascii_lowercase) # List of basic characters (lowercase)
    password = [] # List to build the password

    # If the 'digit' option is enabled, the digits are added
    if digit:
        character += list(string.digits)
        password.append(random.choice(string.digits)) # Add at least one digit
    
    if uppercase:
        character += list(string.ascii_uppercase)
        password.append(random.choice(string.ascii_uppercase))
    
    if symbol:
        character += list("!@#$%^&*()-_=+[]{}")
        password.append(random.choice("!@#$%^&*()-_=+[]{}"))

    if not character:
        return "Error: Nothing selected character" # Check that we have characters
    
    rest = length - len(password) # Calculating the number of characters remaining

    for _ in range(rest):
        password.append(random.choice(character)) # Fills the rest randomly
    
    random.shuffle(password) # Mix the characters
    return ''.join(password) # Returns the password as a string

if __name__ == "__main__":
    # Displays the password generated when the file is executed
    print(f"Generated password: {generator_password()}")
