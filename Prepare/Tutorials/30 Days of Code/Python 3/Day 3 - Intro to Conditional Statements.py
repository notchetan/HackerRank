#!/bin/python3

if __name__ == "__main__":
    N = int(input().strip())

    if N % 2 == 0:
        if N >= 2 and N <= 5:
            print("Not Weird")
        elif N >= 6 and N <= 20:
            print("Weird")
        else:
            print("Not Weird")
    else:
        print("Weird")
