// vdom 转换为dom
// diff

/**
 * 生成VNode
 * @export
 * @param {Number} vtype 元素的类型，1-html元素，2-function组件，3-class组件
 * @param {*} type 标签元素类型
 * @param {*} props  标签属性
 */
export function createVNode(vtype,type,props){
  const vnode = {vtype,type,props};
  // console.log('vnode',vnode)
  return vnode;
}
/**
 * vdom 转换为dom 
 * 初始化虚拟节点
 * @export
 * @param {*} vnode
 */
export function initVNode(vnode){
  const {vtype} = vnode;
  if(!vtype) {
    // 文本节点
    return document.createTextNode(vnode)
  }
  if(vtype === 1){
    // 原生标签
    return createElement(vnode)
  }else if(vtype === 2){
    // 类组件
    return createClassComponent(vnode)
  }else if(vtype === 3){
    // 函数组件
    return createFunComponent(vnode)
  }
}

/**
 * 创建原生元素标签
 * 函数组件和Class组件创建最终都会执行到 该原生....
 * @param {Object} vnode
 * @returns
 */
function createElement(vnode) {
  console.log('default-vnode:',vnode)
  // 根据type创建元素
  const {type,props} = vnode;
  const node  = document.createElement(type); 
  
  // 处理属性,  原生自定义属性,特殊属性children
  const  {key,children,...rest} = props

  Object.keys(rest).forEach(k => {
    // 处理JSX里特殊属性名： className, htmlFor
    if(k === 'className') {
      node.setAttribute('class',rest[k])
    } else if(k === 'htmlFor') {
      node.setAttribute('for',rest[k])
    } else if(k === 'style' && typeof rest[k] === 'object') {
      // 内联 style用js写法的处理 ,这里就比较多了，这里就些了正常情况，如果font-size这样就不行
     const style =  Object.keys(rest[k]).map(s => `${s}:${rest[k][s]}`).join(';')
      node.setAttribute('style',style)

    } else if(k.startsWith('on')){
      // 也可以处理事件，很多种实现，答案不是千变一律的
       //test  onClick
      const event  = k.toLowerCase();
      node[event] = rest[k]  // rest =>callback
    } else {
      node.setAttribute(k,rest[k])
    }
  })
  // 递归子元素,// children父节点=> node
  children.forEach(c => {
    console.log('children',c)
    // 如果子元素是个数组，改怎么处理 => 处理循环的
    if(Array.isArray(c)) {
      c.map(el => {
        node.appendChild(initVNode(el))
      })
    } else{
      node.appendChild(initVNode(c))
    }
  })
  return node;
}

/**
 * 创建Class组件
 *
 * @param {Object} vnode
 * @returns
 */
function createClassComponent(vnode) {
  
  console.log('class-vnode:',vnode)
  //根据类组件看， type是class 组件声明
  const {type,props} = vnode;
  const  component = new type(props);
  const vdom  = component.render();
  return initVNode(vdom);
}
/**
 * 创建函数组件
 *
 * @param {Object} vnode
 * @returns
 */
function createFunComponent(vnode) {
  console.log('function-vnode:',vnode)
  // type是函数
  const {type,props} = vnode;
  const  vdom = type(props);
  return initVNode(vdom);
}

