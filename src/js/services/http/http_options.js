export default class HttpOptions {
    constructor(url, headers = {}, method = {}, data = {}, customOptions = {}){
        this.url = url;
        this.headers = headers;
        this.method = method;
        this.data = data;
        this.customOptions = customOptions;
    }
    get url(){
        this.url;
    }
    get headers(){
        this.headers;
    }
    get method(){
        this.method;
    }

    get data(){
        this.data;
    }

    get customOptions(){
        this.customOptions;
    }
};