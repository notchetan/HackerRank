# Enter your code here. Read input from STDIN. Print output to STDOUT

n = int(input())
name_numbers = [input().split() for _ in range(n)]
phone_book = {k: v for k, v in name_numbers}

while True:
    try:
        searchInput = input()

        if searchInput in phone_book:
            print(f"{searchInput}={phone_book[searchInput]}")
        else:
            print("Not found")
    except EOFError:
        break
