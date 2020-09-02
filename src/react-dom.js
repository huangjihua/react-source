import { initVNode } from "./vdom"

// 1.vnode 变成 dom 2. 把dom加入挂载容器
function render(vnode, container){
  // container.innerHTML = `<pre>${JSON.stringify(vnode,null,2)}</pre>`
  const node =  initVNode(vnode)
  container.appendChild(node)
}

export default {render}