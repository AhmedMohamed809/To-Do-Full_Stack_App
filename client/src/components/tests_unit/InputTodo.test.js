// to run a test write in terminal >> npm run test
import {render , screen} from "@testing-library/react"
import InputTodo from "../InputTodo";
test('User input should reander', () => {
    render(<InputTodo/>);
    const userInput = screen.getByPlaceholderText('input');
    expect(userInput).toBeInTheDocument();
 })