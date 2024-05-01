describe("Add Todo", () => {
    it("Creates a new todo", () => {
        cy.visit("/");

        cy.get("#new-todo").type("Walk the dog.");

        // cy.get("#new-todo").should("contain", "Walk the dog.");
    });
});
