import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TesthomeComponent } from './testhome/testhome.component';
import { routes} from './routes';
import {HttpClientModule} from '@angular/common/http'
import { TestheaderComponent } from './testheader/testheader.component';
import { TestlistComponent } from './testlist/testlist.component';
import { AddtestComponent } from './addtest/addtest.component';
import { WritetestComponent } from './writetest/writetest.component';
import { TestService } from './test.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  declarations: [TesthomeComponent, TestheaderComponent, TestlistComponent, AddtestComponent, WritetestComponent],
  providers:[TestService]
})
export class TestModule { }
