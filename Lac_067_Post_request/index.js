const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(todo),
    };
    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let response = await p.json();
    return response;
};

const mainFunc = async () => {
    let todo = {
        title: "Priyanshu",
        body: "bhai",
        userId: 1100,
    };
    let todor = await createTodo(todo);
    console.log(todor);
    console.log(await getTodo(5));
};

const getTodo = async (id) => {
    let response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + id
    );
    let r = await response.json();
    return r;
};
mainFunc();
