using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CodingChallenge
{
    public class ParameterFinder
    {
        public string GetParameters(string input, bool alphabetical = false)
        {
            var entries = new List<string>();
            int currentLevel = 0;
            var entrybuilder = new StringBuilder();

            void FlushEntry()
            {
                if (currentLevel < 0)
                {
                    throw new MismatchedParenthesisException(input);
                }

                var entry = entrybuilder.ToString().Trim();
                if (entry.Length > 0)
                {
                    var prefix = new string('-', currentLevel);
                    entries.Add($"{prefix}{entry}");
                    entrybuilder.Clear();
                }
            }

            for(int i = 0; i < input.Length; ++i)
            {
                if (input[i] == '(')
                {
                    FlushEntry();
                    if (i > 0)
                    {
                        ++currentLevel;
                    }
                }
                else if (input[i] == ')')
                {
                    FlushEntry();
                    if (i < input.Length - 1)
                    {
                        --currentLevel;
                    }
                }
                else if (input[i] == ',')
                {
                    FlushEntry();
                }
                else
                {
                    entrybuilder.Append(input[i]);
                }

                if (currentLevel < 0)
                {
                    throw new MismatchedParenthesisException(input);
                }
            }

            if (currentLevel != 0)
            {
                throw new MismatchedParenthesisException(input);
            }

            if (alphabetical)
            {
                entries.Sort();
            }

            return string.Join(Environment.NewLine, entries);
        }
    }
}
