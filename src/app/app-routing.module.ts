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
import { CatigoriesMainComponent } from './catigory_size_management/catigories-main/catigories-main.component';


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

      //Branches Management
      {path:'branches/:id',component:BranchesTableComponent,data:{permitedroles:['Owner'] }},
      {path:'createbranch/:Company_id',component:CreateBranchComponent,data:{permitedroles:['Owner'] }},
      {path:'editbranch/:branch_id',component:UpdateBranchesComponent,data:{permitedroles:['Owner'] }},

      //Catigories Management
      {path:'Catigories_manegment',component:CatigoriesMainComponent,data:{permitedroles:['Owner'] }},
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
