export function makeUseTime(milliSeconds: number) {
  const result = [];
  const day = Math.floor(milliSeconds / (24 * 60 * 60 * 1000));
  const hour = Math.floor(
    (milliSeconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minute = Math.floor((milliSeconds % (60 * 60 * 1000)) / (60 * 1000));
  const second = Math.floor(
    ((milliSeconds % (60 * 60 * 1000)) % (60 * 1000)) / 1000
  );
  if (day !== 0) result.push(`${day}일`);
  if (hour !== 0) result.push(`${hour}시간`);
  if (minute !== 0) result.push(`${minute}분`);
  if (second !== 0) result.push(`${second}초`);
  return result.join(" ");
}
