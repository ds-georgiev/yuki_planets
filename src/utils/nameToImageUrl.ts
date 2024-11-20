export const nameToImageUrl = (name: string, subFolder: string) => {
  const fileName = name.toLowerCase().split(' ').join('_');

  return `/images/${subFolder}/${fileName}.jpg`;
}
