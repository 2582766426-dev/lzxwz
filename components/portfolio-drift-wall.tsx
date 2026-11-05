'use client';

import {useEffect,useState} from 'react';
import {createPortal} from 'react-dom';
import DriftWall from './DriftWall';
import {FullImage} from './brand-browser';
import works from './other-works.json';

const driftItems=works.map(work=>({...work,href:undefined,image:work.preview,title:work.name,height:Math.round(250*work.height/work.width)}));
export function PortfolioDriftWall(){
 const [active,setActive]=useState<(typeof works)[number]|null>(null);
 useEffect(()=>{if(!active)return;const overflow=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=overflow;};},[active]);
 return <><DriftWall className="portfolio-drift-wall" items={driftItems} onSelect={setActive} columns={8} tileWidth={250} tileHeight={190} gap={18} radius={16} tilt={13} turn={-12} roll={-2} perspective={1450} depth={95} speed={20} direction="up" variance={0.34} parallax={0.55} pauseOnHover={false} lift={40} fade={0.64} dim={0.04} grayscale={false} overlayColor="#175bd0"/>{active&&createPortal(<FullImage work={active} brand="其他作品" onClose={()=>setActive(null)}/>,document.body)}</>;
}

