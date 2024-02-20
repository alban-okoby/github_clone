import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick() {
    this.dialogRef.close();
  }

  deleteMessage() {
    let message: string;
    message = 'Etes-vous sûr de vouloir supprimer cet élémnet ?';
    if (this.data[1])
      return message;
    return message;
  }
}
