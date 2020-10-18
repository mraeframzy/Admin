import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatInputModule} from '@angular/material/input'
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './General/login/login.component';
import { UserProfileComponent } from './General/user-profile/user-profile.component';
import { MainMasterComponent } from './Masters/main-master/main-master.component';
import { UserService } from './Shared/user.service';
import { NotificationService } from './Shared/notification.service';
import { HomeComponent } from './general/home/home.component';
import { OwnerUsersManegmentComponent } from './users_manegment/owner-users-manegment/owner-users-manegment.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OwnerMasterComponent } from './Masters/owner-master/owner-master.component';
import { EditUserComponent } from './users_manegment/edit-user/edit-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MatConfirmDialogComponent } from './general/mat-confirm-dialog/mat-confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CompaniesTableOwnerComponent } from './companies_managment/companies-table-owner/companies-table-owner.component';
import { EditCompanyOwnerComponent } from './companies_managment/edit-company-owner/edit-company-owner.component';
import { CreateCompanyComponent } from './companies_managment/create-company/create-company.component';
import { DialogSearchUserComponent } from './users_manegment/dialog-search-user/dialog-search-user.component';
import { DialogUserDetailsComponent } from './users_manegment/dialog-user-details/dialog-user-details.component';
import { PicsCompanyComponent } from './companies_managment/pics-company/pics-company.component';
import { DialogPicCompComponent } from './companies_managment/dialog-pic-comp/dialog-pic-comp.component';
import { BranchesTableComponent } from './Branches-Management/branches-table/branches-table.component';
import { CreateBranchComponent } from './branches-management/create-branch/create-branch.component';
import { DialogMapComponent } from './location/dialog-map/dialog-map.component';
import { DialogManualComponent } from './location/dialog-manual/dialog-manual.component';
import { DialogLinkComponent } from './location/dialog-link/dialog-link.component';
import { UpdateBranchesComponent } from './branches-management/update-branches/update-branches.component';
import { CompanyUsersComponent } from './companies_managment/company-users/company-users.component';
import { CompanyAddUsersComponent } from './companies_managment/company-add-users/company-add-users.component';
import { CompanyEditUsersComponent } from './companies_managment/company-edit-users/company-edit-users.component';
import { CatigoriesMainComponent } from './catigory_size_management/catigories-main/catigories-main.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    MainMasterComponent,
    HomeComponent,
    OwnerUsersManegmentComponent,
    OwnerMasterComponent,
    EditUserComponent,
    MatConfirmDialogComponent,
    CompaniesTableOwnerComponent,
    EditCompanyOwnerComponent,
    CreateCompanyComponent,
    DialogSearchUserComponent,
    DialogUserDetailsComponent,
    PicsCompanyComponent,
    DialogPicCompComponent,
    BranchesTableComponent,
    CreateBranchComponent,
    DialogManualComponent,
    DialogLinkComponent,
    UpdateBranchesComponent,
    CompanyUsersComponent,
    CompanyAddUsersComponent,
    CompanyEditUsersComponent,
    CatigoriesMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule, MatSnackBarModule,MatTableModule,CdkTreeModule,MatIconModule,MatSortModule,MatPaginatorModule,MatCheckboxModule,MatMenuModule,MatNativeDateModule,MatDatepickerModule ,MatSelectModule,MatRadioModule,MatListModule,MatDialogModule,MatCardModule,
    HttpClientModule
  ],
  providers: [UserService, NotificationService,
  {provide: HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true},DatePipe 
],
entryComponents:[MatConfirmDialogComponent,DialogSearchUserComponent,DialogUserDetailsComponent,DialogPicCompComponent,
DialogMapComponent,DialogLinkComponent,DialogManualComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
