const hidePassword = (data: any | any[]): any | any[] => {
  if (Array.isArray(data)) {
    const entityList = data;

    const listWithoutPassword = entityList.map((entity: any) => {
      const { password, ...entityWithoutPassword } = entity;
      return entityWithoutPassword;
    });
    return listWithoutPassword;
  } else {
    const { password, ...entityWithoutPassword } = data;

    return entityWithoutPassword;
  }
};

export default hidePassword;
