// Promise版本ajax
function get(options){
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest()
        if(options.params){
            let str = '?'
            for(let key in options.params){
                str += `${key}=${options.params[key]}`
                str += '&'
            }
            str = str.slice(0, -1)
            xhr.open('get', options.url+str)
            
        }else{
            xhr.open('get', options.url)
        }
        if(options.tokenP){
            // console.log('进来咯')
            xhr.setRequestHeader('authorization', options.tokenP)
        }
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    resolve(xhr.responseText)
                }else{
                    reject()
                }
            }
        }
        xhr.send()
    })
}

function post(options){
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open('post', options.url)
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    resolve(xhr.responseText)
                }else{
                    reject()
                }
            }
        }
        if(options.params){
            let str = ''
            for(let key in options.params){
                str += `${key}=${options.params[key]}`
                str += '&'
            }
            str = str.slice(0, -1)
            xhr.send(str)
        }else{
            xhr.send()
        }
    })
}

