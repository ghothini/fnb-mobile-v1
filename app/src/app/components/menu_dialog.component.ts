// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-menu_dialog',
  templateUrl: './menu_dialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class menu_dialogComponent {
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
      this.sd_yDtI8wADmqQYd7bC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_yDtI8wADmqQYd7bC(bh) {
    try {
      bh = this.sd_IjkRraFAD0Sv8TWO(bh);
      //appendnew_next_sd_yDtI8wADmqQYd7bC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yDtI8wADmqQYd7bC');
    }
  }

  closeDialog(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_J3ilFtiHSeU4O52u(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pqfXIyO5SBEE126m');
    }
  }
  //appendnew_flow_menu_dialogComponent_start

  sd_IjkRraFAD0Sv8TWO(bh) {
    try {
      const page = this.page;
      bh.menuOptions = [
        { label: 'Pay', image: '/Web/Images/menu-pay.PNG', route: '/login' },
        {
          label: 'Product Shop',
          image: '/Web/Images/menu-product.PNG',
          route: '/login',
        },
        { label: 'Buy', image: '/Web/Images/menu-buy.PNG', route: '/login' },
        {
          label: 'Forex',
          image: '/Web/Images/menu-forex.PNG',
          route: '/login',
        },
        {
          label: 'eBucks',
          image: '/Web/Images/menu-ebucks.PNG',
          route: '/login',
        },
        {
          label: 'Connect',
          image: '/Web/Images/menu-connect.PNG',
          route: '/login',
        },
        {
          label: 'Connect Us',
          image: '/Web/Images/menu-connect-us.PNG',
          route: '/login',
        },
        {
          label: 'Invest',
          image: '/Web/Images/menu-invest.PNG',
          route: '/login',
        },
        {
          label: 'nav>>igate life',
          image: '/Web/Images/menu-navigate.PNG',
          route: '/login',
        },
        {
          label: 'eWallet',
          image: '/Web/Images/menu-ewallet.PNG',
          route: '/login',
        },
        {
          label: 'Insure',
          image: '/Web/Images/menu-insure.PNG',
          route: '/login',
        },
        {
          label: 'Information',
          image: '/Web/Images/menu-info.PNG',
          route: '/login',
        },
        {
          label: 'Business Solutions',
          image: '/Web/Images/menu-business2.PNG',
          route: '/login',
        },
        {
          label: 'Timeline',
          image: '/Web/Images/menu-timeline.PNG',
          route: '/login',
        },
        { label: '', image: '', route: '/login' },
      ];

      bh = this.sd_ZYEDXz2gPozUwVVc(bh);
      //appendnew_next_sd_IjkRraFAD0Sv8TWO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IjkRraFAD0Sv8TWO');
    }
  }

  sd_ZYEDXz2gPozUwVVc(bh) {
    try {
      this.page.data = undefined;
      this.page.menuOptions = bh.menuOptions;
      //appendnew_next_sd_ZYEDXz2gPozUwVVc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZYEDXz2gPozUwVVc');
    }
  }

  sd_J3ilFtiHSeU4O52u(bh) {
    try {
      const page = this.page;
      bh.local.data = {
        message:
          'This is the data sent from the dialog window to the parent page',
      };
      bh = this.sd_qWmam6OxZDo2XITs(bh);
      //appendnew_next_sd_J3ilFtiHSeU4O52u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J3ilFtiHSeU4O52u');
    }
  }

  sd_qWmam6OxZDo2XITs(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.local.data);

      //appendnew_next_sd_qWmam6OxZDo2XITs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qWmam6OxZDo2XITs');
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
  //appendnew_flow_menu_dialogComponent_Catch
}
