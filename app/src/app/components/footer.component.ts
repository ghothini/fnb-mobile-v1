// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
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
      bh = this.sd_uG476h0mGQexMXjY(bh);
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
  //appendnew_flow_footerComponent_start

  sd_uG476h0mGQexMXjY(bh) {
    try {
      const page = this.page;
      bh.footerOptions = [
        { label: 'Home', image: '', route: '/login' },
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
      ];
      bh = this.sd_jF8y0IaE8zFwZjJz(bh);
      //appendnew_next_sd_uG476h0mGQexMXjY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uG476h0mGQexMXjY');
    }
  }

  sd_jF8y0IaE8zFwZjJz(bh) {
    try {
      this.page.footerOptions = bh.footerOptions;
      //appendnew_next_sd_jF8y0IaE8zFwZjJz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jF8y0IaE8zFwZjJz');
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
