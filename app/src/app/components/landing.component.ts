// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { menu_dialogComponent } from 'app/components/menu_dialog.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-landing',
  templateUrl: './landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class landingComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_fLCupHJD1dUJgFi9(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    try {
      window.onoffline = (event) => {
        let bh = this.sdService.__constructDefault({});
        bh.input.event = event;
        this.sd_O7ASAVd5IGkfXfZm(bh);
      };
    } catch (e) {
      let bh = this.sdService.__constructDefault({});
      return this.errorHandler(bh, e, 'sd_O7ASAVd5IGkfXfZm');
    }

    //append_listeners
  }

  sd_fLCupHJD1dUJgFi9(bh) {
    try {
      bh = this.sd_mIPnLybZOGZKdAOg(bh);
      //appendnew_next_sd_fLCupHJD1dUJgFi9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fLCupHJD1dUJgFi9');
    }
  }

  sd_O7ASAVd5IGkfXfZm(bh) {
    try {
      bh = this.sd_ELNylOT3x9xnJwaZ(bh);
      //appendnew_next_sd_O7ASAVd5IGkfXfZm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O7ASAVd5IGkfXfZm');
    }
  }

  openTheDialog(data: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data };
      bh.local = { response: undefined };
      bh = this.sd_SuuO0HmqTlC0x9hB(bh);
      //appendnew_next_openTheDialog
      return bh.local.response;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6SPjYWqR5ZT7MLA2');
    }
  }
  //appendnew_flow_landingComponent_start

  sd_mIPnLybZOGZKdAOg(bh) {
    try {
      const page = this.page;
      bh.landingOptions = [
        { label: 'Login', image: '/Web/Images/login2.PNG', route: '/login' },
        { label: 'Message', image: '/Web/Images/message.PNG', route: '/login' },
        {
          label: 'Contact Us',
          image: '/Web/Images/contact-us.PNG',
          route: '/login',
        },
        {
          label: 'My Offers',
          image: '/Web/Images/my-offers.PNG',
          route: '/login',
        },
        {
          label: 'Product Shop',
          image: '/Web/Images/product-shop.PNG',
          route: '/login',
        },
        { label: 'Pay', image: '/Web/Images/pay.PNG', route: '/login' },
        { label: 'Buy', image: '/Web/Images/buy.PNG', route: '/login' },
        {
          label: 'Transfer',
          image: '/Web/Images/transfer.PNG',
          route: '/login',
        },
        { label: 'Forex', image: '/Web/Images/forex.PNG', route: '/login' },
        { label: 'Insure', image: '/Web/Images/insure.PNG', route: '/login' },
        { label: 'Invest', image: '/Web/Images/invest.PNG', route: '/login' },
        {
          label: 'nav>>Energy',
          image: '/Web/Images/nav-energy.PNG',
          route: '/login',
        },
        {
          label: 'nav-igate life',
          image: '/Web/Images/navigate.PNG',
          route: '/login',
        },
        { label: 'eBucks', image: '/Web/Images/ebucks.PNG', route: '/login' },
        {
          label: 'Secure chat',
          image: '/Web/Images/secure.PNG',
          route: '/login',
        },
        { label: 'Cards', image: '/Web/Images/cards.PNG', route: '/login' },
        { label: 'GuardMe', image: '/Web/Images/guard.PNG', route: '/login' },
        {
          label: 'Security centre',
          image: '/Web/Images/security.PNG',
          route: '/login',
        },
        {
          label: 'Manage my debt',
          image: '/Web/Images/manage-debt.PNG',
          route: '/login',
        },
        { label: '', image: '/Web/Images/add.PNG', route: '/coming-soon' },
      ];

      bh.isOffline = [
        { image1: 'Web/Images/landing-banner.PNG' },
        { image2: '/Web/Images/network.JPG' },
      ];
      bh = this.sd_YWTUnLPCXM1hGksN(bh);
      //appendnew_next_sd_mIPnLybZOGZKdAOg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mIPnLybZOGZKdAOg');
    }
  }

  sd_YWTUnLPCXM1hGksN(bh) {
    try {
      this.page.landingOptions = bh.landingOptions;
      this.page.items = bh.items;
      this.page.isOfflineNow = false;
      this.page.term = undefined;
      //appendnew_next_sd_YWTUnLPCXM1hGksN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YWTUnLPCXM1hGksN');
    }
  }

  sd_ELNylOT3x9xnJwaZ(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('You are offline', 'OK', {
        duration: 5000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_Vz1n164d40Ms54Hu(bh);
      //appendnew_next_sd_ELNylOT3x9xnJwaZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ELNylOT3x9xnJwaZ');
    }
  }

  sd_Vz1n164d40Ms54Hu(bh) {
    try {
      const page = this.page;
      page.isOfflineNow = true;

      // bh.isOffline = image.2;
      //appendnew_next_sd_Vz1n164d40Ms54Hu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vz1n164d40Ms54Hu');
    }
  }

  sd_SuuO0HmqTlC0x9hB(bh) {
    try {
      const page = this.page;
      bh.data = {
        name: 'This is a sample dialog window',
      };
      bh = this.sd_Czz8ypODTZxLkMNy(bh);
      //appendnew_next_sd_SuuO0HmqTlC0x9hB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SuuO0HmqTlC0x9hB');
    }
  }

  sd_Czz8ypODTZxLkMNy(bh) {
    try {
      const menu_dialogDialog = this.__page_injector__.get(MatDialog);
      const menu_dialogDialogRef = menu_dialogDialog.open(
        menu_dialogComponent,
        {}
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Czz8ypODTZxLkMNy');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_landingComponent_Catch
}
