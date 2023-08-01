import React, { useState, FC, memo ,useMemo,ReactNode } from "react";

import './index.css'

import {DrawerProps,DrawerStyle } from './interface'

const Drawer: FC<DrawerProps> = memo((props) => {

  let { children,childrens,handleCloseDrawer,showModal } : any = props

  return (
    <div>
      <button onClick={handleCloseDrawer}>弹出</button>
      <div className={`modal ${showModal ? childrens : ''}`}>
        {
          children
        }
      </div>
    </div>
  );
})

Drawer.defaultProps = {
  children:'主体内容',
  childrens:'right',
  showModal:false, 
  handleCloseDrawer:()=>{}
}

export default Drawer;