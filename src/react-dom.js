import { initVNode } from './vdom';

/**
 *  render渲染函数
 *
 * @param {Object} vnode 就是createElement创建的虚拟DOM
 * @param {Element} container  挂载容器
 */
function render(vnode, container) {
  // container.innerHTML = `<pre>${JSON.stringify(vnode, null, 2)}</pre>`;
  const node = initVNode(vnode);
  container.appendChild(node);
  console.log(JSON.stringify(vnode, null, 2));
}

export default { render };
