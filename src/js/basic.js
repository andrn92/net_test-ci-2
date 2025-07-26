export default function checkHealth(obj) {
  return obj.health > 50 ? 'healthy' : obj.health >= 15 ? 'wounded' : 'critical'
}

// export function checkHealth2(obj) {
//   if (obj.health > 50) {
//     return 'healthy'
//   }
//   else if (obj.health >= 15) {
//     return 'wounded'
//   }
//   return 'critical'
// }

