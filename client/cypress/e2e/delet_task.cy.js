// // cypress/integration/todoApp.spec.js

// describe('Todo App', () => {
//     beforeEach(() => {
//       // Assuming your app is served on localhost:3000, adjust if needed
//       cy.visit('http://localhost:3000');
//     });
  
//     it('should delete a task', () => {
//       // Check if the task to delete exists
//       cy.contains('.todo.description').should('exist');
  
//       // Click the delete button for Task 1
//       cy.get('.btn-danger').first().click();
  
//       // Check if the task was deleted successfully
//       cy.contains('Task 1').should('not.exist');
//     });
//   });
describe("Todo App - delete Task", () => {
  beforeEach(() => {
    // Assuming your todo app is hosted at http://localhost:3000
    cy.visit("http://localhost:3000");
  });

  it("should add  and delete a task to the todo list", () => {
    const taskName = "buy new car"; // Replace this with the task you want to add
    // cy.get('.form-control').clear();
    // Find the input field and type the task name
    cy.get(".form-control").type(taskName);

    // Find the "Add Task" button and click it
    cy.get(".btn-success").click();

    // Wait for the task to be added to the list (you can replace the data-testid with the actual selector used in your app)
  // Check if the task to delete exists
    cy.contains('buy new car').should('exist');
        // Click the delete button for Task 1
    cy.get('.delete-btn').first().click();
  // Check if the task to delete not  exists
    cy.contains('.desc-f').should('not.exist');
  });
});