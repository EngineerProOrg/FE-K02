const assert = require("assert");
const {
    flatten,
    union,
    compose,
    flattenTree
} = require("./js-homework");

try {
    assert.deepStrictEqual(
        flatten([[1], [1, [2,3], 2], [5,6, [7,8]]]),
        [1,1,2,3,2,5,6,7,8],
        "Flatten result is not equal"
    );


    assert.deepStrictEqual(
        union([1,2,3,4,5], [3,4,5,6,7]),
        [1,2,3,4,5,6,7],
        "Union result is not equal"
    );

    assert.strictEqual(
        compose(
            (x) => x + 1,
            (x) => x + 2,
            (x) => x + 3,
            (x) => x + 5
        )(5),
        16,
        "Compose result is not equal"
    );

    assert.strictEqual(
        compose()(5),
        5,
        "Compose result is not equal"
    );

    assert.deepStrictEqual(
        flattenTree({
            id: 1,
            title: "Node A",
            children: [
                {
                    id: 2,
                    title: "Node B",
                    children: [
                        {
                            id: 4,
                            title: "Node D",
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Node C",
                    children: [
                        {
                            id: 5,
                            title: "Node E",
                        }
                    ]
                },
            ]
        }).sort((nodeA, nodeB) => nodeA.id - nodeB.id),
        [
            {
                id: 1,
                title: "Node A",
                parentId: null,
            },
            {
                id: 2,
                title: "Node B",
                parentId: 1,                
            },
            {
                id: 3,
                title: "Node C",
                parentId: 1,                
            },
            {
                id: 4,
                title: "Node D",
                parentId: 2,                
            },
            {
                id: 5,
                title: "Node E",
                parentId: 3,                
            }
        ],
        "Flatten tree result is not equal"
    );

    assert.deepStrictEqual(
        flattenTree({
            id: 1,
            title: "Node A",
        }),
        [
            {
                id: 1,
                title: "Node A",
                parentId: null
            },
        ],
        "Flatten tree result is not equal"
    );

    console.log("All tests passed!");
} catch (error) {
    console.error("Test failed:", error.message);
}
