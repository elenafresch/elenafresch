'''
Author: elenafresch
Concepts: encapsulation
Instruction: write a py class that has a private attribute, methods to deposit and withdraw money, a method to check balance
'''

class BankAccount():
    # Create a list to keep track of all class objects that are created
    all = []

    # Initialize class and define arguments to be passed when instantiating objects
    def __init__(self, iban: str, holder_name: str, balance = 0.0):

        # Add data validation rules via assert magic method
        assert len(iban) <= 34 and len(iban) >= 14, f"IBAN {iban} is out of range. Keep between 14 and 34 characters."
        assert balance >= 0, f"Balance {balance} must be greater than or equal to zero."

        # Assign attributes to object (i.e., self)
        self.__iban = iban
        self.__holder_name = holder_name
        self.__balance = balance

        # Append each new object to 'all' list
        BankAccount.all.append(self)
    
    # Make the IBAN read-only (encapsulation)
    @property
    def iban(self):
        return self.__iban
    
    # Make the account holder name read-only (encapsulation)
    @property
    def holder_name(self):
        return self.__holder_name

    # Make the balance read-only (encapsulation)
    @property
    def balance(self):
        return self.__balance

    # Define method to deposit money (and update balance)
    def deposit(self, amount=0.0):
        # Takes deposit amount, must be positive float greater than 0
        if amount > 0.0:
            self.__balance += amount
            return f"Successfully deposited EUR {amount}!"
        else:
            raise ValueError("Deposit amount must be greater than zero.")

    # Define method to withdraw money (and update balance)
    def withdraw(self, amount=0.0):
        # Takes withdraw amount, must be positive float greater than 0
        if amount > 0.0:
            if amount < self.__balance:
                self.__balance -= amount
                return f"Successfully withdrawn EUR {amount}!"
            else:
                return "Insufficient funds. Please deposit, or withdraw a smaller amount."
        else:
            raise ValueError("Withdraw amount must be greater than zero.")
            

    # Define method to check balance
    def check_balance(self):
        return f"Your current account balance is EUR {self.__balance}."
        