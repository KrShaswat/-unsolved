def productArrayPuzzle(self, A):
        product = A[0]
        for i in range(1, len(A)):
            product *= A[i]

        result = []
        for j in A:
            result.append(int(product/j))
        return result