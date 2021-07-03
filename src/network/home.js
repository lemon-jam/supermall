import {request} from "../../../01-learnaxios/src/network/request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
