# 手写React的核心API

## 知识点
• 手写react核心API

• 探究setState

• 探究diff算法

## 流程与思路

• 源码解读的基本思路

 手写react核心的几个API，同时讲下它设计理念和它的实现原理
 面试种可能会多的问到setState一些特点，大家应该注意的事项，写代码的时候应该注意的问题
 面试中提到更多就是diff算法，它为什么会产生，它到底是用来做什么事的，我们为什么要用它呢？
React源码还是非常复杂的，我们今天就来简化的实现下

React结构核心API：

• React.createElement

• React.Component

• ReactDom.render
react源码链接

``` js
const Children = {
  map,
  forEach,
  count,
  toArray,
  only,
};
// 聚合部分，集中在react一个接口里统一暴露
export {
  Children,// 处理内嵌的子元素
  createMutableSource,
  createRef,// 创建一个元素的引用，通过ref操作DOM
  Component, // 类组件
  PureComponent, // 类组件继承 这个该类来代替手写 shouldComponentUpdate。但它只进行浅比较，所以当 props 或者 state 某种程度是可变的话浅比较会有遗漏，那你就不能使用它了
  createContext,
  forwardRef, // 跨层级传递引用 （用的比较少）
  lazy, // 该接口配合Suspense接口使用，可以组件的懒加载
  memo,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useDebugValue,
  useLayoutEffect,
  useMemo,
  useMutableSource,
  useReducer,
  useRef,
  useState,
  ...
}
```
• jsx,createElement和虚拟DOM的关系

• React.createElement的实现

• component创建、虚拟节点类型判断

• Vdom 转换 dom

• 样式处理、vdom数组渲染

• diff和patch过程解读

 class组件特点就是因为有`setState`，可以更新状态， React一开始就有，
 `react`和`Vue`大的不同点就是渲染机制的不同，Vue里用过数据劫持做到事件的变更，可以随时知道，只要哪属性变就让哪个属性变，它的这个操作非常定点，指向性很明确，所以Vue甚至不做虚拟DOM的`diff`算法都不会有太大的影响；

 react里刚出现就有这个`vdom`的`diff`对比呢？
  主要是应为大家在组件写的状态很多，比如十几个，不管`state`中哪个发生变更，将来执行`setState`都会造成`render`函数的重新执行，那么这个很可怕的，他会导致整个组件全部去更新。所以`react`一开始就很重视这个。
  
  我们需要知道一个组件的渲染有两种情况，一个是属性的变更，一个setSate调用使状态变更，都会让`render`重新执行；
  
  那么`setState`到底是怎么样的执行机制呢 ？


setState并没有直去接操作渲染，而是执行了一个异步的update队列，我们使用一类来专门管理
``` js



```

• setState工作流程