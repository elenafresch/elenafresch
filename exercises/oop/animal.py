'''
Author: elenafresch
Concepts: inheritance
Instruction: write two classes (animal, dog) where dog is the child class that inherits a method from the parent but overrides it
'''

class Animal():
    # Create list of objects
    all = []

    sound = "some sound"

    # Define instantiation parameters
    def __init__(self, name: str):

        # Assign instance attributes to self
        self.name = name

        # Append objects to list
        Animal.all.append(self)
    
    # Define method to be inherited
    def make_sound(self):
        print(self.sound)

    

class Dog(Animal):
    # Create list of objects
    all = []

    # Define sound to override class attribute
    sound = "Bark"

    # Inherit methods and attributes from parent
    def __init__(self, name: str):
        super().__init__(name)
        Dog.all.append(self)
    

