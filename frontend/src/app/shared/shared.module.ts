import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCommonModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDialogModule,
    RouterModule
  ],
  exports: [
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDialogModule,
    RouterModule
  ]
})
export class SharedModule { }
