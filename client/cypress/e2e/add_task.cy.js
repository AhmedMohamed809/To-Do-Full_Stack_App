
describe("Todo App - Adding Task", () => {
  beforeEach(() => {
    // Assuming your todo app is hosted at http://localhost:3000
    cy.visit("https://todo-app-v1-aqbn.onrender.com/");
  });

  it("should add a task to the todo list", () => {
    const taskName = "Go to the GYM"; // Replace this with the task you want to add

    // Find the input field and type the task name
    cy.get(".form-control").type(taskName);

    // Find the "Add Task" button and click it
    cy.get(".btn-success").click();

    // Wait for the task to be added to the list (you can replace the data-testid with the actual selector used in your app)
  });
});
