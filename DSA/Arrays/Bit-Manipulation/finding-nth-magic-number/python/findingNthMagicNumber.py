def findingNthMagicNumber(A):
        ans = 0 
        power = 1
        while A > 0:
            if A & 1:
                ans += (5**power)
            A = A >> 1
            power += 1

        return ans