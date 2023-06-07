
// SCRAPPED
// Initial way of thinking about how to handle the different operations
// Left this in here to show initial thinking about the application logic.
// In production you would leave this out obviously.
  
  /*   const handleEqualClick = () => {
        try {
          const tokens = input.split(' '); // Split the input by spaces
          let result = parseInt(tokens[0]);
      
          for (let i = 1; i < tokens.length; i += 2) {
            const operator = tokens[i];
            const operand = parseInt(tokens[i + 1]);
      
            switch (operator) {
              case '+':
                result += operand;
                break;
              case '-':
                result -= operand;
                break;
              case '*':
                result *= operand;
                break;
              case '/':
                result /= operand;
                break;
              // Handle other operators as needed
            }
          }
      
          setInput(result.toString());
        } catch (error) {
          setInput('Error');
        }
      }; */