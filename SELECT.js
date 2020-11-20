const Build_ID = ['../json/树人楼(一教).json','../json/德润楼(国际).json','../json/诚意楼(七教).json','../json/博文楼(文综).json','../json/博明楼(五教).json'];
const fs = require('fs');
/**
 * 空教室查询
 * @param {Number} build_ID 教学楼id
 * @param {Number} week_ID 周次id
 * @param {Number} day_ID 周几
 * @param {Number} time_ID 上课时间id
 * @returns {String} 空教室信息
 */
module.exports = (build_ID,week_ID,day_ID,time_ID) =>{
    let json = fs.readFileSync(Build_ID[build_ID-1]);
    let arr = JSON.parse(json)[week_ID-1][day_ID-1][time_ID-1];
    console.log(arr)
    return arr.join('').replace(/[^0-9]{6}\)/g,'\t');
};