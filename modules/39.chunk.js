webpackJsonp([39],{1617:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=function(){function n(n){var s=this;this.snippets={compiled:{},raw:{}},n.keys().forEach(function(a){var t=a.replace("./","").replace(/\W+(\w)/g,function(n){return n[1].toUpperCase()}),e=n(a);e.snippet&&(s.snippets.compiled[t]=e.snippet),e.example&&(s.snippets.raw[t]=e.example)})}return n}();s.BaseDocumentationSection=t},3090:function(n,s,a){"use strict";var t=this&&this.__decorate||function(n,s,a,t){var e,p=arguments.length,o=p<3?s:null===t?t=Object.getOwnPropertyDescriptor(s,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,s,a,t);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(o=(p<3?e(o):p>3?e(s,a,o):e(s,a))||o);return p>3&&o&&Object.defineProperty(s,a,o),o},e=this&&this.__metadata||function(n,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,s)};Object.defineProperty(s,"__esModule",{value:!0});var p=a(0),o=a(23),c=a(320),i=a(171),r=a(321),l=a(3091),u=a(3098),d=a(3103),k=[d.CssActivityIndicatorComponent,u.CssActivityIndicatorAlternativeComponent,l.CssMiniActivityIndicatorComponent],m=[{path:"**",component:r.DocumentationCategoryComponent,data:{category:i.ResolverService.resolveCategoryData(i.DocumentationPage.Css,"Progress")}}],v=function(){function n(n,s){s.registerResolver(n)}return n}();v=t([p.NgModule({imports:[c.DocumentationComponentsModule,o.RouterModule.forChild(m)],exports:k,declarations:k,entryComponents:k}),e("design:paramtypes",[p.ComponentFactoryResolver,i.ResolverService])],v),s.CssProgressModule=v},3091:function(n,s,a){"use strict";var t=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var a in s)s.hasOwnProperty(a)&&(n[a]=s[a])};return function(s,a){function t(){this.constructor=s}n(s,a),s.prototype=null===a?Object.create(a):(t.prototype=a.prototype,new t)}}(),e=this&&this.__decorate||function(n,s,a,t){var e,p=arguments.length,o=p<3?s:null===t?t=Object.getOwnPropertyDescriptor(s,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,s,a,t);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(o=(p<3?e(o):p>3?e(s,a,o):e(s,a))||o);return p>3&&o&&Object.defineProperty(s,a,o),o},p=this&&this.__metadata||function(n,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,s)};Object.defineProperty(s,"__esModule",{value:!0});var o=a(0),c=a(319),i=a(1617),r=function(n){function s(){var s=n.call(this,a(3092))||this;return s.codepen={html:s.snippets.raw.sample1Html+" "+s.snippets.raw.sample2Html+" "+s.snippets.raw.sample3Html+" "+s.snippets.raw.sample4Html},s}return t(s,n),s}(i.BaseDocumentationSection);r=e([o.Component({selector:"uxd-css-progress-mini-activity-indicator",template:a(3097)}),c.DocumentationSectionComponent("CssMiniActivityIndicatorComponent"),p("design:paramtypes",[])],r),s.CssMiniActivityIndicatorComponent=r},3092:function(n,s,a){function t(n){return a(e(n))}function e(n){var s=p[n];if(!(s+1))throw new Error("Cannot find module '"+n+"'.");return s}var p={"./sample1.html":3093,"./sample2.html":3094,"./sample3.html":3095,"./sample4.html":3096};t.keys=function(){return Object.keys(p)},t.resolve=e,n.exports=t,t.id=3092},3093:function(n,s){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-l-md m-r-xl spinner spinner-accent spinner-bounce-middle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-l-md spinner spinner-primary spinner-bounce-middle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div class="row">\r\n    <div class="m-l-md m-r-xl spinner spinner-accent spinner-bounce-middle"></div>\r\n    <div class="m-l-md spinner spinner-primary spinner-bounce-middle"></div>\r\n</div>'}},3094:function(n,s){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-l-md m-r-xl spinner spinner-accent spinner-bounce-bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-l-md spinner spinner-primary spinner-bounce-bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div class="row">\r\n    <div class="m-l-md m-r-xl spinner spinner-accent spinner-bounce-bottom"></div>\r\n    <div class="m-l-md spinner spinner-primary spinner-bounce-bottom"></div>\r\n</div>'}},3095:function(n,s){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-l-md m-r-xl spinner spinner-accent spinner-bounce-top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-l-md spinner spinner-primary spinner-bounce-top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div class="row">\r\n    <div class="m-l-md m-r-xl spinner spinner-accent spinner-bounce-top"></div>\r\n    <div class="m-l-md spinner spinner-primary spinner-bounce-top"></div>\r\n</div>'}},3096:function(n,s){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-l-md m-r-xl spinner spinner-accent spinner-blink<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-l-md spinner spinner-primary spinner-blink<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div class="row">\r\n    <div class="m-l-md m-r-xl spinner spinner-accent spinner-blink"></div>\r\n    <div class="m-l-md spinner spinner-primary spinner-blink"></div>\r\n</div>'}},3097:function(n,s){n.exports='<div class="row">\r\n <div class="m-l-md m-r-xl spinner spinner-accent spinner-bounce-middle"></div>\r\n <div class="m-l-md spinner spinner-primary spinner-bounce-middle"></div>\r\n</div>\r\n\r\n<hr>\r\n\r\n<p>Mini activity indicator - Bounce Middle is contained in the <code>spinner</code> and <code>spinner-bounce-middle</code> class. The default activity indicator uses the <code>accent</code> color, contained in the <code>spinner-accent</code> class.</p>\r\n\r\n<p>An alternative activity indicator using the <code>primary</code> color contained in the <code>spinner-primary</code> class has also been supplied.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sample1Html"></uxd-snippet>\r\n\r\n<hr>\r\n\r\n<div class="row">\r\n <div class="m-l-md m-r-xl spinner spinner-accent spinner-bounce-bottom"></div>\r\n <div class="m-l-md spinner spinner-primary spinner-bounce-bottom"></div>\r\n</div>\r\n\r\n<hr>\r\n\r\n<p>Mini activity indicator - Bounce Bottom is contained in the <code>spinner</code> and <code>spinner-bounce-bottom</code> class. The default activity indicator uses the <code>accent</code> color, contained in the <code>spinner-accent</code> class.</p>\r\n\r\n<p>An alternative activity indicator using the <code>primary</code> color contained in the <code>spinner-primary</code> class has also been supplied.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sample2Html"></uxd-snippet>\r\n\r\n<hr>\r\n\r\n<div class="row">\r\n <div class="m-l-md m-r-xl spinner spinner-accent spinner-bounce-top"></div>\r\n <div class="m-l-md spinner spinner-primary spinner-bounce-top"></div>\r\n</div>\r\n\r\n<hr>\r\n\r\n<p>Mini activity indicator - Bounce Top is contained in the <code>spinner</code> and <code>spinner-bounce-top</code> class. The default activity indicator uses the <code>accent</code> color, contained in the <code>spinner-accent</code> class.</p>\r\n\r\n<p>An alternative activity indicator using the <code>primary</code> color contained in the <code>spinner-primary</code> class has also been supplied.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sample3Html"></uxd-snippet>\r\n\r\n<hr>\r\n\r\n<div class="row">\r\n <div class="m-l-md m-r-xl spinner spinner-accent spinner-blink"></div>\r\n <div class="m-l-md spinner spinner-primary spinner-blink"></div>\r\n</div>\r\n\r\n<hr>\r\n\r\n<p>Mini activity indicator - Blink is contained in the <code>spinner</code> and <code>spinner-blink</code> class. The default activity indicator uses the <code>accent</code> color, contained in the <code>spinner-accent</code> class.</p>\r\n\r\n<p>An alternative activity indicator using the <code>primary</code> color contained in the <code>spinner-primary</code> class has also been supplied.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sample4Html"></uxd-snippet>'},3098:function(n,s,a){"use strict";var t=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var a in s)s.hasOwnProperty(a)&&(n[a]=s[a])};return function(s,a){function t(){this.constructor=s}n(s,a),s.prototype=null===a?Object.create(a):(t.prototype=a.prototype,new t)}}(),e=this&&this.__decorate||function(n,s,a,t){var e,p=arguments.length,o=p<3?s:null===t?t=Object.getOwnPropertyDescriptor(s,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,s,a,t);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(o=(p<3?e(o):p>3?e(s,a,o):e(s,a))||o);return p>3&&o&&Object.defineProperty(s,a,o),o},p=this&&this.__metadata||function(n,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,s)};Object.defineProperty(s,"__esModule",{value:!0});var o=a(0),c=a(319),i=a(1617),r=function(n){function s(){var s=n.call(this,a(3099))||this;return s.codepen={html:s.snippets.raw.sampleHtml},s}return t(s,n),s}(i.BaseDocumentationSection);r=e([o.Component({selector:"uxd-css-progress-activity-indicator-alternative",template:a(3101)}),c.DocumentationSectionComponent("CssActivityIndicatorAlternativeComponent"),p("design:paramtypes",[])],r),s.CssActivityIndicatorAlternativeComponent=r},3099:function(n,s,a){function t(n){return a(e(n))}function e(n){var s=p[n];if(!(s+1))throw new Error("Cannot find module '"+n+"'.");return s}var p={"./sample.html":3100};t.keys=function(){return Object.keys(p)},t.resolve=e,n.exports=t,t.id=3099},3100:function(n,s){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indicator-alt-sm<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://uxaspects.github.io/UXAspects/assets/img/progress-small.gif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indicator-alt-sm<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://uxaspects.github.io/UXAspects/assets/img/progress-primary-small.gif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indicator-alt<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://uxaspects.github.io/UXAspects/assets/img/progress.gif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indicator-alt<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://uxaspects.github.io/UXAspects/assets/img/progress-primary.gif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indicator-alt-lg<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://uxaspects.github.io/UXAspects/assets/img/progress-large.gif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indicator-alt-lg<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://uxaspects.github.io/UXAspects/assets/img/progress-primary-large.gif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div>\r\n    <img class="indicator-alt-sm" src="https://uxaspects.github.io/UXAspects/assets/img/progress-small.gif">\r\n    <img class="indicator-alt-sm" src="https://uxaspects.github.io/UXAspects/assets/img/progress-primary-small.gif">\r\n</div>\r\n<div>\r\n    <img class="indicator-alt" src="https://uxaspects.github.io/UXAspects/assets/img/progress.gif">\r\n    <img class="indicator-alt" src="https://uxaspects.github.io/UXAspects/assets/img/progress-primary.gif">\r\n</div>\r\n<div>\r\n    <img class="indicator-alt-lg" src="https://uxaspects.github.io/UXAspects/assets/img/progress-large.gif">\r\n    <img class="indicator-alt-lg" src="https://uxaspects.github.io/UXAspects/assets/img/progress-primary-large.gif">\r\n</div>'}},3101:function(n,s,a){n.exports='<img class="indicator-alt" src="'+a(3102)+'">\r\n\r\n<hr>\r\n\r\n<p>This has been offered as an alternative to the CSS only activity indicator.</p>\r\n\r\n<p>The <code>img</code> tag is used to display the activity indicator. \r\nThe default activity indicator is in the accent color, and is intended for use on a light background.</p>\r\n\r\n<p>An alternative activity indicator using the primary color has also been supplied, and is intended for use on a dark background.</p>\r\n\r\n<p>The activity indicators are supplied as <code>.svg</code> and <code>.gif</code> images.</p>\r\n\r\n<p>There are large and small sizes available, which can be used in case of browser compatibility issues with the default indicators.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sampleHtml"></uxd-snippet>\r\n\r\n<blockquote>\r\n  <p>Note: Use only <code>.gif</code> for Internet Explorer. Other browsers can use <code>.svg</code> or <code>.gif</code>.</p>\r\n</blockquote>'},3102:function(n,s,a){n.exports=a.p+"assets/progress.gif"},3103:function(n,s,a){"use strict";var t=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var a in s)s.hasOwnProperty(a)&&(n[a]=s[a])};return function(s,a){function t(){this.constructor=s}n(s,a),s.prototype=null===a?Object.create(a):(t.prototype=a.prototype,new t)}}(),e=this&&this.__decorate||function(n,s,a,t){var e,p=arguments.length,o=p<3?s:null===t?t=Object.getOwnPropertyDescriptor(s,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,s,a,t);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(o=(p<3?e(o):p>3?e(s,a,o):e(s,a))||o);return p>3&&o&&Object.defineProperty(s,a,o),o},p=this&&this.__metadata||function(n,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,s)};Object.defineProperty(s,"__esModule",{value:!0});var o=a(0),c=a(319),i=a(1617),r=function(n){function s(){var s=n.call(this,a(3104))||this;return s.codepen={html:s.snippets.raw.sampleHtml},s}return t(s,n),s}(i.BaseDocumentationSection);r=e([o.Component({selector:"uxd-css-progress-activity-indicator",template:a(3106)}),c.DocumentationSectionComponent("CssActivityIndicatorComponent"),p("design:paramtypes",[])],r),s.CssActivityIndicatorComponent=r},3104:function(n,s,a){function t(n){return a(e(n))}function e(n){var s=p[n];if(!(s+1))throw new Error("Cannot find module '"+n+"'.");return s}var p={"./sample.html":3105};t.keys=function(){return Object.keys(p)},t.resolve=e,n.exports=t,t.id=3104},3105:function(n,s){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indicator<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indicator-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indicator-large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\r\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>indicator-primary-large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div class="indicator"></div>\r\n<div class="indicator-primary"></div>\r\n<div class="indicator-large"></div>\r\n<div class="indicator-primary-large"></div>'}},3106:function(n,s){n.exports='<div class="indicator"></div>\r\n\r\n<hr>\r\n\r\n<p>The <code>div</code> tag is used to display the activity indicator. \r\nThe default activity indicator is accent color, and is intended for use on a light background.</p>\r\n\r\n<p>An alternative activity indicator using the primary color has also been supplied, and is intended for use on a dark background.</p>\r\n\r\n<p>An alternative large indicator has also been supplied for both colors.</p>\r\n\r\n<p>The activity indicator is supplied as an <code>.indicator</code> css class.</p>\r\n\r\n<uxd-snippet [content]="snippets.compiled.sampleHtml"></uxd-snippet>'}});