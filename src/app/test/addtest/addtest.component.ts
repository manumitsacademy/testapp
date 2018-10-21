import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'; 
import {TestService } from '../test.service';
@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {

  constructor(public fb:FormBuilder,public ts:TestService) { }

  ngOnInit() {
  }
  test={};
  testname;
  questions=[];
  questionForm = this.fb.group({
    question:[],
    option1:[],
    option2:[],
    option3:[],
    option4:[],
    correctOption:[]
  })
  addQuestion(){
    console.log(this.questionForm);
    this.questions.push(this.questionForm.value)
  }
  addTest(){
    this.test['testname']=this.testname;
    this.test['questions']=this.questions;
    this.ts.addTest(this.test);
  }
}
