export interface AppSetting {
    port?:number,
    db:DatabaseConfig
}

export interface DatabaseConfig {
    url:string,
}

const setting:AppSetting={
    port:8080,
    db:{
        url:''
    }
}

export default setting