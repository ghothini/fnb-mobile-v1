// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_gH5WfDthUdGcHb7c(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_gH5WfDthUdGcHb7c(bh) {
    try {
      bh = this.sd_RN0Fcj9LXAhFI8bC(bh);
      //appendnew_next_sd_gH5WfDthUdGcHb7c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gH5WfDthUdGcHb7c');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_RN0Fcj9LXAhFI8bC(bh) {
    try {
      const page = this.page;
      bh.landingOptions = [
        {
          label: 'Message',
          image: '/Web/Images/message.PNG',
          route: '/coming-soon',
        },
        {
          label: 'Contact Us',
          image: '/Web/Images/contact-us.PNG',
          route: '/coming-soon',
        },
        {
          label: 'My Offers',
          image: '/Web/Images/my-offers.PNG',
          route: '/coming-soon',
        },
        {
          label: 'Product Shop',
          image: '/Web/Images/product-shop.PNG',
          route: '/coming-soon',
        },
        { label: 'Pay', image: '/Web/Images/pay.PNG', route: '/pay' },
        { label: 'Buy', image: '/Web/Images/buy.PNG', route: '/buy' },
        { label: 'Transfer', image: '/Web/Images/transfer.PNG', route: '/pay' },
        {
          label: 'Forex',
          image: '/Web/Images/forex.PNG',
          route: '/coming-soon',
        },
        {
          label: 'Insure',
          image: '/Web/Images/insure.PNG',
          route: '/coming-soon',
        },
        {
          label: 'Invest',
          image: '/Web/Images/invest.PNG',
          route: '/coming-soon',
        },
        {
          label: 'nav>>Energy',
          image: '/Web/Images/nav-energy.PNG',
          route: '/coming-soon',
        },
        {
          label: 'nav-igate life',
          image: '/Web/Images/navigate.PNG',
          route: '/coming-soon',
        },
        {
          label: 'eBucks',
          image: '/Web/Images/ebucks.PNG',
          route: '/coming-soon',
        },
        {
          label: 'Secure chat',
          image: '/Web/Images/secure.PNG',
          route: '/coming-soon',
        },
        {
          label: 'Cards',
          image: '/Web/Images/cards.PNG',
          route: '/coming-soon',
        },
        {
          label: 'GuardMe',
          image: '/Web/Images/guard.PNG',
          route: '/coming-soon',
        },
        {
          label: 'Security centre',
          image: '/Web/Images/security.PNG',
          route: '/coming-soon',
        },
        // { label: 'Manage my debt', image: "/Web/Images/manage-debt.PNG", route: '/login' },
        // { label: '', image: "/Web/Images/add.PNG", route: '/login' },
        // { label: '', image: "", route: '/home' },
      ];
      bh = this.sd_pF2ZSp3hIF8bjLzf(bh);
      //appendnew_next_sd_RN0Fcj9LXAhFI8bC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RN0Fcj9LXAhFI8bC');
    }
  }

  sd_pF2ZSp3hIF8bjLzf(bh) {
    try {
      this.page.landingOptions = bh.landingOptions;
      this.page.term = undefined;
      //appendnew_next_sd_pF2ZSp3hIF8bjLzf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pF2ZSp3hIF8bjLzf');
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
  //appendnew_flow_homeComponent_Catch
}
