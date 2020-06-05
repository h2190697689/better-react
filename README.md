### react性能优化

## [Document](https://segmentfault.com/a/1190000018257360)

1. PureComponent, React.memo(浅比较)
- 解决 this.setState 调用就行执行 render
- 代替 shouldComponentUpdate

2. bind绑定，在constructor, 或使用静态方法

3. Immutable.js(不可变数据库)

4. 懒加载 (Code Splitting)  
- import("./math.js").then(math=>math.add(1,2))

5. 不滥用props  {...props}

6. SSR (后端渲染)