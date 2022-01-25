import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMasterComponent } from './Masters/main-master/main-master.component';
import { LoginComponent } from './General/login/login.component';
import { UserProfileComponent } from './General/user-profile/user-profile.component';
import { HomeComponent } from './general/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { OwnerUsersManegmentComponent } from './users_manegment/owner-users-manegment/owner-users-manegment.component';
import { OwnerMasterComponent } from './Masters/owner-master/owner-master.component';
import { EditUserComponent } from './users_manegment/edit-user/edit-user.component';
import { CompaniesTableOwnerComponent } from './companies_managment/companies-table-owner/companies-table-owner.component';
import { EditCompanyOwnerComponent } from './companies_managment/edit-company-owner/edit-company-owner.component';
import { CreateCompanyComponent } from './companies_managment/create-company/create-company.component';
import { PicsCompanyComponent } from './companies_managment/pics-company/pics-company.component';
import { BranchesTableComponent } from './Branches-Management/branches-table/branches-table.component';
import { CreateBranchComponent } from './branches-management/create-branch/create-branch.component';
import { UpdateBranchesComponent } from './branches-management/update-branches/update-branches.component';
import { CompanyUsersComponent } from './companies_managment/company-users/company-users.component';
import { CompanyAddUsersComponent } from './companies_managment/company-add-users/company-add-users.component';
import { CompanyEditUsersComponent } from './companies_managment/company-edit-users/company-edit-users.component';
import { CatigoriesMainComponent } from './catigories_sizes_management/catigories-main/catigories-main.component';
import { AgerangeSizesMainComponent } from './catigories_sizes_management/agerange-sizes-main/agerange-sizes-main.component';
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
import { DisplayProductColorsComponent } from './productmanagment/Product_colors/display-product-colors/display-product-colors.component';
import { EditProductColorsComponent } from './productmanagment/Product_colors/edit-product-colors/edit-product-colors.component';
import { AddProductColorsComponent } from './productmanagment/Product_colors/add-product-colors/add-product-colors.component';
import { ColorManagmentComponent } from './color_managment/color-managment/color-managment.component';
import { SearchUsersComponent } from './users_manegment/Customer_service_user_managment/search-users/search-users.component';
import { DuserCustomerserviceComponent } from './users_manegment/customer_service_user_managment/duser-customerservice/duser-customerservice.component';
import { EuserCustomerserviceComponent } from './users_manegment/customer_service_user_managment/euser-customerservice/euser-customerservice.component';
import { PaymentsMainComponent } from './Users_Manegment/Customer_service_Payments/payments-main/payments-main.component';
import { ListPayCardsComponent } from './payments/payments_cards/list-pay-cards/list-pay-cards.component';
import { PaymentManagementComponent } from './payments/payment-management/payment-management.component';
import { ListPayCardPatchesComponent } from './payments/payment_card_patches/list-pay-card-patches/list-pay-card-patches.component';
import { ListMailDiscountsComponent } from './payments/mail_discounts/list-mail-discounts/list-mail-discounts.component';
import { ListDiscountsComponent } from './payments/discounts/list-discounts/list-discounts.component';
import { ListPointPricesComponent } from './payments/point_prices/list-point-prices/list-point-prices.component';

