import NewTodoForm from "./NewTodoForm";

describe("New todo form tests", () => {
    it("mounts correctly", () => {
        cy.mount(<NewTodoForm />);
    });
});
