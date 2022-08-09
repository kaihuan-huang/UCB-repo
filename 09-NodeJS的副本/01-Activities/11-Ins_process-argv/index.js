// returns an array of command line arguments
console.log(process.argv);

const firstName = process.argv[2];

const greeting = `Hi ${firstName}!`
console.log("greeting", greeting);


// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);

// 在 node.js 中，命令行参数总是存储在一个数组中。在该数组中，第一个元素是我们引用的节点命令，因为我们以单词“node”开始命令行。第二个元素是我们提到的 javascript (JS) 文件，它通常出现在 node 命令之后。

// 众所周知，JS数组的第一个元素从0开始，第二个元素是1，依次是2、3、4等等。让我们将此数组命名为 process.argv 并添加命令行参数 x 和 y。然后，这就是我们将如何调用这些元素：

// var process.argv = ['node', 'file.js', ‘x’, ‘y’];
// var process.argv [0] = node;
// var process.argv [1]= file.js;
// var process.argv[2] = x;
// var process.argv[3] = y;
// 简而言之，元素 0 和 1 是 node.js 原生的，我们在编写任何命令行参数时都不会使用它们。这就是为什么我们忽略 0 和 1，总是从 2 开始。

// 如果我们想循环通过命令行参数，我们必须再次从 2 开始。这是我们用于循环的内容。

// for (i = 2; i < process.argv.length; i++) {
//     console.log(process.argv[i]);
// }
