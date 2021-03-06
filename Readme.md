# CSUFT 空教室查询模块

---

 利用`JSON.parse()`方法将`JSON`对象转为`JavaScript`对象，此对象键`0~19`分别对应`1~20`周的课程，值则是对应周的所有空教室信息；是一个三重数组，传入三个参数`week_ID`、`day_ID`、`time_ID`分别对应周次、星期和上课时间；

---

**注意：**传入参数必须合法，没有进行异常处理（懒~）；此外使用的相对路径，请勿更改数据文件的路径/名字；

## 参数取值范围：

1. `build_ID`：1~5，对应教学楼名称如下：
   - `1`：树人楼(一教)
   - `2`：德润楼(国际)
   - `3`：诚意楼(七教)
   - `4`：博文楼(文综)
   - `5`：博明楼(五教)
2. `week_ID`：1~20
3. `day_ID`：1~7
4. `time_ID`：1~6，分别对应时间段
   - `8:00 ~ 9:40`
   - `9:55 ~ 11:35`
   - `14:00 ~ 15:40`
   - `15:55 ~ 17:35`
   - `19:00 ~ 20:40`
   - `20:55 ~ 22:35`

## 返回值

`String`字符串

---

## **测试截图：**

![Test](https://i.loli.net/2020/11/17/dzb7KZ6VXQHyMRY.png)
