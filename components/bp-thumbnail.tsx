'use client';
import {useState} from 'react';
export function BPThumbnail({src,name,priority}:{src:string;name:string;priority:boolean}){const [state,setState]=useState('loading');return <span className="bp-preview"><img src={src.replace('.png','.jpg')} alt={`bp pluse ${name}公众号设计`} loading={priority?'eager':'lazy'} decoding="async" onLoad={()=>setState('ready')} onError={()=>setState('error')}/>{state!=='ready'&&<span className="bp-loading" role="status">{state==='error'?'预览加载失败，点击查看原图':'正在加载中…'}</span>}</span>}
