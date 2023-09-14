function jsonp(url, params){
   
    // 创建一个script
    const script = document.createElement('script')
    // 参数处理
    if(params){
        let str = '?'
        for(let key in params){
            str += `${key}=${params[key]}`
            str += '&'
        }
        str = str.slice(0, -1)
        script.src = url + str
    }else{
        script.src = url
    }
    // 需要追加到页面
    document.body.appendChild(script)
}