def decimalToAnyBase(A, B):
        power = 0
        ans = 0
        while A > 0:
            rem = A%B
            ans += rem*(10**power)
            power += 1
            A //= B
        return ans
