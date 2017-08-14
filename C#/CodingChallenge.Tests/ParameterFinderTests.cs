using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace CodingChallenge.Tests
{
    public class ParameterFinderTests
    {
        public class GetParametersTests
        {
            [Theory]
            [InlineData("((id,created))),employee(id,firstname,employeeType(id), lastname),location)")]
            [InlineData("(((id,created,employee(id,firstname,employeeType(id), lastname),location)")]
            [InlineData("(id,created,employee(((id,firstname,employeeType(id), lastname),location)")]
            public void MismatchedParenthesisThrows(string input)
            {
                //Arrange
                var parameterFinder = new ParameterFinder();
                //Act and Assert
                Should.Throw<MismatchedParenthesisException>(() =>
                {
                    parameterFinder.GetParameters(input);
                });
            }

            [Fact]
            public void ResultIsCorrect()
            {
                //Arrange
                const string validInput = "(id,created,employee(id,firstname,employeeType(id), lastname),location)";
                var parameterFinder = new ParameterFinder();
                var expected = string.Join(Environment.NewLine, new[]
                {
                    "id",
                    "created",
                    "employee",
                    "-id",
                    "-firstname",
                    "-employeeType",
                    "--id",
                    "-lastname",
                    "location"
                });
                //Act
                var actual = parameterFinder.GetParameters(validInput);
                //Assert
                actual.ShouldBe(expected);
            }
        }
    }
}
