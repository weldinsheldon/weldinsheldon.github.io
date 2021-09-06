var app = angular.module("pageRunner", [])
                 .controller("pageCtrl", function($scope) {
                    var includes = [
                      { file : "includes/nav.html" },
                      { file : "includes/profile.html" },
                      { file : "includes/motto.html" },
                      { file : "includes/welds.html" },
                      { file : "includes/motto.html" },
                      { file : "includes/contact.html" }
                    ];

                    $scope.includes = includes;
                 })

                 .controller("navCtrl", function($scope) {
                    var pages = [
                      { page : "home" },
                      { page : "profile" },
                      { page : "welds" },
                      { page : "contact" }
                    ];

                    var extLinks = [
                      { url : "mailto:sheldonleshore09@gmail.com?Subject=Welding",
                        img : "images/v_email_white.png" },
                      { url : "https://www.facebook.com/sheldon.leshore.5",
                        img : "images/v_facebook_white.png" },
                      /** LinkedIn+ contact info
                      { url : "https://www.linkedin.com/in/",
                        img : "images/v_linkedin_white.png" },
                      */
                      /** Twitter contact info
                      { url : "https://twitter.com/",
                        img : "images/v_twitter_white.png" }
                      */
                    ];

                    var scrollToPage = function(index) {
                      window.scrollToPage(pages[index].page);
                    }

                    $scope.pages = pages;
                    $scope.extLinks = extLinks;
                    $scope.scrollToPage = scrollToPage
                 })

               .controller("profileCtrl", function($scope) {
                  var profile = {
                    firstName : "Sheldon",
                    lastName : "LeShore",
                    age : 29,
                    city : "Ellinwood",
                    state : "KS"
                  };

                  $scope.profile = profile;
               })

               .controller("mottoCtrl", function($scope) {
                  var motto = [
                    { word : "eat" },
                    { word : "sleep" },
                    { word : "weld" },
                    { word : "repeat" }
                  ];

                  $scope.motto = motto;
               });
