angular.module('templates-app', ['home/home.tpl.html', 'info/info.tpl.html', 'login/login.tpl.html', 'quiz/finish/finish.tpl.html', 'quiz/question/question.tpl.html', 'quiz/quiz.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"home\">\n" +
    "  <h1 id=\"logo\"><img src=\"assets/auth0_logo_final_blue_RGB.png\" /></h1>\n" +
    "  <button class=\"btn btn-lg btn-primary btn-block\" ui-sref=\"quiz.question({number: 0})\">Start Quiz</button>\n" +
    "</div>");
}]);

angular.module("info/info.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("info/info.tpl.html",
    "<div class=\"home info\">\n" +
    "  <!-- <div class=\"features\"></div> -->\n" +
    "  <img src=\"https://cloudup.com/c6-HMihxBxb+\"/>\n" +
    "  <!--<ul class=\"features-list\">\n" +
    "\n" +
    "  	<li>\n" +
    "  		<i class=\"icon-budicon-289\"></i>\n" +
    "  		<span>Single Sign On</span>\n" +
    "  	</li>\n" +
    "\n" +
    "  	<li>\n" +
    "  		<i class=\"icon-budicon-295\"></i>\n" +
    "  		<span>User Management</span>\n" +
    "  	</li>\n" +
    "\n" +
    "  	<li>\n" +
    "  		<i class=\"icon-budicon-329\"></i>\n" +
    "  		<span>+30 Social Providers</span>\n" +
    "  	</li>\n" +
    "  	\n" +
    "  	<li>\n" +
    "  		<i class=\"icon-budicon-825\"></i>\n" +
    "  		<span>AD / LDAP Auth</span>\n" +
    "  	</li>\n" +
    "\n" +
    "  	<li>\n" +
    "  		<i class=\"icon-budicon-285\"></i>\n" +
    "  		<span>User / Password Auth</span>\n" +
    "  	</li>\n" +
    "\n" +
    "  	<li>\n" +
    "  		<i class=\"icon-budicon-341\"></i>\n" +
    "  		<span>Multi Factor Auth</span>\n" +
    "  	</li>\n" +
    "\n" +
    "  	<li>\n" +
    "  		<i class=\"icon-budicon-342\"></i>\n" +
    "  		<span>Node.JS Extensibility</span>\n" +
    "  	</li>\n" +
    "\n" +
    "  	<li>\n" +
    "  		<i class=\"icon-budicon-378\"></i>\n" +
    "  		<span>Any device, Any Platform</span>\n" +
    "  	</li>\n" +
    "\n" +
    "  </ul>-->\n" +
    "\n" +
    "  <div>\n" +
    "    <button class=\"btn btn-sm btn-primary\" ui-sref=\"home()\">Start</button>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"login-page clearfix\">\n" +
    "  <div class=\"login-box auth0-box\">\n" +
    "    <img src=\"https://i.cloudup.com/StzWWrY34s.png\" />\n" +
    "    <h3>Auth0 Example</h3>\n" +
    "    <p>Zero friction identity infrastructure, built for developers</p>\n" +
    "    <a ng-click=\"login()\" class=\"btn btn-primary btn-lg btn-block\">SignIn</a>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("quiz/finish/finish.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("quiz/finish/finish.tpl.html",
    "<div>\n" +
    "  <div class=\"jumbotron\">\n" +
    "    <h1>{{finishInfo.ok || 0}}/{{finishInfo.total}}</h1>\n" +
    "    <p>{{congratsText[finishInfo.ok || 0]}}</p>\n" +
    "\n" +
    "    \n" +
    "    <div class=\"input-group handle-group input-group-lg\">\n" +
    "      <span class=\"input-group-addon\">@</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Enter your twitter screen name\" ng-model=\"handle\">\n" +
    "    </div>\n" +
    "    \n" +
    "\n" +
    "    <p><a ng-click=\"tweet()\" class=\"btn btn-primary btn-twitter btn-lg\" role=\"button\">{{tweetText}}</a></p>\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("quiz/question/question.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("quiz/question/question.tpl.html",
    "<div>\n" +
    "  <h2>{{question.question}}</h2>\n" +
    "  <div class=\"answer\" ng-repeat=\"answer in question.answers\">\n" +
    "	<input type=\"radio\" id=\"option_{{$index}}\" ng-model=\"question.response\" ng-value=\"$index\" />\n" +
    "	<label for=\"option_{{$index}}\">\n" +
    "		{{answer}}\n" +
    "  	</label>\n" +
    "  </div>\n" +
    "  <button ng-disabled=\"empty(question)\" ng-click=\"finish()\" class=\"btn btn-next btn-lg\" ng-show=\"questions.length - 1 == number\">Finish</button>\n" +
    "  <button ng-disabled=\"empty(question)\" ng-click=\"next()\" class=\"btn btn-next btn-lg\" ng-hide=\"questions.length - 1 == number\">Next</button>\n" +
    "</div>");
}]);

angular.module("quiz/quiz.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("quiz/quiz.tpl.html",
    "<div>\n" +
    "  <h1 id=\"logo\"><img src=\"assets/auth0_logo_final_blue_RGB.png\" /></h1>\n" +
    "\n" +
    "  <div ui-view ></div>\n" +
    "</div>");
}]);
