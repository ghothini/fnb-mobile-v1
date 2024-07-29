// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, HostListener, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
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
      bh = this.sd_HPCEU72OUka2rSv7(bh);
      //appendnew_next_sd_gH5WfDthUdGcHb7c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gH5WfDthUdGcHb7c');
    }
  }

  showSelectedPage(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_za7KztW10VOhnMXd(bh);
      //appendnew_next_showSelectedPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mlH654RPOGXM8NmN');
    }
  }
  @HostListener('selectedPage', ['$event']) sd_BhVfsCSseNIfFAnx(event) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.$event = event;
      bh = this.sd_pMGbUR85EDCTkByp(bh);
      //appendnew_next_sd_BhVfsCSseNIfFAnx
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BhVfsCSseNIfFAnx');
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
      bh = this.sd_FXiHGCoDoYWNZVFr(bh);
      //appendnew_next_routeIfLoggedIn
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zXVLVug1e2CUaR27');
    }
  }
  //appendnew_flow_homeComponent_start

  sd_HPCEU72OUka2rSv7(bh) {
    try {
      this.page.currentUser = undefined;
      bh = this.getLoggedInUser(bh);
      //appendnew_next_sd_HPCEU72OUka2rSv7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HPCEU72OUka2rSv7');
    }
  }

  getLoggedInUser(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_RN0Fcj9LXAhFI8bC(bh);
      //appendnew_next_getLoggedInUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RCWYVeR5ogOMqr3z');
    }
  }

  sd_RN0Fcj9LXAhFI8bC(bh) {
    try {
      const page = this.page;
      if (page.currentUser) {
        bh.landingOptions = [
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
            route: '/home/pay',
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
        bh.landingOptions = [
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
      this.page.selectedPage = undefined;
      this.page.currentUser = undefined;
      bh = this.sd_EO337v58B4yyVHBs(bh);
      //appendnew_next_sd_pF2ZSp3hIF8bjLzf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pF2ZSp3hIF8bjLzf');
    }
  }

  sd_EO337v58B4yyVHBs(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('FNB'));
      bh = this.sd_3BoD2LG7Djkdt95O(bh);
      //appendnew_next_sd_EO337v58B4yyVHBs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EO337v58B4yyVHBs');
    }
  }

  sd_3BoD2LG7Djkdt95O(bh) {
    try {
      const page = this.page;
      setInterval(() => {
        page.selectedPage = JSON.parse(localStorage.getItem('selectedPage'));
      }, 250);
      bh = this.sd_23OWtAZAhXWQMroe(bh);
      //appendnew_next_sd_3BoD2LG7Djkdt95O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3BoD2LG7Djkdt95O');
    }
  }

  sd_23OWtAZAhXWQMroe(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('FNB'));
      //appendnew_next_sd_23OWtAZAhXWQMroe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_23OWtAZAhXWQMroe');
    }
  }

  sd_za7KztW10VOhnMXd(bh) {
    try {
      const page = this.page;
      bh.ts = 'testing';
      this.sd_pVJK6s8EwHcgBvTA(bh);
      //appendnew_next_sd_za7KztW10VOhnMXd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_za7KztW10VOhnMXd');
    }
  }

  sd_pVJK6s8EwHcgBvTA(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.ts);
      //appendnew_next_sd_pVJK6s8EwHcgBvTA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pVJK6s8EwHcgBvTA');
    }
  }

  sd_pMGbUR85EDCTkByp(bh) {
    try {
      const page = this.page;
      bh.ts = 'testing';
      this.sd_vZuLRUtjOXY9T74H(bh);
      //appendnew_next_sd_pMGbUR85EDCTkByp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pMGbUR85EDCTkByp');
    }
  }

  sd_vZuLRUtjOXY9T74H(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.ts);
      //appendnew_next_sd_vZuLRUtjOXY9T74H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vZuLRUtjOXY9T74H');
    }
  }

  async sd_FXiHGCoDoYWNZVFr(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.currentUser,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_HCRzY3l5E8vLVyEi(bh);
      } else {
        bh = await this.sd_TZOSFnFze3NXRMdq(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FXiHGCoDoYWNZVFr');
    }
  }

  async sd_HCRzY3l5E8vLVyEi(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(bh.input.item.route);
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_HCRzY3l5E8vLVyEi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HCRzY3l5E8vLVyEi');
    }
  }

  sd_TZOSFnFze3NXRMdq(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Login'));
      bh = this.sd_xgNjZ6CIYGS0caSI(bh);
      //appendnew_next_sd_TZOSFnFze3NXRMdq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TZOSFnFze3NXRMdq');
    }
  }

  async sd_xgNjZ6CIYGS0caSI(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_xgNjZ6CIYGS0caSI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xgNjZ6CIYGS0caSI');
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
