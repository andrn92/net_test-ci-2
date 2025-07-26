export default function sortHealth(listObjects) {
  listObjects.sort((obj1, obj2) => obj2.health - obj1.health)
  return listObjects
}
