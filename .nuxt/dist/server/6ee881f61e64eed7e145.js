exports.ids=[3],exports.modules={20:function(t,e,r){"use strict";r.r(e);var h={asyncData:async({params:t,$http:e})=>({dog:(await e.$get("https://api.thedogapi.com/v1/images/search?limit=1"))[0]})},o=r(1),component=Object(o.a)(h,function(){var t=this.$createElement;return(this._self._c||t)("div",[this._ssrNode("<h1>This is the Front Page.</h1> <h3>Random dog of the day:</h3> <img"+this._ssrAttr("src",this.dog.url)+" alt>")])},[],!1,null,null,"1789851c");e.default=component.exports}};
//# sourceMappingURL=6ee881f61e64eed7e145.js.map