import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule} from '@angular/core';
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
import { DialogAddCat1Component } from './catigories_sizes_management/dialog-add-cat1/dialog-add-cat1.component';
import { DialogAddCat2Component } from './catigories_sizes_management/dialog-add-cat2/dialog-add-cat2.component';
import { DialogAddCat3Component } from './catigories_sizes_management/dialog-add-cat3/dialog-add-cat3.component';
import { DialogAddCat4Component } from './catigories_sizes_management/dialog-add-cat4/dialog-add-cat4.component';
import { CatigoriesMainComponent } from './catigories_sizes_management/catigories-main/catigories-main.component';
import { DialogAeCatpic1Component } from './catigories_sizes_management/dialog-ae-catpic1/dialog-ae-catpic1.component';
import { DialogAeCatpic2Component } from './catigories_sizes_management/dialog-ae-catpic2/dialog-ae-catpic2.component';
import { DialogAeCatpic3Component } from './catigories_sizes_management/dialog-ae-catpic3/dialog-ae-catpic3.component';
import { DialogAeCatpic4Component } from './catigories_sizes_management/dialog-ae-catpic4/dialog-ae-catpic4.component';
import { AgerangeSizesMainComponent } from './catigories_sizes_management/agerange-sizes-main/agerange-sizes-main.component';
import { DialogAgerangeAeComponent } from './catigories_sizes_management/dialog-agerange-ae/dialog-agerange-ae.component';
import { DialogAeSizesComponent } from './catigories_sizes_management/dialog-ae-sizes/dialog-ae-sizes.component';
import { MainMenuComponent } from './Employees_Cases_Management/main-menu/main-menu.component';
import { EmployeesManagementComponent } from './Employees_Cases_Management/employees-management/employees-management.component';
import { EmployeeMenuComponent } from './Employees_Cases_Management/employee-menu/employee-menu.component';
import { UserLogsComponent } from './employees_cases_management/employee_log/user-logs/user-logs.component';
import { UserPointsComponent } from './employees_cases_management/employee_log/user-points/user-points.component';
import { UserPointsUpdaterComponent } from './employees_cases_management/employee_log/user-points-updater/user-points-updater.component';
import { CmpnypntsComponent } from './employees_cases_management/employee_log/companypoints/cmpnypnts/cmpnypnts.component';
import { CmpnyupdaterpntsComponent } from './employees_cases_management/employee_log/companypoints/cmpnyupdaterpnts/cmpnyupdaterpnts.component';
import { SimplesearcharchivedproductsComponent } from './productmanagment/simplesearcharchivedproducts/simplesearcharchivedproducts.component';
import { EdArchivedProductComponent } from './productmanagment/ed-archived-product/ed-archived-product.component';
import { UpdArchprodComponent } from './productmanagment/upd-archprod/upd-archprod.component';
import { ListCompanyProductsComponent } from './productmanagment/product_per_company/list-company-products/list-company-products.component';
import { ListBranchProductsComponent } from './productmanagment/product_per_company/list-branch-products/list-branch-products.component';
import { AddProductComponent } from './ProductManagment/Add_Product/add-product/add-product.component';
import { ListProductColorsComponent } from './productmanagment/Product_colors/list-product-colors/list-product-colors.component';
import { AddProductColorsComponent } from './productmanagment/Product_colors/add-product-colors/add-product-colors.component';
import { DisplayProductColorsComponent } from './productmanagment/Product_colors/display-product-colors/display-product-colors.component';
import { EditProductColorsComponent } from './productmanagment/Product_colors/edit-product-colors/edit-product-colors.component';
import { ColorManagmentComponent } from './color_managment/color-managment/color-managment.component';
import { AddeditSubcolorComponent } from './color_managment/addedit-subcolor/addedit-subcolor.component';
import { AddeditMaincolorComponent } from './color_managment/addedit-maincolor/addedit-maincolor.component';
import { AddeditProductcolordetailsComponent } from './productmanagment/product_color_details/addedit-productcolordetails/addedit-productcolordetails.component';
import { DialogAeSizecatigoriesComponent } from './catigories_sizes_management/Sizes_Catigories/dialog-ae-sizecatigories/dialog-ae-sizecatigories.component';
import { DialogDisplaySizeComponent } from './catigories_sizes_management/dialog-display-size/dialog-display-size.component';
import { DialogAeProductavailsizeComponent } from './productmanagment/product_availiable_sizes/dialog-ae-productavailsize/dialog-ae-productavailsize.component';
import { DialogAeProductpictureComponent } from './productmanagment/product_pictures/dialog-ae-productpicture/dialog-ae-productpicture.component';
import { SearchUsersComponent } from './users_manegment/Customer_service_user_managment/search-users/search-users.component';
import { DuserCustomerserviceComponent } from './users_manegment/customer_service_user_managment/duser-customerservice/duser-customerservice.component';
import { EuserCustomerserviceComponent } from './users_manegment/customer_service_user_managment/euser-customerservice/euser-customerservice.component';
import { PaymentsMainComponent } from './Users_Manegment/Customer_service_Payments/payments-main/payments-main.component';
import { AddPaymentComponent } from './Users_Manegment/Customer_service_Payments/add-payment/add-payment.component';
import { CustomerserviceAddpaymentComponent } from './Users_Manegment/Customer_service_Payments/customerservice-addpayment/customerservice-addpayment.component';
import { ListPayCardsComponent } from './payments/payments_cards/list-pay-cards/list-pay-cards.component';
import { InsertPayCardsComponent } from './payments/payments_cards/insert-pay-cards/insert-pay-cards.component';
import { UpdatePayCardsComponent } from './payments/payments_cards/update-pay-cards/update-pay-cards.component';
import { PaymentManagementComponent } from './payments/payment-management/payment-management.component';
import { ListPayCardPatchesComponent } from './payments/payment_card_patches/list-pay-card-patches/list-pay-card-patches.component';
import { InsertPayCardPatchesComponent } from './payments/payment_card_patches/insert-pay-card-patches/insert-pay-card-patches.component';
import { UpdatePayCardPatchesComponent } from './payments/payment_card_patches/update-pay-card-patches/update-pay-card-patches.component';
import { ListMailDiscountsComponent } from './payments/mail_discounts/list-mail-discounts/list-mail-discounts.component';
import { InsertMailDiscountsComponent } from './payments/mail_discounts/insert-mail-discounts/insert-mail-discounts.component';
import { UpdateMailDiscountsComponent } from './payments/mail_discounts/update-mail-discounts/update-mail-discounts.component';
import { ListDiscountsComponent } from './payments/discounts/list-discounts/list-discounts.component';
import { InsertDiscountsComponent } from './payments/discounts/insert-discounts/insert-discounts.component';
import { UpdateDiscountsComponent } from './payments/discounts/update-discounts/update-discounts.component';
import { ListPointPricesComponent } from './payments/point_prices/list-point-prices/list-point-prices.component';
import { InsertPointPricesComponent } from './payments/point_prices/insert-point-prices/insert-point-prices.component';
import { UpdatePointPricesComponent } from './payments/point_prices/update-point-prices/update-point-prices.component';

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
    DialogAddCat1Component,
    DialogAddCat2Component,
    DialogAddCat3Component,
    DialogAddCat4Component,
    CatigoriesMainComponent,
    DialogAeCatpic1Component,
    DialogAeCatpic2Component,
    DialogAeCatpic3Component,
    DialogAeCatpic4Component,
    AgerangeSizesMainComponent,
    DialogAgerangeAeComponent,
    DialogAeSizesComponent,
    MainMenuComponent,
    EmployeesManagementComponent,
    EmployeeMenuComponent,
    UserLogsComponent,
    UserPointsComponent,
    UserPointsUpdaterComponent,
    CmpnypntsComponent,
    CmpnyupdaterpntsComponent,
    SimplesearcharchivedproductsComponent,
    EdArchivedProductComponent,
    UpdArchprodComponent,
    ListCompanyProductsComponent,
    ListBranchProductsComponent,
    AddProductComponent,
    ListProductColorsComponent,
    AddProductColorsComponent,
    DisplayProductColorsComponent,
    EditProductColorsComponent,
    ColorManagmentComponent,
    AddeditSubcolorComponent,
    AddeditMaincolorComponent,
    AddeditProductcolordetailsComponent,
    DialogAeSizecatigoriesComponent,
    DialogDisplaySizeComponent,
    DialogAeProductavailsizeComponent,
    DialogAeProductpictureComponent,
    SearchUsersComponent,
    DuserCustomerserviceComponent,
    EuserCustomerserviceComponent,
    PaymentsMainComponent,
    AddPaymentComponent,
    CustomerserviceAddpaymentComponent,
    ListPayCardsComponent,
    InsertPayCardsComponent,
    UpdatePayCardsComponent,
    PaymentManagementComponent,
    ListPayCardPatchesComponent,
    InsertPayCardPatchesComponent,
    UpdatePayCardPatchesComponent,
    ListMailDiscountsComponent,
    InsertMailDiscountsComponent,
    UpdateMailDiscountsComponent,
    ListDiscountsComponent,
    InsertDiscountsComponent,
    UpdateDiscountsComponent,
    ListPointPricesComponent,
    InsertPointPricesComponent,
    UpdatePointPricesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule, 
    FlexLayoutModule,
    MatInputModule, MatSnackBarModule,MatTableModule,CdkTreeModule,MatIconModule,MatSortModule,MatPaginatorModule,MatCheckboxModule,MatMenuModule,MatNativeDateModule,MatDatepickerModule ,MatSelectModule,MatRadioModule,MatListModule,MatDialogModule,MatCardModule,
    HttpClientModule
  ],
  providers: [UserService, NotificationService,
  {provide: HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
  multi:true},DatePipe 
],
entryComponents:[MatConfirmDialogComponent,DialogSearchUserComponent,DialogUserDetailsComponent,DialogPicCompComponent,
DialogMapComponent,DialogLinkComponent,DialogManualComponent,DialogAddCat1Component,DialogAddCat2Component,DialogAddCat3Component,DialogAddCat4Component,
DialogAgerangeAeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
