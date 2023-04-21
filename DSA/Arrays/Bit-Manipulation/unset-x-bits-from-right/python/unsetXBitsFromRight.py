def unsetXBitsFromRight(A, B):
        # A = 1011101, B = 4
        # shift the digits right 4 times then
        # A = 101
        # now left shift B times
        # A = 1010000
        A = A>>B
        return A<<B