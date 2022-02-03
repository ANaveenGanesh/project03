angular.module("User",[])
.filter("myfilter",function()
{
    return function(input,option)
    {
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("userCtrl",function($scope)
{
    var users=[
        {name:'William,,dob:new Date("November 5, 1932"),Gender:"Male",Salary:4000},
        {name:'Jack',dob:new Date("December 6,1931"),Gender:"Male",Salary:2000},
    ];
    $scope.users=users;
    $scope.rowlimit=20;

});
