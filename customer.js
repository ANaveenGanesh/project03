angular.module("Cus",[])
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
.controller("cusCtrl",function($scope)
{
    var customers=[
        {name:'James',dob:new Date("July 21,1992"),gender:"Male",amount:60000},
        {name:'Michael',dob:new Date("november 20,1987"),gender:"Male",amount:90000},
        {name:'John',dob:new Date("July 21,1990"),gender:"Male",amount:60000},
        {name:'Charles',dob:new Date("august 21,1994"),gender:"Male",amount:90000},
    ];
    $scope.customers=customers;
    $scope.rowlimit=20;

});