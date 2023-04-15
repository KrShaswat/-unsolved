def productArrayPuzzle(A):
        product = A[0]
        for i in range(1, len(A)):
            product *= A[i]

        result = []
        for j in A:
            result.append(int(product/j))
        return result

def productPuzzleMultiOnly(A):
        N = len(A)
        pf = [0]*N
        sf = [0]*N
        pf[0] = A[0]
        sf[-1] = A[-1]
        i = 1
        j = N-2
        while i < N and j > 0:
            pf[i] = pf[i-1] * A[i]
            sf[j] = sf[j+1] * A[j]
            i+=1
            j-=1
        result = []
        for i in range(N):
            #check for first and last
            if(i == 0):
                result.append(sf[i+1])
            elif (i == N-1):
                result.append(pf[i-1])
            else:
                result.append(pf[i-1]*sf[i+1])
        return result