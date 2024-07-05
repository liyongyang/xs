import dayjs from "dayjs";

/** 格式化时间 */
export const formatDateTime = (time: string | number | Date) => {
  if (!time) {
    return "N/A";
  }
  const date = new Date(time);
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

/** 将全局 CSS 变量导入 JS 中使用 */
export const getCssVariableValue = (cssVariableName: string) => {
  let cssVariableValue = "";
  try {
    // 没有拿到值时，会返回空串
    cssVariableValue = getComputedStyle(
      document.documentElement
    ).getPropertyValue(cssVariableName);
  } catch (error) {
    console.error(error);
  }
  return cssVariableValue;
};

export const generateUniqueId = () => {
  // 根据自己的需求生成唯一ID
  // 例如组合时间戳、随机数和计数器
  let id = "";
  const timestamp = Date.now().toString(36);
  const randomNumber = Math.random().toString(36).substr(2, 5);
  const counter = generateUniqueId.counter
    ? ++generateUniqueId.counter
    : (generateUniqueId.counter = 1);
  id = `${timestamp}-${randomNumber}-${counter}`;
  return id;
};