const routes: Routes = [
  {path:'',redirectTo:'main/login',pathMatch:'full'},
  {path:'main',component:MainMasterComponent,children:[
    //owner master
    {path:'employee',component:OwnerMasterComponent,canActivate:[AuthGuard],children:[
      //general
      {path:'home',component:HomeComponent,data:{permitedroles:['Owner'] }},      

      //users manegment
      {path:'o_users_manegment',component:OwnerUsersManegmentComponent,data:{permitedroles:['Owner'] }},
      {path:'edit_user/:id',component:EditUserComponent,data:{permitedroles:['Owner'] }},

      //companies manegment
      {path:'o_companies_manegment',component:CompaniesTableOwnerComponent,data:{permitedroles:['Owner'] }},
      {path:'edit_company/:id',component:EditCompanyOwnerComponent,data:{permitedroles:['Owner'] }},
      {path:'create_company',component:CreateCompanyComponent,data:{permitedroles:['Owner'] }},
      {path:'company_picture/:id',component:PicsCompanyComponent,data:{permitedroles:['Owner'] }},
      {path:'company_users/:id',component:CompanyUsersComponent,data:{permitedroles:['Owner'] }},
      {path:'company_users_add/:company_id',component:CompanyAddUsersComponent,data:{permitedroles:['Owner'] }},
      {path:'company_users_edit/:branch_user_id',component:CompanyEditUsersComponent,data:{permitedroles:['Owner'] }},
      {path:'company_products/:company_id',component:ListCompanyProductsComponent,data:{permitedroles:['Owner'] }},
      {path:'branch_products/:branch_id',component:ListBranchProductsComponent,data:{permitedroles:['Owner'] }},

      //Branches Management
      {path:'branches/:id',component:BranchesTableComponent,data:{permitedroles:['Owner'] }},
      {path:'createbranch/:Company_id',component:CreateBranchComponent,data:{permitedroles:['Owner'] }},
      {path:'editbranch/:branch_id',component:UpdateBranchesComponent,data:{permitedroles:['Owner'] }},

      //catigories Management
      {path:'Catigories_manegment',component:CatigoriesMainComponent,data:{permitedroles:['Owner'] }},
      {path:'ages_sizes_manegment',component:AgerangeSizesMainComponent,data:{permitedroles:['Owner'] }},

      //colors Managment
      {path:'colormanagment',component:ColorManagmentComponent,data:{permitedroles:['Owner'] }},//list all colors
      {path:'displayproductcolor/:prod_color_id/:prod_color_date_id',component:DisplayProductColorsComponent,data:{permitedroles:['Owner'] }},//display  color
      {path:'editproductcolor/:prod_color_id/:prod_color_date_id',component:EditProductColorsComponent,data:{permitedroles:['Owner'] }},//edit color
      {path:'addproductcolor/:prod_id/:prod_date_id',component:AddProductColorsComponent,data:{permitedroles:['Owner'] }},//add color
      //Employee and cases management
      {path:'employees_case_manegment',component:MainMenuComponent,data:{permitedroles:['Owner'] }},
      {path:'employees_manegment',component:EmployeesManagementComponent,data:{permitedroles:['Owner'] }},
      {path:'Employee_Menu/:Employee_id',component:EmployeeMenuComponent,data:{permitedroles:['Owner'] }},
        //user logs
        {path:'user_logs_Menu/:Employee_id',component:UserLogsComponent,data:{permitedroles:['Owner'] }},
         {path:'user_point_log_all/:Employee_id',component:UserPointsComponent,data:{permitedroles:['Owner'] }}, ///all user actions as updator or related user
         {path:'user_point_log_updater/:Employee_id',component:UserPointsUpdaterComponent,data:{permitedroles:['Owner'] }}, ///all user actions as updator only
        {path:'company_point_log_all/:Employee_id',component:CmpnypntsComponent,data:{permitedroles:['Owner'] }},///all user actions as updator or related user
        {path:'company_point_log_updater/:Employee_id',component:CmpnyupdaterpntsComponent,data:{permitedroles:['Owner'] }},///all user actions as updator only
      
      //Products
      {path:'productssimplesearch',component:SimplesearcharchivedproductsComponent,data:{permitedroles:['Owner'] }},//simple search in all products
      {path:'displayproduct/:prod_id/:prod_date_id',component:EdArchivedProductComponent,data:{permitedroles:['Owner'] }},//display product
      {path:'editproduct/:prod_id/:prod_date_id',component:UpdArchprodComponent,data:{permitedroles:['Owner'] }},//edit product
      {path:'addproduct/:branch_id',component:AddProductComponent,data:{permitedroles:['Owner'] }},//add product
      
      //Product colors
      {path:'listproductcolors/:prod_id/:prod_date_id',component:ListProductColorsComponent,data:{permitedroles:['Owner'] }},//list all product colors
      {path:'displayproductcolor/:prod_color_id/:prod_color_date_id',component:DisplayProductColorsComponent,data:{permitedroles:['Owner'] }},//display product color
      {path:'editproductcolor/:prod_color_id/:prod_color_date_id',component:EditProductColorsComponent,data:{permitedroles:['Owner'] }},//edit product color
      {path:'addproductcolor/:prod_id/:prod_date_id',component:AddProductColorsComponent,data:{permitedroles:['Owner'] }},//add product color
      
      //Customer service    //user management
      {path:'customer_service_search_users',component:SearchUsersComponent,data:{permitedroles:['Owner','Customer_Service'] }},
      {path:'customer_service_display_users/:user_id',component:DuserCustomerserviceComponent,data:{permitedroles:['Owner','Customer_Service'] }},
      {path:'customer_service_edit_users/:user_id',component:EuserCustomerserviceComponent,data:{permitedroles:['Owner','Customer_Service'] }},
      // {path:'addproductcolor/:prod_id/:prod_date_id',component:AddProductColorsComponent,data:{permitedroles:['Owner','Customer_Service'] }},

      //customer servicePayment managment
      {path:'customer_service_main_payment/:user_id',component:PaymentsMainComponent,data:{permitedroles:['Owner','Customer_Service'] }},
      
      //Main Payment managment
      {path:'payments_manegment',component:PaymentManagementComponent,data:{permitedroles:['Owner','Customer_Service'] }},
      
      //Payment Cards managment
      {path:'payment_cards_manegment',component:ListPayCardsComponent,data:{permitedroles:['Owner','Customer_Service'] }},
      
      //payment_card_patches managment
      {path:'payment_card_patches_manegment',component:ListPayCardPatchesComponent,data:{permitedroles:['Owner','Customer_Service'] }},
      
      //mail_discounts managment
      {path:'mail_discounts_manegment',component:ListMailDiscountsComponent,data:{permitedroles:['Owner','Customer_Service'] }},
      
      //discounts managment
      {path:'discounts_manegment',component:ListDiscountsComponent,data:{permitedroles:['Owner','Customer_Service'] }},
      
      //Main Payment managment
      {path:'point_prices_manegment',component:ListPointPricesComponent,data:{permitedroles:['Owner','Customer_Service'] }},
    ]},
    
    {path:'userprofile',component:UserProfileComponent},

    //not logged in
    {path:'login',component:LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
