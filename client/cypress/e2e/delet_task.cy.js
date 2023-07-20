// cypress/integration/todoApp.spec.js

describe('Todo App', () => {
    beforeEach(() => {
      // Assuming your app is served on localhost:3000, adjust if needed
      cy.visit('http://localhost:3000');
    });
  
    it('should delete a task', () => {
      // Check if the task to delete exists
      cy.contains('.todo.description').should('exist');
  
      // Click the delete button for Task 1
      cy.get('.btn-danger').first().click();
  
      // Check if the task was deleted successfully
      cy.contains('Task 1').should('not.exist');
    });
  });
  