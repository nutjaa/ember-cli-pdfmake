import Ember from 'ember';
import pdfMake from 'pdfmakeloader';

export function initialize() {
   pdfMake.fonts = {
       Thsarabun: {
         normal: 'Thsarabun-Regular.ttf',
         bold: 'Thsarabun-Bold.ttf',
         italics: 'Thsarabun-Italic.ttf',
         bolditalics: 'Thsarabun-BoldItalic.ttf'
       },
       Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-Italic.ttf'
      }
    };
}

export default {
    name: 'ember-cli-pdfmake',
    initialize
};