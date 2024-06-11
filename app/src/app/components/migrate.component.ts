// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-migrate',
  templateUrl: './migrate.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class migrateComponent {
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
      this.sd_dpTYOoU9RpV0DTcD(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dpTYOoU9RpV0DTcD(bh) {
    try {
      bh = this.sd_doJ6zvSar9t0OFZu(bh);
      //appendnew_next_sd_dpTYOoU9RpV0DTcD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dpTYOoU9RpV0DTcD');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_d1i9RMFQRl4YCaZQ(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lhwfvQLNys0t62Ac');
    }
  }
  //appendnew_flow_migrateComponent_start

  sd_doJ6zvSar9t0OFZu(bh) {
    try {
      bh = this.sd_Px5jP0udVU5GQNmE(bh);
      //appendnew_next_sd_doJ6zvSar9t0OFZu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_doJ6zvSar9t0OFZu');
    }
  }

  sd_Px5jP0udVU5GQNmE(bh) {
    try {
      this.page.migrateForm = undefined;
      bh = this.sd_FI5pWCX8AXF6Mqkh(bh);
      //appendnew_next_sd_Px5jP0udVU5GQNmE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Px5jP0udVU5GQNmE');
    }
  }

  sd_FI5pWCX8AXF6Mqkh(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_0aOMDwFg1VkdnHJU(bh);
      //appendnew_next_sd_FI5pWCX8AXF6Mqkh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FI5pWCX8AXF6Mqkh');
    }
  }

  sd_0aOMDwFg1VkdnHJU(bh) {
    try {
      const page = this.page;
      page.password = 'password';

      page.migrateForm = new FormGroup({
        email: new FormControl(page.loggedInUser.email, Validators.required),
        idNum: new FormControl(page.loggedInUser.idNum, Validators.required),
        cellPhoneNumber: new FormControl(
          page.loggedInUser.cell,
          Validators.required
        ),
        balance: new FormControl(
          page.loggedInUser.balance,
          Validators.required
        ),
        accountNumber: new FormControl(
          page.loggedInUser.accountNumber,
          Validators.required
        ),
        name: new FormControl(page.loggedInUser.name, Validators.required),
        surname: new FormControl(
          page.loggedInUser.surname,
          Validators.required
        ),
        remotePin: new FormControl('', Validators.required),
      });

      // console.log(page.loginForm.value)

      //appendnew_next_sd_0aOMDwFg1VkdnHJU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0aOMDwFg1VkdnHJU');
    }
  }

  sd_d1i9RMFQRl4YCaZQ(bh) {
    try {
      const page = this.page;
      console.log('submitted page', page);
      bh.body = page.migrateForm.value;
      bh = this.sd_X6p0JfB1gGINZhCh(bh);
      //appendnew_next_sd_d1i9RMFQRl4YCaZQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d1i9RMFQRl4YCaZQ');
    }
  }

  sd_X6p0JfB1gGINZhCh(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_4ea6CJ6HspJDAa6e(bh);
      //appendnew_next_sd_X6p0JfB1gGINZhCh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X6p0JfB1gGINZhCh');
    }
  }

  sd_4ea6CJ6HspJDAa6e(bh) {
    try {
      const page = this.page;
      bh.url = `https://111e-169-239-176-9.ngrok-free.app/api/registration`;
      console.log('updated bh', bh);
      bh = this.sd_B1cv4ZZaboP97qFx(bh);
      //appendnew_next_sd_4ea6CJ6HspJDAa6e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4ea6CJ6HspJDAa6e');
    }
  }

  async sd_B1cv4ZZaboP97qFx(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_qoU1BJfg9M5STpCb(bh);
      //appendnew_next_sd_B1cv4ZZaboP97qFx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B1cv4ZZaboP97qFx');
    }
  }

  async sd_qoU1BJfg9M5STpCb(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_qoU1BJfg9M5STpCb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qoU1BJfg9M5STpCb');
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
  //appendnew_flow_migrateComponent_Catch
}
