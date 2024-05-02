describe("Add Todo", () => {
    beforeEach(() => {
        // go to todo app page
        cy.visit("/");
        // add todo before each test
        cy.contains("New Todo").should("be.visible");
        cy.get("[data-cy='new-todo-input']").type("Walk the dog");
        cy.contains("Add Todo").click();
    });
    
    it("Checks for the creation of a new todo", () => {
        cy.get(".todo").find("p");
    });

    it("Edits 'Walk the dog' todo to become 'Walk the cat'", () => {
        cy.contains("Edit").click();
        cy.get(".popover-form").find("input").clear();
        cy.get(".popover-form").find("input").type("Walk the cat");
        cy.get(".popover-form").find("button").click();
        cy.contains("Walk the cat").should("be.visible");
    });

    it("Deletes 'Walk the dog' todo", () => {
        cy.contains("Walk the dog").should("be.visible");
        cy.contains("Delete").click();
        cy.contains("Walk the dog").should("not.exist");
    });
});
