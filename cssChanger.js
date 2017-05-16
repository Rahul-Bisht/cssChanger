function CssChange(src) {
    self = this;
    this.src = src;
    this.cssList = src.sheet.rules;
    this.selectedClass='';

    this.changeCss = function(className, values) {
        let style = getSelector(className);
        let keys = Object.keys(values);
        for (let k of keys) {
            style.style[makeProperStyleName(k)] = values[k];
        }
    }
    this.getCss = function() {
        let cssString = '';
        for (let css of self.cssList) {
            cssString += '\n' + css.cssText;
        }
        // let css= new CSSParser();
        // let cssString=css.parse(self.src.sheet,false,true);
        // return cssString.cssText;
        return cssString;
    }
    this.getClassValues=function(cn){
    	self.selectedClass=getSelector(cn);
    	return self.selectedClass;

    }

    function getSelector(cn) {

        for (let s of self.cssList) {
            if (s.selectorText === cn) {
                return s;
            }
        }
    }



    /*
    desc:makes proper css style name by spliting '-' & making first letter capital of string
    ex:background-color ==> backgroundColor
    */
    function makeProperStyleName(name) {
        let n = name.split('-');
        let cssName = n[0];

        for (let i = 1, l = n.length; i < l; i++) {
            let temp = n[i];
            cssName += temp.substr(0, 1).toUpperCase() + temp.substr(1);
        }
        return cssName;
    }
}

document.addEventListener('click', (e) => {
    let el = e.srcElement;
    if (el.className) {
        console.log(el);
        return el.className.split(' ')[0];
    }
});