// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value
 *
 * @path ch15/15.3/15.3.4/15.3.4.3/S15.3.4.3_A5_T1.js
 * @description thisArg is number
 */

var obj=1;

var retobj = Function("this.touched= true; return this;").apply(obj);

//CHECK#1
if (typeof obj.touched !== "undefined") {
  $ERROR('#1: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value');
}

//CHECK#2
if (!(retobj["touched"])) {
  $ERROR('#2: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value');
}
