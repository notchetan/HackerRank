using System;
using System.Collections.Generic;
using System.IO;

class Solution
{
    static void Main(String[] args)
    {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        int input_itr = Convert.ToInt32(Console.ReadLine());

        for (int j = 0; j < input_itr; j++)
        {
            string input_str = Console.ReadLine();
            string odd_str = "";
            string even_str = "";

            for (int i = 0; i < input_str.Length; i++)
            {
                if (i % 2 == 0)
                {
                    even_str += input_str[i];
                }
                else
                {
                    odd_str += input_str[i];
                }
            }

            Console.WriteLine(even_str + " " + odd_str);
        }
    }
}