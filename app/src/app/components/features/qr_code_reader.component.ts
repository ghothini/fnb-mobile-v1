// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-qr_code_reader',
  templateUrl: './qr_code_reader.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class qr_code_readerComponent {
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
      this.sd_CNBBqa9xYYQzraID(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_CNBBqa9xYYQzraID(bh) {
    try {
      bh = this.sd_tS4QeW0tWbtwlwf1(bh);
      //appendnew_next_sd_CNBBqa9xYYQzraID
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CNBBqa9xYYQzraID');
    }
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_6FAeldNSGa6Uql2w(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IaPEY5gAM9QL2Zh4');
    }
  }
  //appendnew_flow_qr_code_readerComponent_start

  sd_tS4QeW0tWbtwlwf1(bh) {
    try {
      //appendnew_next_sd_tS4QeW0tWbtwlwf1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tS4QeW0tWbtwlwf1');
    }
  }

  sd_6FAeldNSGa6Uql2w(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_wkoF8gW7CdJX16if(bh);
      //appendnew_next_sd_6FAeldNSGa6Uql2w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6FAeldNSGa6Uql2w');
    }
  }

  sd_wkoF8gW7CdJX16if(bh) {
    try {
      const page = this.page;
      page.location.back();

      //appendnew_next_sd_wkoF8gW7CdJX16if
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wkoF8gW7CdJX16if');
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
  //appendnew_flow_qr_code_readerComponent_Catch
}
