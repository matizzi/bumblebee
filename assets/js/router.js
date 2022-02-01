'use strict';

function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);   
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('content');
    },
    init: function () {
        var r = this.routes;
        (function(scope, r) { 
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },
    hasChanged: function(scope, r){
        if (window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlName);
                }
            }
        } else {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    },
    goToRoute: function (htmlName) {
        (async function(scope) { 
            var url = 'templates/' + htmlName;
            let obj = await fetch(url);
            let text = await obj.text();
            scope.rootElem.innerHTML = text;

            await loadDynamicContent(htmlName);

            contentWayPoint();

            if(!htmlName.includes("#")){
                window.scrollTo(0,0);
            }else{
                let element=htmlName.substring(htmlName.indexOf("#")+1)
                document.getElementById(element).scrollIntoView(true);
            }
            
        })(this);

        let title;
        if (htmlName.includes ("#")){
            title=htmlName.substring(0,htmlName.indexOf("#"));
        }
        else {
            title=htmlName;
        }
        title=title.replace(".html","");
        if (title.includes ("-")){
            title=title.replace("-"," ");
        }
        //capitalize text
        title=title[0].toUpperCase() + title.substring(1);
        document.title = title + ' - Bumblebee';
    }
};