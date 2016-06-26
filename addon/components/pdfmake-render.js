import Ember from "ember";
import pdfMake from 'pdfmakeloader';

const on = Ember.on;

export default Ember.Component.extend({

	content : [] ,
	filename : '' ,
	show_button : false ,
	page_size : 'A4' ,
	pageOrientation: 'portrait',
	height : '500px' ,

	myStyle: Ember.computed('height', function() {
    var height =  this.get('height') ;
    return Ember.String.htmlSafe(" position : relative  ; height: " + height);
  }) ,


	dd : {
		content : [],
		defaultStyle : {
			font : 'Thsarabun'
		}
	} ,

	attachTargets: on('didInsertElement', function () {
		this.renderPdf() ;
	}) ,

	renderPdf:function(){
		var dd = this.get('dd');
		dd.content = this.get('content');
		dd.pageSize = this.get('page_size');
		dd.pageOrientation = this.get('pageOrientation');

 		pdfMake.createPdf(dd).getDataUrl(function(outDoc) {
			document.getElementById('pdfV').src = outDoc;
		});
	} ,

	contentChanged: Ember.observer('content', function() {
    this.renderPdf() ;
  }) ,

  actions : {
  	open : function(){
  		var dd = this.get('dd');
			dd.content = this.get('content');
			dd.pageSize = this.get('page_size');
			dd.pageOrientation = this.get('pageOrientation');
  		pdfMake.createPdf(dd).open();
  	},

  	print : function(){
  		var dd = this.get('dd');
			dd.content = this.get('content');
			dd.pageSize = this.get('page_size');
			dd.pageOrientation = this.get('pageOrientation');
  		pdfMake.createPdf(dd).print(5000);
  	},

  	download : function(){
  		var dd = this.get('dd');
			dd.content = this.get('content');
			dd.pageSize = this.get('page_size');
			dd.pageOrientation = this.get('pageOrientation');
			let filename = this.get('filename') ;
			if(! filename){
				filename = 'sample.pdf' ;
			}
  		pdfMake.createPdf(dd).download(filename);
  	}

  }

});