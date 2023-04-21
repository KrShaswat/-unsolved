def anyBaseToDecimal(self, A, B):
        num = str(A)
        ans = 0
        for i in range(len(num)):
            ans += int(num[-(i+1)]) * pow(B, i)

        return ans