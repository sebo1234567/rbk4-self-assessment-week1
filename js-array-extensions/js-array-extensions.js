// your code here
var Array=function(){
 this._arr1=new Array();
this._methods={}
 ._extend(this._arr1,this._methods)
};

this._methods.first=function(){
	return this._arr1[0];

};

this._methods.last=function(){
	return this._arr1[this._arr1.length-1]

};
