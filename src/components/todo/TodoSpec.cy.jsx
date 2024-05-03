import Todo from "./Todo";

const myTodoExample = {
    id: 1,
    description: "Get the groceries"
};

describe("Todo component tests", () => {
    it("Mounts with myTodoExample data", () => {
        cy.mount(<Todo id={myTodoExample.id} description={myTodoExample.description} />);
    });
});
