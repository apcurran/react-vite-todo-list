describe("Add Todo", () => {
    beforeEach(() => {
        // clear any old todos
        
        cy.visit("/");
        // add todo before each test
        cy.contains("New Todo").should("be.visible");
        cy.get("[data-cy='new-todo-input']").type("Walk the dog");
        cy.contains("Add Todo").click();
    });
    
    it("Checks for the creation of a new todo", () => {
        cy.get(".todo").find("p");
    });
});
