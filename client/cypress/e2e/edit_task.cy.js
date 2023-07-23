
describe("Todo App - edit Task", () => {
    beforeEach(() => {
      // Assuming your todo app is hosted at http://localhost:3000
      cy.visit("https://todo-app-v1-aqbn.onrender.com/");
    });
  
    it("should edit a task to the todo list", () => {
      const taskName = "travel to USA at 6PM"; // Replace this with the task you want to add
  
      // Find the input field and type the task name
      cy.get(".form-control").type(taskName);
  
      // Find the "Add Task" button and click it
      cy.get(".btn-success").click();
  
     // Find and click on the edit button of the task you want to edit
      cy.get('.edit-btn').first().click();     
      // Clear the existing task text and type a new task text
       cy.get('.edit-form').clear().type('Updated task'); 
         // Click the save or update button
       cy.get('.edit-button').click();
       // Verify that the task has been updated
      cy.get('.desc-f').first().should('contain', 'Updated task');

    });
  });