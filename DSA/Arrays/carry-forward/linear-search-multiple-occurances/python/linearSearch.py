def solve(self, A, B):
        count = 0
        for i in A:
            if i == B:
                count += 1
        
        return count