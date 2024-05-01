describe("Add Todo", () => {
    it("Creates a new todo", () => {
        cy.visit("/");

        cy.get("#new-todo").type("Walk the dog.");

        cy.get("#new-todo").should("have.value", "Walk the dog.");

        // add todo
        cy.contains("ADD TODO", { matchCase: false }).click();

        // check that new todo exists in list
        cy.get("p").should("contain", "Walk the dog.");
    });
});
