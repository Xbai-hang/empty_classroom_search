const Build_ID = ['../json/树人楼(一教).json','../json/德润楼(国际).json','../json/诚意楼(七教).json','../json/博文楼(文综).json','../json/博明楼(五教).json'];
/**
 * 用于时间转换
 * @param {number} year 
 * @param {number} month 
 * @param {number} day 
 */
function timeChange(year,month,day){
    const days_ = [0,31,28,31,30,31,30,31,31,30,31,30,31,31];
    const [years,months,days] = [2020,9,14];
    let date = new Date(`${month}/${day}/${year}`);
    let sum = 0;
    if(years!=year){
        month=13;
    }
    for(let i=months;i<month;++i){
        sum+=days_[i];
    }
    sum = sum - days + day + 1;
    sum = parseInt(sum/7)==sum/7?sum/7:parseInt(sum/7)+1;
    console.log(date.getDay(),sum);
    return [date.getDay(),sum];
}
/**
 * 空教室查询
 * @param {Number} build_ID 教学楼id
 * @param {Number} week_ID 周次id
 * @param {Number} day_ID 周几
 * @param {Number} time_ID 上课时间id
 * @returns {String} 空教室信息
 */
function search(build_ID,week_ID,day_ID,time_ID){
    let request = new XMLHttpRequest();
    request.open("get",Build_ID[build_ID-1]);
    request.send(null);
    request.onload = function(){
        if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
            let arr = JSON.parse(request.responseText)[week_ID-1][day_ID-1][time_ID-1];
            console.log(arr.join('').replace(/[^0-9]{6}\)/g,'\t'));
            return arr.join('').replace(/[^0-9]{6}\)/g,'\t');
        }
    }
}