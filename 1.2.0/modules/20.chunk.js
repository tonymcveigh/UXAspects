webpackJsonp([20],{1517:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,n,o,a){this.snippets={compiled:{},raw:{}},this.loadSnippetsFromRequireContext(this.snippets.raw,a),this.snippets.compiled=this.snippets.raw}return t.prototype.loadSnippetsFromRequireContext=function(t,e){e&&e.keys().forEach(function(n){var o=n.replace("./","").replace(/\W+(\w)/g,function(t){return t[1].toUpperCase()});t[o]=e(n)})},t}();e.BaseDocumentationSection=o},1706:function(t,e,n){function o(t){return n(a(t))}function a(t){var e=d[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var d={"./controller.js":2671,"./layout.html":2672,"./modalController.js":2673,"./modalLayout.example.html":2674,"./modalLayout.html":314,"./styles.css":2675};o.keys=function(){return Object.keys(d)},o.resolve=a,t.exports=o,o.id=1706},1707:function(t,e,n){function o(t){return n(a(t))}function a(t){var e=d[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var d={"./controller.js":2676,"./layout.html":2677,"./modalController.js":2678,"./modalLayout.html":315};o.keys=function(){return Object.keys(d)},o.resolve=a,t.exports=o,o.id=1707},1708:function(t,e,n){function o(t){return n(a(t))}function a(t){var e=d[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var d={"./controller.js":2679,"./layout.html":2680,"./modalContent.html":316,"./modalFooter.html":317,"./styles.css":2681};o.keys=function(){return Object.keys(d)},o.resolve=a,t.exports=o,o.id=1708},1709:function(t,e,n){function o(t){return n(a(t))}function a(t){var e=d[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var d={"./controller.js":2682,"./layout.html":2683,"./modalController.js":2684,"./modalLayout.example.html":2685,"./modalLayout.html":318};o.keys=function(){return Object.keys(d)},o.resolve=a,t.exports=o,o.id=1709},1879:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),a=this&&this.__decorate||function(t,e,n,o){var a,d=arguments.length,l=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(l=(d<3?a(l):d>3?a(e,n,l):a(e,n))||l);return d>3&&l&&Object.defineProperty(e,n,l),l},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var l=n(0),s=n(1517),r=n(285),i=function(t){function e(){var e=t.call(this,null,null,null,null,n(1706))||this;return e.codepen={html:e.snippets.raw.layoutHtml,htmlAttributes:{"ng-controller":"MarqueeModalDemoCtrl as vm"},htmlTemplates:[{id:"modalLayout.html",content:e.snippets.raw.modalLayoutHtml}],css:[e.snippets.raw.stylesCss],js:[e.snippets.raw.controllerJs,e.snippets.raw.modalControllerJs]},e}return o(e,t),e}(s.BaseDocumentationSection);i=a([l.Component({selector:"uxd-marquee-modal-ng1",template:n(2223),styles:[n(3069)],encapsulation:l.ViewEncapsulation.None,changeDetection:l.ChangeDetectionStrategy.OnPush}),r.DocumentationSectionComponent("ComponentsMarqueeModalNg1Component"),d("design:paramtypes",[])],i),e.ComponentsMarqueeModalNg1Component=i},1880:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),a=this&&this.__decorate||function(t,e,n,o){var a,d=arguments.length,l=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(l=(d<3?a(l):d>3?a(e,n,l):a(e,n))||l);return d>3&&l&&Object.defineProperty(e,n,l),l},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var l=n(0),s=n(1517),r=n(285),i=function(t){function e(){var e=t.call(this,null,null,null,null,n(1707))||this;return e.codepen={html:e.snippets.raw.layoutHtml,htmlAttributes:{"ng-controller":"ModalDemoCtrl as vm"},htmlTemplates:[{id:"modalLayout.html",content:e.snippets.raw.modalLayoutHtml}],js:[e.snippets.raw.controllerJs,e.snippets.raw.modalControllerJs]},e}return o(e,t),e}(s.BaseDocumentationSection);i=a([l.Component({selector:"uxd-modal-ng1",template:n(2224),changeDetection:l.ChangeDetectionStrategy.OnPush}),r.DocumentationSectionComponent("ComponentsModalNg1Component"),d("design:paramtypes",[])],i),e.ComponentsModalNg1Component=i},1881:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var a,d=arguments.length,l=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(l=(d<3?a(l):d>3?a(e,n,l):a(e,n))||l);return d>3&&l&&Object.defineProperty(e,n,l),l},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var d=n(0),l=n(19),s=n(286),r=n(150),i=n(287),c=n(1880),p=n(1883),u=n(1879),m=n(1882),h=n(289),f=n(288),b=[c.ComponentsModalNg1Component,p.ComponentsSquareModalNg1Component,u.ComponentsMarqueeModalNg1Component,m.ComponentsSideModalNg1Component],v=[{path:"**",component:i.DocumentationCategoryComponent,data:{category:r.ResolverService.resolveCategoryData(r.DocumentationPage.Components,"Modals")}}],g=function(){function t(t,e){e.registerResolver(t)}return t}();g=o([d.NgModule({imports:[h.WrappersModule,f.TabsModule,s.DocumentationComponentsModule,l.RouterModule.forChild(v)],exports:b,declarations:b,entryComponents:b}),a("design:paramtypes",[d.ComponentFactoryResolver,r.ResolverService])],g),e.ComponentsModalsModule=g},1882:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),a=this&&this.__decorate||function(t,e,n,o){var a,d=arguments.length,l=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(l=(d<3?a(l):d>3?a(e,n,l):a(e,n))||l);return d>3&&l&&Object.defineProperty(e,n,l),l},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var l=n(0),s=n(1517),r=n(285),i=function(t){function e(){var e=t.call(this,null,null,null,null,n(1708))||this;return e.codepen={html:e.snippets.raw.layoutHtml,htmlAttributes:{"ng-controller":"SideModalDemoCtrl as vm"},htmlTemplates:[{id:"modalContent.html",content:e.snippets.raw.modalContentHtml},{id:"modalFooter.html",content:e.snippets.raw.modalFooterHtml}],css:[e.snippets.raw.stylesCss],js:[e.snippets.raw.controllerJs,e.snippets.raw.modalControllerJs]},e}return o(e,t),e}(s.BaseDocumentationSection);i=a([l.Component({selector:"uxd-side-modal-ng1",template:n(2225),styles:[n(3070)],encapsulation:l.ViewEncapsulation.None,changeDetection:l.ChangeDetectionStrategy.OnPush}),r.DocumentationSectionComponent("ComponentsSideModalNg1Component"),d("design:paramtypes",[])],i),e.ComponentsSideModalNg1Component=i},1883:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),a=this&&this.__decorate||function(t,e,n,o){var a,d=arguments.length,l=d<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(l=(d<3?a(l):d>3?a(e,n,l):a(e,n))||l);return d>3&&l&&Object.defineProperty(e,n,l),l},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var l=n(0),s=n(1517),r=n(285),i=function(t){function e(){var e=t.call(this,null,null,null,null,n(1709))||this;return e.codepen={html:e.snippets.raw.layoutHtml,htmlAttributes:{"ng-controller":"SquareModalDemoCtrl as vm"},htmlTemplates:[{id:"modalLayout.html",content:e.snippets.raw.modalLayoutHtml}],js:[e.snippets.raw.controllerJs,e.snippets.raw.modalControllerJs]},e}return o(e,t),e}(s.BaseDocumentationSection);i=a([l.Component({selector:"uxd-square-modal-ng1",template:n(2226),changeDetection:l.ChangeDetectionStrategy.OnPush}),r.DocumentationSectionComponent("ComponentsSquareModalNg1Component"),d("design:paramtypes",[])],i),e.ComponentsSquareModalNg1Component=i},2094:function(t,e,n){e=t.exports=n(9)(void 0),e.push([t.i,".person-icon {\n  width: 48px;\n  height: 48px;\n  background-image: url("+n(300)+");\n  background-size: 100% 100%;\n}\n.case-modal {\n  height: 520px;\n}\n.case-modal .case-label {\n  font-size: 18px;\n}\n.case-logo {\n  color: #85D2BE;\n}\n",""])},2095:function(t,e,n){e=t.exports=n(9)(void 0),e.push([t.i,".inset-scroll {\n  overflow: auto;\n  height: 100%;\n}\n",""])},2223:function(t,e){t.exports='<uxd-marquee-modal-wrapper></uxd-marquee-modal-wrapper>\n\n<hr>\n\n<p>A marquee modal consists of two sections. The first is a panel on the left side and the second is the main content area to the right.</p>\n\n<h4>Side Panel</h4>\n\n<p>A side panel can be added using a <code>div.side-panel</code>. It can have an icon or image which should be contained in a <code>div.marquee-logo</code>.\nAny text to be displayed should be contained within a <code>div.marquee-info-panel</code>. If there is header text use an <code>h1.header</code>. For regular text use a <code>p.description</code>. \nOn very small displays the side panel may be hidden to provide sufficient room for the primary modal content.</p>\n\n<h4>Main Panel</h4>\n\n<p>The main panel can be added using a <code>div.main-panel</code>. It can have a header using a <code>div.marquee-header</code> with a child <code>h1.marquee-title</code> that will contain the header text.\nThe primary content of the modal should be contained within a <code>div.marquee-body</code>.\nTo add a footer to the modal add a <code>div.marquee-footer</code>. Add any modal buttons to this footer element.\nThe height of the modal is set based on the height of the contents of the main panel.</p>\n\n<tabset>\n    <tab heading="HTML">\n        <uxd-snippet [content]="snippets.compiled.modalLayoutHtml" language="html"></uxd-snippet>\n    </tab>\n    <tab heading="JavaScript">\n        <uxd-snippet [content]="snippets.compiled.controllerJs + snippets.compiled.modalControllerJs" language="javascript"></uxd-snippet>\n    </tab>\n    <tab heading="CSS">\n        <uxd-snippet [content]="snippets.compiled.stylesCss" language="css"></uxd-snippet>\n    </tab>\n</tabset>\n\n<p>The marquee modal can be initialized using a controller which internally uses the <code>$modal</code> service. \nThe <code>$modal</code> service provides an open method with the following options:</p>\n\n<div class="demo-attributes table-responsive">\n<table class="table">\n  <tbody><tr>\n    <th>Name</th>\n    <th>Type</th>\n    <th>Description</th>\n    <th>Optional</th>\n  </tr>\n  <tr>\n    <td class="attribute">animation</td>\n    <td>boolean</td>\n    <td>Set to false to disable animation on new modal/backdrop. If we don\'t specify the animation option by default animation is enabled</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">templateUrl</td>\n    <td>string</td>\n    <td>Path to the modal template.</td>\n    <td>false</td>\n  </tr>\n  <tr>\n    <td class="attribute">controller</td>\n    <td>string</td>\n    <td>Controller for the modal instance</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">controllerAs</td>\n    <td>string</td>\n    <td>Alternative to controller-as syntax. Name of property controller will be instantiated into.</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">keyboard</td>\n    <td>boolean</td>\n    <td>Indicates whether a dialog should close on \'Esc\'. Defaults to \'true\'.</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">size</td>\n    <td>string</td>\n    <td>Will set the width of the modal. Available options are \'sm\', \'md\' or \'lg\'. Default is \'md\'.</td>\n    <td>true</td>\n  </tr>\n</tbody></table>\n</div>\n\n<p>The open method returns a modal instance with the following options:</p>\n\n<div class="demo-attributes table-responsive">\n<table class="table">\n  <tbody><tr>\n    <th>Name</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td class="attribute">close(result)</td>\n    <td>Closes the modal, passing the result.</td>\n  </tr>\n  <tr>\n    <td class="attribute">dismiss(reason)</td>\n    <td>Dismisses the modal, with a reason.</td>\n  </tr>\n  <tr>\n    <td class="attribute">result</td>\n    <td>A promise that is resolved when the modal is closed and rejected when it is dismissed.</td>\n  </tr>\n  <tr>\n    <td class="attribute">opened</td>\n    <td>A promise that is resolved when a modal gets opened after downloading content\'s templates and resolving all variables.</td>\n  </tr>\n</tbody></table>\n</div>\n\n<p>The below HTML is used in the above example to launch the modal.</p>\n\n<uxd-snippet [content]="snippets.compiled.layoutHtml" language="html"></uxd-snippet>\n'},2224:function(t,e){t.exports='<uxd-modal-wrapper></uxd-modal-wrapper>\n\n<hr>\n\n<p>The title of the Modal window is contained in the <code>modal-header</code> and <code>modal-title</code> classes. \nA dark modal header can be provided by using the <code>modal-header-dark</code> class along with the <code>modal-header</code> class and adding the <code>modal-window-dark-header</code> \nclass as the value to the <code>windowClass</code> attribute of the modal.</p>\n\n<p>The content and the buttons (footer) of the modal window are contained in the <code>modal-body</code> and <code>modal-footer</code> classes respectively.</p>\n\n<p>The modal content height can be set in the <code>modal-content</code> class.</p>\n\n<p>Modal View can be initialized using a controller which internally uses the <code>$modal</code> service.</p>\n\n<p>The <code>$modal</code> service provides an open method with the following options:</p>\n\n<p><br></p>\n<div class="demo-attributes table-responsive">\n<table class="table">\n  <tbody><tr>\n    <th>Name</th>\n    <th>Type</th>\n    <th>Description</th>\n    <th>Optional</th>\n  </tr>\n  <tr>\n    <td class="attribute">animation</td>\n    <td>boolean</td>\n    <td>Set to false to disable animation on new modal/backdrop. If we don\'t specify the animation option by default animation is enabled</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">template</td>\n    <td>string</td>\n    <td>Inline template representing modal content.</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">templateUrl</td>\n    <td>string</td>\n    <td>Path to the modal template.</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">controller</td>\n    <td>string</td>\n    <td>Controller for the modal instance</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">controllerAs</td>\n    <td>string</td>\n    <td>Alternative to controller-as syntax. Name of property controller will be instantiated into.</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">keyboard</td>\n    <td>boolean</td>\n    <td>Indicates whether a dialog should close on \'Esc\'. Defaults to \'true\'.</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">size</td>\n    <td>string</td>\n    <td>Will set the width of the modal. Available options are \'sm\', \'md\' or \'lg\'. Default is \'md\'.</td>\n    <td>true</td>\n  </tr>\n</tbody></table>\n</div>\n\n<tabset>\n    <tab heading="HTML">\n        <uxd-snippet [content]="snippets.compiled.modalLayoutHtml" language="html"></uxd-snippet>\n    </tab>\n    <tab heading="JavaScript">\n        <uxd-snippet [content]="snippets.compiled.controllerJs" language="javascript"></uxd-snippet>\n    </tab>\n</tabset>\n\n<div class="demo-attributes table-responsive">\n<table class="table">\n  <tbody><tr>\n    <th>Name</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td class="attribute">close(result)</td>\n    <td>Closes the modal, passing the result.</td>\n  </tr>\n  <tr>\n    <td class="attribute">dismiss(reason)</td>\n    <td>Dismisses the modal, with a reason.</td>\n  </tr>\n  <tr>\n    <td class="attribute">result</td>\n    <td>A promise that is resolved when the modal is closed and rejected when it is dismissed.</td>\n  </tr>\n  <tr>\n    <td class="attribute">opened</td>\n    <td>A promise that is resolved when a modal gets opened after downloading content\'s templates and resolving all variables.</td>\n  </tr>\n</tbody></table>\n</div>\n\n<p>The OK and Cancel buttons in the modal view call these methods respectively.</p>\n\n<uxd-snippet [content]="snippets.compiled.modalControllerJs" language="javascript"></uxd-snippet>\n\n<p>The below HTML is used in the above example to launch the modal.</p>\n\n<uxd-snippet [content]="snippets.compiled.layoutHtml" language="html"></uxd-snippet>'},2225:function(t,e){t.exports='<uxd-side-modal-wrapper></uxd-side-modal-wrapper>\n\n<hr>\n\n<p>The side modal view is defined by the <code>side-modal-window</code> directive. The input value of the directive is an <code>object</code>.\n  It is defined by the <code>vm.sideModalOptions</code> object which in turn defines the modal options in the example provided.</p>\n\n<tabset>\n  <tab heading="HTML">\n    <uxd-snippet [content]="snippets.compiled.layoutHtml" language="html"></uxd-snippet>\n  </tab>\n  <tab heading="JavaScript">\n    <uxd-snippet [content]="snippets.compiled.controllerJs" language="javascript"></uxd-snippet>\n  </tab>\n  <tab heading="CSS">\n    <uxd-snippet [content]="snippets.compiled.stylesCss" language="css"></uxd-snippet>\n  </tab>\n</tabset>\n\n<p>The following defining the modal are set in the <code>vm.sideModalOptions</code>.</p>\n<div class="demo-attributes table-responsive">\n  <table class="table m-t">\n    <tbody>\n      <tr>\n        <th>Name</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td class="attribute">title</td>\n        <td>Defines the Header title of the modal view.</td>\n      </tr>\n      <tr>\n        <td class="attribute">main</td>\n        <td>Provides a path to a template representing modal content.</td>\n      </tr>\n      <tr>\n        <td class="attribute">footer</td>\n        <td>Provides a path to a template representing modal footer content.</td>\n      </tr>\n      <tr>\n        <td class="attribute">modalColumns</td>\n        <td>Classes defining the number of columns as per the grid system for a responsive modal.</td>\n      </tr>\n      <tr>\n        <td class="attribute">affixHeader</td>\n        <td>Boolean, defines whether header should be latched.</td>\n      </tr>\n      <tr>\n        <td class="attribute">animate</td>\n        <td>Boolean, defines whether the modal should open and close with an animation.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p>The modal can be closed or dismissed using the <code>closeModal()</code> and <code>dismissModal()</code> methods respectively.</p>\n\n<uxd-snippet [content]="snippets.compiled.modalFooterHtml" language="html"></uxd-snippet>'},2226:function(t,e){t.exports='<uxd-square-modal-wrapper></uxd-square-modal-wrapper>\n\n<hr>\n\n<p>Square corner modal is contained in the <code>square-modal-window</code> class - additional class added to a modal window template using the controller.</p>\n\n<p>The title of the Modal window is contained in the <code>modal-header</code> and <code>modal-title</code> classes. \nA dark modal header can be provided by using the <code>modal-header-dark</code> class along with the <code>modal-header</code> class.</p>\n\n<p>The content and the buttons (footer) of the modal window are contained in the <code>modal-body</code> and <code>modal-footer</code> classes respectively.</p>\n\n<p>The modal content height can be set in the <code>modal-content</code> class.</p>\n\n<p>This modal has a fixed circular dismiss button which is contained in the <code>btn-close</code> class defined inside a window template with a <code>square-modal-window</code> class.</p>\n\n<p>Modal View can be initialized using a controller which internally uses the <code>$modal</code> service.</p>\n\n<p>The <code>$modal</code> service provides an <code>open</code> method with the following options:</p>\n<div class="demo-attributes table-responsive">\n<table class="table">\n  <tbody><tr>\n    <th>Name</th>\n    <th>Type</th>\n    <th>Description</th>\n    <th>Optional</th>\n  </tr>\n  <tr>\n    <td class="attribute">animation</td>\n    <td>boolean</td>\n    <td>Set to false to disable animation on new modal/backdrop. If we don\'t specify the animation option by default animation is enabled</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">template</td>\n    <td>string</td>\n    <td>Inline template representing modal content.</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">templateUrl</td>\n    <td>string</td>\n    <td>Path to the modal template.</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">controller</td>\n    <td>string</td>\n    <td>Controller for the modal instance</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">controllerAs</td>\n    <td>string</td>\n    <td>Alternative to controller-as syntax. Name of property controller will be instantiated into.</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">keyboard</td>\n    <td>boolean</td>\n    <td>Indicates whether a dialog should close on \'Esc\'. Defaults to \'true\'.</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">size</td>\n    <td>string</td>\n    <td>Will set the width of the modal. Available options are \'sm\', \'md\' or \'lg\'. Default is \'md\'.</td>\n    <td>true</td>\n  </tr>\n  <tr>\n    <td class="attribute">windowClass</td>\n    <td>string</td>\n    <td>Additional class added to a modal window template. For square modal, it is the <code>square-modal-window</code> class.</td>\n    <td>true</td>\n  </tr>\n</tbody></table>\n</div>\n\n<tabset>\n    <tab heading="HTML">\n        <uxd-snippet [content]="snippets.compiled.modalLayoutExampleHtml" language="html"></uxd-snippet>\n    </tab>\n    <tab heading="JavaScript">\n        <uxd-snippet [content]="snippets.compiled.controllerJs" language="javascript"></uxd-snippet>\n    </tab>\n</tabset>\n\n<p>The <code>open</code> method returns a modal instance with the following options:</p>\n<div class="demo-attributes table-responsive">\n<table class="table">\n  <tbody><tr>\n    <th>Name</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td class="attribute">close(result)</td>\n    <td>Closes the modal, passing the result.</td>\n  </tr>\n  <tr>\n    <td class="attribute">dismiss(reason)</td>\n    <td>Dismisses the modal, with a reason.</td>\n  </tr>\n  <tr>\n    <td class="attribute">result</td>\n    <td>A promise that is resolved when the modal is closed and rejected when it is dismissed.</td>\n  </tr>\n  <tr>\n    <td class="attribute">opened</td>\n    <td>A promise that is resolved when a modal gets opened after downloading content\'s templates and resolving all variables.</td>\n  </tr>\n</tbody></table>\n</div>\n<p>The OK and Cancel buttons in the modal view call these methods respectively.</p>\n\n<uxd-snippet [content]="snippets.compiled.modalControllerJs" language="javascript"></uxd-snippet>\n\n<p>The below HTML is used in the above example to launch the modal.</p>\n\n<uxd-snippet [content]="snippets.compiled.layoutHtml" language="html"></uxd-snippet>'},2671:function(t,e){t.exports="angular.module('app').controller('MarqueeModalDemoCtrl', MarqueeModalDemoCtrl);\n\nMarqueeModalDemoCtrl.$inject = ['$modal'];\n\nfunction MarqueeModalDemoCtrl($modal) {\n    var vm = this;\n\n    vm.openModal = function () {\n\n        var modalInstance = $modal.open({\n            animation: false,\n            templateUrl: 'modalLayout.html',\n            controller: 'MarqueeModalDemoModalCtrl',\n            controllerAs: 'vm',\n            keyboard: 'true',\n            size: 'lg',\n            windowClass: 'marquee-modal-window'\n        });\n\n        modalInstance.result.then(function () {\n            //result passed into closed function;\n        });\n    };\n}\n\n"},2672:function(t,e){t.exports='<button type="button" class="btn button-primary" ng-click="vm.openModal()">\n    <span class="hpe-icon hpe-deployment" aria-hidden="true"></span>&nbsp;Launch Marquee Modal\n</button>'},2673:function(t,e){t.exports="angular.module('app').controller('MarqueeModalDemoModalCtrl', MarqueeModalDemoModalCtrl);\n\nMarqueeModalDemoModalCtrl.$inject = ['$modalInstance'];\n\nfunction MarqueeModalDemoModalCtrl($modalInstance) {\n    var vm = this;\n\n    // date picker properties\n    vm.date = new Date();\n    vm.opened = false;\n\n    vm.open = function ($event) {\n        $event.preventDefault();\n        $event.stopPropagation();\n        vm.opened = true;\n    };\n\n    // modal properties\n    vm.ok = function () {\n        $modalInstance.close(\"true\");\n    };\n\n    vm.cancel = function () {\n        $modalInstance.dismiss(\"cancel\");\n    };\n}\n"},2674:function(t,e){t.exports='<div class="modal-header">\n    <div class="dismiss">\n        <button class="btn btn-icon button-dark btn-circular btn-close" type="button" aria-label="Close" ng-click="vm.cancel()">\n            <span class="hpe-icon hpe-close" aria-hidden="true"></span>\n        </button>\n    </div>\n    <h4 class="modal-title" id="myModalLabel">UX Aspects Modal View</h4>\n</div>\n<div class="modal-body">\n    <h3><center>AGREEMENT</center></h3>\n    <p>\n        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur\n        et. Donec sed odio dui.</p>\n    ...\n</div>\n<div class="modal-footer">\n    <button type="button" class="btn btn-w-m button-accent" ng-click="vm.ok()">ACCEPT</button>\n</div>\n'},2675:function(t,e){t.exports=".person-icon {\n    width: 48px;\n    height: 48px;\n    background-image: url('https://uxaspects.github.io/UXAspects/assets/img/IconUser.png');\n    background-size: 100% 100%;\n}\n          \n.case-modal {\n    height: 520px;\n}\n\n.case-modal .case-label {\n    font-size: 18px;\n}\n\n.case-logo {\n    color: #85D2BE;\n}"},2676:function(t,e){t.exports="angular.module('app').controller('ModalDemoCtrl', ModalDemoCtrl);\n\nModalDemoCtrl.$inject = ['$modal'];\n\nfunction ModalDemoCtrl($modal) {\n    var vm = this;\n\n    vm.openModal1 = function () {\n        var modalInstance = $modal.open({\n            templateUrl: 'modalLayout.html',\n            controller: 'ModalDemoModalCtrl',\n            controllerAs: 'vm',\n            animation: false,\n            keyboard: 'true'\n            // Add this class attribute for dark modal header\n            // windowClass: 'modal-window-dark-header'\n        });\n        modalInstance.result.then(function () {\n            // result passed into closed function;\n        });\n    };\n}\n"},2677:function(t,e){t.exports='<button type="button" class="btn button-primary" ng-click="vm.openModal1()">\n  <span class="hpe-icon hpe-deployment" aria-hidden="true"></span>&nbsp;Launch Modal View\n</button>'},2678:function(t,e){t.exports="angular.module('app').controller('ModalDemoModalCtrl', ModalDemoModalCtrl);\n\nModalDemoModalCtrl.$inject = ['$modalInstance'];\n\nfunction ModalDemoModalCtrl($modalInstance) {\n    var vm = this;\n\n    vm.ok = function () {\n        $modalInstance.close('true');\n    };\n\n    vm.cancel = function () {\n        $modalInstance.dismiss('cancel');\n    };\n}\n"},2679:function(t,e){t.exports="angular.module('app').controller('SideModalDemoCtrl', SideModalDemoCtrl);\n\nfunction SideModalDemoCtrl() {\n    var vm = this;\n\n    vm.sideModalOptions = {\n        title: \"Site Detail - UX Aspects\",\n        main: \"modalContent.html\",\n        footer: \"modalFooter.html\",\n        modalColumns: 'col-lg-6 col-md-7 col-sm-9 col-xs-10',\n        affixHeader: true\n    };\n}\n"},2680:function(t,e){t.exports='<button type="button" side-modal-window="vm.sideModalOptions" class="btn button-primary">\n    <span class="hpe-icon hpe-deployment" aria-hidden="true"></span>&nbsp;Launch Side Modal\n</button>'},2681:function(t,e){t.exports=".inset-scroll {\n    overflow: auto;\n    height: 100%;\n}"},2682:function(t,e){t.exports="angular.module('app').controller('SquareModalDemoCtrl', SquareModalDemoCtrl);\n\nSquareModalDemoCtrl.$inject = ['$modal'];\n\nfunction SquareModalDemoCtrl($modal) {\n    var vm = this;\n\n    vm.openModal2 = function () {\n        var modalInstance = $modal.open({\n            templateUrl: 'modalLayout.html',\n            controller: 'SquareModalDemoModalCtrl',\n            controllerAs: 'vm',\n            animation: false,\n            keyboard: 'true',\n            windowClass: 'square-modal-window'\n        });\n        modalInstance.result.then(function () {\n            //result passed into closed function;\n        });\n    };\n}\n"},2683:function(t,e){t.exports='<button type="button" class="btn button-accent" ng-click="vm.openModal2()">\n    <span class="hpe-icon hpe-announcement" aria-hidden="true"></span>&nbsp;Launch Square corner Modal\n</button>'},2684:function(t,e){t.exports="angular.module('app').controller('SquareModalDemoModalCtrl', SquareModalDemoModalCtrl);\n\nSquareModalDemoModalCtrl.$inject = ['$modalInstance'];\n\nfunction SquareModalDemoModalCtrl($modalInstance) {\n    var vm = this;\n\n    vm.ok = function () {\n        $modalInstance.close('true');\n    };\n\n    vm.cancel = function () {\n        $modalInstance.dismiss('cancel');\n    };\n}\n"},2685:function(t,e){t.exports='<div class="modal-header">\n    <div class="dismiss">\n        <button class="btn btn-icon button-dark btn-circular btn-close" type="button" aria-label="Close" ng-click="vm.cancel()">\n            <span class="hpe-icon hpe-close" aria-hidden="true"></span>\n        </button>\n    </div>\n    <h4 class="modal-title" id="myModalLabel">UX Aspects Modal View</h4>\n</div>\n<div class="modal-body">\n    <h3><center>AGREEMENT</center></h3>\n    <p>\n        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur\n        et. Donec sed odio dui.</p>\n    ...\n</div>\n<div class="modal-footer">\n    <button type="button" class="btn btn-w-m button-accent" ng-click="vm.ok()">ACCEPT</button>\n</div>\n'},3069:function(t,e,n){var o=n(2094);t.exports="string"==typeof o?o:o.toString()},3070:function(t,e,n){var o=n(2095);t.exports="string"==typeof o?o:o.toString()}});