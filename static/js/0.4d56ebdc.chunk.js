(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[0,18],{37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),i=n(4),u=n(16),l=n(6),o=n(12),s=n(19),m={company:function(e,t){var n=t.company;return!Object.keys(e).length||e[n]},price:function(e,t){var n=e.min,r=void 0===n?0:n,a=e.max,c=t.price;return+c>=+r&&+c<=(+a||1/0)},search:function(e,t){var n=e.query,r=t.title;return!n||r.includes(n)}},d=n(28),f=function(e){return e.filters},v=Object(s.a)(d.e,f,(function(e,t){return e.filter((function(e){return function(e,t){return Object.entries(e).reduce((function(e,n){var r,a=Object(u.a)(n,2),c=a[0],i=a[1];return e&&(null===(r=m[c])||void 0===r?void 0:r.call(m,i,t))}),!0)}(t,e)}))})),p=Object(s.a)(v,(function(e){return e.length?e.reduce((function(e,t){var n=e.min,r=e.max,a=t.price;return{min:a<n?a:n,max:a>r?a:r}}),{min:1/0,max:0}):{min:0,max:0}}));var g=function(e,t){var n;return function(){for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];n&&clearTimeout(n);var i=this;n=setTimeout((function(){n=null,e.apply(i,a)}),t)}};var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e.reduce((function(e,n){return e[n]=t,e}),{})};n(86);var E=function(e){var t=e.search,n=e.setFilter;return a.a.createElement("fieldset",{className:"SearchFilter"},a.a.createElement("legend",null,"Search"),a.a.createElement("input",{type:"search",name:"search",id:"search",placeholder:"Search...",inputMode:"search",value:(null===t||void 0===t?void 0:t.query)||"",onChange:function(e){var t=e.target.value;return n("search",{query:t})}}))};n(87);var h=Object(l.b)((function(e){return{availableRange:p(e)}}))((function(e){var t=e.availableRange,n=e.price,r=e.setFilter,u=function(e){return a.a.createElement("input",{type:"search",inputMode:"numeric","aria-label":"price-".concat(e),placeholder:(null===t||void 0===t?void 0:t[e])||"",title:"".concat(e," price"),value:(null===n||void 0===n?void 0:n[e])||"",onChange:function(t){var a=t.target.value;Number.isNaN(Number(a))||r("price",Object(i.a)(Object(i.a)({},n),{},Object(c.a)({},e,Number(a))))}})};return a.a.createElement("fieldset",{className:"PriceFilter"},a.a.createElement("legend",null,"Price"),a.a.createElement("div",null,u("min")),a.a.createElement("div",{className:"price-range-delimiter"}," - "),a.a.createElement("div",null,u("max")))})),O=n(24),P=n(46);var j=function(e){var t=e.label,n=e.isChecked,r=void 0!==n&&n,c=e.isDisabled,i=void 0!==c&&c,u=e.toggle;return a.a.createElement("div",null,a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",name:t,checked:r,disabled:i,onChange:function(){return u(t)}}),t))};n(88);var y=Object(l.b)((function(e){return{companies:Object(d.a)(e)}}))((function(e){var t=e.companies,n=e.company,r=void 0===n?{}:n,u=e.setFilter,l=function(e){return u("company",function(e,t,n){var r=e[t],a=Object(O.a)(e,[t].map(P.a));return r?a:Object(i.a)(Object(i.a)({},e),{},Object(c.a)({},t,n))}(r,e,!0))},o=t.map((function(e){return a.a.createElement("li",{key:e},a.a.createElement(j,{label:e,isChecked:r[e],toggle:l}))}));return a.a.createElement("fieldset",{className:"BrandFilter"},a.a.createElement("legend",null,"Brands"),a.a.createElement("ul",null,o),a.a.createElement("div",null,a.a.createElement("button",{type:"button",title:"select all",onClick:function(){return u("company",b(t,!0))}},a.a.createElement("i",{className:"zmdi zmdi-check-all"})),a.a.createElement("button",{type:"button",title:"deselect all",onClick:function(){return u("company",{})}},a.a.createElement("i",{className:"zmdi zmdi-square-o"}))))})),N=n(10);n(89);var k=Object(l.b)((function(e){return{storeFilters:f(e)}}),{updateFilters:o.f})((function(e){var t=e.storeFilters,n=e.updateFilters,l=Object(r.useState)(t),o=Object(u.a)(l,2),s=o[0],m=o[1],d=Object(r.useCallback)(g((function(e){return n(e)}),1e3),[]);Object(r.useEffect)((function(){d(s)}),[s,d]);var f=function(e,t){return m((function(n){return Object(i.a)(Object(i.a)({},n),{},Object(c.a)({},e,t))}))};return a.a.createElement("form",{className:"ProductFilters"},a.a.createElement("div",{className:"product-filters"},a.a.createElement(E,Object.assign({},s,{setFilter:f})),a.a.createElement(h,Object.assign({},s,{setFilter:f})),a.a.createElement(y,Object.assign({},s,{setFilter:f}))),a.a.createElement(N.a,{type:"reset",text:"Reset all",onClick:function(){return m(b(Object.keys(s),{}))}}))})),F=n(45);n(90);function C(e){return"default"===e}var z=Object(l.b)(null,{updateSorting:o.g})((function(e){var t=e.updateSorting,n=Object(r.useState)(F.a),c=Object(u.a)(n,2),i=c[0],l=c[1];Object(r.useEffect)((function(){t(i)}),[i,t]);var o=function(e){var t=e.orderBy,n=e.direction;return l((function(e){return{orderBy:t||e.orderBy,direction:n||(C(t)?"default":"ascending")}}))},s=i.orderBy,m=i.direction;return a.a.createElement("form",{className:"ProductsSorting"},a.a.createElement("label",{htmlFor:"order-by"},"Order by: "),a.a.createElement("select",{id:"order-by",title:"Order by...",value:s,onChange:function(e){var t=e.target;return o({orderBy:t.value})}},a.a.createElement("option",{value:"default"},"default"),a.a.createElement("option",{value:"price"},"price"),a.a.createElement("option",{value:"company"},"company")),a.a.createElement("button",{type:"button",title:"Sorting direction",disabled:C(s),onClick:function(){return o({direction:"ascending"===m?"descending":"ascending"})}},a.a.createElement("i",{className:"zmdi zmdi-sort-"+("price"===s?"amount-":"")+("descending"===m?"desc":"asc")})))})),S=n(85);n(91);var x=function(e){var t=e.itemsPerPage,n=e.setItemsPerPage,r=e.listOfOptions,c=(void 0===r?[0]:r).map((function(e){return a.a.createElement("option",{key:e,value:e},e||"all")}));return a.a.createElement("div",{className:"ItemsPerPageSelector"},a.a.createElement("select",{id:"items-per-page-selector",title:"Number of items per page",value:t,onChange:function(e){var t=e.target;return n(Number(t.value))}},c),a.a.createElement("label",{htmlFor:"items-per-page-selector"}," per page"))},w=n(42),B=n(11);n(92);var I=function(e){var t=e.numOfPages,n=e.currentPage,r=e.switchPage,c=function(e,t,c){return a.a.createElement(B.b,{to:r(e),title:n!==e?t:void 0},c||e)},i=t>1&&Object(w.a)(Array(t)).map((function(e,t){var r=t+1;return a.a.createElement("li",{key:r,className:r===n?"current-page":void 0},c(r,"Go to page ".concat(r)))})),u=function(e,t,r,i){return a.a.createElement("li",{className:n-e?void 0:"disabled"},c(r,"Go to the ".concat(t," page"),i))},l=u(1,"previous",n-1,a.a.createElement("i",{className:"zmdi zmdi-chevron-left"})),o=u(t,"next",n+1,a.a.createElement("i",{className:"zmdi zmdi-chevron-right"}));return a.a.createElement("ul",{className:"PageSwitcher"},l," ",i," ",o)},q={default:{default:function(){return 0}},price:{ascending:function(e,t){return e-t},descending:function(e,t){return t-e}},company:{ascending:function(e,t){return e>t?1:e<t?-1:0},descending:function(e,t){return t>e?1:t<e?-1:0}}},A=Object(s.a)(v,(function(e){return e.sorting}),(function(e,t){return Object(w.a)(e).sort((function(e,n){return function(e,t,n){var r,a,c=n.orderBy,i=n.direction;return null===(r=q[c])||void 0===r||null===(a=r[i])||void 0===a?void 0:a.call(r,null===e||void 0===e?void 0:e[c],null===t||void 0===t?void 0:t[c])}(e,n,t)}))})),R=Object(s.a)(A,(function(e,t){return t.itemsPerPage}),(function(e,t){return t.pageNum}),(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=t||e.length,a=Math.ceil(e.length/r),c=n>a?a:n<1?1:n,i=(c-1)*r,u=e.slice(i,i+r);return{products:u,numOfPages:a}})),_=n(2);var M=function(){var e=Object(_.f)(),t=function(){return new URLSearchParams(e.location.search)};return{get:function(e){return t().get(e)},set:function(e){for(var n=t(),r=0,a=Object.entries(e);r<a.length;r++){var c=Object(u.a)(a[r],2),i=c[0],l=c[1];n.set(i,l)}return{search:"?".concat(n)}},push:function(t){e.push(this.set(t))}}};var G=function(e){var t,n=M(),r=Number(null!==(t=n.get("items"))&&void 0!==t?t:5),a=Object(l.d)((function(t){return e(t,{itemsPerPage:r})})).numOfPages,c=Number(n.get("page"))||1,i=c>a?a:c,u=Object(l.d)((function(t){return e(t,{itemsPerPage:r,pageNum:i})})).products;return{itemsPerPage:r,setItemsPerPage:function(e){return n.push({items:e,page:1})},numOfPages:a,page:i,switchPage:function(e){return n.set({page:e})},products:u}};n(80);t.default=function(){var e=G(R),t=e.itemsPerPage,n=e.setItemsPerPage,r=e.numOfPages,c=e.page,i=e.switchPage,u=e.products;return a.a.createElement("div",{className:"ProductsPage"},a.a.createElement(k,null),a.a.createElement("div",{className:"product-list-header"},a.a.createElement(z,null),a.a.createElement(x,{itemsPerPage:t,setItemsPerPage:n,listOfOptions:[3,5,10,20,0]})),a.a.createElement(S.a,{products:u}),a.a.createElement(I,{numOfPages:r,currentPage:c,switchPage:i}))}},80:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";var r=n(24),a=n(0),c=n.n(a),i=n(11),u=n(6),l=n(12),o=n(10);n(83);var s=function(e){var t=e.id,n=e.title,r=e.imageUrl,a=e.price,s=Object(u.c)();return c.a.createElement("li",{className:"ProductCard"},c.a.createElement(i.b,{to:"products/".concat(t),className:"product-card__img-box"},c.a.createElement("img",{src:"./".concat(r),alt:n})),c.a.createElement(i.b,{to:"products/".concat(t),className:"product-title"},n),c.a.createElement("div",{className:"product-price"},a),c.a.createElement("div",{className:"product-card__add-button"},c.a.createElement(o.a,{text:"Add to cart ",icon:"zmdi zmdi-shopping-cart-plus",title:"Add to cart",onClick:function(){return s(Object(l.a)(t))}})))};n(84);t.a=function(e){var t=e.products,n=(null===t||void 0===t?void 0:t.length)?t.map((function(e){var t=e.id,n=Object(r.a)(e,["id"]);return c.a.createElement(s,Object.assign({key:t,id:t},n))})):null;return c.a.createElement("ul",{className:"product-list"},n)}},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}}]);
//# sourceMappingURL=0.4d56ebdc.chunk.js.map