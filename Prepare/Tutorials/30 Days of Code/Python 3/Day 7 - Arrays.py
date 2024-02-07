#!/bin/python3

if __name__ == '__main__':
    n = int(input().strip())
    arr = list(map(int, input().rstrip().split()))

    reverse_arr = [str(i) for i in arr[::-1]]
    print(' '.join(reverse_arr))