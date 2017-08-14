using System;
using System.Collections.Generic;
using System.Text;

namespace CodingChallenge
{
    public class MismatchedParenthesisException : Exception
    {
        public MismatchedParenthesisException(string input = "")
            :base($"The imput string contains mismatched parenthesis. \"{input}\"")
        {
        }
    }
}
