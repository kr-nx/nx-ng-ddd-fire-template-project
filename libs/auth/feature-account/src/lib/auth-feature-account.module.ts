import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthDomainModule } from '@dekao/auth/domain';
import { SharedUiCommonModule, SharedUiMaterialModule } from '@dekao/shared/ui/common';
import { AccountComponent } from './account.component';
import { AccountMenuComponent } from './components/account-menu/account-menu.component';

@NgModule({
  imports: [
    SharedUiMaterialModule,
    SharedUiCommonModule,
    RouterModule,
    AuthDomainModule
  ],
  declarations: [AccountComponent, AccountMenuComponent],
  exports: [AccountComponent, AccountMenuComponent],
})
export class AuthFeatureAccountModule {}
