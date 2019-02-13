## namespace
这用于outFile的模式。

是历史遗留产物，为了给浏览器运行，所有文件都要打包到一起。
需要使用namespace保证命名空间的干净

在本代码实例中，jQ.ts jQ2.ts 都会和index.ts打包在一起。
但是
> The compiler will automatically order the output file based on the reference tags present in the files. 

这回导致我们的boundle.js 有错误的排列顺序
You can also specify each file individually:
``` bash
tsc --outFile boundle.js jQ.ts jQ2.ts index.ts
```
这样就行了。

不过感觉ts这种做法太蠢了吧：
  - 虽然是在不同的文件，但是变量名共享同一个全局命名空间，你要么给每个文件套上一层namespace,要么小心翼翼的管理自己的命名
  - 还有手动配置顺序
还是es6 commonjs这些打包模式方便，每个文件就是一个模块了，不要有的没的。
