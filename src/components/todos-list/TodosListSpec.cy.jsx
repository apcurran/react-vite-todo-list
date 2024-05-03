import TodosList from "./TodosList";

const myTodosExamples = [
    {
        id: 1,
        description: "Buy fruit"
    },
    {
        id: 2,
        description: "Buy vegetables"
    }
];

describe("Todos list tests", () => {
    it("Mounts correctly", () => {
        cy.mount(<TodosList myTodos={myTodosExamples} />);
    });
});
