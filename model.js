
//私有变量   (缺点：构造函数的确定，特权方法重复)
function Myobject () {
    //私有变量和私有函数
    var privateVaribale = 10

    function privateFunction() {
        return false
    }
    //特权方法
    this.publiceMethod = function() {
        privateVaribale++;
        return privateFunction()
    }
}

//静态私有变量 （私有变量和函数由实例共享）
(function(){
    //私有变量和私有函数
    var privateVaribale = 10

    function privateFunction() {
        return false
    }

    //构造函数
    Myobject = function() {

    }
    //特权方法
    Myobject.prototype.publiceMethod = function() {
        privateVaribale++;
        return privateFunction()
    }
})()

//模块模式(单例模式)
var singleton = function() {
    //私有变量和私有函数
    var privateVaribale = 10

    function privateFunction() {
        return false
    }
    //特权方法
    return {
        privateVaribale:true,
        publiceMethod:function() {
            privateVaribale++;
            return privateFunction()
        }
    }
}