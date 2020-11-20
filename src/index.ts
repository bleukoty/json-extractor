/**
 *
 * @param dataJson : data in json format
 * @param keys : Array of property string to read
 */
export const jsonExtract = (dataJson: any, keys: any): any => {
  let customKey = '';
  let deepJson: any = null;
  let customKeyRenaming = '';
  let properties: any = [];

  return keys.reduce((acc: any, key: any) => {
    [properties, customKeyRenaming] = key.split('@');
    properties.split('/').forEach((item: any, index: number) => {
      if (item.indexOf('+') !== -1) {
        customKey += item.replace('+', '__');
        deepJson = item
          .split('+')
          .reduce((acc2: any, value: string) => {
            acc2 += `${(deepJson || dataJson)[value]} `;
            return acc2;
          }, '')
          .trim();
      } else {
        customKey += `${item}__`;
        deepJson = index === 0 ? dataJson[item] : deepJson[item];
      }
    });

    customKey = customKey.replace(/__$/, '');
    acc = { ...acc, [customKeyRenaming ?? customKey]: deepJson };

    // clean variable
    customKey = '';
    deepJson = null;

    return acc;
  }, {});
};
