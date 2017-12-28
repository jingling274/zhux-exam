import { Component, OnInit } from '@angular/core';

interface User{
  sid:number,
  name:string,
  ename:string,
  years:string
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  users:Array<User>;
  constructor() {
    this.loadUsersData();
  }
  sortUsers(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type == "asc") {
      this.users.sort(function(a, b) {
        if (a.sid > b.sid) {
          return 1;
        }
        if (a.sid < b.sid) {
          return -1;
        }
      });
    } else if (type == "desc") {
      this.users.sort(function(a, b) {
        if (a.sid < b.sid) {
          return 1;
        }
        if (a.sid > b.sid) {
          return -1;
        }
      });
    } else {
      this.users.sort(function(a, b) {
        return Math.trunc(Math.random()*10)});
    }

    console.log("sortUsers Works!");
  }
  loadUsersData(){
    this.users = [
      {sid:1,name:"ZhangSan",ename:"zhangSan",years:"12"},
      {sid:2,name:"LiSi",ename:"lisi",years:"2"},
      {sid:3,name:"WhangMZ",ename:"wangmz",years:"4"},
      {sid:4,name:"ZhaoQian",ename:"zhaoqian",years:"9"},
      {sid:5,name:"SunLi",ename:"sunli",years:"3"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      sid:Number(uuid),
      name:"TomSan",
      ename:"tom",
      years:"18"
    }
    this.users.push(newUser);
  }
  deleteUserByID(id){
    this.users.forEach((user,index,arr)=>{
      if(user.sid==sid){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
