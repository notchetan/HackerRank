# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(input())

for i in range(0, n):
    input_str = input()
    print(input()[::2], input()[1::2])
