// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-migrateComponent
import { migrateComponent } from '../components/migrate.component';
//CORE_REFERENCE_IMPORT-change_password2Component
import { change_password2Component } from '../components/change_password2.component';
//CORE_REFERENCE_IMPORT-coming_soonComponent
import { coming_soonComponent } from '../components/coming_soon.component';
//CORE_REFERENCE_IMPORT-airtimeAnother_detailsComponent
import { airtimeAnother_detailsComponent } from '../components/pop_ups/airtimeAnother_details.component';
//CORE_REFERENCE_IMPORT-airtime_detailsComponent
import { airtime_detailsComponent } from '../components/pop_ups/airtime_details.component';
//CORE_REFERENCE_IMPORT-verify_codeComponent
import { verify_codeComponent } from '../components/verify_code.component';
//CORE_REFERENCE_IMPORT-forgot_passwordComponent
import { forgot_passwordComponent } from '../components/forgot_password.component';
//CORE_REFERENCE_IMPORT-confirm_limitsComponent
import { confirm_limitsComponent } from '../components/confirm_limits.component';
//CORE_REFERENCE_IMPORT-deposit_ownComponent
import { deposit_ownComponent } from '../components/deposit_own.component';
//CORE_REFERENCE_IMPORT-menu_dialogComponent
import { menu_dialogComponent } from '../components/menu_dialog.component';
//CORE_REFERENCE_IMPORT-limitsComponent
import { limitsComponent } from '../components/limits.component';
//CORE_REFERENCE_IMPORT-change_passwordComponent
import { change_passwordComponent } from '../components/change_password.component';
//CORE_REFERENCE_IMPORT-usernameComponent
import { usernameComponent } from '../components/username.component';
//CORE_REFERENCE_IMPORT-id_documentsComponent
import { id_documentsComponent } from '../components/id_documents.component';
//CORE_REFERENCE_IMPORT-add_profile_picComponent
import { add_profile_picComponent } from '../components/add_profile_pic.component';
//CORE_REFERENCE_IMPORT-settingsComponent
import { settingsComponent } from '../components/settings.component';
//CORE_REFERENCE_IMPORT-personal_infoComponent
import { personal_infoComponent } from '../components/personal_info.component';
//CORE_REFERENCE_IMPORT-profileComponent
import { profileComponent } from '../components/profile.component';
//CORE_REFERENCE_IMPORT-common
import { common } from '../sd-services/common';
//CORE_REFERENCE_IMPORT-messageComponent
import { messageComponent } from '../components/message.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/login.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';
//CORE_REFERENCE_IMPORT-footerComponent
import { footerComponent } from '../components/footer.component';
//CORE_REFERENCE_IMPORT-landingComponent
import { landingComponent } from '../components/landing.component';
//CORE_REFERENCE_IMPORT-cardComponent
import { cardComponent } from '../components/features/card.component';
//CORE_REFERENCE_IMPORT-payComponent
import { payComponent } from '../components/features/pay.component';
//CORE_REFERENCE_IMPORT-ewalletComponent
import { ewalletComponent } from '../components/features/ewallet.component';
//CORE_REFERENCE_IMPORT-buy_electricityComponent
import { buy_electricityComponent } from '../components/features/buy_electricity.component';
//CORE_REFERENCE_IMPORT-buy_airtimeComponent
import { buy_airtimeComponent } from '../components/features/buy_airtime.component';
//CORE_REFERENCE_IMPORT-searchComponent
import { searchComponent } from '../components/features/search.component';
//CORE_REFERENCE_IMPORT-qr_code_readerComponent
import { qr_code_readerComponent } from '../components/features/qr_code_reader.component';
//CORE_REFERENCE_IMPORT-view_transactionsComponent
import { view_transactionsComponent } from '../components/view_transactions.component';
//CORE_REFERENCE_IMPORT-bankComponent
import { bankComponent } from '../components/bank.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-migrateComponent
  migrateComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-change_password2Component
  change_password2Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-coming_soonComponent
  coming_soonComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-airtimeAnother_detailsComponent
  airtimeAnother_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-airtime_detailsComponent
  airtime_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-verify_codeComponent
  verify_codeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-forgot_passwordComponent
  forgot_passwordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-confirm_limitsComponent
  confirm_limitsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-deposit_ownComponent
  deposit_ownComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-menu_dialogComponent
  menu_dialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-limitsComponent
  limitsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-change_passwordComponent
  change_passwordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-usernameComponent
  usernameComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-id_documentsComponent
  id_documentsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_profile_picComponent
  add_profile_picComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-settingsComponent
  settingsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-personal_infoComponent
  personal_infoComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-profileComponent
  profileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-messageComponent
  messageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footerComponent
  footerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingComponent
  landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-cardComponent
  cardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-payComponent
  payComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ewalletComponent
  ewalletComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-buy_electricityComponent
  buy_electricityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-buy_airtimeComponent
  buy_airtimeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-searchComponent
  searchComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-qr_code_readerComponent
  qr_code_readerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-view_transactionsComponent
  view_transactionsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-bankComponent
  bankComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-common
  common,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'bank', component: bankComponent },
  { path: 'view-transactions', component: view_transactionsComponent },
  { path: 'qr-code-reader', component: qr_code_readerComponent },
  { path: 'search', component: searchComponent },
  { path: 'airtime', component: buy_airtimeComponent },
  { path: 'electricity', component: buy_electricityComponent },
  { path: 'eWallet', component: ewalletComponent },
  { path: 'pay', component: payComponent },
  { path: 'cards', component: cardComponent },
  { path: 'landing', component: landingComponent },
  { path: 'home', component: homeComponent },
  { path: 'message', component: messageComponent },
  { path: 'profile', component: profileComponent },
  { path: 'personal-info', component: personal_infoComponent },
  { path: 'settings', component: settingsComponent },
  { path: 'add-profile-pic', component: add_profile_picComponent },
  { path: 'id-documents', component: id_documentsComponent },
  { path: 'username', component: usernameComponent },
  { path: 'change-password', component: change_passwordComponent },
  { path: 'limits', component: limitsComponent },
  { path: 'login', component: loginComponent },
  { path: 'deposit', component: deposit_ownComponent },
  { path: 'confirm-limits', component: confirm_limitsComponent },
  { path: 'menu-dialog', component: menu_dialogComponent },
  { path: 'forgot-password', component: forgot_passwordComponent },
  { path: 'verify-code', component: verify_codeComponent },
  { path: 'coming-soon', component: coming_soonComponent },
  { path: 'change-password2', component: change_password2Component },
  { path: 'qr-code-manual', component: qr_code_readerComponent },
  { path: 'airtime-details', component: airtime_detailsComponent },
  {
    path: 'airtimeAnother-details',
    component: airtimeAnother_detailsComponent,
  },
  { path: 'migrate', component: migrateComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
