(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1514:function(e,t,n){"use strict";n.r(t);n(12),n(10),n(7),n(3),n(15),n(11),n(16);var r=n(1),o=n(4),c=(n(46),n(41));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"EnrollmentParentPage",validate:function(e){return!!e.params.reference_code},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.form.$clearErrors(),e.form.$busy){t.next=4;break}return t.next=4,e.$store.dispatch("lessonEnrollment/getDetails",e.$route.params.reference_code).then((function(){e.hasLessonEnrollment||e.$nuxt.error({statusCode:404,message:"Enrollment not found"})}));case 4:case"end":return t.stop()}}),t)})))()},computed:f(f({},Object(c.e)({form:function(e){return e.lessonEnrollment.lessonEnrollment},enrollment:function(e){return e.lessonEnrollment.lessonEnrollmentDetails}})),Object(c.c)({hasLessonEnrollment:"lessonEnrollment/hasEnrollmentDetails"}))},O=n(14),component=Object(O.a)(m,(function(){return(0,this._self._c)("NuxtChild",{attrs:{"fetch-state":this.$fetchState.pending}})}),[],!1,null,null,null);t.default=component.exports}}]);