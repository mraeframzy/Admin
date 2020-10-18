import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BranchManagementService } from 'src/app/Shared/branch-management.service';

@Component({
  selector: 'app-dialog-manual',
  templateUrl: './dialog-manual.component.html',
  styles: []
})
export class DialogManualComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DialogManualComponent>,public service :BranchManagementService) { }

  ngOnInit(): void {
  }
  closeDialog(x,y) { var new_owner = { lat: x, lng: y }; this.dialogRef.close(new_owner); }
  return_location(form : FormGroup){
    if(form.valid){this.closeDialog(form.controls['Branch_Lat'].value,form.controls['Branch_Long'].value);}      
    }
}
