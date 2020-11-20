/**
 * 
 * @param dataJson : data in json format
 * @param keys : Array of property string to read
 */
export const jsonExtract = (dataJson: any, keys: Array<string>): any => {
 
    let custom_key = "";
    let deepJson: any = null ;
    let custom_key_renaming = "";
    let properties:any = [];
  
    return keys.reduce((acc, key) => {
      [properties, custom_key_renaming] = key.split('@');
      properties.split("/").forEach((item: any, index: number) => {
        if(item.indexOf('+') !== -1){
          custom_key += item.replace('+', '__');
          deepJson = item.split('+').reduce((acc_2: any, value: string) => {
              acc_2 += `${(deepJson || dataJson)[value]} `;
              return acc_2;
          }, '').trim();
        } else {
          custom_key += `${item}__`;
          deepJson = index === 0 ? dataJson[item] : deepJson[item];
        }  
      });
  
      custom_key = custom_key.replace(/__$/, "");
      acc = { ...acc, [custom_key_renaming ?? custom_key]: deepJson };
  
      // clean variable
      custom_key = "";
      deepJson = null;
  
      return acc;
    }, {});
  };