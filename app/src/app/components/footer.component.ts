// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, EventEmitter, Injector, Output } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { menu_dialogComponent } from 'app/components/menu_dialog.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-footer',
  templateUrl: './footer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class footerComponent {
  @Output('selectedPage')
  public selectedPage: any = new EventEmitter<any>();
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
      this.sd_uxFh8suVjjtt5uuB(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uxFh8suVjjtt5uuB(bh) {
    try {
      bh = this.sd_jF8y0IaE8zFwZjJz(bh);
      //appendnew_next_sd_uxFh8suVjjtt5uuB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uxFh8suVjjtt5uuB');
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
      bh = this.sd_bad57GFHDwVmTSqh(bh);
      //appendnew_next_openTheDialog
      return bh.local.response;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rWbfo4SPd6lqltWs');
    }
  }

  routeUser(tab: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { tab };
      bh.local = {};
      bh = this.sd_nqfxKKcjBfmB0cZU(bh);
      //appendnew_next_routeUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7brMOsgab8Q1kxhs');
    }
  }
  //appendnew_flow_footerComponent_start

  sd_jF8y0IaE8zFwZjJz(bh) {
    try {
      this.page.footerTabs = undefined;
      bh = this.sd_uG476h0mGQexMXjY(bh);
      //appendnew_next_sd_jF8y0IaE8zFwZjJz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jF8y0IaE8zFwZjJz');
    }
  }

  sd_uG476h0mGQexMXjY(bh) {
    try {
      const page = this.page;
      page.footerTabs = [
        {
          label: 'Home',
          image: 'Web/Image Icons/home.png',
          route: '/home',
          title: 'FNB',
        },
        {
          label: 'Bank',
          image: 'Web/Image Icons/credit-card.png',
          route: 'home/bank',
          title: 'Bank',
        },
        {
          label: 'Message',
          image: 'Web/Image Icons/messages.png',
          route: 'home/messages',
          title: 'Messages',
        },
        {
          label: 'Profile',
          image: 'Web/Image Icons/user.png',
          route: 'home/profile',
          title: 'My Profile',
        },
      ];
      //appendnew_next_sd_uG476h0mGQexMXjY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uG476h0mGQexMXjY');
    }
  }

  sd_bad57GFHDwVmTSqh(bh) {
    try {
      const page = this.page;
      bh.data = {
        name: 'This is a sample dialog window',
      };
      bh = this.sd_owqwWGEntlJElkW9(bh);
      //appendnew_next_sd_bad57GFHDwVmTSqh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bad57GFHDwVmTSqh');
    }
  }

  sd_owqwWGEntlJElkW9(bh) {
    try {
      const menu_dialogDialog = this.__page_injector__.get(MatDialog);
      const menu_dialogDialogRef = menu_dialogDialog.open(
        menu_dialogComponent,
        {}
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_owqwWGEntlJElkW9');
    }
  }

  sd_nqfxKKcjBfmB0cZU(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.getLoggedInUser(bh);
      //appendnew_next_sd_nqfxKKcjBfmB0cZU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nqfxKKcjBfmB0cZU');
    }
  }

  getLoggedInUser(bh) {
    try {
      this.page.currentUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_iU9pAgT2wOGiRKzA(bh);
      //appendnew_next_getLoggedInUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Oq31DUbk2UL7SVC0');
    }
  }

  async sd_iU9pAgT2wOGiRKzA(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          this.page.currentUser,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_v5ItJqAwNaOWMZXB(bh);
      } else {
        bh = await this.checkIfNavigatingHome(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iU9pAgT2wOGiRKzA');
    }
  }

  sd_v5ItJqAwNaOWMZXB(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify(bh.input.tab.title));
      bh = this.sd_3BFSF0XkWfbQqvMC(bh);
      //appendnew_next_sd_v5ItJqAwNaOWMZXB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v5ItJqAwNaOWMZXB');
    }
  }

  sd_3BFSF0XkWfbQqvMC(bh) {
    try {
      const page = this.page;
      page.router.navigate([bh.input.tab.route]);
      //appendnew_next_sd_3BFSF0XkWfbQqvMC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3BFSF0XkWfbQqvMC');
    }
  }

  async checkIfNavigatingHome(bh) {
    try {
      if (
        this.sdService.operators['se'](
          bh.input.tab.title,
          'FNB',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_v5ItJqAwNaOWMZXB(bh);
      } else {
        bh = await this.sd_dzQAwYyBzYnoooF2(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zQWmzCK6TtKPd10B');
    }
  }

  sd_dzQAwYyBzYnoooF2(bh) {
    try {
      localStorage.setItem('selectedPage', JSON.stringify('Login'));
      bh = this.sd_NAnJYrZHHecXvzEv(bh);
      //appendnew_next_sd_dzQAwYyBzYnoooF2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dzQAwYyBzYnoooF2');
    }
  }

  async sd_NAnJYrZHHecXvzEv(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_NAnJYrZHHecXvzEv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NAnJYrZHHecXvzEv');
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
  //appendnew_flow_footerComponent_Catch
}
