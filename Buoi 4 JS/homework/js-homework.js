// Let do some JS practice!!!
// After finish, run "node js-homework.test.js"

function flatten(arr) {
    /**
     * @TODO write a flatten function to flatten array
     *
     * flattenMe([[1], [1, [2,3], 2], [5,6, [7,8]]])
     * => Expect [1,1,2,3,2,5,6,7,8]
     */
    return arr.flat(Infinity);
  }
  
  function union(arr1, arr2) {
    /**
     * @TODO write a union function to union 2 array
     *
     * union([1,2,3,4], [3,4,5,6])
     * => Expect [1,2,3,4,5,6]
     */
    return [...new Set([...arr1, ...arr2])];
  }
  
  function compose(...args) {
    return (value) => {
      /**
       * @TODO Write a compose function that take an not-known argurment functions to execute one by one
       *
       * The result of the previous function will be the input of the later function
       *
       * compose(
       *   (x) => x + 1,
       *   (x) => x + 2,
       *   (x) => x + 3
       * )(5)
       *
       * => 11
       *
       */
      return args.reduce(
        (accumulator, currentValue) => currentValue(accumulator),
        value
      );
    };
  }
  
  function flattenTree(node, parentId = null) {
    /**
       * @TODO flatten a deep tree
       * 
       * This function is used popular in daily work as a FE
       * 
       * 
       * {
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
          }
  
      => 
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
          }
      ]
      */
    // let result = [];
    // const currentNode = {};
  
    /**
     * 
     * Nhiều vòng lặp for lồng nhau, nên hạn chề lồng sâu, sẽ khó debug và khó bảo trì
     * 
     * Logic có thể đơn giản hơn bằng cách bài giai ở dưới
     */
  
    // for (const key in node) { 
    //   if (key === "children") {
    //     for (childNode of node["children"]) {
    //       flattenSubTree = flattenTree(childNode, node["id"]);
    //       result = [...result, ...flattenSubTree];
    //     }
    //   } else {
    //     currentNode[key] = node[key];
    //   }
    // }
    // currentNode["parentId"] = parentId;
    // result.push(currentNode);
    // return result;
  
  

    /** Bài gỉải */
    /** Early return pattern */
    /** One of the pattern in clean code, https://gomakethings.com/the-early-return-pattern-in-javascript/ */
    /** Nên check những điều kiện để return trước, tránh phức tạp if lồng if như ở bài của em */
    /** Recommend nên dùng forEach, map, nhất có thể thay vì for in/ for of, vì nó giúp code dễ maintain hơn */
  
    const flattenedNode = {
        id: node.id,
        title: node.title,
        parentId: parentId
      }

    if(node.children === undefined) {
      return [flattenedNode];
    }
  
    let result = []
  
    node.children.forEach(item => {
        result.push(...flattenTree(item, node.id))
    })
  
    return [flattenedNode, ...result];
  
  }
  
  module.exports = { flatten, union, compose, flattenTree };
  