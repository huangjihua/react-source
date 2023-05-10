import {createVNode} from './vdom'
import Component from './component'
/**
 * JSX => VNode
 * @param {any} type 标签类型,如div
 * @param {Element Attribute} props 标签属性
 * @param {something child Element} children  若干数量不等的子元素
 */
function createElement(type,props,...children){
  // console.log(arguments)
  props.children = children
  delete props.__source // 移除不需要的属性
  delete props.__self
  // type: 标签类型，如div
  // vtype :组件类型
  let vtype;
  if (typeof type === 'string') {
    // 原生组件
    vtype = 1;
  } else if (typeof type === 'function') {
    if (type.isClassComponent) {
      // 类组件
      vtype = 2;
    } else {
      // 函数组件
      vtype = 3;
    }
  }
  // return { type, props };
  return createVNode(vtype, type, props); // 加工处理
}

export default { createElement }
export {Component}
