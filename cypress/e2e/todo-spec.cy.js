describe("Todo tests", () => {
    beforeEach(() => {
        // go to todo app page
        cy.visit("/");
        // add todo before each test
        cy.contains("New Todo").should("be.visible");
        cy.get("[data-cy='new-todo-input']").type("Walk the dog");
        cy.contains("Add Todo").click();
    });
    
    it("Checks for the creation of a new todo", () => {
        // add todo input should clear out after form submission
        cy.get("[data-cy='new-todo-input']").should("be.empty");

        // todo should be added to list
        cy.get(".todo").find("p")
            .should("be.visible")
            .and("contain.text", "Walk the dog");
    });

    it("Checks input box for todo and ensures proper strike-through styling", () => {
        cy.get(".todo").find("input[type='checkbox']").check();
        cy.get(".todo").find("p")
            .should("be.visible")
            .and("have.class", "todo--completed");
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
