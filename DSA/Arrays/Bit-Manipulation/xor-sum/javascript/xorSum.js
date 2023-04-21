/*
Explanation
We can choose any X. So lets try to choose optimally. Say for any ith bit in binary values of A and B, the bit is set for both A and B.
Then we can also set it in X such that XOR with both becomes 0.
Similarly, if for both A and B the bit was unset, we unset it for X as well. XOR of that bit remains 0.
Now try to think if the bit is set for one and unset for other what will X and our result be.

That's right doesnt matter if the bit is set or unset that bit will be added to our answer as either A ^ X != 0 or B ^ X != 0 for that bit.
Now did you take the observation? If we are adding a bit to out answer if that bit is set for one number and unset for another,
then it is A ^ B operation itself. So A ^ B is our answer.

Mathematical proof
Given (A ^ X) + (B ^ X)
Taking X = (A & B), we have 
(A ^ (A & B)) + (B ^ (A & B))
   (using x ^ y = x'y + y'x )
= (A'(A & B) + A(A & B)') + (B'(A & B) + B(A & B)')
   (using (x & y)' = x' + y')
= (A'(A & B) + A(A' + B')) + (B'(A & B) + B(A' + B'))
  (A'(A & B) = A'A & A'B = 0, B'(A & B) 
   = B'A & B'B = 0)
= (A(A' + B')) + (B(A' + B'))                               
= (AA' + AB') + (BA' + BB')
  (using xx' = x'x = 0)                                   
= (AB') + (BA')                                             
= (A ^ B)
*/

export const xorSum = (A, B) => {
    return A ^ B;
};
