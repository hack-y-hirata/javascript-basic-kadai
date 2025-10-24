// 関数で今日の生年月日を出力
const getTodayBirthday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 月は0から始まるため+1
  const day = today.getDate();
  return `${year}年${month}月${day}日`;
};

console.log(getTodayBirthday());
