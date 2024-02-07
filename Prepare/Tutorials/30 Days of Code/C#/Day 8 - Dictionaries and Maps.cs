class Solution
{
    static void Main(string[] args)
    {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        int numberOfEntries = Convert.ToInt32(Console.ReadLine());
        Dictionary<string, string> phoneBook = new Dictionary<string, string>();

        for (int i = 1; i <= numberOfEntries; i++)
        {
            string[] phoneBook_temp = Console.ReadLine().Split(' ');
            phoneBook[phoneBook_temp[0]] = phoneBook_temp[1];
        }

        string? userInput;
        while ((userInput = Console.ReadLine()) != null)
        {
            try
            {
                Console.WriteLine(userInput + "=" + phoneBook[userInput]);
            }
            catch
            {
                Console.WriteLine("Not found");
            }
        }
    }
}