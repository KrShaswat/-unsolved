def solve(self, A):
        # count A
        # push pairs count += A count
        res = 0
        countA = 0
        for i in A:
            if i == 'A':
                countA += 1
            if i == 'G':
                res += countA
        
        return res