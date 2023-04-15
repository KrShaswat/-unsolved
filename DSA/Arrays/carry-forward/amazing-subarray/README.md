# Amazing Subarrays

## Problem

### Description

    You are given a string S, and you have to find all the amazing substrings of S.

    An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

### Constraints

    1 <= length(S) <= 1e6
    S can have special characters

### Input Format

    Only argument given is string S.

### Output Format

    Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.

## Example

### Input

#### Input 1:

    ABEC

### Output

#### Output 1:

    6

### Explanation

#### Explanation 1:

    Amazing substrings of given string are :
    1. A
    2. AB
    3. ABE
    4. ABEC
    5. E
    6. EC
    here number of substrings are 6 and 6 % 10003 = 6.
