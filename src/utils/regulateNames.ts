const regulateNames = (name: string) => {
  const removeSpacesFromSides = name.trim();

  const lowerCaseName = removeSpacesFromSides.toLowerCase();

  const splitBySpace = lowerCaseName.split(' ');

  const filterTooManySpaces = splitBySpace.filter((text) => text !== '');

  const finalName = filterTooManySpaces.join(' ');

  return finalName;
};

export default regulateNames;
