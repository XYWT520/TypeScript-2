export type TypeChannel = {
  data:{
    channels:{
      id:number,
      name:string
    }[]
  },
  message:string
}

export type TypeList = {
  id: number;
  name: string;
}[]


export type TypeNewsList={
  data:{
    pre_timestamp:string
    results:{
      art_id:string
      aut_id:string
      aut_name:string
      comm_count:number
      cover:{
        images:string[]
        type:number
      }
      is_top:number
      pubdate:string
      title:string
    }[]
  }
  message:string
}


export type result ={
  art_id: string;
  aut_id: string;
  aut_name: string;
  comm_count: number;
  cover: {
      images: string[];
      type: number;
  };
  is_top: number;
  pubdate: string;
  title: string;
}[]
