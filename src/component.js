/**
 * Component基类，创建类组件需要继承该基类
 * @export
 * @class Component
 */
export default class Component {
  //用于区分组件是class是function
  static isClassComponent = true
  constructor(props, context) {
    this.props = props
    this.state = {}
    this.refs = {}
    this.context = context
    this.updater = new Updater(this)
    this.cache = { isMounted: false }
  }
  /**
   * 组件强制更新
   *
   * @param {Function} callback
   * @memberof Component
   */
  forceUpdate(callback) {
    this.updater.enqueueForceUpdate(this, callback, 'forceUpdate')
  }
  /**
   *
   * 设置状态
   * @param {Object} nextState
   * @param {Function} callback
   * @memberof Component
   */
  setState(nextState, callback) {
    // 添加异步队列，收集批量处理
    this.updater.addCallback(callback)
    this.updater.addState(nextState)
  }
}

class Updater {
  constructor(instance) {
    this.instance = instance // 保持当前组件的实例
    this.pendingStates = [] // 待处理状态数组， 收集的容器
    this.pendingCallbacks = [] // flag,定期要做的任务
    this.isPending = false // 是否正在工作中,如果在工作中就不能做更新处理
    this.nextProps = this.nextContext = null
    // this.clearCallbacks  = this.clearCallbacks.bind(this)
  }

  addState(nextState) {
    if (nextState) {
    }
  }
  getState() {}
}
