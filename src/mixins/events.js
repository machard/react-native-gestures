import Rx from 'rx'

export default function events (evs = []) {

  return {
    componentWillMount () {
      this.streams = evs.reduce(function (res, eventName) {
        res[eventName] = new Rx.Subject()
        return res
      }, {})
      Object.assign(this, this.streams)
    },
    componentWillUnmount () {
      evs.forEach((ev) => this.streams[ev].onCompleted())
    }
  }
}
