def solve(self, A):
        max = A[0]
        for i in A:
            if i > max:
                max = i
        seconds = 0
        for j in A:
            seconds += max - j
        return seconds