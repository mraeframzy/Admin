import { Component, OnInit, ViewChild } from '@angular/core';
import { CompaniesMangementService } from 'src/app/Shared/companies-mangement.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatRadioButton } from '@angular/material/radio';
import { NotificationService } from 'src/app/Shared/notification.service';
import { DialogService } from 'src/app/Shared/dialog.service';

@Component({
  selector: 'app-pics-company',
  templateUrl: './pics-company.component.html',
  styles: []
})
export class PicsCompanyComponent implements OnInit {

  constructor(public service: CompaniesMangementService, private currentRoute: ActivatedRoute , private notificationservice : NotificationService, private dialogservice : DialogService) { }
  companies_array: any = [];
  listData: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  displayedcolumns: string[] = ['company_Picture_Id','company_Picture_Display_Name', 'company_Picture_Comment', 'company_Picture_Is_Owner_Identity', 'company_Picture_Is_Branch_Identity', 'company_Picture_Is_Deleted']
  ngOnInit(): void {
    this.company_Id = this.currentRoute.snapshot.paramMap.get('id');
    this.refresh()
  }
  company_Id :string = '0';
  refresh() {
    
    this.service.formGroup_Company_name.controls['$Company_Id'].setValue(this.company_Id);
    this.service.companies_identites(this.company_Id)
      .subscribe(users => {
        this.companies_array = users['company_Pictures'];
        this.service.formGroup_Company_name.controls['Company_Name'].setValue(users['company_Name']);
        this.service.formGroup_Company_name.controls['Company_Name_Arabic'].setValue(users['company_Name_Arabic']);
        this.listData = new MatTableDataSource(this.companies_array);
        this.listData.paginator = this.paginator;
      });
  }
  onEdit(row) { }
  onSearchClear() { }
  
  openUserDetails() {
      this.dialogservice.open_company_pic_Dialog(0,this.service.formGroup_Company_name.controls['$Company_Id'].value).afterClosed().subscribe(res => {
        this.refresh();
      })
    } 
    select_pic(row){
      this.dialogservice.open_company_pic_Dialog(row.company_Picture_Id,this.service.formGroup_Company_name.controls['$Company_Id'].value).afterClosed().subscribe(res => {
        this.refresh();
      })
    }
}