def interstingArray(A):
        ans = 0
        for i in A:
            ans = ans ^ i
        return 'Yes' if ans & 1 == 0 else 'No'