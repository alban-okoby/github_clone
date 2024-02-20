import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCommonModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
