def checkBit(self, A, B):
        return 1 if A & (1<<B) == (1<<B) else 0