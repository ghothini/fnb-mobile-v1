// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_xxqXuG4VkAiiWdc0(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xxqXuG4VkAiiWdc0(bh) {
    try {
      bh = this.sd_kkha16Cbjcxn6R86(bh);
      //appendnew_next_sd_xxqXuG4VkAiiWdc0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xxqXuG4VkAiiWdc0');
    }
  }

  routeIfLoggedIn(item: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { item };
      bh.local = {};
      bh = this.sd_4ZcpuFRVTDSY0D47(bh);
      //appendnew_next_routeIfLoggedIn
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ARfLByDeE8NrVmIs');
    }
  }
  //appendnew_flow_dashboardComponent_start

  sd_kkha16Cbjcxn6R86(bh) {
    try {
      this.page.currentUser = undefined;
      this.page.landingOptions = undefined;
      bh = this.getLoggedInUser(bh);
      //appendnew_next_sd_kkha16Cbjcxn6R86
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kkha16Cbjcxn6R86');
    }
  }

  getLoggedInUser(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_ozZVMhqLorMV5vbk(bh);
      //appendnew_next_getLoggedInUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i88N6Cd6vBRru8sA');
    }
  }

  sd_ozZVMhqLorMV5vbk(bh) {
    try {
      const page = this.page;
      if (page.currentUser) {
        page.landingOptions = [
          {
            label: 'Message',
            image: '/Web/Images/message.PNG',
            route: '/home/messages',
          },
          {
            label: 'Contact Us',
            image: '/Web/Images/contact-us.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'My Offers',
            image: '/Web/Images/my-offers.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'Product Shop',
            image: '/Web/Images/product-shop.PNG',
            route: '/home/coming-soon',
          },
          { label: 'Pay', image: '/Web/Images/pay.PNG', route: '/home/pay' },
          {
            label: 'Buy',
            image: '/Web/Images/buy.PNG',
            route: '/home/airtime',
          },
          {
            label: 'Transfer',
            image: '/Web/Images/transfer.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'Forex',
            image: '/Web/Images/forex.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'Insure',
            image: '/Web/Images/insure.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'Invest',
            image: '/Web/Images/invest.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'nav>>Energy',
            image: '/Web/Images/nav-energy.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'nav-igate life',
            image: '/Web/Images/navigate.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'eBucks',
            image: '/Web/Images/ebucks.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'Secure chat',
            image: '/Web/Images/secure.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'Cards',
            image: '/Web/Images/cards.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'GuardMe',
            image: '/Web/Images/guard.PNG',
            route: '/home/coming-soon',
          },
          {
            label: 'Security centre',
            image: '/Web/Images/security.PNG',
            route: '/home/coming-soon',
          },
        ];
      } else {
        page.landingOptions = [
          {
            label: 'Login',
            image: '/Web/Images/login2.PNG',
            route: '/home/login',
          },
          {
            label: 'Message',
            image: '/Web/Images/message.PNG',
            route: '/home/login',
          },
          {
            label: 'Contact Us',
            image: '/Web/Images/contact-us.PNG',
            route: '/home/login',
          },
          {
            label: 'My Offers',
            image: '/Web/Images/my-offers.PNG',
            route: '/home/login',
          },
          {
            label: 'Product Shop',
            image: '/Web/Images/product-shop.PNG',
            route: '/home/login',
          },
          { label: 'Pay', image: '/Web/Images/pay.PNG', route: '/home/login' },
          { label: 'Buy', image: '/Web/Images/buy.PNG', route: '/home/login' },
          {
            label: 'Transfer',
            image: '/Web/Images/transfer.PNG',
            route: '/home/login',
          },
          {
            label: 'Forex',
            image: '/Web/Images/forex.PNG',
            route: '/home/login',
          },
          {
            label: 'Insure',
            image: '/Web/Images/insure.PNG',
            route: '/home/login',
          },
          {
            label: 'Invest',
            image: '/Web/Images/invest.PNG',
            route: '/home/login',
          },
          {
            label: 'nav>>Energy',
            image: '/Web/Images/nav-energy.PNG',
            route: '/home/login',
          },
          {
            label: 'nav-igate life',
            image: '/Web/Images/navigate.PNG',
            route: '/home/login',
          },
          {
            label: 'eBucks',
            image: '/Web/Images/ebucks.PNG',
            route: '/home/login',
          },
          {
            label: 'Secure chat',
            image: '/Web/Images/secure.PNG',
            route: '/home/login',
          },
          {
            label: 'Cards',
            image: '/Web/Images/cards.PNG',
            route: '/home/login',
          },
          {
            label: 'GuardMe',
            image: '/Web/Images/guard.PNG',
            route: '/home/login',
          },
          {
            label: 'Security centre',
            image: '/Web/Images/security.PNG',
            route: '/home/login',
          },
          {
            label: 'eBucks',
            image: '/Web/Images/ebucks.PNG',
            route: '/home/login',
          },
          {
            label: 'Secure chat',
            image: '/Web/Images/secure.PNG',
            route: '/home/login',
          },
        ];
      }
      this.sd_767Y5ld5PXlkUG1M(bh);
      //appendnew_next_sd_ozZVMhqLorMV5vbk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ozZVMhqLorMV5vbk');
    }
  }

  sd_767Y5ld5PXlkUG1M(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.currentUser);
      //appendnew_next_sd_767Y5ld5PXlkUG1M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_767Y5ld5PXlkUG1M');
    }
  }

  async sd_4ZcpuFRVTDSY0D47(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(bh.input.item.route);
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_4ZcpuFRVTDSY0D47
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4ZcpuFRVTDSY0D47');
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
  //appendnew_flow_dashboardComponent_Catch
}
